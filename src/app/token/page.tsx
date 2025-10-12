'use client'

import React from 'react';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import CleanTaskbar from '@/components/CleanTaskbar';
import DevSidebar from '@/components/DevSidebar';
import MinimalDock from '@/components/MinimalDock';
import TickerSidebar from '@/components/TickerSidebar';
import './TokenPage.css';

export default function TokenPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ProofOfConceptBar />
      <CleanTaskbar />
      <DevSidebar />
      <TickerSidebar />
      
      <div className="token-page">
        <div className="token-container">
        {/* Hero Section */}
        <section className="token-hero">
          <h1><span style={{color: '#ffffff'}}>The</span> Bitcoin Photos <span style={{color: '#ffffff'}}>Token</span></h1>
          <p className="token-tagline">
            Visual creativity meets decentralized economics
          </p>
          <div className="token-badge">$BPHOTOS</div>
        </section>

        {/* Philosophy Section */}
        <section className="philosophy-section">
          <h2>Our Creator-First Philosophy</h2>
          <div className="philosophy-content">
            <p>
              Bitcoin Photos is built on the principle that <strong>creators should own their content</strong> and 
              directly benefit from its value. Our platform enables photographers to monetize their work 
              through innovative auto-NFT technology and share trading.
            </p>
            <p>
              The <strong>BPHOTOS token creates a sustainable economy</strong> where photographers, collectors, 
              and traders all benefit from the growth of the platform while maintaining true ownership 
              of visual assets.
            </p>
          </div>
        </section>

        {/* Token Economics */}
        <section className="tokenomics-section">
          <h2>Token Economics</h2>
          <div className="tokenomics-grid">
            <div className="tokenomics-card">
              <h3>📸 Total Supply</h3>
              <div className="big-number">1,000,000,000</div>
              <p>Fixed supply with deflationary burn mechanism</p>
            </div>
            
            <div className="tokenomics-card">
              <h3>⚡ Distribution</h3>
              <div className="distribution-list">
                <div className="distribution-item">
                  <span>Creator Rewards</span>
                  <span>40%</span>
                </div>
                <div className="distribution-item">
                  <span>Community Incentives</span>
                  <span>25%</span>
                </div>
                <div className="distribution-item">
                  <span>Development Fund</span>
                  <span>20%</span>
                </div>
                <div className="distribution-item">
                  <span>Liquidity & Operations</span>
                  <span>15%</span>
                </div>
              </div>
            </div>

            <div className="tokenomics-card">
              <h3>💎 Utility</h3>
              <ul>
                <li>Photo upload rewards</li>
                <li>Trading fee discounts</li>
                <li>Premium feature access</li>
                <li>Governance voting rights</li>
                <li>Revenue sharing from trades</li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="how-works-section">
          <h2>How Photo Rewards Work</h2>
          <div className="how-works-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Upload</h3>
              <p>Upload your photos and they're automatically converted to tradeable NFTs</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Trade</h3>
              <p>Others can buy and trade shares of your photos on the marketplace</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Earn</h3>
              <p>Receive BPHOTOS tokens from upload rewards and trading fees</p>
            </div>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="value-section">
          <h2>Why BPHOTOS Has Value</h2>
          <div className="value-grid">
            <div className="value-card">
              <div className="value-icon">📈</div>
              <h3>Platform Growth</h3>
              <p>As more photographers join and upload content, demand for BPHOTOS increases through platform usage</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">💰</div>
              <h3>Trading Fees</h3>
              <p>Token holders receive a percentage of all photo trading fees and marketplace transactions</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🗳️</div>
              <h3>Governance Rights</h3>
              <p>Vote on platform features, fee structures, and creator incentive programs</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🎯</div>
              <h3>Premium Features</h3>
              <p>Access advanced analytics, priority uploads, and exclusive creator tools</p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="roadmap-section">
          <h2>Token Launch Roadmap</h2>
          <div className="roadmap-timeline">
            <div className="timeline-item completed">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Phase 1: Platform Launch</h3>
                <p>Core photo upload, auto-NFT creation, and basic trading features</p>
                <span className="timeline-status">✅ Completed</span>
              </div>
            </div>
            
            <div className="timeline-item current">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Phase 2: Token Integration</h3>
                <p>BPHOTOS token launch, creator rewards, and staking mechanisms</p>
                <span className="timeline-status">🚀 Current</span>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Phase 3: Advanced Trading</h3>
                <p>Derivatives trading, portfolio tools, and institutional features</p>
                <span className="timeline-status">⏳ Q2 2024</span>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h3>Phase 4: Global Expansion</h3>
                <p>Mobile apps, API access, and partnerships with major photo platforms</p>
                <span className="timeline-status">📅 Q4 2024</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contributors */}
        <section className="contributors-section">
          <h2>Top Creators</h2>
          <p>These photographers are earning the most BPHOTOS tokens from their uploads:</p>
          <div className="contributors-grid">
            <div className="contributor-card">
              <div className="contributor-avatar">BP</div>
              <h4>Bitcoin Photos</h4>
              <p>Platform Development</p>
              <div className="contribution-badge">🏗️ Founder</div>
            </div>
            
            <div className="contributor-card">
              <div className="contributor-avatar">CC</div>
              <h4>Creator Community</h4>
              <p>Top Photographers</p>
              <div className="contribution-badge">📸 2,341 Creators</div>
            </div>
            
            <div className="contributor-card">
              <div className="contributor-avatar">YN</div>
              <h4>Your Photos Here</h4>
              <p>Future Creator</p>
              <div className="contribution-badge">⭐ Start Uploading</div>
            </div>
          </div>
        </section>

        {/* Get Started */}
        <section className="get-started-section">
          <h2>Start Earning Today</h2>
          <p>Ready to earn BPHOTOS tokens from your photography?</p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => window.location.href = '/upload'}>
              Upload Photos
            </button>
            <button className="btn-secondary" onClick={() => window.location.href = '/exchange'}>
              View Marketplace
            </button>
          </div>
        </section>
        </div>
      </div>
      
      <MinimalDock />
    </div>
  );
}