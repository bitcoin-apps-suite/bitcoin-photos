'use client';

import React from 'react';

export default function ProofOfConceptBar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-700 text-black px-4 py-2 text-center text-sm font-bold shadow-2xl border-b border-pink-400/50">
      <div className="flex items-center justify-center space-x-2 drop-shadow-sm">
        <span className="hidden sm:inline text-lg animate-bounce">🔬</span>
        <span className="font-black tracking-wide text-shadow">PROOF OF CONCEPT</span>
        <span className="hidden sm:inline text-black/60">•</span>
        <span className="hidden sm:inline text-black/90 font-medium">Auto-NFT your photos • Trade image shares • Earn $bPhotos</span>
        <span className="animate-pulse text-lg">✨</span>
      </div>
      <style jsx>{`
        .text-shadow {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  );
}