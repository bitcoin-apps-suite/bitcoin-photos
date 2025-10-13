'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import CleanTaskbar from '@/components/CleanTaskbar';
import DevSidebar from '@/components/DevSidebar';
import MinimalDock from '@/components/MinimalDock';
import TickerSidebar from '@/components/TickerSidebar';
import { 
  Server, Database, Zap, Shield, Clock, CheckCircle, 
  XCircle, AlertCircle, Code, FileText, ExternalLink,
  Activity, Users, Camera, TrendingUp, Coins
} from 'lucide-react';

interface APIEndpoint {
  method: string;
  path: string;
  description: string;
  status: 'operational' | 'degraded' | 'down';
  responseTime: number;
  category: string;
}

interface SystemStatus {
  overall: 'operational' | 'degraded' | 'down';
  uptime: number;
  version: string;
  lastUpdate: string;
}

export default function APIPage() {
  const [systemStatus, setSystemStatus] = useState<SystemStatus>({
    overall: 'operational',
    uptime: 99.98,
    version: '1.2.3',
    lastUpdate: '2025-01-15T10:30:00Z'
  });

  const [endpoints, setEndpoints] = useState<APIEndpoint[]>([
    // Authentication
    { method: 'POST', path: '/api/auth/login', description: 'Authenticate user with wallet signature', status: 'operational', responseTime: 125, category: 'Authentication' },
    { method: 'POST', path: '/api/auth/logout', description: 'Invalidate user session', status: 'operational', responseTime: 89, category: 'Authentication' },
    { method: 'GET', path: '/api/auth/profile', description: 'Get current user profile', status: 'operational', responseTime: 156, category: 'Authentication' },
    
    // Photos & NFTs
    { method: 'POST', path: '/api/photos/upload', description: 'Upload and process photos for NFT creation', status: 'operational', responseTime: 2340, category: 'Photos' },
    { method: 'GET', path: '/api/photos/{id}', description: 'Get photo metadata and details', status: 'operational', responseTime: 178, category: 'Photos' },
    { method: 'GET', path: '/api/photos/user/{address}', description: 'Get all photos by user', status: 'operational', responseTime: 234, category: 'Photos' },
    { method: 'DELETE', path: '/api/photos/{id}', description: 'Remove photo (if not yet minted)', status: 'operational', responseTime: 167, category: 'Photos' },
    
    // NFTs
    { method: 'GET', path: '/api/nft/{id}', description: 'Get NFT details and metadata', status: 'operational', responseTime: 145, category: 'NFTs' },
    { method: 'GET', path: '/api/nft/{id}/shares', description: 'Get share distribution for NFT', status: 'operational', responseTime: 189, category: 'NFTs' },
    { method: 'POST', path: '/api/nft/{id}/mint', description: 'Trigger NFT minting process', status: 'operational', responseTime: 3450, category: 'NFTs' },
    
    // Trading
    { method: 'GET', path: '/api/trading/orderbook/{nft_id}', description: 'Get current order book for NFT shares', status: 'operational', responseTime: 123, category: 'Trading' },
    { method: 'POST', path: '/api/trading/order', description: 'Place buy/sell order', status: 'operational', responseTime: 234, category: 'Trading' },
    { method: 'GET', path: '/api/trading/orders/user', description: 'Get user trading history', status: 'operational', responseTime: 198, category: 'Trading' },
    { method: 'DELETE', path: '/api/trading/order/{id}', description: 'Cancel pending order', status: 'operational', responseTime: 145, category: 'Trading' },
    
    // Market Data
    { method: 'GET', path: '/api/market/prices', description: 'Get current market prices', status: 'operational', responseTime: 67, category: 'Market' },
    { method: 'GET', path: '/api/market/trending', description: 'Get trending photos and collections', status: 'operational', responseTime: 156, category: 'Market' },
    { method: 'GET', path: '/api/market/stats', description: 'Get platform statistics', status: 'operational', responseTime: 89, category: 'Market' },
    { method: 'GET', path: '/api/market/volume', description: 'Get trading volume data', status: 'operational', responseTime: 134, category: 'Market' },
    
    // Tokens
    { method: 'GET', path: '/api/tokens/balance/{address}', description: 'Get $bPhotos token balance', status: 'operational', responseTime: 167, category: 'Tokens' },
    { method: 'POST', path: '/api/tokens/transfer', description: 'Transfer $bPhotos tokens', status: 'operational', responseTime: 1890, category: 'Tokens' },
    { method: 'GET', path: '/api/tokens/rewards', description: 'Get available rewards', status: 'operational', responseTime: 145, category: 'Tokens' },
    { method: 'POST', path: '/api/tokens/claim', description: 'Claim pending rewards', status: 'operational', responseTime: 2340, category: 'Tokens' },
    
    // Collections
    { method: 'GET', path: '/api/collections', description: 'Get all public collections', status: 'operational', responseTime: 234, category: 'Collections' },
    { method: 'POST', path: '/api/collections', description: 'Create new collection', status: 'operational', responseTime: 345, category: 'Collections' },
    { method: 'GET', path: '/api/collections/{id}', description: 'Get collection details', status: 'operational', responseTime: 156, category: 'Collections' },
    { method: 'PUT', path: '/api/collections/{id}', description: 'Update collection metadata', status: 'operational', responseTime: 234, category: 'Collections' },
    
    // Analytics
    { method: 'GET', path: '/api/analytics/user/{address}', description: 'Get user analytics and performance', status: 'degraded', responseTime: 2340, category: 'Analytics' },
    { method: 'GET', path: '/api/analytics/platform', description: 'Get platform-wide analytics', status: 'operational', responseTime: 456, category: 'Analytics' },
    { method: 'GET', path: '/api/analytics/creator/{address}', description: 'Get creator-specific metrics', status: 'operational', responseTime: 345, category: 'Analytics' }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400';
      case 'degraded': return 'text-yellow-400';
      case 'down': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircle size={16} className="text-green-400" />;
      case 'degraded': return <AlertCircle size={16} className="text-yellow-400" />;
      case 'down': return <XCircle size={16} className="text-red-400" />;
      default: return <AlertCircle size={16} className="text-gray-400" />;
    }
  };

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'POST': return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'PUT': return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'DELETE': return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const categorizeEndpoints = () => {
    const categories: { [key: string]: APIEndpoint[] } = {};
    endpoints.forEach(endpoint => {
      if (!categories[endpoint.category]) {
        categories[endpoint.category] = [];
      }
      categories[endpoint.category].push(endpoint);
    });
    return categories;
  };

  const categories = categorizeEndpoints();

  const stats = {
    totalEndpoints: endpoints.length,
    operationalEndpoints: endpoints.filter(e => e.status === 'operational').length,
    averageResponseTime: Math.round(endpoints.reduce((sum, e) => sum + e.responseTime, 0) / endpoints.length),
    requestsToday: 1247890
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
              <h1 className="text-3xl font-bold text-gradient-duo mb-2">API Status & Documentation</h1>
              <p className="text-white/70">Real-time API status and endpoint documentation</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                {getStatusIcon(systemStatus.overall)}
                <span className={`font-semibold ${getStatusColor(systemStatus.overall)}`}>
                  {systemStatus.overall.charAt(0).toUpperCase() + systemStatus.overall.slice(1)}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          {/* System Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="glass rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Activity size={20} className="text-green-400" />
                <span className="text-sm text-white/70">Uptime</span>
              </div>
              <div className="text-2xl font-bold text-white">{systemStatus.uptime}%</div>
              <div className="text-xs text-white/50">Last 30 days</div>
            </div>

            <div className="glass rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Server size={20} className="text-blue-400" />
                <span className="text-sm text-white/70">Endpoints</span>
              </div>
              <div className="text-2xl font-bold text-white">{stats.operationalEndpoints}/{stats.totalEndpoints}</div>
              <div className="text-xs text-white/50">Operational</div>
            </div>

            <div className="glass rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Zap size={20} className="text-yellow-400" />
                <span className="text-sm text-white/70">Avg Response</span>
              </div>
              <div className="text-2xl font-bold text-white">{stats.averageResponseTime}ms</div>
              <div className="text-xs text-white/50">Last 24 hours</div>
            </div>

            <div className="glass rounded-lg p-4">
              <div className="flex items-center space-x-2 mb-2">
                <Database size={20} className="text-purple-400" />
                <span className="text-sm text-white/70">Requests Today</span>
              </div>
              <div className="text-2xl font-bold text-white">{stats.requestsToday.toLocaleString()}</div>
              <div className="text-xs text-white/50">+12.5% vs yesterday</div>
            </div>
          </div>

          {/* API Version Info */}
          <div className="glass rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <Code size={24} className="text-primary-500" />
              <span>API Information</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-white mb-2">Current Version</h3>
                <p className="text-white/70">v{systemStatus.version}</p>
                <p className="text-xs text-white/50 mt-1">Updated: {new Date(systemStatus.lastUpdate).toLocaleDateString()}</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Base URL</h3>
                <p className="text-primary-500 font-mono">https://bitcoin-photos.vercel.app</p>
                <p className="text-xs text-white/50 mt-1">All endpoints relative to base URL</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Authentication</h3>
                <p className="text-white/70">Bearer Token</p>
                <p className="text-xs text-white/50 mt-1">Wallet signature required</p>
              </div>
            </div>

            <div className="mt-6 flex items-center space-x-4">
              <Link 
                href="/docs" 
                className="flex items-center space-x-2 bg-gradient-duo-tone text-white px-4 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                <FileText size={16} />
                <span>Full Documentation</span>
              </Link>
              
              <a 
                href="https://github.com/bitcoin-apps-suite/bitcoin-photos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 btn-glass px-4 py-2 font-medium"
              >
                <ExternalLink size={16} />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          {/* API Endpoints by Category */}
          {Object.entries(categories).map(([category, categoryEndpoints]) => (
            <div key={category} className="glass rounded-lg p-6">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                {category === 'Authentication' && <Shield size={24} className="text-primary-500" />}
                {category === 'Photos' && <Camera size={24} className="text-primary-500" />}
                {category === 'NFTs' && <FileText size={24} className="text-primary-500" />}
                {category === 'Trading' && <TrendingUp size={24} className="text-primary-500" />}
                {category === 'Market' && <Activity size={24} className="text-primary-500" />}
                {category === 'Tokens' && <Coins size={24} className="text-primary-500" />}
                {category === 'Collections' && <Database size={24} className="text-primary-500" />}
                {category === 'Analytics' && <Users size={24} className="text-primary-500" />}
                <span>{category}</span>
              </h2>
              
              <div className="space-y-3">
                {categoryEndpoints.map((endpoint, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded text-xs font-semibold border ${getMethodColor(endpoint.method)}`}>
                        {endpoint.method}
                      </span>
                      <code className="text-white font-mono">{endpoint.path}</code>
                      <span className="text-white/70 text-sm">{endpoint.description}</span>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="text-xs text-white/50">Response Time</div>
                        <div className="text-sm text-white">{endpoint.responseTime}ms</div>
                      </div>
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(endpoint.status)}
                        <span className={`text-sm ${getStatusColor(endpoint.status)}`}>
                          {endpoint.status.charAt(0).toUpperCase() + endpoint.status.slice(1)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Rate Limits & Usage */}
          <div className="glass rounded-lg p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
              <Clock size={24} className="text-primary-500" />
              <span>Rate Limits & Usage</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-white mb-2">Free Tier</h3>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>• 100 requests/hour</li>
                  <li>• Basic endpoints only</li>
                  <li>• Community support</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Pro Tier</h3>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>• 1,000 requests/hour</li>
                  <li>• All endpoints available</li>
                  <li>• Priority support</li>
                  <li>• Advanced analytics</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-white mb-2">Enterprise</h3>
                <ul className="space-y-1 text-white/70 text-sm">
                  <li>• Custom rate limits</li>
                  <li>• Dedicated infrastructure</li>
                  <li>• SLA guarantees</li>
                  <li>• Direct support channel</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MinimalDock />
    </div>
  );
}