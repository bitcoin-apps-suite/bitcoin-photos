'use client';

import React, { useState, useRef, useEffect } from 'react';

interface MenuItem {
  label?: string;
  action?: () => void;
  href?: string;
  divider?: boolean;
  shortcut?: string;
}

interface MenuData {
  label: string;
  items: MenuItem[];
}

interface TaskbarProps {
  className?: string;
}

const CleanTaskbar: React.FC<TaskbarProps> = ({ className = '' }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showBitcoinSuite, setShowBitcoinSuite] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menus: MenuData[] = [
    {
      label: 'Bitcoin Photos',
      items: [
        { label: 'Home', action: () => window.location.href = '/' },
        { divider: true },
        { label: 'About Bitcoin Photos', action: () => alert('Bitcoin Photos\n\nAuto-NFT your photos, encrypt them, and trade image shares on Bitcoin.\n\n© 2025 The Bitcoin Corporation LTD') },
        { label: 'Features', action: () => window.location.href = '/landing' },
        { divider: true },
        { label: 'Trading Exchange', action: () => window.location.href = '/exchange' },
        { label: '$bPhotos Token', action: () => window.location.href = '/token' },
        { divider: true },
        { label: 'Preferences...', shortcut: '⌘,', action: () => console.log('Preferences') },
        { divider: true },
        { label: 'Hide Bitcoin Photos', shortcut: '⌘H', action: () => console.log('Hide') },
        { label: 'Hide Others', shortcut: '⌥⌘H', action: () => console.log('Hide Others') },
        { divider: true },
        { label: 'Sign Out', shortcut: '⌘Q', action: () => console.log('Sign Out') }
      ]
    },
    {
      label: 'File',
      items: [
        { label: 'Upload Photos', shortcut: '⌘N', action: () => console.log('Upload Photos') },
        { label: 'Create Collection', shortcut: '⇧⌘N', action: () => console.log('Create Collection') },
        { label: 'Import from Drive', shortcut: '⌘O', action: () => console.log('Import') },
        { divider: true },
        { label: 'Auto-NFT Selected', shortcut: '⌘B', action: () => console.log('Auto-NFT') },
        { label: 'Set Photo Price', action: () => console.log('Set Price') },
        { divider: true },
        { label: 'Export Collection', action: () => console.log('Export Collection') },
        { label: 'Export as ZIP', action: () => console.log('Export ZIP') },
        { label: 'Share Collection', action: () => console.log('Share') }
      ]
    },
    {
      label: 'Edit',
      items: [
        { label: 'Select All', shortcut: '⌘A', action: () => console.log('Select All') },
        { label: 'Deselect All', shortcut: '⇧⌘A', action: () => console.log('Deselect All') },
        { divider: true },
        { label: 'Delete Selected', shortcut: '⌘⌫', action: () => console.log('Delete') },
        { label: 'Duplicate', shortcut: '⌘D', action: () => console.log('Duplicate') },
        { divider: true },
        { label: 'Find Photos...', shortcut: '⌘F', action: () => console.log('Find') }
      ]
    },
    {
      label: 'View',
      items: [
        { label: 'Grid View', shortcut: '⌘1', action: () => console.log('Grid View') },
        { label: 'List View', shortcut: '⌘2', action: () => console.log('List View') },
        { label: 'Timeline View', shortcut: '⌘3', action: () => console.log('Timeline View') },
        { divider: true },
        { label: 'Show Info Panel', shortcut: '⌘I', action: () => console.log('Info Panel') },
        { label: 'Show Trading Stats', action: () => console.log('Trading Stats') },
        { divider: true },
        { label: 'Enter Full Screen', shortcut: '⌃⌘F', action: () => document.documentElement.requestFullscreen() }
      ]
    },
    {
      label: 'Trading',
      items: [
        { label: 'View Exchange', action: () => window.location.href = '/exchange' },
        { label: 'My Portfolio', action: () => console.log('Portfolio') },
        { divider: true },
        { label: 'Auto-NFT Photos', action: () => console.log('Auto-NFT') },
        { label: 'Set Share Prices', action: () => console.log('Set Prices') },
        { label: 'Trading Analytics', action: () => console.log('Analytics') },
        { divider: true },
        { label: 'Withdraw Earnings', action: () => console.log('Withdraw') }
      ]
    },
    {
      label: 'Tools',
      items: [
        { label: 'Batch Auto-NFT', action: () => console.log('Batch Auto-NFT') },
        { label: 'Pricing Tool', action: () => console.log('Pricing Tool') },
        { label: 'Analytics Dashboard', action: () => console.log('Analytics') },
        { divider: true },
        { label: 'Share Settings', action: () => console.log('Share Settings') },
        { label: 'Encryption Settings', action: () => console.log('Encryption') }
      ]
    },
    {
      label: 'Window',
      items: [
        { label: 'Minimize', shortcut: '⌘M', action: () => console.log('Minimize') },
        { label: 'Zoom', action: () => console.log('Zoom') },
        { divider: true },
        { label: 'Bring All to Front', action: () => console.log('Bring to front') }
      ]
    },
    {
      label: 'Help',
      items: [
        { label: 'Bitcoin Photos Help', shortcut: '⌘?', action: () => alert('Bitcoin Photos\n\nAuto-NFT your photos and trade image shares on Bitcoin') },
        { label: 'Getting Started', action: () => window.location.href = '/landing' },
        { divider: true },
        { label: 'GitHub Repository', href: 'https://github.com/bitcoin-apps-suite/bitcoin-photos' },
        { label: 'Report an Issue', href: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/issues' },
        { divider: true },
        { label: 'Follow @bitcoin_photos', href: 'https://twitter.com/bitcoin_photos' }
      ]
    }
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
        setShowBitcoinSuite(false);
        setShowMobileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div 
      ref={menuRef}
      className={`flex items-center h-8 bg-black border-b border-zinc-800 text-xs font-medium text-white select-none fixed top-10 left-0 right-0 z-[10000] ${className}`}
    >
      {/* Bitcoin Logo */}
      <div className="relative">
        <button
          onClick={() => {
            setShowBitcoinSuite(!showBitcoinSuite);
            setActiveMenu(null);
          }}
          className="px-5 pl-[18px] text-lg font-bold text-primary-500 flex items-center h-8 bg-transparent hover:bg-primary-500/10 border-none cursor-pointer transition-colors duration-150"
          title="Bitcoin Suite Apps"
        >
          ₿
        </button>

        {/* Bitcoin Suite Dropdown */}
        {showBitcoinSuite && (
          <div className="absolute top-8 left-0 min-w-[280px] bg-zinc-900/95 backdrop-blur-md border border-white/15 rounded-lg shadow-2xl py-2 z-[1000]">
            <button
              onClick={() => {
                window.location.href = 'https://www.bitcoinapps.store/';
                setShowBitcoinSuite(false);
              }}
              className="w-full px-4 py-2 text-xs text-primary-500 bg-transparent border-none border-b border-white/10 mb-1 cursor-pointer text-left font-semibold transition-colors hover:bg-primary-500/10"
            >
              Bitcoin Apps Store
            </button>
            
            {/* Bitcoin Apps List */}
            <a href="https://bitcoin-wallet-sable.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-1.5 text-white no-underline text-xs transition-colors cursor-pointer hover:bg-white/10">
              <span className="text-blue-500 mr-3 text-base font-bold">₿</span>
              Bitcoin Wallet
            </a>
            <a href="https://bitcoin-email.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-1.5 text-white no-underline text-xs transition-colors cursor-pointer hover:bg-white/10">
              <span className="text-cyan-500 mr-3 text-base font-bold">₿</span>
              Bitcoin Email
            </a>
            <a href="https://bitcoin-music.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-1.5 text-white no-underline text-xs transition-colors cursor-pointer hover:bg-white/10">
              <span className="text-green-500 mr-3 text-base font-bold">₿</span>
              Bitcoin Music
            </a>
            <a href="https://bitcoin-writer.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-1.5 text-white no-underline text-xs transition-colors cursor-pointer hover:bg-white/10">
              <span className="text-yellow-500 mr-3 text-base font-bold">₿</span>
              Bitcoin Writer
            </a>
            <a href="https://bitcoin-code.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-1.5 text-white no-underline text-xs transition-colors cursor-pointer hover:bg-white/10">
              <span className="text-purple-500 mr-3 text-base font-bold">₿</span>
              Bitcoin Code
            </a>
            <a href="https://bitcoin-drive.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-1.5 text-white no-underline text-xs transition-colors cursor-pointer hover:bg-white/10">
              <span className="text-emerald-500 mr-3 text-base font-bold">₿</span>
              Bitcoin Drive
            </a>
            <a href="https://bitcoin-calendar.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-1.5 text-white no-underline text-xs transition-colors cursor-pointer hover:bg-white/10">
              <span className="text-pink-500 mr-3 text-base font-bold">₿</span>
              Bitcoin Calendar
            </a>
            <a href="https://bitcoin-exchange-iota.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-1.5 text-white no-underline text-xs transition-colors cursor-pointer hover:bg-white/10">
              <span className="text-red-500 mr-3 text-base font-bold">₿</span>
              Bitcoin Exchange
            </a>
            <a href="https://bitcoin-search.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-1.5 text-white no-underline text-xs transition-colors cursor-pointer hover:bg-white/10">
              <span className="text-indigo-500 mr-3 text-base font-bold">₿</span>
              Bitcoin Search
            </a>
            <a href="https://bitcoin-spreadsheet.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center px-4 py-1.5 text-white no-underline text-xs transition-colors cursor-pointer hover:bg-white/10">
              <span className="text-blue-600 mr-3 text-base font-bold">₿</span>
              Bitcoin Spreadsheet
            </a>
            <div className="flex items-center px-4 py-1.5 text-primary-500 text-xs font-semibold">
              <span className="text-primary-500 mr-3 text-base font-bold">₿</span>
              Bitcoin Photos <span className="text-xs ml-2 opacity-70">(Current)</span>
            </div>
          </div>
        )}
      </div>

      {/* Menu Items - Hidden on Mobile */}
      <div className={`${isMobile ? 'hidden' : 'flex'} items-center h-full`}>
        {menus.map((menu) => (
          <div key={menu.label} className="relative">
            <button
              onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
              onMouseEnter={() => activeMenu && setActiveMenu(menu.label)}
              className="px-3 h-6 bg-transparent hover:bg-white/10 border-none text-white text-xs cursor-pointer font-inherit transition-colors duration-150"
            >
              {menu.label}
            </button>

            {/* Dropdown Menu */}
            {activeMenu === menu.label && (
              <div className="absolute top-8 left-0 min-w-[200px] bg-zinc-900/95 backdrop-blur-md border border-white/15 rounded-lg shadow-2xl py-1 z-[9999] overflow-hidden">
                {menu.items.map((item, index) => (
                  item.divider ? (
                    <div 
                      key={index}
                      className="h-px bg-white/10 my-1"
                    />
                  ) : item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex justify-between items-center px-3 py-1 text-white no-underline text-xs cursor-pointer transition-colors duration-150 hover:bg-blue-500/30"
                    >
                      <span>{item.label}</span>
                      {item.shortcut && (
                        <span className="opacity-60 text-xs">{item.shortcut}</span>
                      )}
                    </a>
                  ) : (
                    <button
                      key={index}
                      onClick={() => {
                        item.action?.();
                        setActiveMenu(null);
                      }}
                      className="flex justify-between items-center w-full px-3 py-1 bg-transparent border-none text-white text-xs cursor-pointer font-inherit text-left transition-colors duration-150 hover:bg-blue-500/30"
                    >
                      <span>{item.label}</span>
                      {item.shortcut && (
                        <span className="opacity-60 text-xs">{item.shortcut}</span>
                      )}
                    </button>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile Menu Button */}
      {isMobile && (
        <div className="flex-1 flex justify-center items-center gap-2">
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="px-3 py-1.5 bg-transparent hover:bg-primary-500/10 border border-primary-500/30 rounded text-primary-500 text-xs font-semibold cursor-pointer flex items-center gap-1.5 transition-all duration-150"
          >
            <span className="text-base">☰</span>
            Menu
          </button>
        </div>
      )}
      
      {/* Right side - Status and Links */}
      <div className="ml-auto flex items-center gap-4 pr-4 text-xs text-white/80">
        <div className="flex items-center gap-3">
          <a href="/token" className="text-white/80 no-underline p-1 rounded transition-all duration-200 hover:bg-white/10 hover:text-white">
            <span className="text-base font-bold">₿</span>
          </a>
          <a href="https://github.com/bitcoin-apps-suite/bitcoin-photos" target="_blank" rel="noopener noreferrer" className="text-white/80 no-underline p-1 rounded transition-all duration-200 flex items-center hover:bg-white/10 hover:text-white">
            <svg height="16" width="16" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
          </a>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="text-green-400">●</span>
          <span>Connected</span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobile && showMobileMenu && (
        <div className="fixed top-8 left-0 right-0 bottom-0 bg-zinc-900/95 overflow-y-auto z-[9999]">
          <div className="p-4">
            {menus.map((menu) => (
              <div key={menu.label} className="mb-4">
                <button
                  onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
                  className="w-full p-2.5 bg-white/5 hover:bg-primary-500/10 border border-white/10 rounded text-white text-sm font-medium flex justify-between items-center"
                >
                  {menu.label}
                  <span className="text-xs opacity-50">{activeMenu === menu.label ? '−' : '+'}</span>
                </button>
                
                {activeMenu === menu.label && (
                  <div className="mt-2 pl-3">
                    {menu.items.map((item, index) => (
                      item.divider ? (
                        <div key={index} className="h-px bg-white/10 my-2" />
                      ) : (
                        <button
                          key={index}
                          onClick={() => {
                            if (item.href) {
                              window.open(item.href, '_blank');
                            } else {
                              item.action?.();
                            }
                            setShowMobileMenu(false);
                          }}
                          className="block w-full p-2 bg-transparent border-none text-white/80 text-xs text-left cursor-pointer"
                        >
                          {item.label}
                        </button>
                      )
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CleanTaskbar;