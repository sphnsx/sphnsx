import React from 'react';
import { Link } from 'react-router-dom';

const DeploymentPage: React.FC = () => (
  <div className="min-h-screen pt-24 px-6 pb-16 max-w-2xl">
    <h1 className="font-mono text-sm uppercase tracking-wider text-black mb-6">Domain setup</h1>
    <div className="border border-black p-6 space-y-4">
      <div>
        <h2 className="font-mono text-xs uppercase tracking-wider text-black mb-2">1. Naked domain (A record)</h2>
        <p className="font-mono text-sm text-black">Add an A record for your root domain (@) pointing to your host IP.</p>
      </div>
      <div>
        <h2 className="font-mono text-xs uppercase tracking-wider text-black mb-2">2. Redirect</h2>
        <p className="font-mono text-sm text-black">Set domain forwarding from your root domain to https://www.yourdomain.com (301 redirect).</p>
      </div>
    </div>
    <p className="mt-6">
      <Link to="/" className="font-mono text-xs uppercase tracking-wider border border-black px-4 py-2 inline-block bg-white text-black hover:bg-black hover:text-white transition-colors">
        Back to home
      </Link>
    </p>
  </div>
);

export default DeploymentPage;
