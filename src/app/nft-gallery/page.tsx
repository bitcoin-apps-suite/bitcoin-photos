'use client';

import React, { useState } from 'react';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import CleanTaskbar from '@/components/CleanTaskbar';
import DevSidebar from '@/components/DevSidebar';
import Dock from '@/components/Dock';
import { Image, Zap, TrendingUp, TrendingDown, Eye, Heart, Share2, Filter, Search, Coins, Star } from 'lucide-react';

interface NFT {
  id: string;
  tokenId: string;
  title: string;
  creator: string;
  image: string;
  price: number;
  priceChange: number;
  volume24h: number;
  likes: number;
  views: number;
  rarity: number;
  shares: {
    total: number;
    available: number;
    owned: number;
  };
  traits: { trait: string; value: string; rarity: number }[];
  mintDate: string;
  isOwned: boolean;
}

export default function NFTGalleryPage() {
  const [filter, setFilter] = useState<'all' | 'owned' | 'created'>('all');
  const [sortBy, setSortBy] = useState<'price' | 'rarity' | 'volume' | 'recent'>('recent');
  const [searchTerm, setSearchTerm] = useState('');

  const nfts: NFT[] = [
    {
      id: '1',
      tokenId: 'BNFT-001',
      title: 'Sunset Over Silicon Valley',
      creator: 'PhotoMaster',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop',
      price: 0.0847,
      priceChange: 15.2,
      volume24h: 2340,
      likes: 324,
      views: 1245,
      rarity: 92,
      shares: { total: 1000, available: 650, owned: 0 },
      traits: [
        { trait: 'Camera', value: 'Canon EOS R5', rarity: 25 },
        { trait: 'Location', value: 'California', rarity: 45 },
        { trait: 'Time', value: 'Golden Hour', rarity: 30 },
        { trait: 'Style', value: 'Landscape', rarity: 60 }
      ],
      mintDate: '2024-01-15',
      isOwned: false
    },
    {
      id: '2',
      tokenId: 'BNFT-002',
      title: 'Urban Neon Dreams',
      creator: 'CityLens',
      image: 'https://images.unsplash.com/photo-1519167758481-83f29c8f498f?w=400&h=400&fit=crop',
      price: 0.1234,
      priceChange: 31.4,
      volume24h: 8210,
      likes: 678,
      views: 2341,
      rarity: 97,
      shares: { total: 1000, available: 250, owned: 100 },
      traits: [
        { trait: 'Camera', value: 'Sony A7R IV', rarity: 35 },
        { trait: 'Location', value: 'Tokyo', rarity: 15 },
        { trait: 'Time', value: 'Night', rarity: 40 },
        { trait: 'Style', value: 'Street', rarity: 50 }
      ],
      mintDate: '2024-02-08',
      isOwned: true
    },
    {
      id: '3',
      tokenId: 'BNFT-003',
      title: 'Mountain Vista',
      creator: 'NatureShot',
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1f?w=400&h=400&fit=crop',
      price: 0.0567,
      priceChange: 22.1,
      volume24h: 4100,
      likes: 445,
      views: 1567,
      rarity: 85,
      shares: { total: 1000, available: 800, owned: 200 },
      traits: [
        { trait: 'Camera', value: 'Nikon D850', rarity: 40 },
        { trait: 'Location', value: 'Swiss Alps', rarity: 10 },
        { trait: 'Time', value: 'Sunrise', rarity: 25 },
        { trait: 'Style', value: 'Landscape', rarity: 60 }
      ],
      mintDate: '2024-01-28',
      isOwned: true
    },
    {
      id: '4',
      tokenId: 'BNFT-004',
      title: 'Street Art Fusion',
      creator: 'UrbanEye',
      image: 'https://images.unsplash.com/photo-1514315384763-ba401779410f?w=400&h=400&fit=crop',
      price: 0.0321,
      priceChange: -3.2,
      volume24h: 1890,
      likes: 234,
      views: 892,
      rarity: 78,
      shares: { total: 1000, available: 900, owned: 0 },
      traits: [
        { trait: 'Camera', value: 'iPhone 14 Pro', rarity: 70 },
        { trait: 'Location', value: 'Berlin', rarity: 30 },
        { trait: 'Time', value: 'Afternoon', rarity: 55 },
        { trait: 'Style', value: 'Street Art', rarity: 20 }
      ],
      mintDate: '2024-03-01',
      isOwned: false
    },
    {
      id: '5',
      tokenId: 'BNFT-005',
      title: 'Portrait Elegance',
      creator: 'You',
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop',
      price: 0.2156,
      priceChange: 8.7,
      volume24h: 1560,
      likes: 892,
      views: 1892,
      rarity: 94,
      shares: { total: 1000, available: 400, owned: 600 },
      traits: [
        { trait: 'Camera', value: 'Leica Q2', rarity: 5 },
        { trait: 'Location', value: 'Paris', rarity: 20 },
        { trait: 'Time', value: 'Golden Hour', rarity: 30 },
        { trait: 'Style', value: 'Portrait', rarity: 35 }
      ],
      mintDate: '2024-02-14',
      isOwned: true
    },
    {
      id: '6',
      tokenId: 'BNFT-006',
      title: 'Abstract Light Play',
      creator: 'You',
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=400&fit=crop',
      price: 0.0890,
      priceChange: 45.6,
      volume24h: 5670,
      likes: 567,
      views: 2134,
      rarity: 89,
      shares: { total: 1000, available: 300, owned: 700 },
      traits: [
        { trait: 'Camera', value: 'Fuji X-T4', rarity: 30 },
        { trait: 'Location', value: 'Studio', rarity: 50 },
        { trait: 'Time', value: 'Controlled', rarity: 80 },
        { trait: 'Style', value: 'Abstract', rarity: 15 }
      ],
      mintDate: '2024-02-28',
      isOwned: true
    }
  ];

  const filteredNFTs = nfts
    .filter(nft => {
      if (filter === 'owned') return nft.isOwned;
      if (filter === 'created') return nft.creator === 'You';
      return true;
    })
    .filter(nft => 
      searchTerm === '' || 
      nft.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nft.creator.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price': return b.price - a.price;
        case 'rarity': return b.rarity - a.rarity;
        case 'volume': return b.volume24h - a.volume24h;
        case 'recent': return new Date(b.mintDate).getTime() - new Date(a.mintDate).getTime();
        default: return 0;
      }
    });

  const stats = {
    total: nfts.length,
    owned: nfts.filter(n => n.isOwned).length,
    created: nfts.filter(n => n.creator === 'You').length,
    totalValue: nfts.filter(n => n.isOwned).reduce((sum, n) => sum + (n.price * n.shares.owned), 0)
  };

  const getRarityColor = (rarity: number) => {
    if (rarity >= 95) return 'text-yellow-400'; // Legendary
    if (rarity >= 85) return 'text-purple-400'; // Epic
    if (rarity >= 70) return 'text-blue-400';   // Rare
    if (rarity >= 50) return 'text-green-400';  // Uncommon
    return 'text-gray-400'; // Common
  };

  const getRarityLabel = (rarity: number) => {
    if (rarity >= 95) return 'Legendary';
    if (rarity >= 85) return 'Epic';
    if (rarity >= 70) return 'Rare';
    if (rarity >= 50) return 'Uncommon';
    return 'Common';
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <ProofOfConceptBar />
      <CleanTaskbar />
      <DevSidebar />

      <div className="pt-16 pl-64 pb-20">
        {/* Header */}
        <div className="sticky top-16 z-20 bg-black/90 backdrop-blur-md border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gradient-duo mb-2">NFT Gallery</h1>
              <p className="text-white/70">Browse and manage your Auto-NFT collection • Trade photo shares</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-lg p-3">
                <div className="text-sm text-white/80">Portfolio Value</div>
                <div className="text-2xl font-bold text-primary-500">${stats.totalValue.toFixed(4)}</div>
                <div className="text-sm text-green-400">+$234.12 (15.6%)</div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
            <div className="glass rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <Image size={16} className="text-blue-500" />
                <span className="text-white/80 text-sm">Total NFTs</span>
              </div>
              <div className="text-xl font-bold text-white">{stats.total}</div>
            </div>
            <div className="glass rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <Star size={16} className="text-yellow-500" />
                <span className="text-white/80 text-sm">Owned</span>
              </div>
              <div className="text-xl font-bold text-white">{stats.owned}</div>
            </div>
            <div className="glass rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <Zap size={16} className="text-purple-500" />
                <span className="text-white/80 text-sm">Created</span>
              </div>
              <div className="text-xl font-bold text-white">{stats.created}</div>
            </div>
            <div className="glass rounded-lg p-3">
              <div className="flex items-center space-x-2 mb-1">
                <TrendingUp size={16} className="text-green-500" />
                <span className="text-white/80 text-sm">Avg. Rarity</span>
              </div>
              <div className="text-xl font-bold text-white">
                {(nfts.reduce((sum, n) => sum + n.rarity, 0) / nfts.length).toFixed(0)}%
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="Search NFTs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-primary-500"
                />
              </div>

              {/* Filter */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as any)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-500"
              >
                <option value="all" className="bg-gray-900">All NFTs</option>
                <option value="owned" className="bg-gray-900">Owned</option>
                <option value="created" className="bg-gray-900">Created</option>
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-500"
              >
                <option value="recent" className="bg-gray-900">Recently Minted</option>
                <option value="price" className="bg-gray-900">Highest Price</option>
                <option value="rarity" className="bg-gray-900">Highest Rarity</option>
                <option value="volume" className="bg-gray-900">Highest Volume</option>
              </select>
            </div>

            <div className="text-sm text-white/60">
              Showing {filteredNFTs.length} of {nfts.length} NFTs
            </div>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredNFTs.map((nft) => (
              <div key={nft.id} className="glass rounded-lg overflow-hidden hover:bg-white/5 transition-all group cursor-pointer">
                <div className="relative aspect-square">
                  <img
                    src={nft.image}
                    alt={nft.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop';
                    }}
                  />
                  
                  {/* Rarity Badge */}
                  <div className={`absolute top-3 left-3 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1 ${getRarityColor(nft.rarity)}`}>
                    <div className="flex items-center space-x-1 text-xs font-semibold">
                      <Star size={12} />
                      <span>{getRarityLabel(nft.rarity)}</span>
                    </div>
                  </div>

                  {/* Ownership Badge */}
                  {nft.isOwned && (
                    <div className="absolute top-3 right-3 bg-green-500/20 border border-green-500/30 rounded-lg px-2 py-1">
                      <span className="text-green-400 text-xs font-semibold">OWNED</span>
                    </div>
                  )}

                  {/* Stats Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 bg-black/70 backdrop-blur-sm rounded-lg p-2">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center space-x-1 text-white/60">
                          <Eye size={12} />
                          <span>{nft.views}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-white/60">
                          <Heart size={12} />
                          <span>{nft.likes}</span>
                        </div>
                      </div>
                      <div className="text-primary-500 font-semibold">
                        ${nft.price.toFixed(4)}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-sm group-hover:text-primary-500 transition-colors line-clamp-1">
                        {nft.title}
                      </h3>
                      <p className="text-white/60 text-xs">by {nft.creator}</p>
                    </div>
                    <div className="text-xs text-white/50">
                      #{nft.tokenId}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs mb-2">
                    <div className={`flex items-center space-x-1 ${
                      nft.priceChange >= 0 ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {nft.priceChange >= 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                      <span>{Math.abs(nft.priceChange).toFixed(1)}%</span>
                    </div>
                    <div className="text-white/60">
                      Vol: ${nft.volume24h.toLocaleString()}
                    </div>
                  </div>

                  {/* Shares Info */}
                  <div className="bg-white/5 rounded-lg p-2 mb-3">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-white/60">Shares Owned:</span>
                      <span className="text-white font-medium">{nft.shares.owned}/1000</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-1">
                      <div 
                        className="bg-primary-500 h-1 rounded-full" 
                        style={{ width: `${(nft.shares.owned / nft.shares.total) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-500/20 border border-blue-500/30 text-blue-400 py-1.5 rounded text-xs font-medium hover:bg-blue-500/30 transition-colors">
                      View Details
                    </button>
                    <button className="flex-1 bg-green-500/20 border border-green-500/30 text-green-400 py-1.5 rounded text-xs font-medium hover:bg-green-500/30 transition-colors">
                      Trade Shares
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Dock />
    </div>
  );
}