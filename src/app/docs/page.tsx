'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import CleanTaskbar from '@/components/CleanTaskbar';
import DevSidebar from '@/components/DevSidebar';
import MinimalDock from '@/components/MinimalDock';
import TickerSidebar from '@/components/TickerSidebar';
import { 
  Camera, Upload, Coins, TrendingUp, Shield, Zap, 
  BookOpen, FileText, HelpCircle, ExternalLink,
  ChevronRight, Search, Star, Lock, Share2
} from 'lucide-react';

interface DocSection {
  id: string;
  title: string;
  icon: any;
  items: DocItem[];
}

interface DocItem {
  id: string;
  title: string;
  content: string;
}

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [searchQuery, setSearchQuery] = useState('');

  const docSections: DocSection[] = [
    {
      id: 'getting-started',
      title: 'Getting Started',
      icon: BookOpen,
      items: [
        {
          id: 'welcome',
          title: 'Welcome to Bitcoin Photos',
          content: `Bitcoin Photos is a revolutionary platform that automatically converts your uploaded photos into NFTs and creates tradeable shares. Every photo you upload becomes a digital asset that can generate income through our unique share-trading system.

Key Features:
• Auto-NFT generation for every upload
• 1000 tradeable shares created per photo
• End-to-end encryption for privacy
• $bPhotos token rewards for participation
• Decentralized storage on IPFS`
        },
        {
          id: 'quick-start',
          title: 'Quick Start Guide',
          content: `Get started with Bitcoin Photos in 3 simple steps:

1. **Upload Your Photos**
   Visit /upload and drag & drop your images or click "Browse Files". Each upload costs 0.1 $bPhotos but rewards you with 10 $bPhotos upon successful NFT creation.

2. **Auto-NFT Creation**
   Your photos are automatically encrypted, assigned rarity scores, and minted as NFTs. This process takes 30-60 seconds per photo.

3. **Start Trading**
   Once minted, 1000 shares are created for each photo. You retain 100 shares (10%) as the creator, while 900 shares become available for trading on our exchange.`
        },
        {
          id: 'account-setup',
          title: 'Account & Wallet Setup',
          content: `Bitcoin Photos integrates with the Bitcoin ecosystem:

**Wallet Connection:**
• Connect your Bitcoin wallet for $bPhotos transactions
• Your wallet address becomes your unique identifier
• All NFTs and tokens are stored in your personal wallet

**Security Features:**
• Multi-signature wallet support
• Hardware wallet compatibility
• Encrypted private key storage
• Recovery phrase backup options`
        }
      ]
    },
    {
      id: 'uploading',
      title: 'Photo Upload & NFTs',
      icon: Upload,
      items: [
        {
          id: 'upload-process',
          title: 'Upload Process',
          content: `Understanding the Photo Upload Workflow:

**Supported Formats:**
• JPG, PNG, WEBP up to 50MB each
• Minimum resolution: 1080x1080
• Maximum resolution: 8K (7680x4320)

**Auto-NFT Process:**
1. Photo encryption using AES-256
2. IPFS upload for decentralized storage
3. Metadata generation with rarity scoring
4. Smart contract NFT minting
5. Share creation (1000 shares per NFT)
6. Exchange listing for trading

**Upload Costs & Rewards:**
• Cost: 0.1 $bPhotos per photo
• Reward: 10 $bPhotos per successful NFT
• Net gain: 9.9 $bPhotos per upload
• Creator shares: 100 shares (10% ownership)`
        },
        {
          id: 'nft-metadata',
          title: 'NFT Metadata & Rarity',
          content: `How Bitcoin Photos determines NFT rarity and value:

**Rarity Factors:**
• Visual uniqueness score (AI analysis)
• Color palette distribution
• Composition complexity
• Technical quality metrics
• Upload timestamp (early uploads score higher)

**Metadata Includes:**
• Creator information and timestamp
• Photo technical specifications
• Rarity score (1-1000)
• Share distribution details
• Trading history
• Current floor price

**Quality Guidelines:**
• High resolution increases rarity score
• Unique compositions score higher
• Professional photography techniques boost value
• Original content only (no stock photos)`
        },
        {
          id: 'collections',
          title: 'Creating Collections',
          content: `Organize your photos into valuable collections:

**Collection Benefits:**
• Grouped pricing and trading
• Enhanced discoverability
• Bulk share management
• Collection-wide royalties
• Portfolio tracking

**Collection Types:**
• **Themed Collections:** Nature, Portrait, Street, etc.
• **Time-based:** Daily uploads, seasonal photos
• **Location-based:** City series, travel collections
• **Collaborative:** Multi-creator collections

**Collection Management:**
• Set collection-wide pricing strategies
• Manage bulk share distributions
• Track collection performance metrics
• Configure automatic categorization`
        }
      ]
    },
    {
      id: 'trading',
      title: 'Share Trading',
      icon: TrendingUp,
      items: [
        {
          id: 'share-system',
          title: 'Understanding Shares',
          content: `How the Bitcoin Photos share system works:

**Share Structure:**
• 1000 shares created per NFT
• Creator retains 100 shares (10%)
• 900 shares available for public trading
• Each share represents fractional ownership

**Share Values:**
• Dynamic pricing based on demand
• Floor price starts at 0.001 $bPhotos
• No maximum price ceiling
• 24/7 trading availability

**Trading Benefits:**
• Instant liquidity for photo investments
• Diversified portfolio opportunities
• Creator royalties on all trades
• Compound returns through share appreciation`
        },
        {
          id: 'exchange-features',
          title: 'Exchange Features',
          content: `Advanced trading tools and features:

**Order Types:**
• Market orders (instant execution)
• Limit orders (price targets)
• Stop-loss orders (risk management)
• Bulk trading for collections

**Trading Analytics:**
• Real-time price charts
• Volume indicators
• Historical performance data
• Portfolio tracking and P&L

**Advanced Features:**
• Share lending and borrowing
• Liquidity pool participation
• Automated trading bots
• Cross-collection arbitrage opportunities

**Fee Structure:**
• Trading fee: 0.25% per transaction
• Creator royalty: 2.5% per trade
• No deposit or withdrawal fees
• Volume discounts available`
        },
        {
          id: 'investment-strategies',
          title: 'Investment Strategies',
          content: `Maximize your returns with proven strategies:

**For Creators:**
• Upload consistently to build following
• Focus on unique, high-quality content
• Engage with your share holders
• Create themed collections for higher value

**For Investors:**
• Research creator portfolios and trends
• Diversify across multiple collections
• Monitor trending categories and themes
• Use technical analysis for entry/exit points

**Risk Management:**
• Never invest more than you can afford to lose
• Diversify across creators and styles
• Set stop-loss orders for protection
• Stay informed about market trends

**Long-term Strategies:**
• Hold shares of promising creators
• Participate in platform governance
• Stake $bPhotos for additional rewards
• Build reputation as a tastemaker`
        }
      ]
    },
    {
      id: 'tokenomics',
      title: '$bPhotos Token',
      icon: Coins,
      items: [
        {
          id: 'token-overview',
          title: 'Token Overview',
          content: `$bPhotos: The native utility token of Bitcoin Photos

**Token Details:**
• Total Supply: 1,000,000,000 $bPhotos
• Blockchain: Bitcoin (Layer 2)
• Token Type: Utility token
• Decimal Places: 8

**Use Cases:**
• Upload payments (0.1 $bPhotos per photo)
• Share trading currency
• Platform governance voting
• Staking rewards
• Creator incentives and rewards

**Distribution:**
• 40% Community rewards and incentives
• 25% Development and operations
• 20% Creator rewards pool
• 10% Team allocation (vested)
• 5% Ecosystem partnerships`
        },
        {
          id: 'earning-bphotos',
          title: 'Earning $bPhotos',
          content: `Multiple ways to earn $bPhotos tokens:

**For Creators:**
• Upload reward: 10 $bPhotos per NFT minted
• Share trading royalties: 2.5% in $bPhotos
• Collection bonuses: Extra rewards for complete sets
• Daily creator rewards: Based on engagement

**For Traders:**
• Successful trading profits
• Liquidity provision rewards
• Referral bonuses: 1% of referee's trading volume
• Market maker incentives

**For Community:**
• Platform governance participation
• Bug reports and feature suggestions
• Content moderation and curation
• Social media promotion rewards

**Staking Rewards:**
• Stake $bPhotos for 8-12% APY
• Staking tiers unlock additional features
• Compound rewards automatically
• No lock-up periods or penalties`
        },
        {
          id: 'governance',
          title: 'Platform Governance',
          content: `Participate in Bitcoin Photos governance:

**Voting Rights:**
• 1 $bPhotos = 1 vote
• Minimum 1000 $bPhotos to submit proposals
• Voting power increases with staking
• Time-weighted voting for long-term holders

**Governance Topics:**
• Platform fee adjustments
• New feature development priorities
• Creator reward pool distribution
• Partnership and integration approvals
• Emergency protocol changes

**Proposal Process:**
1. Community discussion (7 days)
2. Formal proposal submission
3. Voting period (5 days)
4. Implementation (if passed)
5. Results and feedback collection

**Governance Benefits:**
• Shape platform development
• Earn governance participation rewards
• Early access to new features
• Direct communication with development team`
        }
      ]
    },
    {
      id: 'security',
      title: 'Security & Privacy',
      icon: Shield,
      items: [
        {
          id: 'encryption',
          title: 'Photo Encryption',
          content: `Military-grade security for your photos:

**Encryption Standards:**
• AES-256 encryption for all photos
• End-to-end encryption pipeline
• Zero-knowledge architecture
• Client-side encryption before upload

**Key Management:**
• Your wallet controls encryption keys
• Hierarchical deterministic (HD) key derivation
• Hardware wallet compatibility
• Multi-signature key recovery options

**Privacy Protection:**
• Photos encrypted before leaving your device
• IPFS storage with encrypted metadata
• No unencrypted photo access by platform
• Optional anonymous uploading modes

**Access Control:**
• Granular sharing permissions
• Time-limited access tokens
• Revocable viewing rights
• Audit trails for all access attempts`
        },
        {
          id: 'blockchain-security',
          title: 'Blockchain Security',
          content: `Built on Bitcoin's secure foundation:

**Smart Contract Security:**
• Multi-signature contract deployment
• Time-locked critical functions
• Formal verification of core contracts
• Regular security audits by third parties

**Network Security:**
• Bitcoin's proof-of-work consensus
• Layer 2 scaling with Bitcoin finality
• Decentralized validator network
• 51% attack resistance

**Transaction Security:**
• All transactions signed by user wallets
• No custodial holdings by platform
• Atomic swaps for guaranteed execution
• Replay attack protection

**Emergency Protocols:**
• Circuit breaker mechanisms
• Governance-controlled emergency stops
• User-initiated contract pausing
• Decentralized recovery procedures`
        },
        {
          id: 'best-practices',
          title: 'Security Best Practices',
          content: `Protect your assets and privacy:

**Wallet Security:**
• Use hardware wallets when possible
• Keep private keys offline and secure
• Enable multi-factor authentication
• Regular backup of recovery phrases

**Account Protection:**
• Strong, unique passwords
• Regular security checkups
• Monitor account activity
• Report suspicious behavior immediately

**Photo Privacy:**
• Review sharing settings before upload
• Understand NFT metadata visibility
• Use anonymous upload modes when needed
• Consider watermarking sensitive content

**Trading Safety:**
• Verify transaction details before signing
• Use limit orders to control prices
• Be cautious of too-good-to-be-true deals
• Keep trading amounts reasonable

**General Tips:**
• Stay updated on security announcements
• Use official platform URLs only
• Never share private keys or passwords
• Report security issues to our team`
        }
      ]
    },
    {
      id: 'api',
      title: 'Developer API',
      icon: FileText,
      items: [
        {
          id: 'api-overview',
          title: 'API Overview',
          content: `Build applications on top of Bitcoin Photos:

**REST API Features:**
• RESTful API design
• JSON request/response format
• Rate limiting and authentication
• Comprehensive error handling
• Real-time WebSocket connections

**Available Endpoints:**
• Photo upload and metadata
• NFT creation and management
• Share trading and order book
• User profiles and collections
• Market data and analytics

**Authentication:**
• API key authentication
• Wallet signature verification
• OAuth 2.0 for third-party apps
• Rate limits based on tier

**SDKs Available:**
• JavaScript/TypeScript
• Python
• Go
• Mobile (React Native)`
        },
        {
          id: 'integration-guide',
          title: 'Integration Guide',
          content: `Step-by-step integration process:

**1. API Key Setup:**
\`\`\`
curl -X POST https://api.bitcoin-photos.com/auth/key \\
  -H "Content-Type: application/json" \\
  -d '{"wallet_address": "your_wallet_address"}'
\`\`\`

**2. Upload Photos:**
\`\`\`javascript
const response = await fetch('/api/upload', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'multipart/form-data'
  },
  body: formData
});
\`\`\`

**3. Query NFT Data:**
\`\`\`javascript
const nftData = await fetch('/api/nft/' + nftId, {
  headers: { 'Authorization': 'Bearer YOUR_API_KEY' }
}).then(res => res.json());
\`\`\`

**Rate Limits:**
• Free tier: 100 requests/hour
• Pro tier: 1,000 requests/hour
• Enterprise: Custom limits`
        },
        {
          id: 'webhooks',
          title: 'Webhooks & Events',
          content: `Real-time notifications for your applications:

**Available Events:**
• Photo uploaded and processed
• NFT minted successfully
• Share trade executed
• New follower or collection subscriber
• Price alerts and thresholds

**Webhook Setup:**
\`\`\`javascript
{
  "url": "https://yourapp.com/webhook",
  "events": ["nft.minted", "trade.executed"],
  "secret": "your_webhook_secret"
}
\`\`\`

**Event Payload Example:**
\`\`\`json
{
  "event": "nft.minted",
  "timestamp": "2025-01-15T10:30:00Z",
  "data": {
    "nft_id": "abc123",
    "creator": "wallet_address",
    "shares_created": 1000,
    "initial_price": 0.001
  }
}
\`\`\`

**Security:**
• HMAC signature verification
• HTTPS-only webhook endpoints
• Retry mechanism with exponential backoff
• Event deduplication`
        }
      ]
    },
    {
      id: 'support',
      title: 'Help & Support',
      icon: HelpCircle,
      items: [
        {
          id: 'faq',
          title: 'Frequently Asked Questions',
          content: `Common questions and answers:

**General:**
Q: Is Bitcoin Photos free to use?
A: Uploading costs 0.1 $bPhotos but rewards 10 $bPhotos, making it profitable.

Q: How long does NFT minting take?
A: Typically 30-60 seconds per photo.

Q: Can I delete uploaded photos?
A: Once minted as NFTs, photos become permanent blockchain records.

**Trading:**
Q: What's the minimum trade amount?
A: You can trade as little as 1 share (minimum 0.001 $bPhotos).

Q: How are share prices determined?
A: Market supply and demand, starting from 0.001 $bPhotos floor price.

Q: Can I trade shares of my own photos?
A: Yes, you can trade your 100 creator shares like any other trader.

**Technical:**
Q: Which wallets are supported?
A: All Bitcoin-compatible wallets including hardware wallets.

Q: Is my data private?
A: Yes, all photos are encrypted before upload and stored securely.`
        },
        {
          id: 'troubleshooting',
          title: 'Troubleshooting',
          content: `Common issues and solutions:

**Upload Problems:**
• Check file format (JPG, PNG, WEBP only)
• Ensure file size under 50MB
• Verify sufficient $bPhotos balance
• Try refreshing browser and retry

**Trading Issues:**
• Confirm wallet connection
• Check $bPhotos balance for fees
• Verify order details before submission
• Clear browser cache if orders don't appear

**Wallet Connection:**
• Ensure wallet extension is installed
• Check network settings (Bitcoin mainnet)
• Refresh page and reconnect wallet
• Try different browser if issues persist

**Performance Issues:**
• Use Chrome or Firefox for best experience
• Disable browser extensions temporarily
• Check internet connection stability
• Clear browser cache and cookies`
        },
        {
          id: 'contact',
          title: 'Contact Support',
          content: `Get help when you need it:

**Support Channels:**
• Email: support@bitcoin-photos.com
• Discord: Join our community server
• GitHub: Report bugs and issues
• Twitter: @BitcoinPhotos for updates

**Response Times:**
• Critical issues: 2-4 hours
• General support: 24-48 hours
• Feature requests: 1-2 weeks
• Bug reports: 48-72 hours

**Before Contacting Support:**
• Check this documentation first
• Search existing GitHub issues
• Include error messages and screenshots
• Provide wallet address (if relevant)
• Describe steps to reproduce issues

**Enterprise Support:**
• Dedicated support channels
• Priority response times
• Custom integration assistance
• Direct developer communication`
        }
      ]
    }
  ];

  const filteredSections = docSections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      searchQuery === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  const currentSection = filteredSections.find(s => s.id === activeSection);
  const currentItem = currentSection?.items[0];

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
              <h1 className="text-3xl font-bold text-gradient-duo mb-2">Documentation</h1>
              <p className="text-white/70">Everything you need to know about Bitcoin Photos</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                <input
                  type="text"
                  placeholder="Search docs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-primary-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <nav className="space-y-2 sticky top-32">
                {filteredSections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <div key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                          activeSection === section.id
                            ? 'bg-primary-500/20 text-primary-500 border border-primary-500/30'
                            : 'text-white/70 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{section.title}</span>
                        <ChevronRight size={16} className={`ml-auto transition-transform ${
                          activeSection === section.id ? 'rotate-90' : ''
                        }`} />
                      </button>
                      
                      {activeSection === section.id && section.items.length > 0 && (
                        <div className="ml-6 mt-2 space-y-1">
                          {section.items.map((item) => (
                            <a
                              key={item.id}
                              href={`#${item.id}`}
                              className="block px-3 py-2 text-sm text-white/60 hover:text-white transition-colors"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {currentSection && (
                <div className="space-y-8">
                  {currentSection.items.map((item) => (
                    <div key={item.id} id={item.id} className="glass rounded-lg p-6">
                      <h2 className="text-2xl font-bold text-white mb-4">{item.title}</h2>
                      <div className="prose prose-invert max-w-none">
                        {item.content.split('\n').map((paragraph, index) => {
                          if (paragraph.trim() === '') return null;
                          
                          if (paragraph.startsWith('```')) {
                            const language = paragraph.slice(3);
                            return (
                              <div key={index} className="bg-gray-900 rounded-lg p-4 my-4 font-mono text-sm overflow-x-auto">
                                <pre className="text-green-400">{paragraph}</pre>
                              </div>
                            );
                          }
                          
                          if (paragraph.startsWith('#')) {
                            const level = paragraph.match(/^#+/)?.[0].length || 1;
                            const text = paragraph.replace(/^#+\s/, '');
                            const Tag = `h${Math.min(level + 2, 6)}` as keyof JSX.IntrinsicElements;
                            return (
                              <Tag key={index} className="text-primary-500 font-semibold mt-6 mb-3">
                                {text}
                              </Tag>
                            );
                          }
                          
                          if (paragraph.startsWith('•')) {
                            return (
                              <div key={index} className="flex items-start space-x-2 mb-2">
                                <span className="text-primary-500 mt-1">•</span>
                                <span className="text-white/80">{paragraph.slice(2)}</span>
                              </div>
                            );
                          }
                          
                          if (paragraph.match(/^\d+\./)) {
                            return (
                              <div key={index} className="flex items-start space-x-2 mb-2">
                                <span className="text-primary-500 font-semibold">{paragraph.match(/^\d+\./)?.[0]}</span>
                                <span className="text-white/80">{paragraph.replace(/^\d+\.\s*/, '')}</span>
                              </div>
                            );
                          }
                          
                          return (
                            <p key={index} className="text-white/80 mb-4 leading-relaxed">
                              {paragraph}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Quick Links Footer */}
              <div className="mt-12 glass rounded-lg p-6">
                <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Link href="/upload" className="flex items-center space-x-2 text-primary-500 hover:text-primary-400 transition-colors">
                    <Upload size={16} />
                    <span>Upload Photos</span>
                  </Link>
                  <Link href="/exchange" className="flex items-center space-x-2 text-primary-500 hover:text-primary-400 transition-colors">
                    <TrendingUp size={16} />
                    <span>Trade Shares</span>
                  </Link>
                  <Link href="/token" className="flex items-center space-x-2 text-primary-500 hover:text-primary-400 transition-colors">
                    <Coins size={16} />
                    <span>$bPhotos Token</span>
                  </Link>
                  <a 
                    href="https://github.com/bitcoin-apps-suite/bitcoin-photos" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-primary-500 hover:text-primary-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <MinimalDock />
    </div>
  );
}