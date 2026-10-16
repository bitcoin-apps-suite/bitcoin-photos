'use client';

import React from 'react';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import CleanTaskbar from '@/components/CleanTaskbar';
import DevSidebar from '@/components/DevSidebar';
import MinimalDock from '@/components/MinimalDock';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ProofOfConceptBar />
      <CleanTaskbar />
      <DevSidebar />
      <div className="pt-16 pl-64 pr-6 pb-20">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gradient-duo mb-2">Analytics</h1>
          <p className="text-white/60">
            No analytics yet. Views, sales and royalties will show here once photos are saved and traded on-chain.
          </p>
        </div>
      </div>
      <MinimalDock />
    </div>
  );
}
