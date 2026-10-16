'use client'

import { useState, useEffect } from 'react'
import { useSidebarCollapsed } from '@/lib/clientStore'
import { usePathname } from 'next/navigation'
import { ChevronLeft, ChevronRight, FileCode, Users, FileText, Coins, Github, GitPullRequest, BookOpen, History, CheckCircle, Briefcase, Package, Upload, Activity, Camera, TrendingUp, Share2 } from 'lucide-react'
import './DevSidebar.css'

export default function DevSidebar() {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useSidebarCollapsed()
  const [issueCount, setIssueCount] = useState<number>(0)


  // Fetch GitHub issues count
  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/bitcoin-apps-suite/bitcoin-photos/issues?state=open')
        const data = await response.json()
        setIssueCount(Array.isArray(data) ? data.length : 0)
      } catch (error) {
        console.error('Error fetching issues:', error)
        setIssueCount(0)
      }
    }
    fetchIssues()
  }, [])

  const menuItems: Array<{
    path?: string
    icon?: React.ElementType
    label?: string
    badge?: string
    divider?: boolean
    section?: string
    external?: boolean
  }> = [
    // Token & Core at top
    { path: '/token', icon: Coins, label: '$bPhotos Token', badge: 'HOT' },
    { path: '/exchange', icon: TrendingUp, label: 'Share Exchange', badge: 'NEW' },
    { path: '/', icon: Camera, label: 'Photo Gallery', badge: 'BETA' },
    
    // Photo & NFT Features
    { divider: true },
    { section: 'PHOTO MARKETPLACE' },
    { path: '/upload', icon: Upload, label: 'Upload Photos' },
    { path: '/collections', icon: FileText, label: 'My Collections' },
    { path: '/nft-gallery', icon: Share2, label: 'NFT Gallery' },
    
    // System Operations
    { divider: true },
    { section: 'SYSTEM' },
    { path: '/analytics', icon: Activity, label: 'Analytics' },
    { path: '/creators', icon: Users, label: 'Top Creators' },
    { path: '/docs', icon: BookOpen, label: 'Documentation' },
    
    // Development
    { divider: true },
    { section: 'DEVELOPMENT' },
    { path: '/contracts', icon: Briefcase, label: 'Dev Contracts', badge: issueCount > 0 ? String(issueCount) : '0' },
    { path: '/api', icon: Package, label: 'API Reference' },
    { path: 'https://github.com/bitcoin-apps-suite/bitcoin-photos', icon: Github, label: 'GitHub Repository', external: true },
    { path: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/issues', icon: FileCode, label: 'Issues', badge: issueCount > 0 ? String(issueCount) : '0', external: true },
    { path: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/pulls', icon: GitPullRequest, label: 'Pull Requests', external: true },
    
    // System Status
    { divider: true },
    { path: '/changelog', icon: History, label: 'Changelog' },
    { path: '/status', icon: CheckCircle, label: 'System Status', badge: 'OK' }
  ]

  const stats = {
    // No network-wide stats are collected yet; show zeros rather than made-up numbers.
    totalPhotos: '0',
    autoNFTs: '0',
    activeTraders: '0',
    tradingVolume: '$0',
    collections: '0'
  }

  return (
    <div className={`dev-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="dev-sidebar-header">
        {!isCollapsed && (
          <div className="dev-sidebar-title">
            <Camera className="dev-sidebar-logo" />
            <span>Photos Hub</span>
          </div>
        )}
        <button 
          className="dev-sidebar-toggle"
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>

      <nav className="dev-sidebar-nav">
        {menuItems.map((item, index) => {
          if (item.divider) {
            return <div key={index} className="dev-sidebar-divider" />
          }

          if (item.section) {
            return !isCollapsed ? (
              <div key={index} className="dev-sidebar-section">
                {item.section}
              </div>
            ) : null
          }

          const Icon = item.icon
          if (!Icon) return null
          const isActive = pathname === item.path

          if (item.external) {
            return (
              <a
                key={`${item.path}-${index}`}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`dev-sidebar-item ${isActive ? 'active' : ''}`}
                title={isCollapsed ? item.label : undefined}
              >
                <Icon size={20} />
                {!isCollapsed && (
                  <>
                    <span className="dev-sidebar-label">{item.label}</span>
                    {item.badge && <span className="dev-sidebar-badge">{item.badge}</span>}
                  </>
                )}
              </a>
            )
          }

          return (
            <a
              key={`${item.path}-${index}`}
              href={item.path || '/'}
              className={`dev-sidebar-item ${isActive ? 'active' : ''}`}
              title={isCollapsed ? item.label : undefined}
            >
              <Icon size={20} />
              {!isCollapsed && (
                <>
                  <span className="dev-sidebar-label">{item.label}</span>
                  {item.badge && <span className="dev-sidebar-badge">{item.badge}</span>}
                </>
              )}
            </a>
          )
        })}
      </nav>

      {/* Stats section */}
      {!isCollapsed && (
        <div className="dev-sidebar-stats">
          <h4>bPhotos Stats</h4>
          <div className="dev-stat">
            <span className="dev-stat-label">Total Photos</span>
            <span className="dev-stat-value">{stats.totalPhotos}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Auto-NFTs</span>
            <span className="dev-stat-value">{stats.autoNFTs}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Active Traders</span>
            <span className="dev-stat-value">{stats.activeTraders}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Trading Volume</span>
            <span className="dev-stat-value">{stats.tradingVolume}</span>
          </div>
          <div className="dev-stat">
            <span className="dev-stat-label">Collections</span>
            <span className="dev-stat-value">{stats.collections}</span>
          </div>
        </div>
      )}

    </div>
  )
}