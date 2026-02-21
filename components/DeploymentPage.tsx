import React from 'react';
import { Link } from 'react-router-dom';

const DeploymentPage: React.FC = () => (
  <div className="min-h-screen bg-bgMain pt-pageTop px-6 pb-12 max-w-2xl text-textPrimary">
    <h1 className="font-mono text-sm uppercase tracking-wider mb-6">Domain setup</h1>
    <div className="border border-paletteBorder p-6 space-y-4 rounded-sm">
      <div>
        <h2 className="font-mono text-xs uppercase tracking-wider mb-2">1. Naked domain (A record)</h2>
        <p className="font-mono text-sm">Add an A record for your root domain (@) pointing to your host IP.</p>
      </div>
      <div>
        <h2 className="font-mono text-xs uppercase tracking-wider mb-2">2. Redirect</h2>
        <p className="font-mono text-sm">Set domain forwarding from your root domain to https://www.yourdomain.com (301 redirect).</p>
      </div>
    </div>
    <p className="mt-6">
      <Link to="/" className="font-mono text-xs uppercase tracking-wider border border-paletteBorder px-4 py-2 inline-block bg-bgMain hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm">
        Back to home
      </Link>
    </p>
  </div>
);

export default DeploymentPage;
