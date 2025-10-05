'use client';

import React from 'react';

export default function ProofOfConceptBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-duo-tone text-white px-4 py-2 text-center text-sm font-medium shadow-lg backdrop-blur-sm">
      <div className="flex items-center justify-center space-x-2">
        <span className="hidden sm:inline">🔬</span>
        <span className="font-semibold">PROOF OF CONCEPT</span>
        <span className="hidden sm:inline">•</span>
        <span className="hidden sm:inline text-white/90">Auto-NFT your photos • Trade image shares • Earn $bPhotos</span>
        <span className="pulse-animation">✨</span>
      </div>
    </div>
  );
}