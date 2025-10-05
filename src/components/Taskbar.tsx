'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface TaskbarProps {
  className?: string;
}

export default function Taskbar({ className = '' }: TaskbarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const closeMenu = () => {
    setActiveMenu(null);
  };

  return (
    <div className={`fixed top-10 left-0 w-full z-40 bg-black/90 backdrop-blur-md border-b border-white/10 ${className}`}>
      <div className="h-6 flex items-center justify-between px-3 text-xs text-white/90">
        {/* Left side - App menu */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <button
              onClick={() => handleMenuClick('app')}
              className="flex items-center space-x-1 hover:bg-white/10 px-2 py-1 rounded transition-colors"
            >
              <span className="text-primary-500 font-bold text-sm">₿</span>
              <span className="hidden sm:inline">Bitcoin Photos</span>
            </button>
            
            {activeMenu === 'app' && (
              <div className="absolute top-full left-0 mt-1 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl min-w-48 text-white">
                <div className="py-1">
                  <Link href="/" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    About Bitcoin Photos
                  </Link>
                  <div className="border-t border-white/10 my-1"></div>
                  <Link href="/exchange" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    Trading Exchange
                  </Link>
                  <Link href="/token" className="block px-4 py-2 hover:bg-white/10 transition-colors">
                    $bPhotos Token
                  </Link>
                  <div className="border-t border-white/10 my-1"></div>
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    Quit Bitcoin Photos
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => handleMenuClick('file')}
              className="hover:bg-white/10 px-2 py-1 rounded transition-colors"
            >
              File
            </button>
            
            {activeMenu === 'file' && (
              <div className="absolute top-full left-0 mt-1 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl min-w-48">
                <div className="py-1 text-white">
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    Upload Photos
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    Create Collection
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    Auto-NFT Selected
                  </button>
                  <div className="border-t border-white/10 my-1"></div>
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    Export Collection
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => handleMenuClick('edit')}
              className="hover:bg-white/10 px-2 py-1 rounded transition-colors"
            >
              Edit
            </button>
            
            {activeMenu === 'edit' && (
              <div className="absolute top-full left-0 mt-1 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl min-w-48">
                <div className="py-1 text-white">
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    Select All
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    Deselect All
                  </button>
                  <div className="border-t border-white/10 my-1"></div>
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    Delete Selected
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => handleMenuClick('view')}
              className="hover:bg-white/10 px-2 py-1 rounded transition-colors"
            >
              View
            </button>
            
            {activeMenu === 'view' && (
              <div className="absolute top-full left-0 mt-1 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl min-w-48">
                <div className="py-1 text-white">
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    Grid View
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    List View
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    Timeline View
                  </button>
                  <div className="border-t border-white/10 my-1"></div>
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    Show Info Panel
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              onClick={() => handleMenuClick('tools')}
              className="hover:bg-white/10 px-2 py-1 rounded transition-colors"
            >
              Tools
            </button>
            
            {activeMenu === 'tools' && (
              <div className="absolute top-full left-0 mt-1 bg-black/95 backdrop-blur-md border border-white/20 rounded-lg shadow-xl min-w-48">
                <div className="py-1 text-white">
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    Batch Auto-NFT
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    Share Settings
                  </button>
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    Pricing Tool
                  </button>
                  <div className="border-t border-white/10 my-1"></div>
                  <button className="block w-full text-left px-4 py-2 hover:bg-white/10 transition-colors">
                    Analytics Dashboard
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right side - Status and user info */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-2 text-xs">
            <span className="text-green-400">●</span>
            <span>Connected</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <span>$bPhotos:</span>
            <span className="text-primary-500 font-medium">1,234.56</span>
          </div>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden hover:bg-white/10 px-2 py-1 rounded transition-colors"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="p-4 space-y-2">
            <Link href="/" className="block py-2 text-white hover:text-primary-500 transition-colors">
              Home
            </Link>
            <Link href="/exchange" className="block py-2 text-white hover:text-primary-500 transition-colors">
              Exchange
            </Link>
            <Link href="/token" className="block py-2 text-white hover:text-primary-500 transition-colors">
              $bPhotos Token
            </Link>
            <div className="border-t border-white/10 my-2"></div>
            <div className="flex items-center justify-between py-2">
              <span className="text-white">Status:</span>
              <span className="text-green-400">Connected</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <span className="text-white">Balance:</span>
              <span className="text-primary-500">1,234.56 $bPhotos</span>
            </div>
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {activeMenu && (
        <div 
          className="fixed inset-0 -z-10" 
          onClick={closeMenu}
        />
      )}
    </div>
  );
}