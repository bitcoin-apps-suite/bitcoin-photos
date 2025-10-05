'use client';

import React, { useState } from 'react';
import { Camera, TrendingUp, Coins, Settings, Wifi, Volume2, Battery, User } from 'lucide-react';

interface DockApp {
  id: string;
  name: string;
  icon: React.ElementType;
  color: string;
  url?: string;
  current?: boolean;
}

interface DockProps {
  className?: string;
}

export default function Dock({ className = '' }: DockProps) {
  const [hoveredApp, setHoveredApp] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every minute
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const apps: DockApp[] = [
    {
      id: 'photos',
      name: 'Photos',
      icon: Camera,
      color: 'text-blue-500',
      url: '/',
      current: true
    },
    {
      id: 'exchange',
      name: 'Exchange',
      icon: TrendingUp,
      color: 'text-green-500',
      url: '/exchange'
    },
    {
      id: 'token',
      name: '$bPhotos',
      icon: Coins,
      color: 'text-primary-500',
      url: '/token'
    },
    {
      id: 'settings',
      name: 'Settings',
      icon: Settings,
      color: 'text-gray-400',
      url: '/settings'
    }
  ];

  const systemStatus = {
    wifi: { active: true, strength: 3 },
    volume: { level: 75, muted: false },
    battery: { level: 85, charging: false }
  };

  const getRainbowColor = (index: number): string => {
    const colors = [
      'text-red-500',
      'text-orange-500', 
      'text-yellow-500',
      'text-green-500',
      'text-blue-500',
      'text-indigo-500',
      'text-purple-500'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 ${className}`}>
      <div className="flex items-center bg-black/75 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl px-4 py-3 space-x-4">
        
        {/* Apps Section */}
        <div className="flex items-center space-x-3">
          {apps.map((app, index) => {
            const IconComponent = app.icon;
            const isHovered = hoveredApp === app.id;
            const colorClass = app.color === 'rainbow' ? getRainbowColor(index) : app.color;

            return (
              <div key={app.id} className="relative">
                <button
                  onMouseEnter={() => setHoveredApp(app.id)}
                  onMouseLeave={() => setHoveredApp(null)}
                  className={`flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ease-out hover:bg-white/10 ${
                    isHovered 
                      ? 'transform -translate-y-2 scale-110 brightness-125' 
                      : 'transform translate-y-0 scale-100'
                  }`}
                >
                  <IconComponent 
                    size={24} 
                    className={`${colorClass} transition-all duration-300`}
                  />
                </button>

                {/* Active indicator */}
                {app.current && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-500 rounded-full pulse-animation" />
                )}

                {/* Tooltip */}
                {isHovered && (
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded border border-white/20 backdrop-blur-sm opacity-0 animate-tooltip-appear">
                    {app.name}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Separator */}
        <div className="w-px h-8 bg-white/20" />

        {/* System Status Section */}
        <div className="flex items-center space-x-3">
          
          {/* WiFi */}
          <div className="relative">
            <button
              onMouseEnter={() => setHoveredApp('wifi')}
              onMouseLeave={() => setHoveredApp(null)}
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <Wifi 
                size={16} 
                className={`${systemStatus.wifi.active ? 'text-green-400' : 'text-red-400'} transition-colors`}
              />
            </button>
            {hoveredApp === 'wifi' && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded border border-white/20 backdrop-blur-sm">
                WiFi: {systemStatus.wifi.active ? 'Connected' : 'Disconnected'}
              </div>
            )}
          </div>

          {/* Volume */}
          <div className="relative">
            <button
              onMouseEnter={() => setHoveredApp('volume')}
              onMouseLeave={() => setHoveredApp(null)}
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <Volume2 
                size={16} 
                className={`${systemStatus.volume.muted ? 'text-red-400' : 'text-white/70'} transition-colors`}
              />
            </button>
            {hoveredApp === 'volume' && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded border border-white/20 backdrop-blur-sm">
                Volume: {systemStatus.volume.muted ? 'Muted' : `${systemStatus.volume.level}%`}
              </div>
            )}
          </div>

          {/* Battery */}
          <div className="relative">
            <button
              onMouseEnter={() => setHoveredApp('battery')}
              onMouseLeave={() => setHoveredApp(null)}
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <Battery 
                size={16} 
                className={`${
                  systemStatus.battery.level > 20 ? 'text-green-400' : 'text-red-400'
                } transition-colors`}
              />
            </button>
            {hoveredApp === 'battery' && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded border border-white/20 backdrop-blur-sm">
                Battery: {systemStatus.battery.level}%{systemStatus.battery.charging ? ' (Charging)' : ''}
              </div>
            )}
          </div>

          {/* Clock */}
          <div className="relative">
            <button
              onMouseEnter={() => setHoveredApp('clock')}
              onMouseLeave={() => setHoveredApp(null)}
              className="flex items-center justify-center px-2 py-1 rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <span className="text-white/80 text-xs font-medium font-mono">
                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
            </button>
            {hoveredApp === 'clock' && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded border border-white/20 backdrop-blur-sm">
                {currentTime.toLocaleDateString()}
              </div>
            )}
          </div>

          {/* User */}
          <div className="relative">
            <button
              onMouseEnter={() => setHoveredApp('user')}
              onMouseLeave={() => setHoveredApp(null)}
              className="flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 hover:bg-white/10"
            >
              <User size={16} className="text-primary-500" />
            </button>
            {hoveredApp === 'user' && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 text-white text-xs rounded border border-white/20 backdrop-blur-sm">
                User Profile
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes tooltip-appear {
          from { opacity: 0; transform: translateX(-50%) translateY(4px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
        
        .animate-tooltip-appear {
          animation: tooltip-appear 0.2s ease-out 0.5s forwards;
        }
      `}</style>
    </div>
  );
}