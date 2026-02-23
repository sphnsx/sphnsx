import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { exportPortfolioJson } from '../services/storageService';

const DeploymentPage: React.FC = () => {
  const [exporting, setExporting] = useState(false);

  const handleExportPortfolio = async () => {
    setExporting(true);
    try {
      const json = await exportPortfolioJson();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'portfolio.json';
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setExporting(false);
    }
  };

  return (
    <div className="min-h-screen bg-bgMain pt-pageTop px-6 pb-12 max-w-2xl text-textPrimary">
      <h1 className="font-mono text-sm uppercase tracking-wider mb-6">Deployment</h1>

      <section className="border border-paletteBorder p-6 space-y-4 rounded-sm mb-6">
        <h2 className="font-mono text-xs uppercase tracking-wider mb-2">Publish for viewers (hard refresh)</h2>
        <p className="font-mono text-sm text-textSecondary">
          So visitors always see your latest work (even after hard refresh), publish the portfolio as a JSON file on your site.
        </p>
        <ol className="font-mono text-sm list-decimal list-inside space-y-2 text-textSecondary">
          <li>Click below to download <code className="bg-bgSidebar px-1">portfolio.json</code>.</li>
          <li>Put the file in your site’s <code className="bg-bgSidebar px-1">docs/</code> folder (same place as <code className="bg-bgSidebar px-1">index.html</code>).</li>
          <li>Build with <code className="bg-bgSidebar px-1">npm run build:production</code> (or set <code className="bg-bgSidebar px-1">VITE_PORTFOLIO_URL</code> to your portfolio.json URL).</li>
          <li>Deploy. Viewers will load data from that URL first.</li>
        </ol>
        <button
          type="button"
          onClick={handleExportPortfolio}
          disabled={exporting}
          className="font-mono text-xs uppercase tracking-wider border border-paletteBorder px-4 py-2 bg-bgMain hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm disabled:opacity-50"
        >
          {exporting ? 'Preparing…' : 'Download portfolio.json'}
        </button>
      </section>

      <section className="border border-paletteBorder p-6 space-y-4 rounded-sm mb-6">
        <h2 className="font-mono text-xs uppercase tracking-wider mb-2">Domain setup</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider mb-2">1. Naked domain (A record)</h3>
            <p className="font-mono text-sm">Add an A record for your root domain (@) pointing to your host IP.</p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider mb-2">2. Redirect</h3>
            <p className="font-mono text-sm">Set domain forwarding from your root domain to https://www.yourdomain.com (301 redirect).</p>
          </div>
        </div>
      </section>

      <p className="mt-6">
        <Link to="/" className="font-mono text-xs uppercase tracking-wider border border-paletteBorder px-4 py-2 inline-block bg-bgMain hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm">
          Back to home
        </Link>
      </p>
    </div>
  );
};

export default DeploymentPage;
