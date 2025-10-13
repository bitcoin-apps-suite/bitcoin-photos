'use client';

import React, { useState } from 'react';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import CleanTaskbar from '@/components/CleanTaskbar';
import DevSidebar from '@/components/DevSidebar';
import MinimalDock from '@/components/MinimalDock';
import TickerSidebar from '@/components/TickerSidebar';
import { Camera, TrendingUp, Users, Eye, Heart, Star, Award, Coins, Image, Activity } from 'lucide-react';

interface Creator {
  id: string;
  handle: string;
  name: string;
  avatar: string;
  verified: boolean;
  followers: number;
  totalPhotos: number;
  totalEarnings: number;
  monthlyViews: number;
  category: string;
  joinedDate: string;
  topPhoto: string;
  bio: string;
}

export default function CreatorsPage() {
  const [filter, setFilter] = useState<'all' | 'trending' | 'top-earners' | 'most-followed'>('all');
  const [sortBy, setSortBy] = useState<'earnings' | 'followers' | 'photos' | 'views'>('earnings');

  const creators: Creator[] = [
    {
      id: '1',
      handle: 'streetphoto_btc',
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      verified: true,
      followers: 12400,
      totalPhotos: 847,
      totalEarnings: 23400,
      monthlyViews: 156000,
      category: 'Street Photography',
      joinedDate: 'March 2023',
      topPhoto: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=300&fit=crop',
      bio: 'Capturing urban life through the lens of Bitcoin economics'
    },
    {
      id: '2',
      handle: 'nature_nft',
      name: 'Maria Santos',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b05b?w=150&h=150&fit=crop&crop=face',
      verified: true,
      followers: 18200,
      totalPhotos: 1234,
      totalEarnings: 45600,
      monthlyViews: 234000,
      category: 'Nature & Landscape',
      joinedDate: 'January 2023',
      topPhoto: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      bio: 'Preserving nature\'s beauty on the blockchain forever'
    },
    {
      id: '3',
      handle: 'portrait_pro',
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      verified: false,
      followers: 8900,
      totalPhotos: 567,
      totalEarnings: 12300,
      monthlyViews: 89000,
      category: 'Portrait',
      joinedDate: 'June 2023',
      topPhoto: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=300&fit=crop&crop=face',
      bio: 'Professional portraits with soul and story'
    },
    {
      id: '4',
      handle: 'abstractart_btc',
      name: 'Sarah Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      verified: true,
      followers: 15600,
      totalPhotos: 723,
      totalEarnings: 34500,
      monthlyViews: 178000,
      category: 'Abstract',
      joinedDate: 'February 2023',
      topPhoto: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop',
      bio: 'Exploring the intersection of art and technology'
    },
    {
      id: '5',
      handle: 'macro_world',
      name: 'James Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      verified: false,
      followers: 6700,
      totalPhotos: 892,
      totalEarnings: 8900,
      monthlyViews: 67000,
      category: 'Macro',
      joinedDate: 'August 2023',
      topPhoto: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop',
      bio: 'Discovering beauty in the smallest details'
    },
    {
      id: '6',
      handle: 'night_photographer',
      name: 'Lisa Zhang',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
      verified: true,
      followers: 22100,
      totalPhotos: 456,
      totalEarnings: 56700,
      monthlyViews: 312000,
      category: 'Night Photography',
      joinedDate: 'December 2022',
      topPhoto: 'https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=300&fit=crop',
      bio: 'Capturing the magic when the world sleeps'
    }
  ];

  const filteredCreators = creators.sort((a, b) => {
    switch (sortBy) {
      case 'earnings': return b.totalEarnings - a.totalEarnings;
      case 'followers': return b.followers - a.followers;
      case 'photos': return b.totalPhotos - a.totalPhotos;
      case 'views': return b.monthlyViews - a.monthlyViews;
      default: return 0;
    }
  });

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const formatEarnings = (earnings: number) => {
    return `${formatNumber(earnings)} $bPhotos`;
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
              <div className="flex items-center space-x-3 mb-2">
                <div className="w-12 h-12 bg-gradient-duo-tone rounded-full flex items-center justify-center">
                  <Users size={24} className="text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gradient-duo">Top Creators</h1>
                  <p className="text-white/70">Discover the most successful photographers on Bitcoin Photos</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <select 
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-primary-500"
              >
                <option value="earnings" className="bg-gray-900">Top Earners</option>
                <option value="followers" className="bg-gray-900">Most Followed</option>
                <option value="photos" className="bg-gray-900">Most Photos</option>
                <option value="views" className="bg-gray-900">Most Views</option>
              </select>
            </div>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="glass rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Users size={20} className="text-blue-500" />
                <span className="text-white/80 text-sm">Total Creators</span>
              </div>
              <div className="text-2xl font-bold text-white">2,341</div>
              <div className="text-blue-400 text-xs">+127 this month</div>
            </div>

            <div className="glass rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Coins size={20} className="text-green-500" />
                <span className="text-white/80 text-sm">Total Earned</span>
              </div>
              <div className="text-2xl font-bold text-white">4.2M</div>
              <div className="text-green-400 text-xs">$bPhotos distributed</div>
            </div>

            <div className="glass rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Image size={20} className="text-purple-500" />
                <span className="text-white/80 text-sm">Photos Uploaded</span>
              </div>
              <div className="text-2xl font-bold text-white">156K</div>
              <div className="text-purple-400 text-xs">+2.3K this week</div>
            </div>

            <div className="glass rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Eye size={20} className="text-pink-500" />
                <span className="text-white/80 text-sm">Total Views</span>
              </div>
              <div className="text-2xl font-bold text-white">12.5M</div>
              <div className="text-pink-400 text-xs">This month</div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* Creator Grid */}
          <div className="grid gap-6">
            {filteredCreators.map((creator, index) => (
              <div key={creator.id} className="glass rounded-lg p-6 hover:bg-white/5 transition-colors">
                <div className="flex items-start space-x-6">
                  {/* Rank & Avatar */}
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-white/40">#{index + 1}</div>
                    <div className="relative">
                      <img 
                        src={creator.avatar} 
                        alt={creator.name}
                        className="w-20 h-20 rounded-full object-cover border-2 border-white/20"
                      />
                      {creator.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Star size={12} className="text-white" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Creator Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="text-xl font-bold text-white">{creator.name}</h3>
                          {creator.verified && (
                            <Award size={16} className="text-blue-500" />
                          )}
                        </div>
                        <p className="text-white/70">@{creator.handle}</p>
                        <p className="text-sm text-white/60 mt-1">{creator.bio}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-primary-500">{formatEarnings(creator.totalEarnings)}</div>
                        <div className="text-sm text-white/60">Total Earnings</div>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          <Users size={14} className="text-blue-500" />
                          <span className="text-lg font-bold text-white">{formatNumber(creator.followers)}</span>
                        </div>
                        <div className="text-xs text-white/60">Followers</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          <Camera size={14} className="text-green-500" />
                          <span className="text-lg font-bold text-white">{formatNumber(creator.totalPhotos)}</span>
                        </div>
                        <div className="text-xs text-white/60">Photos</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center space-x-1 mb-1">
                          <Eye size={14} className="text-purple-500" />
                          <span className="text-lg font-bold text-white">{formatNumber(creator.monthlyViews)}</span>
                        </div>
                        <div className="text-xs text-white/60">Monthly Views</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="text-lg font-bold text-pink-500">{creator.category}</div>
                        <div className="text-xs text-white/60">Category</div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-white/60">
                        Joined {creator.joinedDate}
                      </div>
                      <div className="flex space-x-3">
                        <button className="btn-glass text-sm">Follow</button>
                        <button className="bg-gradient-duo-tone text-black px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                          View Gallery
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Become a Creator CTA */}
          <div className="glass rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-gradient-duo-tone rounded-full flex items-center justify-center mx-auto mb-4">
              <Camera size={32} className="text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Become a Creator</h2>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Join thousands of photographers earning $bPhotos tokens by sharing their amazing work. 
              Upload your photos, build your following, and monetize your creativity.
            </p>
            <div className="flex space-x-4 justify-center">
              <button 
                onClick={() => window.location.href = '/upload'}
                className="bg-gradient-duo-tone text-black px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Start Uploading
              </button>
              <button 
                onClick={() => window.location.href = '/token'}
                className="border border-white/20 text-white px-8 py-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                Learn About Tokens
              </button>
            </div>
          </div>
        </div>
      </div>

      <MinimalDock />
    </div>
  );
}