'use client';

import React from 'react';
import Link from 'next/link';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import CleanTaskbar from '@/components/CleanTaskbar';
import DevSidebar from '@/components/DevSidebar';
import MinimalDock from '@/components/MinimalDock';
import TickerSidebar from '@/components/TickerSidebar';
import { 
  Camera, Zap, Globe, TrendingUp, Shield, Database, 
  Coins, Building2, Users, FileText, Search, Award,
  ArrowRight, CheckCircle, Layers, Network, Brain
} from 'lucide-react';
import './AboutPage.css';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <ProofOfConceptBar />
      <CleanTaskbar />
      <DevSidebar />
      <TickerSidebar />

      <div className="pt-16 pl-64 pr-80 pb-20">
        <div className="about-container">
          {/* Hero Section */}
          <section className="about-hero">
            <div className="hero-content">
              <div className="hero-badge">
                <span>The Future of Visual Content Licensing</span>
              </div>
              
              <h1 className="hero-title">
                Beyond Storage.<br />
                Beyond NFTs.<br />
                <span className="gradient-text">Beyond Scarcity.</span>
              </h1>
              
              <p className="hero-subtitle">
                Bitcoin Photos is the world's first decentralized marketplace for instant 
                commercial image licensing, powered by Teranode's infinite scalability and 
                backed by dividend-bearing $bPhotos equity tokens.
              </p>

              <div className="hero-actions">
                <Link href="/upload" className="btn-primary">
                  Start Creating
                </Link>
                <Link href="/exchange" className="btn-secondary">
                  Explore Marketplace
                </Link>
              </div>

              <div className="hero-stats">
                <div className="stat-item">
                  <div className="stat-number">∞</div>
                  <div className="stat-label">Transaction Capacity</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">$0.001</div>
                  <div className="stat-label">Avg. License Cost</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">1B</div>
                  <div className="stat-label">$bPhotos Supply</div>
                </div>
              </div>
            </div>
          </section>

          {/* Problem Section */}
          <section className="about-section">
            <div className="section-header">
              <h2>The Problem with Digital Images Today</h2>
              <p>AI has made beautiful images abundant, but legal ownership remains broken</p>
            </div>

            <div className="problem-grid">
              <div className="problem-card">
                <div className="problem-icon">
                  <Brain className="icon" />
                </div>
                <h3>AI Abundance</h3>
                <p>Anyone can generate stunning images with AI, making "rare" NFTs meaningless. The scarcity model is dead.</p>
              </div>

              <div className="problem-card">
                <div className="problem-icon">
                  <Shield className="icon" />
                </div>
                <h3>Licensing Nightmare</h3>
                <p>Who owns commercial rights? Can you use that MidJourney image for your business? Legal ambiguity everywhere.</p>
              </div>

              <div className="problem-card">
                <div className="problem-icon">
                  <Database className="icon" />
                </div>
                <h3>Centralized Control</h3>
                <p>Stock photo sites take 30-70% cuts. Platforms can deplatform creators. Your content, their rules.</p>
              </div>
            </div>
          </section>

          {/* Solution Section */}
          <section className="about-section alt-bg">
            <div className="section-header">
              <h2>The Bitcoin Photos Solution</h2>
              <p>A decentralized marketplace where rights, not rarity, create value</p>
            </div>

            <div className="solution-flow">
              <div className="flow-step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Search & Discover</h3>
                  <p>Browse millions of AI-generated and human-created images. Find exactly what you need for your project.</p>
                </div>
              </div>

              <ArrowRight className="flow-arrow" />

              <div className="flow-step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Instant Purchase</h3>
                  <p>Pay pennies for full commercial licensing rights. Smart contracts handle everything automatically.</p>
                </div>
              </div>

              <ArrowRight className="flow-arrow" />

              <div className="flow-step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Own & Monetize</h3>
                  <p>Use commercially, resell licenses, or hold as an appreciating digital asset. Your content, your rules.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Teranode Infrastructure */}
          <section className="about-section">
            <div className="section-header">
              <h2>Built on Teranode Infrastructure</h2>
              <p>Unlimited transactions, microscopic fees, infinite scalability</p>
            </div>

            <div className="teranode-features">
              <div className="feature-card">
                <Zap className="feature-icon" />
                <h3>Unlimited Throughput</h3>
                <p>Teranode processes unlimited transactions per second. Every image license, every microtransaction, every trade - all in real-time.</p>
              </div>

              <div className="feature-card">
                <Coins className="feature-icon" />
                <h3>Micropayments</h3>
                <p>Pay $0.001 for an image license. Creators earn from volume, not artificial scarcity. Economics that actually work.</p>
              </div>

              <div className="feature-card">
                <Network className="feature-icon" />
                <h3>Global Indexing</h3>
                <p>Every photo transaction is bundled with $bPhotos tokens, creating a searchable, verifiable global content registry.</p>
              </div>
            </div>
          </section>

          {/* $bPhotos Tokenomics */}
          <section className="about-section alt-bg">
            <div className="section-header">
              <h2>$bPhotos: More Than a Token</h2>
              <p>Utility token AND dividend-bearing equity in $bPhotos Corp</p>
            </div>

            <div className="tokenomics-grid">
              <div className="tokenomics-card primary">
                <div className="card-header">
                  <Coins className="card-icon" />
                  <h3>Utility Token</h3>
                </div>
                <ul className="feature-list">
                  <li><CheckCircle className="check-icon" />Pay for image licenses</li>
                  <li><CheckCircle className="check-icon" />Upload and mint content</li>
                  <li><CheckCircle className="check-icon" />Trade on the exchange</li>
                  <li><CheckCircle className="check-icon" />Platform governance voting</li>
                </ul>
              </div>

              <div className="tokenomics-card secondary">
                <div className="card-header">
                  <Building2 className="card-icon" />
                  <h3>Equity Share</h3>
                </div>
                <ul className="feature-list">
                  <li><CheckCircle className="check-icon" />Dividend-bearing stock in $bPhotos Corp</li>
                  <li><CheckCircle className="check-icon" />Subsidiary of $bCorp ecosystem</li>
                  <li><CheckCircle className="check-icon" />Revenue sharing from all transactions</li>
                  <li><CheckCircle className="check-icon" />Appreciates with platform growth</li>
                </ul>
              </div>
            </div>

            <div className="economics-flow">
              <h3>The Economic Engine</h3>
              <p>Every transaction generates revenue → $bPhotos holders receive dividends → More holders join → Platform scales → Revenue grows → Cycle repeats</p>
            </div>
          </section>

          {/* Market Opportunity */}
          <section className="about-section">
            <div className="section-header">
              <h2>Massive Market Opportunity</h2>
              <p>From family photos to enterprise content, we're building the infrastructure for all visual commerce</p>
            </div>

            <div className="market-segments">
              <div className="segment-card">
                <Users className="segment-icon" />
                <h3>Consumer Market</h3>
                <div className="segment-value">$12B</div>
                <p>Personal photo storage, family memories, social content. Pay once, store forever on Bitcoin.</p>
              </div>

              <div className="segment-card">
                <Building2 className="segment-icon" />
                <h3>Enterprise Content</h3>
                <div className="segment-value">$45B</div>
                <p>Stock photography, marketing assets, commercial licensing. Instant rights clearance.</p>
              </div>

              <div className="segment-card">
                <Brain className="segment-icon" />
                <h3>AI-Generated Content</h3>
                <div className="segment-value">$200B+</div>
                <p>Emerging market for AI-created visuals with clear ownership and commercial rights.</p>
              </div>

              <div className="segment-card special">
                <Award className="segment-icon" />
                <h3>Premium Markets</h3>
                <div className="segment-value">$500B+</div>
                <p>Adult content, luxury brands, exclusive licensing. Decentralized, uncensorable, profitable.</p>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="about-section alt-bg">
            <div className="section-header">
              <h2>Technology Architecture</h2>
              <p>Built for scale, designed for permanence</p>
            </div>

            <div className="tech-stack">
              <div className="tech-layer">
                <div className="layer-label">Application Layer</div>
                <div className="layer-content">
                  <span>Bitcoin Photos Platform</span>
                  <span>Search & Discovery</span>
                  <span>Licensing Marketplace</span>
                </div>
              </div>

              <div className="tech-layer">
                <div className="layer-label">Token Layer</div>
                <div className="layer-content">
                  <span>$bPhotos Utility Token</span>
                  <span>Smart Contracts</span>
                  <span>Revenue Distribution</span>
                </div>
              </div>

              <div className="tech-layer">
                <div className="layer-label">Infrastructure Layer</div>
                <div className="layer-content">
                  <span>Teranode Scaling</span>
                  <span>IPFS Storage</span>
                  <span>Bitcoin Settlement</span>
                </div>
              </div>

              <div className="tech-layer">
                <div className="layer-label">Foundation Layer</div>
                <div className="layer-content">
                  <span>Bitcoin Blockchain</span>
                  <span>Proof of Work</span>
                  <span>Immutable Records</span>
                </div>
              </div>
            </div>
          </section>

          {/* Future Vision */}
          <section className="about-section">
            <div className="section-header">
              <h2>The Future We're Building</h2>
              <p>Beyond photos: the infrastructure for all digital content commerce</p>
            </div>

            <div className="vision-cards">
              <div className="vision-card">
                <Camera className="vision-icon" />
                <h3>Universal Content Registry</h3>
                <p>Every digital asset - photos, videos, music, documents - tracked and monetized through Bitcoin Photos infrastructure.</p>
              </div>

              <div className="vision-card">
                <Globe className="vision-icon" />
                <h3>Global Licensing Standard</h3>
                <p>The de facto protocol for content licensing worldwide. One platform, universal compatibility, infinite scale.</p>
              </div>

              <div className="vision-card">
                <TrendingUp className="vision-icon" />
                <h3>Generational Wealth</h3>
                <p>Your content library becomes a revenue-generating asset that appreciates over time and passes to your heirs.</p>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="about-cta">
            <div className="cta-content">
              <h2>Join the Visual Commerce Revolution</h2>
              <p>Whether you're a creator, investor, or business owner, Bitcoin Photos offers unprecedented opportunities in the new digital economy.</p>
              
              <div className="cta-actions">
                <Link href="/upload" className="btn-primary large">
                  Start Creating Content
                </Link>
                <Link href="/token" className="btn-secondary large">
                  Invest in $bPhotos
                </Link>
              </div>

              <div className="cta-stats">
                <div className="cta-stat">
                  <div className="stat-value">1B</div>
                  <div className="stat-description">Total $bPhotos Supply</div>
                </div>
                <div className="cta-stat">
                  <div className="stat-value">∞</div>
                  <div className="stat-description">Transaction Capacity</div>
                </div>
                <div className="cta-stat">
                  <div className="stat-value">$0.001</div>
                  <div className="stat-description">Minimum License Cost</div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <MinimalDock />
    </div>
  );
}