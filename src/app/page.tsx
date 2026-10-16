'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import CleanTaskbar from '@/components/CleanTaskbar';
import DevSidebar from '@/components/DevSidebar';
import MinimalDock from '@/components/MinimalDock';
import SaveOnChain from '@/components/SaveOnChain';
import { Grid, List, Calendar, Upload, Heart, Share2, Eye, Coins, Camera } from 'lucide-react';

export default function HomePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'timeline'>('grid');
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());

  // Photos come from the signed-in user's own wallet (see Save on-chain below); no sample data.
  const photos: Array<{ id: string; src: string; title: string; date: string; shares: number; price: string; volume: string; change: string; likes: number; views: number; isAutoNFT: boolean }> = [];

  const toggleSelection = (id: string) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedItems(newSelected);
  };

  const PhotoGridItem = ({ photo }: { photo: typeof photos[0] }) => (
    <div 
      className={`group relative bg-white/5 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 hover:bg-white/10 hover:scale-105 hover:shadow-xl ${
        selectedItems.has(photo.id) ? 'ring-2 ring-primary-500 bg-white/15' : ''
      }`}
      onClick={() => toggleSelection(photo.id)}
    >
      {/* Photo display */}
      <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <Image
          fill
          unoptimized
          src={photo.src} 
          alt={photo.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            // Fallback to placeholder icon if image fails to load
            e.currentTarget.style.display = 'none';
            const parent = e.currentTarget.parentElement;
            if (parent) {
              const placeholder = document.createElement('div');
              placeholder.className = 'absolute inset-0 flex items-center justify-center';
              placeholder.innerHTML = '<svg width="48" height="48" fill="currentColor" class="text-white/30" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>';
              parent.appendChild(placeholder);
            }
          }}
        />
        
        {/* Auto-NFT badge */}
        {photo.isAutoNFT && (
          <div className="absolute top-2 left-2 bg-primary-500/90 text-white text-xs px-2 py-1 rounded-full font-medium backdrop-blur-sm">
            Auto-NFT
          </div>
        )}

        {/* Trading stats overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="text-xs space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-white/80">Shares:</span>
              <span className="text-white font-medium">{photo.shares}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/80">Price:</span>
              <span className="text-green-400 font-medium">{photo.price}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white/80">24h:</span>
              <span className={`font-medium ${photo.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                {photo.change}
              </span>
            </div>
          </div>
        </div>

        {/* Selection indicator */}
        {selectedItems.has(photo.id) && (
          <div className="absolute top-2 right-2 w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">✓</span>
          </div>
        )}
      </div>

      {/* Info bar */}
      <div className="p-3">
        <h3 className="text-white font-medium text-sm mb-1">{photo.title}</h3>
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>{photo.date}</span>
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Heart size={12} />
              <span>{photo.likes}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye size={12} />
              <span>{photo.views}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <ProofOfConceptBar />
      <CleanTaskbar />
      <DevSidebar />

      {/* Main content area */}
      <div className="pt-16 pl-64 pr-6 pb-20">
        {/* Toolbar */}
        <div className="sticky top-16 z-20 bg-black/90 backdrop-blur-md border-b border-white/10 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gradient-duo">My Photos</h1>
              <div className="text-sm text-white/60">
                {photos.length} photos • {selectedItems.size} selected • {photos.filter(p => p.isAutoNFT).length} auto-NFTs
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {/* View mode toggles */}
              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'text-white/60 hover:text-white'}`}
                >
                  <Grid size={16} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'text-white/60 hover:text-white'}`}
                >
                  <List size={16} />
                </button>
                <button
                  onClick={() => setViewMode('timeline')}
                  className={`p-2 rounded transition-colors ${viewMode === 'timeline' ? 'bg-primary-500 text-white' : 'text-white/60 hover:text-white'}`}
                >
                  <Calendar size={16} />
                </button>
              </div>

              {/* Action buttons */}
              <button className="btn-glass flex items-center space-x-2">
                <Upload size={16} />
                <span>Upload</span>
              </button>
              
              {selectedItems.size > 0 && (
                <>
                  <button className="btn-glass flex items-center space-x-2 bg-primary-500/20 border-primary-500/30">
                    <Coins size={16} />
                    <span>Auto-NFT Selected</span>
                  </button>
                  <button className="btn-glass flex items-center space-x-2">
                    <Share2 size={16} />
                    <span>Share</span>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Photo grid */}
        <div className="p-6">
          {viewMode === 'grid' && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
              {photos.map((photo) => (
                <PhotoGridItem key={photo.id} photo={photo} />
              ))}
            </div>
          )}

          {viewMode === 'list' && (
            <div className="space-y-2">
              {photos.map((photo) => (
                <div key={photo.id} className="flex items-center space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                  <div className="relative w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded overflow-hidden flex items-center justify-center">
                    <Image
                      fill
                      unoptimized
                      src={photo.src} 
                      alt={photo.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const parent = e.currentTarget.parentElement;
                        if (parent && !parent.querySelector('svg')) {
                          const placeholder = document.createElement('svg');
                          placeholder.setAttribute('width', '20');
                          placeholder.setAttribute('height', '20');
                          placeholder.setAttribute('fill', 'currentColor');
                          placeholder.className = 'text-white/50';
                          placeholder.setAttribute('viewBox', '0 0 24 24');
                          placeholder.innerHTML = '<path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>';
                          parent.appendChild(placeholder);
                        }
                      }}
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-white font-medium">{photo.title}</h3>
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-white/60">{photo.date}</span>
                        <span className="text-green-400">{photo.price}</span>
                        <span className={photo.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}>
                          {photo.change}
                        </span>
                        <span className="text-white/60">{photo.shares} shares</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Empty state for new collections */}
          {photos.length === 0 && (
            <div className="text-center py-20">
              <div className="text-white/30 mb-4">
                <Camera size={64} className="mx-auto" />
              </div>
              <h2 className="text-xl font-semibold text-white mb-2">No Photos Yet</h2>
              <p className="text-white/60 mb-6">Upload your first photos to start auto-NFT creation and trading</p>
            </div>
          )}
          <SaveOnChain accept="image/*" noun="photo" />
        </div>
      </div>

      <MinimalDock />
    </div>
  );
}