
import { PortfolioData, Project, ContactMethod } from '../types';
import { INITIAL_DATA } from '../constants';
import { isSupabaseConfigured, getPortfolioFromSupabase, publishPortfolioToSupabase } from './supabase';

export const STORAGE_KEY = 'silvia_jiang_portfolio_v1';

const DB_NAME = 'sphnsx_portfolio';
const STORE_NAME = 'portfolio';
const DATA_KEY = 'data';
/** Cookie fallback when IDB/localStorage are cleared (e.g. Safari). ~4KB limit per cookie. */
const COOKIE_KEY = 'sphnsx_portfolio_v1';
const COOKIE_MAX_BYTES = 3800;

/** When set (e.g. https://yoursite.com/portfolio.json), viewers always load from this URL first so updates survive hard refresh. */
const REMOTE_PORTFOLIO_URL =
  typeof import.meta !== 'undefined' && import.meta.env?.VITE_PORTFOLIO_URL
    ? String(import.meta.env.VITE_PORTFOLIO_URL).trim() || undefined
    : undefined;

/** True when portfolio is loaded from a remote source (Supabase or VITE_PORTFOLIO_URL). When true, app should wait for getPortfolioDataAsync() before showing content to avoid flash of stale local data. */
export function isAuthoritativeRemoteConfigured(): boolean {
  return isSupabaseConfigured() || Boolean(REMOTE_PORTFOLIO_URL);
}

let cache: PortfolioData | null = null;

/** Fetch published portfolio from remote URL. Returns null on failure or if URL not configured. */
async function fetchFromRemote(): Promise<PortfolioData | null> {
  if (!REMOTE_PORTFOLIO_URL || typeof fetch === 'undefined') return null;
  try {
    const res = await fetch(REMOTE_PORTFOLIO_URL, { cache: 'no-store' });
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/d73bb932-4ac7-45e1-8337-35cb70e602f8', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '1d77cc' }, body: JSON.stringify({ sessionId: '1d77cc', location: 'storageService.ts:fetchFromRemote', message: 'remote response', data: { ok: res.ok, status: res.status }, timestamp: Date.now(), hypothesisId: 'H2' }) }).catch(() => {});
    // #endregion
    if (!res.ok) return null;
    const data = (await res.json()) as PortfolioData;
    if (data && Array.isArray(data.projects)) return data;
  } catch (e) {
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/d73bb932-4ac7-45e1-8337-35cb70e602f8', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '1d77cc' }, body: JSON.stringify({ sessionId: '1d77cc', location: 'storageService.ts:fetchFromRemote', message: 'remote fetch error', data: { err: String((e as Error)?.message) }, timestamp: Date.now(), hypothesisId: 'H2' }) }).catch(() => {});
    // #endregion
  }
  return null;
}

function readFromCookie(): PortfolioData | null {
  if (typeof document === 'undefined' || !document.cookie) return null;
  const match = document.cookie.split(';').map((s) => s.trim()).find((s) => s.startsWith(COOKIE_KEY + '='));
  if (!match) return null;
  try {
    const value = decodeURIComponent(match.slice(COOKIE_KEY.length + 1));
    const data = JSON.parse(value) as PortfolioData;
    if (data && Array.isArray(data.projects)) return data;
  } catch (_) {}
  return null;
}

function writeCookie(data: PortfolioData): void {
  if (typeof document === 'undefined') return;
  const raw = JSON.stringify(data);
  const encoded = encodeURIComponent(raw);
  if (encoded.length > COOKIE_MAX_BYTES) return;
  try {
    document.cookie = COOKIE_KEY + '=' + encoded + '; path=/; max-age=31536000; SameSite=Lax';
  } catch (_) {}
}

function openDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1);
    req.onerror = () => reject(req.error);
    req.onsuccess = () => resolve(req.result);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: 'key' });
      }
    };
  });
}

