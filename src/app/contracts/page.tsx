'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import CleanTaskbar from '@/components/CleanTaskbar';
import DevSidebar from '@/components/DevSidebar';
import MinimalDock from '@/components/MinimalDock';
import TickerSidebar from '@/components/TickerSidebar';
import './contracts.css';

interface Contract {
  id: string;
  githubIssueNumber: number;
  githubIssueUrl: string;
  title: string;
  description: string;
  reward: string;
  estimatedHours: number;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  status: 'available' | 'claimed' | 'in_progress' | 'submitted' | 'completed' | 'expired';
  category: 'developer' | 'design';
  assignee?: {
    githubUsername: string;
    handcashHandle?: string;
    claimedAt: string;
    deadline: string;
  };
  pullRequest?: {
    number: number;
    url: string;
    status: 'open' | 'closed' | 'merged';
  };
  skills: string[];
  deliverables: string[];
}

const ContractsPage: React.FC = () => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [devSidebarCollapsed, setDevSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [contracts, setContracts] = useState<Contract[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedContract, setSelectedContract] = useState<Contract | null>(null);
  const [showClaimModal, setShowClaimModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'developer' | 'design'>('developer');
  
  const [claimForm, setClaimForm] = useState({
    githubUsername: '',
    handcashHandle: '',
    estimatedDays: 7
  });

  useEffect(() => {
    setMounted(true);
    
    const saved = localStorage.getItem('devSidebarCollapsed');
    setDevSidebarCollapsed(saved === 'true');
    setIsMobile(window.innerWidth <= 768);

    const handleStorageChange = () => {
      const saved = localStorage.getItem('devSidebarCollapsed');
      setDevSidebarCollapsed(saved === 'true');
    };
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('resize', handleResize);
    
    const checkSidebarState = setInterval(() => {
      const saved = localStorage.getItem('devSidebarCollapsed');
      setDevSidebarCollapsed(saved === 'true');
    }, 100);

    // Load bitcoin-photos contracts
    loadBitcoinPhotosContracts();
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('resize', handleResize);
      clearInterval(checkSidebarState);
    };
  }, []);

  const loadBitcoinPhotosContracts = () => {
    const bitcoinPhotosContracts: Contract[] = [
      {
        id: 'contract-1',
        githubIssueNumber: 1,
        githubIssueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/issues/1',
        title: '🚨 CRITICAL: User Authentication & Wallet Integration System',
        description: 'The Bitcoin Photos platform currently has zero user authentication - no login, registration, or user management. This is the foundational blocker preventing any real functionality.',
        reward: '8,000 bPhotos (8%)',
        estimatedHours: 80,
        priority: 'Critical',
        status: 'available',
        category: 'developer',
        skills: ['React', 'Next.js', 'BSV Wallet Integration', 'JWT', 'Authentication'],
        deliverables: ['User registration/login system', 'BSV wallet connectivity', 'Session management', 'User profile management']
      },
      {
        id: 'contract-2',
        githubIssueNumber: 2,
        githubIssueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/issues/2',
        title: '🚨 CRITICAL: Photo Upload & IPFS Storage Infrastructure',
        description: 'The platform has a beautiful upload UI but zero actual upload functionality. No photos can be stored, processed, or managed. This blocks all core platform features.',
        reward: '7,000 bPhotos (7%)',
        estimatedHours: 70,
        priority: 'Critical',
        status: 'available',
        category: 'developer',
        skills: ['IPFS', 'File Processing', 'Image Optimization', 'Metadata Extraction', 'Cloud Storage'],
        deliverables: ['Photo upload pipeline', 'IPFS storage integration', 'Metadata extraction', 'Image processing']
      },
      {
        id: 'contract-3',
        githubIssueNumber: 3,
        githubIssueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/issues/3',
        title: '🚨 CRITICAL: $bPhotos Token Smart Contract Implementation',
        description: 'The platform extensively references $bPhotos token throughout the UI for rewards, fees, and staking, but no actual token exists. All token functionality is mock data.',
        reward: '10,000 bPhotos (10%)',
        estimatedHours: 100,
        priority: 'Critical',
        status: 'available',
        category: 'developer',
        skills: ['Smart Contracts', 'BSV Blockchain', 'Tokenomics', 'Token Distribution', 'Solidity'],
        deliverables: ['bPhotos token contract', 'Token distribution system', 'Staking mechanism', 'Fee structure']
      },
      {
        id: 'contract-4',
        githubIssueNumber: 4,
        githubIssueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/issues/4',
        title: '🚨 CRITICAL: Database Architecture & API Infrastructure',
        description: 'The platform has zero backend infrastructure - no database, no API endpoints, no data persistence. All data is mock/static, preventing any real functionality.',
        reward: '6,000 bPhotos (6%)',
        estimatedHours: 60,
        priority: 'Critical',
        status: 'available',
        category: 'developer',
        skills: ['Database Design', 'API Development', 'PostgreSQL', 'Node.js', 'REST APIs'],
        deliverables: ['Database schema', 'API endpoints', 'Data persistence layer', 'Admin interfaces']
      },
      {
        id: 'contract-5',
        githubIssueNumber: 5,
        githubIssueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/issues/5',
        title: '🔥 HIGH: Auto-NFT Minting Engine Implementation',
        description: 'The platform promises "Auto-NFT" functionality throughout the UI but has zero NFT minting capability. The upload process mentions NFT creation, but no minting engine exists.',
        reward: '5,000 bPhotos (5%)',
        estimatedHours: 50,
        priority: 'High',
        status: 'available',
        category: 'developer',
        skills: ['NFT Standards', 'Smart Contracts', 'Metadata Standards', 'BSV Integration', 'Minting Logic'],
        deliverables: ['NFT minting engine', 'Metadata generation', 'Rarity calculation', 'Auto-minting pipeline']
      },
      {
        id: 'contract-6',
        githubIssueNumber: 6,
        githubIssueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/issues/6',
        title: '🔥 HIGH: Functional Trading Platform & Order Book Engine',
        description: 'The platform has an impressive trading interface at /exchange but zero trading functionality. All buy/sell buttons are non-functional, with no order processing.',
        reward: '5,500 bPhotos (5.5%)',
        estimatedHours: 80,
        priority: 'High',
        status: 'available',
        category: 'developer',
        skills: ['Trading Engine', 'Order Book', 'Market Making', 'Real-time Data', 'Financial Systems'],
        deliverables: ['Order book engine', 'Trade execution', 'Price discovery', 'Market data feeds']
      },
      {
        id: 'contract-7',
        githubIssueNumber: 7,
        githubIssueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/issues/7',
        title: '📊 MEDIUM: Real-time Analytics & Performance Dashboard',
        description: 'The analytics page shows comprehensive performance metrics but uses completely mock data. Users cannot track real portfolio performance, photo engagement, or earnings.',
        reward: '4,000 bPhotos (4%)',
        estimatedHours: 40,
        priority: 'Medium',
        status: 'available',
        category: 'developer',
        skills: ['Analytics', 'Data Visualization', 'Real-time Updates', 'Chart.js', 'Performance Tracking'],
        deliverables: ['Real-time analytics', 'Performance dashboard', 'Data aggregation', 'Chart integration']
      },
      {
        id: 'contract-8',
        githubIssueNumber: 8,
        githubIssueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/issues/8',
        title: '🟡 MEDIUM: Advanced Collection Management & Social Features',
        description: 'The collections page has basic collection display but lacks creation, management, and social collaboration features that users expect from a modern photo platform.',
        reward: '3,000 bPhotos (3%)',
        estimatedHours: 45,
        priority: 'Medium',
        status: 'available',
        category: 'developer',
        skills: ['Collection Management', 'Social Features', 'Collaboration Tools', 'User Experience', 'React'],
        deliverables: ['Collection creation', 'Social collaboration', 'Management tools', 'Privacy controls']
      },
      {
        id: 'contract-9',
        githubIssueNumber: 9,
        githubIssueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/issues/9',
        title: '🟡 MEDIUM: Creator Discovery & Social Networking Platform',
        description: 'The creators page shows a basic creator leaderboard but lacks actual social networking features, creator profiles, and community interaction that drive platform engagement.',
        reward: '4,000 bPhotos (4%)',
        estimatedHours: 50,
        priority: 'Medium',
        status: 'available',
        category: 'developer',
        skills: ['Social Networking', 'Creator Profiles', 'Community Features', 'User Engagement', 'Social Media'],
        deliverables: ['Creator profiles', 'Social networking', 'Community features', 'Engagement tools']
      },
      {
        id: 'contract-10',
        githubIssueNumber: 10,
        githubIssueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/issues/10',
        title: '🟠 HIGH: Mobile App Development & Camera Integration',
        description: 'Bitcoin Photos is currently web-only with no mobile applications. This severely limits user accessibility and photo capture capabilities, as most photos are taken on mobile devices.',
        reward: '5,000 bPhotos (5%)',
        estimatedHours: 120,
        priority: 'High',
        status: 'available',
        category: 'developer',
        skills: ['React Native', 'Mobile Development', 'Camera Integration', 'iOS', 'Android'],
        deliverables: ['iOS app', 'Android app', 'Camera integration', 'Mobile optimization']
      },
      {
        id: 'contract-11',
        githubIssueNumber: 11,
        githubIssueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/issues/11',
        title: '🟢 LOW: Advanced Search & AI-Powered Photo Discovery',
        description: 'The platform lacks intelligent photo discovery and advanced search capabilities. Users cannot effectively find photos by visual similarity, content, or advanced metadata filters.',
        reward: '2,000 bPhotos (2%)',
        estimatedHours: 60,
        priority: 'Low',
        status: 'available',
        category: 'developer',
        skills: ['AI/ML', 'Search Algorithms', 'Computer Vision', 'Elasticsearch', 'TensorFlow'],
        deliverables: ['Visual search', 'AI tagging', 'Advanced filters', 'Search optimization']
      },
      {
        id: 'contract-12',
        githubIssueNumber: 12,
        githubIssueUrl: 'https://github.com/bitcoin-apps-suite/bitcoin-photos/issues/12',
        title: '🟠 MEDIUM: Platform Security, Compliance & Infrastructure Hardening',
        description: 'The platform currently has minimal security measures and lacks enterprise-grade security, compliance features, and infrastructure hardening needed for handling financial transactions.',
        reward: '4,000 bPhotos (4%)',
        estimatedHours: 80,
        priority: 'Medium',
        status: 'available',
        category: 'developer',
        skills: ['Security', 'Compliance', 'Infrastructure', 'Cryptography', 'Penetration Testing'],
        deliverables: ['Security audit', 'Compliance features', 'Infrastructure hardening', 'Security monitoring']
      }
    ];

    setContracts(bitcoinPhotosContracts);
    setLoading(false);
  };

  const handleClaimContract = async () => {
    if (!selectedContract || !claimForm.githubUsername || !claimForm.handcashHandle) {
      alert('Please fill in all required fields');
      return;
    }
    
    const deadline = new Date();
    deadline.setDate(deadline.getDate() + claimForm.estimatedDays);
    
    const contractClaim = {
      assignee: {
        githubUsername: claimForm.githubUsername,
        handcashHandle: claimForm.handcashHandle,
        claimedAt: new Date().toISOString(),
        deadline: deadline.toISOString()
      }
    };
    
    const updatedContracts = contracts.map(c => 
      c.id === selectedContract.id 
        ? { ...c, status: 'claimed' as Contract['status'], assignee: contractClaim.assignee }
        : c
    );
    setContracts(updatedContracts);
    
    setShowClaimModal(false);
    setSelectedContract(null);
    
    alert(`Contract claimed successfully! You have ${claimForm.estimatedDays} days to complete this task.`);
  };

  const getStatusColor = (status: Contract['status']) => {
    switch (status) {
      case 'available': return '#22c55e';
      case 'claimed': return '#f59e0b';
      case 'in_progress': return '#3b82f6';
      case 'submitted': return '#8b5cf6';
      case 'completed': return '#6b7280';
      case 'expired': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const getTimeRemaining = (deadline: string) => {
    const now = new Date();
    const end = new Date(deadline);
    const diff = end.getTime() - now.getTime();
    
    if (diff <= 0) return 'Expired';
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    
    if (days > 0) return `${days} days remaining`;
    if (hours > 0) return `${hours} hours remaining`;
    return 'Less than 1 hour';
  };

  const filteredContracts = contracts.filter(c => c.category === activeTab);

  return (
    <div className="min-h-screen bg-black text-white">
      <ProofOfConceptBar />
      <CleanTaskbar />
      <DevSidebar />
      <TickerSidebar />
      
      <div className={`contracts-page ${mounted && !isMobile && !devSidebarCollapsed ? 'with-sidebar-expanded' : ''} ${mounted && !isMobile && devSidebarCollapsed ? 'with-sidebar-collapsed' : ''}`}>
        <div className="contracts-container">
          {/* Hero Section */}
          <section className="contracts-hero">
            <h1><span style={{color: '#ec4899'}}>Bitcoin Photos</span> <span style={{color: '#ffffff'}}>Contracts</span></h1>
            <p className="contracts-tagline">
              {activeTab === 'developer' 
                ? 'Real GitHub issues as paid contracts. Claim tasks, submit PRs, earn bPhotos tokens.'
                : 'Create designs, build interfaces, get paid in bPhotos'}
            </p>
            <div className="contracts-badge">CONTRACTS</div>
          </section>

          {/* Tab Navigation */}
          <section className="contracts-tabs-section">
            <div className="contracts-tabs">
              <button 
                className={activeTab === 'developer' ? 'active' : ''}
                onClick={() => setActiveTab('developer')}
              >
                Developer Contracts
              </button>
              <button 
                className={activeTab === 'design' ? 'active' : ''}
                onClick={() => setActiveTab('design')}
              >
                Design Contracts
              </button>
            </div>
          </section>

          {/* Stats Cards */}
          <div className="contracts-stats">
            <div className="stat-card">
              <span className="stat-value">{filteredContracts.filter(c => c.status === 'available').length}</span>
              <span className="stat-label">Available</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">{filteredContracts.filter(c => c.status === 'in_progress' || c.status === 'claimed').length}</span>
              <span className="stat-label">In Progress</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">{filteredContracts.filter(c => c.status === 'submitted').length}</span>
              <span className="stat-label">Under Review</span>
            </div>
            <div className="stat-card">
              <span className="stat-value">{filteredContracts.filter(c => c.status === 'completed').length}</span>
              <span className="stat-label">Completed</span>
            </div>
          </div>

          {/* Contracts Grid */}
          {loading ? (
            <div className="contracts-loading">Loading contracts...</div>
          ) : (
            <div className="contracts-grid">
              {filteredContracts.map(contract => (
                <div 
                  key={contract.id} 
                  className={`contract-card ${contract.status !== 'available' ? 'contract-unavailable' : ''}`}
                  onClick={() => contract.status === 'available' && setSelectedContract(contract)}
                >
                  <div className="contract-header">
                    <h3>{contract.title}</h3>
                    <span 
                      className="contract-status"
                      style={{ background: getStatusColor(contract.status) }}
                    >
                      {contract.status.replace('_', ' ').toUpperCase()}
                    </span>
                  </div>
                  
                  <p className="contract-description">{contract.description}</p>
                  
                  <div className="contract-meta">
                    <span className={`contract-priority priority-${contract.priority.toLowerCase()}`}>
                      {contract.priority}
                    </span>
                    <span className="contract-reward">{contract.reward}</span>
                    <span className="contract-time">{contract.estimatedHours}h</span>
                  </div>

                  {contract.assignee && (
                    <div className="contract-assignee">
                      <span className="assignee-label">Assigned to:</span>
                      <span className="assignee-name">@{contract.assignee.githubUsername}</span>
                      {contract.status === 'in_progress' && (
                        <span className="assignee-deadline">
                          {getTimeRemaining(contract.assignee.deadline)}
                        </span>
                      )}
                    </div>
                  )}

                  {contract.pullRequest && (
                    <div className="contract-pr">
                      <a 
                        href={contract.pullRequest.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        PR #{contract.pullRequest.number} ({contract.pullRequest.status})
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Contract Details Modal */}
          {selectedContract && (
            <div className="contract-modal" onClick={() => setSelectedContract(null)}>
              <div className="contract-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={() => setSelectedContract(null)}>×</button>
                
                <h2>{selectedContract.title}</h2>
                
                <div className="contract-modal-meta">
                  <span className={`priority-badge priority-${selectedContract.priority.toLowerCase()}`}>
                    {selectedContract.priority} Priority
                  </span>
                  <span className="reward-badge">{selectedContract.reward}</span>
                  <span className="time-badge">{selectedContract.estimatedHours} hours</span>
                </div>

                <div className="contract-modal-section">
                  <h3>Description</h3>
                  <p>{selectedContract.description}</p>
                </div>

                <div className="contract-modal-section">
                  <h3>Required Skills</h3>
                  <div className="skills-list">
                    {selectedContract.skills.map(skill => (
                      <span key={skill} className="skill-badge">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="contract-modal-section">
                  <h3>Deliverables</h3>
                  <ul className="deliverables-list">
                    {selectedContract.deliverables.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="contract-actions">
                  <button 
                    className="claim-contract-button"
                    onClick={() => setShowClaimModal(true)}
                  >
                    Claim Contract
                  </button>
                  <a 
                    href={selectedContract.githubIssueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* Claim Contract Modal */}
          {showClaimModal && (
            <div className="claim-modal" onClick={() => setShowClaimModal(false)}>
              <div className="claim-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={() => setShowClaimModal(false)}>×</button>
                
                <h2>Claim Contract</h2>
                <p>By claiming this contract, you agree to deliver the work within the specified timeframe.</p>
                
                <form onSubmit={(e) => { e.preventDefault(); handleClaimContract(); }}>
                  <div className="form-group">
                    <label>GitHub Username *</label>
                    <input
                      type="text"
                      value={claimForm.githubUsername}
                      onChange={(e) => setClaimForm({...claimForm, githubUsername: e.target.value})}
                      placeholder="your-github-username"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>HandCash Handle *</label>
                    <input
                      type="text"
                      value={claimForm.handcashHandle}
                      onChange={(e) => setClaimForm({...claimForm, handcashHandle: e.target.value})}
                      placeholder="$yourhandle"
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Estimated Days to Complete *</label>
                    <select
                      value={claimForm.estimatedDays}
                      onChange={(e) => setClaimForm({...claimForm, estimatedDays: parseInt(e.target.value)})}
                    >
                      <option value={3}>3 days</option>
                      <option value={5}>5 days</option>
                      <option value={7}>7 days (default)</option>
                      <option value={14}>14 days</option>
                      <option value={30}>30 days</option>
                    </select>
                  </div>
                  
                  <div className="claim-terms">
                    <h4>Terms & Conditions:</h4>
                    <ul>
                      <li>You must submit a PR within the agreed timeframe</li>
                      <li>Code must meet all acceptance criteria</li>
                      <li>Token rewards are distributed upon PR merge</li>
                      <li>Inactive contracts may be reassigned after deadline</li>
                    </ul>
                  </div>
                  
                  <button type="submit" className="submit-claim-button">
                    Accept & Claim Contract
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <MinimalDock />
    </div>
  );
};

export default ContractsPage;