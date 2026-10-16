'use client';

import React, { useState } from 'react';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import CleanTaskbar from '@/components/CleanTaskbar';
import DevSidebar from '@/components/DevSidebar';
import MinimalDock from '@/components/MinimalDock';
import { Folder, Plus, Image, Eye, Heart, TrendingUp, Users, Lock, Unlock, Calendar, Share2 } from 'lucide-react';

interface Collection {
  id: string;
  name: string;
  description: string;
  photoCount: number;
  views: number;
  likes: number;
  isPublic: boolean;
  created: string;
  coverPhoto: string;
  totalValue: string;
  sharesSold: number;
  creator: string;
}

export default function CollectionsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<'all' | 'public' | 'private'>('all');

  const collections: Collection[] = [];

  const filteredCollections = collections.filter(collection => {
    if (filter === 'public') return collection.isPublic;
    if (filter === 'private') return !collection.isPublic;
    return true;
  });

  const totalPhotos = collections.reduce((sum, col) => sum + col.photoCount, 0);
  const totalValue = collections.reduce((sum, col) => sum + parseFloat(col.totalValue.replace('$', '').replace(',', '')), 0);

  return (
    <div className="min-h-screen bg-black text-white">
      <ProofOfConceptBar />
      <CleanTaskbar />
      <DevSidebar />

      <div className="pt-16 pl-64 pr-6 pb-20">
        {/* Header */}
        <div className="sticky top-16 z-20 bg-black/90 backdrop-blur-md border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gradient-duo mb-2">My Collections</h1>
              <p className="text-white/70">Organize and manage your photo collections • Create tradeable portfolios</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-duo-tone text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center space-x-2">
                <Plus size={20} />
                <span>New Collection</span>
              </button>
            </div>
          </div>

          {/* Stats and Controls */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex items-center space-x-6">
              <div className="text-sm">
                <span className="text-white/60">Total Collections:</span>
                <span className="text-white font-semibold ml-2">{collections.length}</span>
              </div>
              <div className="text-sm">
                <span className="text-white/60">Total Photos:</span>
                <span className="text-white font-semibold ml-2">{totalPhotos}</span>
              </div>
              <div className="text-sm">
                <span className="text-white/60">Total Value:</span>
                <span className="text-primary-500 font-semibold ml-2">${totalValue.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Filter */}
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as typeof filter)}
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-primary-500"
              >
                <option value="all" className="bg-gray-900">All Collections</option>
                <option value="public" className="bg-gray-900">Public Only</option>
                <option value="private" className="bg-gray-900">Private Only</option>
              </select>

              {/* View Mode */}
              <div className="flex items-center bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-primary-500 text-white' : 'text-white/60 hover:text-white'}`}
                >
                  <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
                    <div className="bg-current"></div>
                    <div className="bg-current"></div>
                    <div className="bg-current"></div>
                    <div className="bg-current"></div>
                  </div>
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-primary-500 text-white' : 'text-white/60 hover:text-white'}`}
                >
                  <div className="w-4 h-4 flex flex-col gap-0.5">
                    <div className="bg-current h-1"></div>
                    <div className="bg-current h-1"></div>
                    <div className="bg-current h-1"></div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Collections Grid/List */}
        <div className="p-6">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCollections.length === 0 && <p className="col-span-full py-12 text-center text-white/50">No collections yet. Collections appear here once photos are saved on-chain.</p>}
              {filteredCollections.map((collection) => (
                <div key={collection.id} className="glass rounded-lg overflow-hidden hover:bg-white/5 transition-all group cursor-pointer">
                  <div className="relative aspect-video">
                    <img
                      src={collection.coverPhoto}
                      alt={collection.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop';
                      }}
                    />
                    <div className="absolute top-3 right-3">
                      {collection.isPublic ? (
                        <div className="bg-green-500/20 border border-green-500/30 rounded-full p-2">
                          <Unlock size={16} className="text-green-400" />
                        </div>
                      ) : (
                        <div className="bg-red-500/20 border border-red-500/30 rounded-full p-2">
                          <Lock size={16} className="text-red-400" />
                        </div>
                      )}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm rounded-lg px-2 py-1">
                      <div className="flex items-center space-x-1 text-xs">
                        <Image size={12} />
                        <span>{collection.photoCount}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2 group-hover:text-primary-500 transition-colors">
                      {collection.name}
                    </h3>
                    <p className="text-white/60 text-sm mb-3 line-clamp-2">
                      {collection.description}
                    </p>

                    <div className="flex items-center justify-between text-sm mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1 text-white/60">
                          <Eye size={14} />
                          <span>{collection.views}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-white/60">
                          <Heart size={14} />
                          <span>{collection.likes}</span>
                        </div>
                      </div>
                      <div className="text-primary-500 font-semibold">
                        {collection.totalValue}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-white/50">
                      <div className="flex items-center space-x-1">
                        <Calendar size={12} />
                        <span>{new Date(collection.created).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Share2 size={12} />
                        <span>{collection.sharesSold} shares sold</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-3">
              {filteredCollections.map((collection) => (
                <div key={collection.id} className="glass rounded-lg p-4 hover:bg-white/5 transition-all cursor-pointer">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={collection.coverPhoto}
                        alt={collection.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop';
                        }}
                      />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-lg">{collection.name}</h3>
                        {collection.isPublic ? (
                          <Unlock size={16} className="text-green-400" />
                        ) : (
                          <Lock size={16} className="text-red-400" />
                        )}
                      </div>
                      <p className="text-white/60 text-sm mb-2">{collection.description}</p>
                      <div className="flex items-center space-x-6 text-sm text-white/50">
                        <div className="flex items-center space-x-1">
                          <Image size={14} />
                          <span>{collection.photoCount} photos</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Eye size={14} />
                          <span>{collection.views} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart size={14} />
                          <span>{collection.likes} likes</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{new Date(collection.created).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-lg font-semibold text-primary-500 mb-1">
                        {collection.totalValue}
                      </div>
                      <div className="text-sm text-white/60">
                        {collection.sharesSold} shares sold
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <MinimalDock />
    </div>
  );
}