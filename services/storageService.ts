
import { PortfolioData, Project } from '../types';
import { INITIAL_DATA } from '../constants';

export const STORAGE_KEY = 'silvia_jiang_portfolio_v1';

const DB_NAME = 'sphnsx_portfolio';
const STORE_NAME = 'portfolio';
const DATA_KEY = 'data';

let cache: PortfolioData | null = null;

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
  return INITIAL_DATA;
};

// #region agent log
function debugLog(msg: string, data: Record<string, unknown>, hypothesisId: string) {
  try {
    fetch('http://127.0.0.1:7244/ingest/d73bb932-4ac7-45e1-8337-35cb70e602f8', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '9bdf88' },
      body: JSON.stringify({ sessionId: '9bdf88', location: 'storageService.ts', message: msg, data, timestamp: Date.now(), hypothesisId }),
    }).catch(() => {});
  } catch (_) {}
}
// #endregion

/** Load: prefer localStorage (so edits persist after refresh when IDB is cleared), then IDB, then initial. */
export async function getPortfolioDataAsync(): Promise<PortfolioData> {
  // Prefer localStorage first so we use the same store we write to (Safari may clear IDB on refresh).
  const local = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
  if (local) {
    try {
      const data = JSON.parse(local) as PortfolioData;
      if (data && Array.isArray(data.projects)) {
        cache = data;
        // #region agent log
        debugLog('loadSource=localStorage', { projectIds: data.projects.map((p) => p.id), firstTitle: data.projects[0]?.title }, 'P1');
        // #endregion
        writePortfolioData(data).catch(() => {}); // keep IDB in sync
        return data;
      }
    } catch (_) {}
  }
  const db = await openDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const req = store.get(DATA_KEY);
    req.onerror = () => { db.close(); reject(req.error); };
    req.onsuccess = () => {
      db.close();
      const row = req.result as { key: string; value: string } | undefined;
      if (row?.value) {
        try {
          const data = JSON.parse(row.value) as PortfolioData;
          cache = data;
          // #region agent log
          debugLog('loadSource=idb', { projectIds: data.projects.map((p) => p.id), firstTitle: data.projects[0]?.title }, 'P1');
          // #endregion
          resolve(data);
          return;
        } catch (_) {}
      }
      cache = INITIAL_DATA;
      // #region agent log
      debugLog('loadSource=initial', { projectIds: INITIAL_DATA.projects.map((p) => p.id) }, 'P1');
      // #endregion
      resolve(INITIAL_DATA);
    };
  });
}

function writePortfolioData(data: PortfolioData): Promise<void> {
  cache = data;
  return openDB().then((db) => {
    return new Promise((resolve, reject) => {
      const tx = db.transaction(STORE_NAME, 'readwrite');
      const store = tx.objectStore(STORE_NAME);
      const req = store.put({ key: DATA_KEY, value: JSON.stringify(data) });
      req.onerror = () => { db.close(); reject(req.error); };
      req.onsuccess = () => {
        db.close();
        // #region agent log
        let localOk = false;
        let localErr: string | null = null;
        try {
          if (typeof localStorage !== 'undefined') {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            localOk = true;
          }
        } catch (e) {
          localErr = String(e);
        }
        debugLog('writePortfolioData done', { idbOk: true, localOk, localErr, projectsLength: data.projects.length, firstTitle: data.projects[0]?.title }, 'P2');
        // #endregion
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

export async function addProject(project: Project): Promise<void> {
  const data = await getPortfolioDataAsync();
  data.projects.unshift(project);
  await writePortfolioData(data);
}

export async function updateProject(id: string, project: Project): Promise<void> {
  const data = await getPortfolioDataAsync();
  const index = data.projects.findIndex(p => p.id === id);
  if (index === -1) return;
  data.projects[index] = { ...project, id };
  await writePortfolioData(data);
}

export async function deleteProject(id: string): Promise<void> {
  const data = await getPortfolioDataAsync();
  data.projects = data.projects.filter(p => p.id !== id);
  await writePortfolioData(data);
}

/** Reorder projects to match the order of projectIds. Missing ids are appended. */
export async function reorderProjects(projectIds: string[]): Promise<void> {
  const data = await getPortfolioDataAsync();
  const byId = new Map(data.projects.map(p => [p.id, p]));
  const ordered = projectIds.map(id => byId.get(id)).filter((p): p is Project => p != null);
  const rest = data.projects.filter(p => !projectIds.includes(p.id));
  data.projects = [...ordered, ...rest];
  await writePortfolioData(data);
}
