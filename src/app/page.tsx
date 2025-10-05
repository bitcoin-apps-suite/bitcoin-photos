'use client';

import React, { useState } from 'react';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import Taskbar from '@/components/Taskbar';
import DevSidebar from '@/components/DevSidebar';
import Dock from '@/components/Dock';
import { Grid, List, Calendar, Upload, Image, Play, Video, Heart, Share2, Eye, TrendingUp, Coins, Camera } from 'lucide-react';

export default function HomePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'timeline'>('grid');
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock photo data with trading information
  const photos = [
    {
      id: '1',
      src: '/api/placeholder/300/300',
      title: 'Sunset Beach',
      date: '2024-10-01',
      shares: 1000,
      price: '$0.045',
      volume: '$2.3K',
      change: '+15.2%',
      likes: 324,
      views: 1205,
      isAutoNFT: true
    },
    {
      id: '2', 
      src: '/api/placeholder/300/400',
      title: 'City Lights',
      date: '2024-09-28',
      shares: 750,
      price: '$0.032',
      volume: '$1.8K',
      change: '+8.7%',
      likes: 156,
      views: 892,
      isAutoNFT: true
    },
    {
      id: '3',
      src: '/api/placeholder/400/300',
      title: 'Mountain Vista',
      date: '2024-09-25',
      shares: 1250,
      price: '$0.058',
      volume: '$4.1K',
      change: '+22.1%',
      likes: 445,
      views: 1567,
      isAutoNFT: true
    },
    {
      id: '4',
      src: '/api/placeholder/300/300',
      title: 'Urban Rain',
      date: '2024-09-20',
      shares: 500,
      price: '$0.021',
      volume: '$890',
      change: '-3.2%',
      likes: 89,
      views: 456,
      isAutoNFT: false
    },
    {
      id: '5',
      src: '/api/placeholder/300/500',
      title: 'Neon Dreams',
      date: '2024-09-15',
      shares: 2000,
      price: '$0.076',
      volume: '$8.2K',
      change: '+31.4%',
      likes: 678,
      views: 2341,
      isAutoNFT: true
    },
    {
      id: '6',
      src: '/api/placeholder/350/300',
      title: 'Forest Path',
      date: '2024-09-10',
      shares: 800,
      price: '$0.041',
      volume: '$1.5K',
      change: '+12.8%',
      likes: 234,
      views: 987,
      isAutoNFT: true
    }
  ];

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
      {/* Photo placeholder */}
      <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <Image size={48} className="text-white/30" />
        </div>
        
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
      <Taskbar />
      <DevSidebar />

      {/* Main content area */}
      <div className="pt-16 pl-64 pb-20">
        {/* Toolbar */}
        <div className="sticky top-16 z-20 bg-black/90 backdrop-blur-md border-b border-white/10 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gradient-duo">My Photos</h1>
              <div className="text-sm text-white/60">
                {photos.length} photos • {selectedItems.size} selected
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
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded flex items-center justify-center">
                    <Image size={20} className="text-white/50" />
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
              <button className="bg-gradient-duo-tone text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Upload Photos
              </button>
            </div>
          )}
        </div>
      </div>

      <Dock />
    </div>
  );
}