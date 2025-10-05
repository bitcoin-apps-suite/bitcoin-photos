'use client';

import React, { useState } from 'react';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import Taskbar from '@/components/Taskbar';
import DevSidebar from '@/components/DevSidebar';
import Dock from '@/components/Dock';
import { Coins, TrendingUp, Users, Zap, Camera, Gift, Lock, BarChart3, ArrowUpDown, DollarSign } from 'lucide-react';

export default function TokenPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'earn' | 'stake' | 'governance'>('overview');

  const tokenStats = {
    price: 0.0847,
    change24h: 12.4,
    volume24h: 126800,
    marketCap: 3200000,
    circulatingSupply: 37800000,
    totalSupply: 100000000,
    holders: 2341,
    burnedTokens: 580000
  };

  const earningMethods = [
    {
      id: 'upload',
      title: 'Upload Photos',
      description: 'Earn $bPhotos for every photo you upload and auto-NFT',
      reward: '5-50 $bPhotos',
      icon: Camera,
      color: 'text-blue-500'
    },
    {
      id: 'trading',
      title: 'Trade Shares',
      description: 'Earn fees when others trade your photo shares',
      reward: '2% fee split',
      icon: TrendingUp,
      color: 'text-green-500'
    },
    {
      id: 'staking',
      title: 'Stake Tokens',
      description: 'Lock up $bPhotos to earn passive rewards',
      reward: '12% APY',
      icon: Lock,
      color: 'text-purple-500'
    },
    {
      id: 'referrals',
      title: 'Refer Friends',
      description: 'Earn when friends join and start trading',
      reward: '10% bonus',
      icon: Users,
      color: 'text-orange-500'
    }
  ];

  const stakingTiers = [
    {
      name: 'Bronze',
      requirement: '1,000 $bPhotos',
      apy: '8%',
      benefits: ['Basic rewards', 'Priority uploads'],
      color: 'from-amber-600 to-amber-800'
    },
    {
      name: 'Silver',
      requirement: '10,000 $bPhotos',
      apy: '12%',
      benefits: ['Enhanced rewards', 'Free auto-NFT', 'Priority support'],
      color: 'from-gray-400 to-gray-600'
    },
    {
      name: 'Gold',
      requirement: '50,000 $bPhotos',
      apy: '15%',
      benefits: ['Maximum rewards', 'VIP features', 'Governance voting'],
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      name: 'Diamond',
      requirement: '100,000 $bPhotos',
      apy: '20%',
      benefits: ['Premium rewards', 'Beta access', 'Revenue share'],
      color: 'from-blue-400 to-purple-600'
    }
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <ProofOfConceptBar />
      <Taskbar />
      <DevSidebar />

      <div className="pt-14 pl-64 pb-20">
        {/* Header */}
        <div className="sticky top-14 z-20 bg-black/90 backdrop-blur-md border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 bg-gradient-duo-tone rounded-full flex items-center justify-center">
                  <Coins size={24} className="text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gradient-duo">$bPhotos Token</h1>
                  <p className="text-white/70">The native token powering Bitcoin Photos ecosystem</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <div className="text-2xl font-bold text-primary-500">${tokenStats.price.toFixed(4)}</div>
                <div className={`text-sm ${tokenStats.change24h >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {tokenStats.change24h >= 0 ? '+' : ''}{tokenStats.change24h.toFixed(1)}% (24h)
                </div>
              </div>
              <button className="bg-gradient-duo-tone text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
                Buy $bPhotos
              </button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex space-x-1 bg-white/10 rounded-lg p-1 mt-4">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'earn', label: 'Earn Tokens' },
              { id: 'stake', label: 'Staking' },
              { id: 'governance', label: 'Governance' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                  activeTab === tab.id
                    ? 'bg-primary-500 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Token Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <DollarSign size={20} className="text-green-500" />
                    <span className="text-white/80 text-sm">Market Cap</span>
                  </div>
                  <div className="text-2xl font-bold text-white">${formatNumber(tokenStats.marketCap)}</div>
                  <div className="text-green-400 text-xs">Rank #847</div>
                </div>

                <div className="glass rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <ArrowUpDown size={20} className="text-blue-500" />
                    <span className="text-white/80 text-sm">24h Volume</span>
                  </div>
                  <div className="text-2xl font-bold text-white">${formatNumber(tokenStats.volume24h)}</div>
                  <div className="text-blue-400 text-xs">+34% vs yesterday</div>
                </div>

                <div className="glass rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users size={20} className="text-purple-500" />
                    <span className="text-white/80 text-sm">Holders</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{formatNumber(tokenStats.holders)}</div>
                  <div className="text-purple-400 text-xs">+89 this week</div>
                </div>

                <div className="glass rounded-lg p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Coins size={20} className="text-orange-500" />
                    <span className="text-white/80 text-sm">Circulating</span>
                  </div>
                  <div className="text-2xl font-bold text-white">{formatNumber(tokenStats.circulatingSupply)}</div>
                  <div className="text-orange-400 text-xs">{((tokenStats.circulatingSupply / tokenStats.totalSupply) * 100).toFixed(1)}% of total</div>
                </div>
              </div>

              {/* Token Distribution */}
              <div className="glass rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Token Distribution</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Community Rewards</span>
                      <span className="text-white font-medium">40%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Creator Incentives</span>
                      <span className="text-white font-medium">25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Development</span>
                      <span className="text-white font-medium">20%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Liquidity</span>
                      <span className="text-white font-medium">10%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80">Team & Advisors</span>
                      <span className="text-white font-medium">5%</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 rounded-lg p-4">
                      <div className="text-lg font-bold text-white">Burned Tokens</div>
                      <div className="text-2xl font-bold text-red-400">{formatNumber(tokenStats.burnedTokens)}</div>
                      <div className="text-sm text-white/60">Permanently removed from supply</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Earn Tab */}
          {activeTab === 'earn' && (
            <div className="space-y-6">
              <div className="glass rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Ways to Earn $bPhotos</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {earningMethods.map((method) => {
                    const IconComponent = method.icon;
                    return (
                      <div key={method.id} className="bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors">
                        <div className="flex items-start space-x-3">
                          <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
                            <IconComponent size={24} className={method.color} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-white mb-1">{method.title}</h3>
                            <p className="text-white/70 text-sm mb-2">{method.description}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-primary-500 font-medium">{method.reward}</span>
                              <button className="btn-glass text-xs">Start Earning</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="glass rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Your Earning Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <div className="text-green-400 text-sm">Total Earned</div>
                    <div className="text-2xl font-bold text-white">1,234.56 $bPhotos</div>
                    <div className="text-green-400 text-sm">≈ $104.52</div>
                  </div>
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <div className="text-blue-400 text-sm">This Week</div>
                    <div className="text-2xl font-bold text-white">87.23 $bPhotos</div>
                    <div className="text-blue-400 text-sm">+23% vs last week</div>
                  </div>
                  <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                    <div className="text-purple-400 text-sm">Pending Rewards</div>
                    <div className="text-2xl font-bold text-white">45.67 $bPhotos</div>
                    <button className="text-purple-400 text-sm hover:underline">Claim Now</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Staking Tab */}
          {activeTab === 'stake' && (
            <div className="space-y-6">
              <div className="glass rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Staking Tiers</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {stakingTiers.map((tier) => (
                    <div key={tier.name} className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-colors">
                      <div className={`w-full h-2 bg-gradient-to-r ${tier.color} rounded-full mb-4`}></div>
                      <h3 className="font-bold text-white mb-2">{tier.name}</h3>
                      <div className="text-2xl font-bold text-primary-500 mb-1">{tier.apy}</div>
                      <div className="text-white/60 text-sm mb-3">Annual Percentage Yield</div>
                      <div className="text-white/80 text-sm mb-3">Min: {tier.requirement}</div>
                      <div className="space-y-1 mb-4">
                        {tier.benefits.map((benefit, index) => (
                          <div key={index} className="text-white/70 text-xs">• {benefit}</div>
                        ))}
                      </div>
                      <button className="w-full bg-white/10 hover:bg-white/20 border border-white/20 text-white py-2 rounded-lg text-sm transition-colors">
                        Stake Now
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-lg p-6">
                  <h2 className="text-xl font-bold text-white mb-4">Your Staking</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-white/80">Staked Amount</span>
                      <span className="text-white font-medium">5,000 $bPhotos</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Current Tier</span>
                      <span className="text-yellow-400 font-medium">Silver</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Rewards Earned</span>
                      <span className="text-green-400 font-medium">123.45 $bPhotos</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Lock Period</span>
                      <span className="text-white font-medium">30 days</span>
                    </div>
                    <button className="w-full bg-gradient-duo-tone text-white py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
                      Claim Rewards
                    </button>
                  </div>
                </div>

                <div className="glass rounded-lg p-6">
                  <h2 className="text-xl font-bold text-white mb-4">Stake Calculator</h2>
                  <div className="space-y-4">
                    <div>
                      <label className="text-white/80 text-sm block mb-2">Stake Amount</label>
                      <input
                        type="number"
                        placeholder="Enter amount"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="text-white/80 text-sm block mb-2">Lock Period</label>
                      <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary-500">
                        <option value="30" className="bg-gray-900">30 days (8% APY)</option>
                        <option value="90" className="bg-gray-900">90 days (12% APY)</option>
                        <option value="180" className="bg-gray-900">180 days (15% APY)</option>
                        <option value="365" className="bg-gray-900">365 days (20% APY)</option>
                      </select>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">Estimated Rewards</span>
                        <span className="text-green-400 font-medium">45.67 $bPhotos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Governance Tab */}
          {activeTab === 'governance' && (
            <div className="space-y-6">
              <div className="glass rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">Governance Proposals</h2>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4 border-l-4 border-green-500">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-white">Increase Creator Rewards by 25%</h3>
                      <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">Active</span>
                    </div>
                    <p className="text-white/70 text-sm mb-3">Proposal to increase the reward pool for photo creators to encourage more high-quality content.</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-green-400">✓ 87% For</span>
                        <span className="text-red-400">✗ 13% Against</span>
                        <span className="text-white/60">2,341 votes</span>
                      </div>
                      <button className="bg-green-500/20 border border-green-500/30 text-green-400 px-3 py-1 rounded text-sm">
                        Vote For
                      </button>
                    </div>
                  </div>

                  <div className="bg-white/5 rounded-lg p-4 border-l-4 border-blue-500">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-white">New Photo Category: AI-Generated</h3>
                      <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">Discussion</span>
                    </div>
                    <p className="text-white/70 text-sm mb-3">Should we create a separate category for AI-generated photos with different trading mechanics?</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="text-blue-400">Discussion Phase</span>
                        <span className="text-white/60">156 comments</span>
                      </div>
                      <button className="bg-blue-500/20 border border-blue-500/30 text-blue-400 px-3 py-1 rounded text-sm">
                        Join Discussion
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass rounded-lg p-6">
                  <h2 className="text-xl font-bold text-white mb-4">Your Voting Power</h2>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-500 mb-1">5,000</div>
                      <div className="text-white/70">Voting Power</div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">From Staked Tokens</span>
                        <span className="text-white">5,000</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">From NFT Holdings</span>
                        <span className="text-white">0</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/80">Delegation Bonus</span>
                        <span className="text-white">0</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-lg p-6">
                  <h2 className="text-xl font-bold text-white mb-4">Recent Votes</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-sm">Creator Rewards Increase</span>
                      <span className="text-green-400 text-sm">✓ For</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-sm">Platform Fee Reduction</span>
                      <span className="text-green-400 text-sm">✓ For</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/80 text-sm">Staking Pool Expansion</span>
                      <span className="text-red-400 text-sm">✗ Against</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Dock />
    </div>
  );
}