/** Read portfolio from IDB only. Returns null if no row or parse error. */
async function readFromIDB(): Promise<PortfolioData | null> {
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.get(DATA_KEY);
    req.onerror = () => {
      db.close();
      reject(req.error);
    };
    req.onsuccess = () => {
      db.close();
      const row = req.result as { key: string; value: string } | undefined;
      if (row?.value) {
        try {
          const data = JSON.parse(row.value) as PortfolioData;
          if (data && Array.isArray(data.projects)) resolve(data);
        } catch (_) {}
      }
      resolve(null);
    };
  });
}

/** Sync get for initial render. Uses cache, else tries localStorage (so refresh shows saved data before async runs), else INITIAL_DATA. */
export const getPortfolioData = (): PortfolioData => {
  if (cache !== null) return cache;
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (raw) {
      const data = JSON.parse(raw) as PortfolioData;
      if (data && Array.isArray(data.projects)) {
        cache = data;
        return cache;
      }
    }
  } catch (_) {}
  try {
    const sessionRaw = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem(STORAGE_KEY) : null;
    if (sessionRaw) {
      const data = JSON.parse(sessionRaw) as PortfolioData;
      if (data && Array.isArray(data.projects)) {
        cache = data;
        return cache;
      }
    }
  } catch (_) {}
  const fromCookie = readFromCookie();
  if (fromCookie) {
    cache = fromCookie;
    return cache;
  }
  return INITIAL_DATA;
};

/** Load: Supabase first (when configured, auto-publish), then remote URL, then IDB, localStorage, sessionStorage, cookie, initial. */
export async function getPortfolioDataAsync(): Promise<PortfolioData> {
  // #region agent log
  fetch('http://127.0.0.1:7244/ingest/d73bb932-4ac7-45e1-8337-35cb70e602f8', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '1d77cc' }, body: JSON.stringify({ sessionId: '1d77cc', location: 'storageService.ts:getPortfolioDataAsync', message: 'async load config', data: { remoteConfigured: !!REMOTE_PORTFOLIO_URL }, timestamp: Date.now(), hypothesisId: 'H1' }) }).catch(() => {});
  // #endregion
  if (isSupabaseConfigured()) {
    const fromSupabase = await getPortfolioFromSupabase();
    if (fromSupabase) {
      cache = fromSupabase;
      writePortfolioData(fromSupabase).catch(() => {});
      return fromSupabase;
    }
  }
  if (REMOTE_PORTFOLIO_URL) {
    const fromRemote = await fetchFromRemote();
    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/d73bb932-4ac7-45e1-8337-35cb70e602f8', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '1d77cc' }, body: JSON.stringify({ sessionId: '1d77cc', location: 'storageService.ts:getPortfolioDataAsync', message: 'remote result', data: { hasData: !!fromRemote, projectsCount: fromRemote?.projects?.length }, timestamp: Date.now(), hypothesisId: 'H2' }) }).catch(() => {});
    // #endregion
    if (fromRemote) {
      cache = fromRemote;
      writePortfolioData(fromRemote).catch(() => {}); // seed local storage for offline / fast subsequent loads
      return fromRemote;
    }
  }
  try {
    const fromIDB = await readFromIDB();
    if (fromIDB) {
      cache = fromIDB;
      writePortfolioData(fromIDB).catch(() => {}); // sync to localStorage + sessionStorage + cookie
      return fromIDB;
    }
  } catch (_) {}
  const local = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
  if (local) {
    try {
      const data = JSON.parse(local) as PortfolioData;
      if (data && Array.isArray(data.projects)) {
        cache = data;
        writePortfolioData(data).catch(() => {});
        return data;
      }
    } catch (_) {}
  }
  const sessionRaw = typeof sessionStorage !== 'undefined' ? sessionStorage.getItem(STORAGE_KEY) : null;
  if (sessionRaw) {
    try {
      const data = JSON.parse(sessionRaw) as PortfolioData;
      if (data && Array.isArray(data.projects)) {
        cache = data;
        writePortfolioData(data).catch(() => {}); // sync back to IDB and localStorage
        return data;
      }
    } catch (_) {}
  }
  const fromCookie = readFromCookie();
  if (fromCookie) {
    cache = fromCookie;
    writePortfolioData(fromCookie).catch(() => {});
    return fromCookie;
  }
  // #region agent log
  fetch('http://127.0.0.1:7244/ingest/d73bb932-4ac7-45e1-8337-35cb70e602f8', { method: 'POST', headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '1d77cc' }, body: JSON.stringify({ sessionId: '1d77cc', location: 'storageService.ts:getPortfolioDataAsync', message: 'fallback to INITIAL_DATA', data: {}, timestamp: Date.now(), hypothesisId: 'H5' }) }).catch(() => {});
  // #endregion
  cache = INITIAL_DATA;
  return INITIAL_DATA;
}

