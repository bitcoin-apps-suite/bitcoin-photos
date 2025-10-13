'use client';

import React, { useState } from 'react';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import CleanTaskbar from '@/components/CleanTaskbar';
import DevSidebar from '@/components/DevSidebar';
import MinimalDock from '@/components/MinimalDock';
import TickerSidebar from '@/components/TickerSidebar';
import { BarChart3, TrendingUp, TrendingDown, Users, Eye, Heart, Coins, Camera, Share2, Activity, Calendar, DollarSign } from 'lucide-react';

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

  const analytics = {
    overview: {
      totalPhotos: 247,
      totalNFTs: 189,
      totalShares: 189000,
      totalValue: 12847.52,
      portfolioChange: 10.6,
      totalViews: 45789,
      totalLikes: 8934,
      activeTraders: 156
    },
    performance: {
      avgPhotoValue: 67.89,
      avgRarityScore: 72.4,
      topPerformer: 'Urban Neon Dreams',
      topPerformerGain: 156.7,
      tradingVolume: 34567.89,
      royaltyEarnings: 1234.56
    },
    trending: [
      { name: 'Urban Neon Dreams', change: 156.7, volume: 8210 },
      { name: 'Portrait Elegance', change: 45.6, volume: 5670 },
      { name: 'Abstract Light Play', change: 31.4, volume: 4100 },
      { name: 'Mountain Vista', change: 22.1, volume: 3890 },
      { name: 'Sunset Over Silicon Valley', change: 15.2, volume: 2340 }
    ],
    monthlyData: [
      { month: 'Jan', photos: 45, nfts: 38, value: 2340, trades: 156 },
      { month: 'Feb', photos: 67, nfts: 54, value: 4567, trades: 234 },
      { month: 'Mar', photos: 89, nfts: 73, value: 6890, trades: 312 },
      { month: 'Apr', photos: 46, nfts: 24, value: -1230, trades: 189 }
    ]
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <ProofOfConceptBar />
      <CleanTaskbar />
      <DevSidebar />
      <TickerSidebar />

      <div className="pt-16 pl-64 pr-80 pb-20">
        {/* Header */}
        <div className="sticky top-16 z-20 bg-black/90 backdrop-blur-md border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gradient-duo mb-2">Analytics Dashboard</h1>
              <p className="text-white/70">Track your photo performance • Monitor trading metrics • Optimize strategy</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value as any)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-500"
              >
                <option value="7d" className="bg-gray-900">Last 7 days</option>
                <option value="30d" className="bg-gray-900">Last 30 days</option>
                <option value="90d" className="bg-gray-900">Last 90 days</option>
                <option value="1y" className="bg-gray-900">Last year</option>
              </select>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="glass rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Camera size={20} className="text-blue-500" />
                  <span className="text-white/80">Total Photos</span>
                </div>
                <TrendingUp size={16} className="text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{analytics.overview.totalPhotos}</div>
              <div className="text-sm text-green-400">+23 this month</div>
            </div>

            <div className="glass rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Share2 size={20} className="text-purple-500" />
                  <span className="text-white/80">Auto-NFTs</span>
                </div>
                <TrendingUp size={16} className="text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{analytics.overview.totalNFTs}</div>
              <div className="text-sm text-green-400">+18 this month</div>
            </div>

            <div className="glass rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <DollarSign size={20} className="text-green-500" />
                  <span className="text-white/80">Portfolio Value</span>
                </div>
                <TrendingUp size={16} className="text-green-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">${analytics.overview.totalValue.toLocaleString()}</div>
              <div className="text-sm text-green-400">+{analytics.overview.portfolioChange}% this month</div>
            </div>

            <div className="glass rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <Users size={20} className="text-yellow-500" />
                  <span className="text-white/80">Active Traders</span>
                </div>
                <Activity size={16} className="text-blue-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{analytics.overview.activeTraders}</div>
              <div className="text-sm text-blue-400">+12% vs last month</div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Portfolio Performance */}
            <div className="glass rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Portfolio Performance</h3>
                <BarChart3 size={20} className="text-primary-500" />
              </div>
              <div className="space-y-4">
                {analytics.monthlyData.map((month, index) => (
                  <div key={month.month} className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 text-sm text-white/60">{month.month}</div>
                      <div className="flex-1 bg-white/10 rounded-full h-2">
                        <div 
                          className="bg-primary-500 h-2 rounded-full" 
                          style={{ width: `${Math.max(10, (Math.abs(month.value) / 7000) * 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className={`text-sm font-semibold ${month.value >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {month.value >= 0 ? '+' : ''}${month.value.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Performing Photos */}
            <div className="glass rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold">Top Performers</h3>
                <TrendingUp size={20} className="text-green-500" />
              </div>
              <div className="space-y-4">
                {analytics.trending.map((photo, index) => (
                  <div key={photo.name} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center text-xs font-bold">
                        #{index + 1}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{photo.name}</div>
                        <div className="text-xs text-white/60">Vol: ${photo.volume.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="text-green-400 text-sm font-semibold">
                      +{photo.change}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Engagement Metrics */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Eye size={20} className="text-blue-500" />
                <span>Engagement</span>
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-white/70">Total Views</span>
                  <span className="font-semibold">{analytics.overview.totalViews.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Total Likes</span>
                  <span className="font-semibold">{analytics.overview.totalLikes.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Avg. Views per Photo</span>
                  <span className="font-semibold">{Math.round(analytics.overview.totalViews / analytics.overview.totalPhotos)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Engagement Rate</span>
                  <span className="font-semibold text-green-400">
                    {((analytics.overview.totalLikes / analytics.overview.totalViews) * 100).toFixed(1)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Trading Metrics */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Coins size={20} className="text-yellow-500" />
                <span>Trading</span>
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-white/70">Trading Volume</span>
                  <span className="font-semibold">${analytics.performance.tradingVolume.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Royalty Earnings</span>
                  <span className="font-semibold text-green-400">${analytics.performance.royaltyEarnings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Avg. Photo Value</span>
                  <span className="font-semibold">${analytics.performance.avgPhotoValue}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Total Shares</span>
                  <span className="font-semibold">{analytics.overview.totalShares.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Quality Metrics */}
            <div className="glass rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center space-x-2">
                <Activity size={20} className="text-purple-500" />
                <span>Quality</span>
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-white/70">Avg. Rarity Score</span>
                  <span className="font-semibold">{analytics.performance.avgRarityScore}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">NFT Success Rate</span>
                  <span className="font-semibold text-green-400">
                    {((analytics.overview.totalNFTs / analytics.overview.totalPhotos) * 100).toFixed(1)}%
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Top Performer</span>
                  <span className="font-semibold text-primary-500">{analytics.performance.topPerformer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/70">Top Gain</span>
                  <span className="font-semibold text-green-400">+{analytics.performance.topPerformerGain}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* $bPhotos Earnings */}
          <div className="glass rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center space-x-2">
              <Coins size={24} className="text-primary-500" />
              <span>$bPhotos Earnings Breakdown</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500 mb-2">1,890</div>
                <div className="text-sm text-white/70">Auto-NFT Rewards</div>
                <div className="text-xs text-green-400">+180 this month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500 mb-2">567</div>
                <div className="text-sm text-white/70">Trading Fees Earned</div>
                <div className="text-xs text-green-400">+67 this month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500 mb-2">234</div>
                <div className="text-sm text-white/70">Engagement Bonuses</div>
                <div className="text-xs text-green-400">+23 this month</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-500 mb-2">2,691</div>
                <div className="text-sm text-white/70">Total $bPhotos</div>
                <div className="text-xs text-green-400">+270 this month</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MinimalDock />
    </div>
  );
}