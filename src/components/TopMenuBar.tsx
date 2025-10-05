'use client'

import { useState, useRef, useEffect } from 'react'
import { Github, BookOpen, FileText, ExternalLink } from 'lucide-react'
import './TopMenuBar.css'

interface MenuItem {
  label?: string
  action?: () => void
  href?: string
  divider?: boolean
  shortcut?: string
  icon?: string
  external?: boolean
}

interface Menu {
  label: string
  items: MenuItem[]
}

interface TopMenuBarProps {
  onOpenApp?: (appName: string) => void
}

export default function TopMenuBar({ onOpenApp }: TopMenuBarProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [showBAppsMenu, setShowBAppsMenu] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const bitcoinApps = [
    { name: 'Bitcoin Auth', color: '#ef4444', url: '#' },
    { name: 'Bitcoin Calendar', color: '#d946ef', url: 'https://bitcoin-calendar.vercel.app' },
    { name: 'Bitcoin Chat', color: '#ff6500', url: '#' },
    { name: 'Bitcoin Domains', color: '#eab308', url: '#' },
    { name: 'Bitcoin Draw', color: '#10b981', url: '#' },
    { name: 'Bitcoin Drive', color: '#22c55e', url: 'https://bitcoin-drive.vercel.app' },
    { name: 'Bitcoin Email', color: '#06b6d4', url: 'https://bitcoin-email.vercel.app' },
    { name: 'Bitcoin Exchange', color: '#3b82f6', url: 'https://bitcoin-exchange.vercel.app' },
    { name: 'Bitcoin Jobs', color: '#6b7280', url: '#' },
    { name: 'Bitcoin Music', color: '#8b5cf6', url: 'https://bitcoin-music.vercel.app' },
    { name: 'Bitcoin Paint', color: '#a855f7', url: '#' },
    { name: 'Bitcoin Photos', color: '#ec4899', url: '/', current: true },
    { name: 'Bitcoin Registry', color: '#f43f5e', url: '#' },
    { name: 'Bitcoin Search', color: '#6b7280', url: 'https://bitcoin-search.vercel.app' },
    { name: 'Bitcoin Shares', color: '#f43f5e', url: 'https://bitcoin-shares.vercel.app' },
    { name: 'Bitcoin Spreadsheets', color: '#3b82f6', url: 'https://bitcoin-spreadsheet.vercel.app' },
    { name: 'Bitcoin Video', color: '#65a30d', url: 'https://bitcoin-video-nine.vercel.app' },
    { name: 'Bitcoin Wallet', color: '#f59e0b', url: 'https://bitcoin-wallet-sable.vercel.app' },
    { name: 'Bitcoin Writer', color: '#ff9500', url: 'https://bitcoin-writer.vercel.app' }
  ]

  const menus: Menu[] = [
    {
      label: 'Bitcoin Photos',
      items: [
        { 
          label: 'About Bitcoin Photos', 
          action: () => alert('Bitcoin Photos v1.0\n\nPhoto management and Auto-NFT platform on Bitcoin\n\n© 2025 The Bitcoin Corporation LTD') 
        },
        { divider: true },
        { 
          label: '$bPhotos Token', 
          action: () => window.location.href = '/token'
        },
        { 
          label: 'Trading Exchange', 
          action: () => window.location.href = '/exchange'
        },
        { divider: true },
        { 
          label: 'Preferences', 
          shortcut: '⌘,',
          action: () => console.log('Settings')
        },
        { divider: true },
        { 
          label: 'Lock Screen', 
          shortcut: '⌘L',
          action: () => console.log('Lock Screen')
        },
        { 
          label: 'Log Out', 
          action: () => console.log('Log Out')
        },
        { 
          label: 'Quit Bitcoin Photos', 
          action: () => console.log('Quit')
        },
      ]
    },
    {
      label: 'File',
      items: [
        { 
          label: 'Upload Photos', 
          shortcut: '⌘N',
          action: () => console.log('Upload Photos')
        },
        { 
          label: 'Create Collection', 
          shortcut: '⇧⌘N',
          action: () => console.log('Create Collection')
        },
        { divider: true },
        { 
          label: 'Import from Drive', 
          shortcut: '⌘O',
          action: () => console.log('Import')
        },
        { 
          label: 'Export Collection', 
          shortcut: '⌘S',
          action: () => console.log('Export')
        },
        { divider: true },
        { 
          label: 'Auto-NFT Selected', 
          shortcut: '⌘R',
          action: () => console.log('Auto-NFT')
        }
      ]
    },
    {
      label: 'Edit',
      items: [
        { 
          label: 'Undo', 
          shortcut: '⌘Z',
          action: () => document.execCommand('undo')
        },
        { 
          label: 'Redo', 
          shortcut: '⇧⌘Z',
          action: () => document.execCommand('redo')
        },
        { divider: true },
        { 
          label: 'Select All Photos', 
          shortcut: '⌘A',
          action: () => console.log('Select All')
        },
        { 
          label: 'Deselect All', 
          shortcut: '⌘D',
          action: () => console.log('Deselect All')
        },
        { divider: true },
        { 
          label: 'Delete Selected', 
          shortcut: '⌫',
          action: () => console.log('Delete')
        },
        { 
          label: 'Find Photos...', 
          shortcut: '⌘F',
          action: () => console.log('Find')
        }
      ]
    },
    {
      label: 'View',
      items: [
        { 
          label: 'Grid View', 
          shortcut: '⌘1',
          action: () => console.log('Grid View')
        },
        { 
          label: 'List View', 
          shortcut: '⌘2',
          action: () => console.log('List View')
        },
        { 
          label: 'Timeline View', 
          shortcut: '⌘3',
          action: () => console.log('Timeline View')
        },
        { divider: true },
        { 
          label: 'Show Info Panel', 
          shortcut: '⌘I',
          action: () => console.log('Show Info')
        },
        { 
          label: 'Show Trading Stats', 
          shortcut: '⌘T',
          action: () => console.log('Show Trading')
        },
        { divider: true },
        { 
          label: 'Enter Full Screen', 
          shortcut: '⌃⌘F',
          action: () => document.documentElement.requestFullscreen()
        }
      ]
    },
    {
      label: 'Tools',
      items: [
        { 
          label: 'Batch Auto-NFT', 
          action: () => console.log('Batch Auto-NFT')
        },
        { 
          label: 'Pricing Tool', 
          action: () => console.log('Pricing Tool')
        },
        { 
          label: 'Share Settings', 
          action: () => console.log('Share Settings')
        },
        { divider: true },
        { 
          label: 'Analytics Dashboard', 
          action: () => window.location.href = '/analytics'
        },
        { 
          label: 'Trading History', 
          action: () => window.location.href = '/history'
        }
      ]
    },
    {
      label: 'Help',
      items: [
        { 
          label: 'Bitcoin Photos Help', 
          shortcut: '⌘?',
          action: () => alert('Bitcoin Photos Help\n\nFor documentation and support, visit our help center.')
        },
        { divider: true },
        { 
          label: 'Documentation', 
          href: '/docs',
          external: false
        },
        { 
          label: 'GitHub Repository', 
          href: 'https://github.com/bitcoin-apps-suite/bitcoin-photos',
          external: true
        },
        { divider: true },
        { 
          label: 'Report an Issue', 
          href: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/issues',
          external: true
        }
      ]
    }
  ]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null)
        setShowBAppsMenu(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveMenu(null)
        setShowBAppsMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <div ref={menuRef} className="bitcoin-os-taskbar">
      {/* Bitcoin Logo with BApps Menu */}
      <div style={{ position: 'relative' }}>
        <button 
          className={`taskbar-logo ${showBAppsMenu ? 'menu-open' : ''}`}
          onClick={() => {
            setShowBAppsMenu(!showBAppsMenu)
            setActiveMenu(null)
          }}
          onDoubleClick={() => window.location.href = '/'}
          title="Click for apps • Double-click to go home"
          style={{ 
            background: showBAppsMenu ? 'rgba(255, 255, 255, 0.05)' : 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '0 12px',
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            transition: 'background 0.15s ease'
          }}
        >
          <span className="bitcoin-symbol">₿</span>
        </button>
        
        {/* BApps Dropdown */}
        {showBAppsMenu && (
          <div style={{
            position: 'absolute',
            top: '28px',
            left: 0,
            minWidth: '220px',
            background: '#1a1a1a',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            borderRadius: '8px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.8)',
            padding: '8px 0',
            zIndex: 1000
          }}>
            <div style={{
              padding: '8px 16px',
              fontSize: '12px',
              color: '#d946ef',
              fontWeight: '600',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              marginBottom: '4px'
            }}>
              Bitcoin Apps
            </div>
            
            {bitcoinApps.map((app) => (
              <a
                key={app.name}
                href={app.url}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '6px 16px',
                  color: app.current ? '#ec4899' : '#ffffff',
                  background: app.current ? 'rgba(236, 72, 153, 0.1)' : 'transparent',
                  textDecoration: 'none',
                  fontSize: '13px',
                  fontWeight: app.current ? '500' : '400',
                  transition: 'background 0.15s ease',
                  cursor: 'pointer'
                }}
                onClick={(e) => {
                  if (app.url === '#') {
                    e.preventDefault()
                  } else if (app.current) {
                    e.preventDefault()
                  } else {
                    e.preventDefault()
                    window.location.href = app.url
                  }
                  setShowBAppsMenu(false)
                }}
                onMouseEnter={(e) => !app.current && (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
                onMouseLeave={(e) => !app.current && (e.currentTarget.style.background = 'transparent')}
              >
                <span 
                  style={{ 
                    color: app.color,
                    marginRight: '12px',
                    fontSize: '16px',
                    fontWeight: 'bold'
                  }}
                >
                  ₿
                </span>
                <span>
                  {app.name}
                </span>
                {app.current && (
                  <span style={{ marginLeft: 'auto', fontSize: '11px', opacity: 0.7 }}>
                    •
                  </span>
                )}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Menu Items */}
      <div className="taskbar-menus">
        {menus.map((menu) => (
          <div key={menu.label} className="menu-container">
            <button
              className={`menu-button ${activeMenu === menu.label ? 'active' : ''}`}
              onClick={() => setActiveMenu(activeMenu === menu.label ? null : menu.label)}
              onMouseEnter={() => activeMenu && setActiveMenu(menu.label)}
            >
              {menu.label}
            </button>

            {/* Dropdown Menu */}
            {activeMenu === menu.label && (
              <div className="dropdown-menu">
                {menu.items.map((item, index) => (
                  item.divider ? (
                    <div key={index} className="menu-divider" />
                  ) : item.href ? (
                    <a
                      key={index}
                      href={item.href}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="menu-item"
                      onClick={() => setActiveMenu(null)}
                    >
                      <span className="menu-item-content">
                        {item.icon && <span className="menu-icon">{item.icon}</span>}
                        <span className="menu-label">{item.label}</span>
                      </span>
                      {item.shortcut && (
                        <span className="menu-shortcut">{item.shortcut}</span>
                      )}
                    </a>
                  ) : (
                    <button
                      key={index}
                      className="menu-item"
                      onClick={() => {
                        item.action?.()
                        setActiveMenu(null)
                      }}
                    >
                      <span className="menu-item-content">
                        {item.icon && <span className="menu-icon">{item.icon}</span>}
                        <span className="menu-label">{item.label}</span>
                      </span>
                      {item.shortcut && (
                        <span className="menu-shortcut">{item.shortcut}</span>
                      )}
                    </button>
                  )
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Right side - Status */}
      <div className="taskbar-status">
        <a 
          href="https://github.com/bitcoin-apps-suite/bitcoin-photos" 
          target="_blank" 
          rel="noopener noreferrer"
          className="taskbar-link"
          title="GitHub"
        >
          <Github className="taskbar-link-icon" />
        </a>
        <a 
          href="/docs" 
          className="taskbar-link"
          title="Documentation"
        >
          <BookOpen className="taskbar-link-icon" />
        </a>
      </div>
    </div>
  )
}