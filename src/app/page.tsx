'use client';

import React, { useState } from 'react';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import CleanTaskbar from '@/components/CleanTaskbar';
import DevSidebar from '@/components/DevSidebar';
import TickerSidebar from '@/components/TickerSidebar';
import { Grid, List, Calendar, Upload, Image, Play, Video, Heart, Share2, Eye, TrendingUp, Coins, Camera } from 'lucide-react';

export default function HomePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list' | 'timeline'>('grid');
  const [selectedItems, setSelectedItems] = useState<Set<string>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Mock photo data with trading information using Unsplash
  const photos = [
    {
      id: '1',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
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
      src: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=300&h=400&fit=crop',
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
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
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
      src: 'https://images.unsplash.com/photo-1477346611705-65d1883cee1e?w=300&h=300&fit=crop',
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
      src: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=300&h=500&fit=crop',
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
      src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=350&h=300&fit=crop',
      title: 'Forest Path',
      date: '2024-09-10',
      shares: 800,
      price: '$0.041',
      volume: '$1.5K',
      change: '+12.8%',
      likes: 234,
      views: 987,
      isAutoNFT: true
    },
    {
      id: '7',
      src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=300&fit=crop',
      title: 'Nature Landscape',
      date: '2024-09-08',
      shares: 950,
      price: '$0.038',
      volume: '$1.9K',
      change: '+19.3%',
      likes: 412,
      views: 1834,
      isAutoNFT: true
    },
    {
      id: '8',
      src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
      title: 'Abstract Art',
      date: '2024-09-05',
      shares: 1500,
      price: '$0.067',
      volume: '$5.4K',
      change: '+28.7%',
      likes: 789,
      views: 3254,
      isAutoNFT: true
    },
    {
      id: '9',
      src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=400&h=300&fit=crop',
      title: 'Architectural Wonder',
      date: '2024-09-03',
      shares: 650,
      price: '$0.029',
      volume: '$1.2K',
      change: '+7.8%',
      likes: 198,
      views: 743,
      isAutoNFT: false
    },
    {
      id: '10',
      src: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=300&h=500&fit=crop',
      title: 'Ocean Waves',
      date: '2024-09-01',
      shares: 1100,
      price: '$0.054',
      volume: '$3.1K',
      change: '+24.1%',
      likes: 567,
      views: 2103,
      isAutoNFT: true
    },
    {
      id: '11',
      src: 'https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=350&h=300&fit=crop',
      title: 'City Skyline',
      date: '2024-08-28',
      shares: 850,
      price: '$0.042',
      volume: '$2.1K',
      change: '+16.4%',
      likes: 334,
      views: 1456,
      isAutoNFT: true
    },
    {
      id: '12',
      src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=300&fit=crop',
      title: 'Starry Night',
      date: '2024-08-25',
      shares: 1300,
      price: '$0.061',
      volume: '$4.7K',
      change: '+33.2%',
      likes: 612,
      views: 2876,
      isAutoNFT: true
    },
    {
      id: '13',
      src: 'https://images.unsplash.com/photo-1554080353-a576cf803bda?w=300&h=400&fit=crop',
      title: 'Golden Hour',
      date: '2024-08-22',
      shares: 720,
      price: '$0.035',
      volume: '$1.4K',
      change: '+9.6%',
      likes: 267,
      views: 891,
      isAutoNFT: false
    },
    {
      id: '14',
      src: 'https://images.unsplash.com/photo-1573376670774-4427757f7963?w=400&h=300&fit=crop',
      title: 'Retro Vibes',
      date: '2024-08-20',
      shares: 980,
      price: '$0.048',
      volume: '$2.8K',
      change: '+21.5%',
      likes: 445,
      views: 1723,
      isAutoNFT: true
    },
    {
      id: '15',
      src: 'https://images.unsplash.com/photo-1549490349-8643362247b5?w=350&h=300&fit=crop',
      title: 'Minimalist Design',
      date: '2024-08-18',
      shares: 1450,
      price: '$0.063',
      volume: '$6.2K',
      change: '+29.8%',
      likes: 723,
      views: 3145,
      isAutoNFT: true
    },
    {
      id: '16',
      src: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop',
      title: 'Wildlife Portrait',
      date: '2024-08-15',
      shares: 670,
      price: '$0.031',
      volume: '$1.3K',
      change: '+5.4%',
      likes: 201,
      views: 678,
      isAutoNFT: false
    },
    {
      id: '17',
      src: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=300&h=500&fit=crop',
      title: 'Dreamy Clouds',
      date: '2024-08-12',
      shares: 1200,
      price: '$0.056',
      volume: '$3.9K',
      change: '+26.3%',
      likes: 578,
      views: 2456,
      isAutoNFT: true
    },
    {
      id: '18',
      src: 'https://images.unsplash.com/photo-1535224206242-487f7090b5bb?w=400&h=300&fit=crop',
      title: 'Street Photography',
      date: '2024-08-10',
      shares: 890,
      price: '$0.044',
      volume: '$2.5K',
      change: '+18.7%',
      likes: 356,
      views: 1634,
      isAutoNFT: true
    },
    {
      id: '19',
      src: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=350&h=300&fit=crop',
      title: 'Modern Architecture',
      date: '2024-08-08',
      shares: 1050,
      price: '$0.052',
      volume: '$3.4K',
      change: '+23.9%',
      likes: 467,
      views: 1987,
      isAutoNFT: true
    },
    {
      id: '20',
      src: 'https://images.unsplash.com/photo-1520637836862-4d197d17c90a?w=300&h=300&fit=crop',
      title: 'Peaceful Waters',
      date: '2024-08-05',
      shares: 780,
      price: '$0.037',
      volume: '$1.7K',
      change: '+11.2%',
      likes: 289,
      views: 1123,
      isAutoNFT: false
    },
    {
      id: '21',
      src: 'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?w=300&h=400&fit=crop',
      title: 'Urban Explorer',
      date: '2024-08-03',
      shares: 1350,
      price: '$0.059',
      volume: '$4.8K',
      change: '+30.5%',
      likes: 634,
      views: 2789,
      isAutoNFT: true
    },
    {
      id: '22',
      src: 'https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?w=400&h=300&fit=crop',
      title: 'Cosmic Beauty',
      date: '2024-08-01',
      shares: 1600,
      price: '$0.071',
      volume: '$7.1K',
      change: '+35.4%',
      likes: 812,
      views: 3567,
      isAutoNFT: true
    },
    {
      id: '23',
      src: 'https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?w=350&h=300&fit=crop',
      title: 'Vintage Charm',
      date: '2024-07-30',
      shares: 920,
      price: '$0.046',
      volume: '$2.6K',
      change: '+19.8%',
      likes: 401,
      views: 1745,
      isAutoNFT: true
    },
    {
      id: '24',
      src: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=300&h=300&fit=crop',
      title: 'Digital Art',
      date: '2024-07-28',
      shares: 1150,
      price: '$0.055',
      volume: '$3.7K',
      change: '+25.1%',
      likes: 523,
      views: 2234,
      isAutoNFT: true
    },
    {
      id: '25',
      src: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=500&fit=crop',
      title: 'Aurora Borealis',
      date: '2024-07-25',
      shares: 1750,
      price: '$0.078',
      volume: '$8.9K',
      change: '+42.3%',
      likes: 934,
      views: 4123,
      isAutoNFT: true
    },
    {
      id: '26',
      src: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop',
      title: 'Flower Power',
      date: '2024-07-23',
      shares: 650,
      price: '$0.033',
      volume: '$1.5K',
      change: '+8.9%',
      likes: 245,
      views: 823,
      isAutoNFT: false
    },
    {
      id: '27',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=350&h=300&fit=crop',
      title: 'Desert Sunrise',
      date: '2024-07-20',
      shares: 1080,
      price: '$0.051',
      volume: '$3.6K',
      change: '+27.4%',
      likes: 487,
      views: 2067,
      isAutoNFT: true
    },
    {
      id: '28',
      src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=300&h=300&fit=crop',
      title: 'Abstract Geometry',
      date: '2024-07-18',
      shares: 875,
      price: '$0.043',
      volume: '$2.4K',
      change: '+17.6%',
      likes: 378,
      views: 1534,
      isAutoNFT: true
    },
    {
      id: '29',
      src: 'https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?w=300&h=400&fit=crop',
      title: 'Portrait Study',
      date: '2024-07-15',
      shares: 720,
      price: '$0.036',
      volume: '$1.8K',
      change: '+10.3%',
      likes: 298,
      views: 967,
      isAutoNFT: false
    },
    {
      id: '30',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      title: 'Epic Landscape',
      date: '2024-07-12',
      shares: 1890,
      price: '$0.084',
      volume: '$9.8K',
      change: '+38.7%',
      likes: 1067,
      views: 4589,
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
      {/* Photo display */}
      <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
        <img 
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
      <TickerSidebar />

      {/* Main content area */}
      <div className="pt-16 pl-64 pr-80 pb-20">
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
                  <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded overflow-hidden flex items-center justify-center">
                    <img 
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
              <button className="bg-gradient-duo-tone text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Upload Photos
              </button>
            </div>
          )}
        </div>
      </div>

    </div>
  );
}