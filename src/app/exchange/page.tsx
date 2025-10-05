'use client';

import React, { useState } from 'react';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import TopMenuBar from '@/components/TopMenuBar';
import DevSidebar from '@/components/DevSidebar';
import Dock from '@/components/Dock';
import { TrendingUp, TrendingDown, Search, Filter, Coins, Image, Eye, Heart, ArrowUpDown, BarChart3 } from 'lucide-react';

interface PhotoShare {
  id: string;
  title: string;
  creator: string;
  totalShares: number;
  price: number;
  change24h: number;
  volume24h: number;
  marketCap: number;
  likes: number;
  views: number;
  lastSale: number;
  category: string;
}

export default function ExchangePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'price' | 'volume' | 'change' | 'marketCap'>('volume');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const photoShares: PhotoShare[] = [
    {
      id: '1',
      title: 'Sunset Beach Collection',
      creator: 'PhotoMaster',
      totalShares: 10000,
      price: 0.0847,
      change24h: 15.2,
      volume24h: 23400,
      marketCap: 847000,
      likes: 324,
      views: 12450,
      lastSale: 0.0823,
      category: 'Landscape'
    },
    {
      id: '2',
      title: 'Neon Dreams Series',
      creator: 'UrbanLens',
      totalShares: 7500,
      price: 0.1234,
      change24h: 31.4,
      volume24h: 82100,
      marketCap: 925500,
      likes: 678,
      views: 23410,
      lastSale: 0.0939,
      category: 'Urban'
    },
    {
      id: '3',
      title: 'Mountain Vista Limited',
      creator: 'NatureCap',
      totalShares: 5000,
      price: 0.0567,
      change24h: 22.1,
      volume24h: 41000,
      marketCap: 283500,
      likes: 445,
      views: 15670,
      lastSale: 0.0464,
      category: 'Landscape'
    },
    {
      id: '4',
      title: 'Street Art Moments',
      creator: 'GraffitiGuru',
      totalShares: 12000,
      price: 0.0321,
      change24h: -3.2,
      volume24h: 18900,
      marketCap: 385200,
      likes: 234,
      views: 8920,
      lastSale: 0.0332,
      category: 'Street'
    },
    {
      id: '5',
      title: 'Portrait Elegance',
      creator: 'StudioPro',
      totalShares: 3000,
      price: 0.2156,
      change24h: 8.7,
      volume24h: 15600,
      marketCap: 646800,
      likes: 892,
      views: 18920,
      lastSale: 0.1983,
      category: 'Portrait'
    }
  ];

  const categories = ['all', 'Landscape', 'Urban', 'Street', 'Portrait', 'Abstract', 'Wildlife'];

  const filteredShares = photoShares
    .filter(share => 
      (filterCategory === 'all' || share.category === filterCategory) &&
      (searchTerm === '' || share.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
       share.creator.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case 'price': return b.price - a.price;
        case 'volume': return b.volume24h - a.volume24h;
        case 'change': return b.change24h - a.change24h;
        case 'marketCap': return b.marketCap - a.marketCap;
        default: return 0;
      }
    });

  const formatCurrency = (value: number) => `$${value.toFixed(4)}`;
  const formatLargeNumber = (value: number) => {
    if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `$${(value / 1000).toFixed(1)}K`;
    return `$${value.toFixed(0)}`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <ProofOfConceptBar />
      <TopMenuBar />
      <DevSidebar />

      <div className="pt-14 pl-64 pb-20">
        {/* Header */}
        <div className="sticky top-14 z-20 bg-black/90 backdrop-blur-md border-b border-white/10 p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gradient-duo mb-2">Image Share Exchange</h1>
                <p className="text-white/70">Trade shares in photo collections • Earn $bPhotos • Support creators</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-lg p-3">
                  <div className="text-sm text-white/80">Portfolio Value</div>
                  <div className="text-2xl font-bold text-primary-500">$12,847.52</div>
                  <div className="text-sm text-green-400">+$1,234.12 (10.6%)</div>
                </div>
              </div>
            </div>

            {/* Search and filters */}
            <div className="flex items-center space-x-4">
              <div className="relative flex-1 max-w-md">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
                <input
                  type="text"
                  placeholder="Search collections or creators..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-primary-500 focus:bg-white/15"
                />
              </div>

              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-500"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat} className="bg-gray-900">
                    {cat === 'all' ? 'All Categories' : cat}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-500"
              >
                <option value="volume" className="bg-gray-900">Sort by Volume</option>
                <option value="price" className="bg-gray-900">Sort by Price</option>
                <option value="change" className="bg-gray-900">Sort by Change</option>
                <option value="marketCap" className="bg-gray-900">Sort by Market Cap</option>
              </select>
            </div>
          </div>
        </div>

        {/* Market overview */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="glass rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <BarChart3 size={20} className="text-primary-500" />
                <span className="text-white/80 text-sm">Total Market Cap</span>
              </div>
              <div className="text-2xl font-bold text-white">$3.2M</div>
              <div className="text-green-400 text-sm">+12.4% (24h)</div>
            </div>

            <div className="glass rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <ArrowUpDown size={20} className="text-blue-500" />
                <span className="text-white/80 text-sm">24h Volume</span>
              </div>
              <div className="text-2xl font-bold text-white">$181.4K</div>
              <div className="text-blue-400 text-sm">453 trades</div>
            </div>

            <div className="glass rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Image size={20} className="text-purple-500" />
                <span className="text-white/80 text-sm">Active Collections</span>
              </div>
              <div className="text-2xl font-bold text-white">156</div>
              <div className="text-purple-400 text-sm">+23 this week</div>
            </div>

            <div className="glass rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Coins size={20} className="text-yellow-500" />
                <span className="text-white/80 text-sm">$bPhotos Price</span>
              </div>
              <div className="text-2xl font-bold text-white">$0.0847</div>
              <div className="text-green-400 text-sm">+5.2% (24h)</div>
            </div>
          </div>

          {/* Trading table */}
          <div className="glass rounded-lg overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">Live Trading</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-white/5">
                  <tr>
                    <th className="text-left p-4 text-white/80 font-medium">Collection</th>
                    <th className="text-right p-4 text-white/80 font-medium">Price</th>
                    <th className="text-right p-4 text-white/80 font-medium">24h Change</th>
                    <th className="text-right p-4 text-white/80 font-medium">Volume</th>
                    <th className="text-right p-4 text-white/80 font-medium">Market Cap</th>
                    <th className="text-right p-4 text-white/80 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredShares.map((share, index) => (
                    <tr key={share.id} className="border-t border-white/5 hover:bg-white/5 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                            <Image size={20} className="text-white/50" />
                          </div>
                          <div>
                            <div className="font-medium text-white">{share.title}</div>
                            <div className="text-sm text-white/60">by {share.creator}</div>
                            <div className="flex items-center space-x-3 text-xs text-white/50 mt-1">
                              <div className="flex items-center space-x-1">
                                <Heart size={10} />
                                <span>{share.likes}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Eye size={10} />
                                <span>{share.views}</span>
                              </div>
                              <span className="text-white/30">•</span>
                              <span>{share.category}</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="font-bold text-white">{formatCurrency(share.price)}</div>
                        <div className="text-xs text-white/60">Last: {formatCurrency(share.lastSale)}</div>
                      </td>
                      <td className="p-4 text-right">
                        <div className={`flex items-center justify-end space-x-1 ${
                          share.change24h >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {share.change24h >= 0 ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                          <span className="font-medium">{Math.abs(share.change24h).toFixed(1)}%</span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="font-medium text-white">{formatLargeNumber(share.volume24h)}</div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="font-medium text-white">{formatLargeNumber(share.marketCap)}</div>
                        <div className="text-xs text-white/60">{share.totalShares.toLocaleString()} shares</div>
                      </td>
                      <td className="p-4 text-right">
                        <div className="flex items-center justify-end space-x-2">
                          <button className="bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded text-sm font-medium hover:bg-green-500/30 transition-colors">
                            Buy
                          </button>
                          <button className="bg-red-500/20 border border-red-500/30 text-red-400 px-3 py-1 rounded text-sm font-medium hover:bg-red-500/30 transition-colors">
                            Sell
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Dock />
    </div>
  );
}