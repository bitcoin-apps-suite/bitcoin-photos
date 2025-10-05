'use client';

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Users, Code, Zap, Settings, Camera, TrendingUp, Coins } from 'lucide-react';

interface DevSidebarProps {
  className?: string;
}

export default function DevSidebar({ className = '' }: DevSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Load collapsed state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('devSidebarCollapsed');
    if (saved !== null) {
      setIsCollapsed(JSON.parse(saved));
    }
  }, []);

  // Save collapsed state to localStorage
  useEffect(() => {
    localStorage.setItem('devSidebarCollapsed', JSON.stringify(isCollapsed));
  }, [isCollapsed]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const sections = [
    {
      id: 'photos',
      title: 'Photo Creators',
      icon: Camera,
      items: [
        { name: 'Active Photographers', count: '1,247', color: 'text-blue-400' },
        { name: 'Collections Created', count: '3,891', color: 'text-green-400' },
        { name: 'Auto-NFTs Minted', count: '12,456', color: 'text-purple-400' },
      ]
    },
    {
      id: 'traders',
      title: 'Share Traders',
      icon: TrendingUp,
      items: [
        { name: 'Active Traders', count: '892', color: 'text-orange-400' },
        { name: 'Daily Volume', count: '$45.2K', color: 'text-green-400' },
        { name: 'Top Collections', count: '156', color: 'text-yellow-400' },
      ]
    },
    {
      id: 'developers',
      title: 'Developers',
      icon: Code,
      items: [
        { name: 'GitHub Issues', count: '23', color: 'text-red-400' },
        { name: 'Active Contributors', count: '8', color: 'text-blue-400' },
        { name: 'Code Reviews', count: '12', color: 'text-green-400' },
      ]
    },
    {
      id: 'system',
      title: 'System & Network',
      icon: Zap,
      items: [
        { name: 'Network Health', count: '99.8%', color: 'text-green-400' },
        { name: 'Storage Nodes', count: '156', color: 'text-blue-400' },
        { name: 'Encrypted Photos', count: '45.7K', color: 'text-purple-400' },
      ]
    }
  ];

  const tokenStats = {
    price: '$0.0847',
    change: '+12.4%',
    holders: '2,341',
    volume24h: '$126.8K'
  };

  return (
    <div className={`fixed left-0 top-16 h-[calc(100vh-4rem)] bg-black/95 backdrop-blur-md border-r border-white/10 transition-all duration-300 z-30 ${
      isCollapsed ? 'w-15' : 'w-64'
    } ${className}`}>
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        {!isCollapsed && (
          <h2 className="text-white font-semibold text-sm">Development Hub</h2>
        )}
        <button
          onClick={toggleCollapse}
          className="text-white/60 hover:text-white transition-colors p-1 rounded"
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* Sections */}
      <div className="flex-1 overflow-y-auto">
        {sections.map((section) => {
          const IconComponent = section.icon;
          const isActive = activeSection === section.id;

          return (
            <div key={section.id} className="border-b border-white/5">
              <button
                onClick={() => setActiveSection(isActive ? null : section.id)}
                className={`w-full flex items-center p-3 text-left hover:bg-white/5 transition-colors ${
                  isActive ? 'bg-white/10 text-primary-500' : 'text-white/80'
                }`}
              >
                <IconComponent size={16} className="flex-shrink-0" />
                {!isCollapsed && (
                  <>
                    <span className="ml-3 text-sm font-medium">{section.title}</span>
                    <span className="ml-auto text-xs text-white/60">
                      {isActive ? '−' : '+'}
                    </span>
                  </>
                )}
              </button>

              {!isCollapsed && isActive && (
                <div className="bg-white/5 space-y-2 p-3">
                  {section.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-xs">
                      <span className="text-white/80">{item.name}</span>
                      <span className={`font-medium ${item.color}`}>{item.count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Token Stats */}
      {!isCollapsed && (
        <div className="p-4 border-t border-white/10 bg-gradient-to-r from-primary-500/10 to-secondary-500/10">
          <div className="flex items-center space-x-2 mb-2">
            <Coins size={16} className="text-primary-500" />
            <span className="text-white font-medium text-sm">$bPhotos Token</span>
          </div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-white/60">Price</span>
              <span className="text-white font-medium">{tokenStats.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">24h Change</span>
              <span className="text-green-400 font-medium">{tokenStats.change}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Holders</span>
              <span className="text-white font-medium">{tokenStats.holders}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/60">Volume</span>
              <span className="text-white font-medium">{tokenStats.volume24h}</span>
            </div>
          </div>
        </div>
      )}

      {/* Call-to-Action */}
      {!isCollapsed && (
        <div className="p-4 border-t border-white/10">
          <button className="w-full bg-gradient-duo-tone text-white py-2 px-3 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
            Launch Your Collection
          </button>
        </div>
      )}
    </div>
  );
}