function writePortfolioData(data: PortfolioData): Promise<void> {
  cache = data;
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put({ key: DATA_KEY, value: JSON.stringify(data) });
    req.onerror = () => {
      db.close();
      reject(req.error);
    };
    req.onsuccess = () => {
        db.close();
        let localOk = false;
        try {
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            localOk = true;
          }
        } catch (e) {
          if (typeof console !== 'undefined' && console.warn) {
            console.warn('Portfolio localStorage write failed (storage may be full or restricted):', e);
          }
        }
        try {
          if (typeof sessionStorage !== 'undefined') sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
        } catch (_) {}
        writeCookie(data);
        if (isSupabaseConfigured()) publishPortfolioToSupabase(data).catch(() => {});
        resolve();
      };
    });
  });
}

export async function updateAboutMe(text: string): Promise<void> {
  const data = await getPortfolioDataAsync();
  data.aboutMe = text;
  await writePortfolioData(data);
}

export async function updateAboutImage(imageDataUrl: string): Promise<PortfolioData> {
  const data = await getPortfolioDataAsync();
  const updated = { ...data, aboutImage: imageDataUrl };
  await writePortfolioData(updated);
  return updated;
}

export async function updateContact(contact: PortfolioData['contact']): Promise<void> {
  const data = await getPortfolioDataAsync();
  data.contact = contact;
  await writePortfolioData(data);
}

export async function updateContactMethods(methods: ContactMethod[]): Promise<PortfolioData> {
  const data = await getPortfolioDataAsync();
  data.contactMethods = methods;
  await writePortfolioData(data);
  return data;
}

export async function addProject(project: Project): Promise<PortfolioData> {
  const data = await getPortfolioDataAsync();
  data.projects.unshift(project);
  await writePortfolioData(data);
  return data;
}

export async function updateProject(id: string, project: Project): Promise<void> {
  const data = await getPortfolioDataAsync();
  const index = data.projects.findIndex(p => p.id === id);
  if (index === -1) return;
  data.projects[index] = { ...project, id };
  await writePortfolioData(data);
}

export async function deleteProject(id: string): Promise<PortfolioData> {
  const data = await getPortfolioDataAsync();
  const updated = { ...data, projects: data.projects.filter(p => p.id !== id) };
  await writePortfolioData(updated);
  return updated;
}

/** Reorder projects to match the order of projectIds. Missing ids are appended. */
export async function reorderProjects(projectIds: string[]): Promise<PortfolioData> {
  const data = await getPortfolioDataAsync();
  const byId = new Map(data.projects.map(p => [p.id, p]));
  const ordered = projectIds.map(id => byId.get(id)).filter((p): p is Project => p != null);
  const rest = data.projects.filter(p => !projectIds.includes(p.id));
  const updated = { ...data, projects: [...ordered, ...rest] };
  await writePortfolioData(updated);
  return updated;
}

/** Export current portfolio as JSON string for publishing (e.g. save as portfolio.json so viewers load it). */
export async function exportPortfolioJson(): Promise<string> {
  const data = await getPortfolioDataAsync();
  return JSON.stringify(data, null, 2);
}
