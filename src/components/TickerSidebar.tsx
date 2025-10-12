import React, { useState, useEffect } from 'react';
import { PriceService, TokenPrice as ServiceTokenPrice } from '../services/PriceService';
import './TickerSidebar.css';

interface TokenPrice extends ServiceTokenPrice {
  change24h: number;
  changePercent: number;
  contractId?: string;
  liquidity?: number;
  holders?: number;
  category?: string;
  isSpecial?: boolean;
  isPhoto?: boolean;
}

interface TickerSidebarProps {
  userHandle?: string;
  currentPhotoToken?: {
    symbol: string;
    name: string;
  };
}

const TickerSidebar: React.FC<TickerSidebarProps> = ({
  userHandle,
  currentPhotoToken
}) => {
  const [prices, setPrices] = useState<TokenPrice[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    // Generate trending photo tokens with contract IDs
    const generateTrendingPhotos = (): TokenPrice[] => {
      const photos = [
        { base: 'bSunset', name: 'Sunset Collection', category: 'Nature', basePrice: 0.045, volatility: 0.3 },
        { base: 'bPortrait', name: 'Portrait Series', category: 'People', basePrice: 0.032, volatility: 0.25 },
        { base: 'bStreet', name: 'Street Photography', category: 'Urban', basePrice: 0.028, volatility: 0.4 },
        { base: 'bLandscape', name: 'Epic Landscapes', category: 'Nature', basePrice: 0.058, volatility: 0.5 },
        { base: 'bMacro', name: 'Macro Details', category: 'Abstract', basePrice: 0.021, volatility: 0.35 },
        { base: 'bNight', name: 'Night Sky Photos', category: 'Astro', basePrice: 0.067, volatility: 0.2 },
        { base: 'bWildlife', name: 'Wildlife Shots', category: 'Animals', basePrice: 0.039, volatility: 0.25 },
        { base: 'bUrban', name: 'City Architecture', category: 'Urban', basePrice: 0.044, volatility: 0.45 }
      ];

      // Generate photos with varying liquidity to simulate market dynamics
      const photosWithLiquidity = photos.map((photo, index) => {
        const contractNum = Math.floor(Math.random() * 9000) + 1000;
        const contractId = `${Math.random().toString(36).substring(2, 5)}_${contractNum}`;
        
        // Simulate market dynamics with varying liquidity
        const liquidityMultiplier = Math.random() * 2 + 0.5; // 0.5x to 2.5x
        const basePrice = photo.basePrice * liquidityMultiplier;
        const change = (Math.random() - 0.5) * basePrice * photo.volatility;
        const liquidity = Math.floor(Math.random() * 75000 * liquidityMultiplier) + 5000;
        const holders = Math.floor(liquidity / 150 + Math.random() * 80);
        
        return {
          symbol: `${photo.base}_${contractId}`,
          name: photo.name,
          category: photo.category,
          contractId: contractId,
          price: basePrice,
          price_usd: basePrice,
          change24h: change,
          changePercent: (change / basePrice) * 100,
          change_24h: change,
          change_percent_24h: (change / basePrice) * 100,
          volume_24h: liquidity,
          liquidity: liquidity,
          holders: holders,
          last_updated: new Date(),
          source: 'Photos Marketplace',
          isPhoto: true,
          isSpecial: false
        };
      });

      // Sort photos by liquidity (most liquid first)
      return photosWithLiquidity.sort((a, b) => (b.liquidity || 0) - (a.liquidity || 0));
    };

    // Subscribe to price updates
    const subscription = PriceService.subscribeAll((updatedPrices) => {
      // Get BSV price first
      const bsvPrice = updatedPrices.find(p => p.symbol === 'BSV');
      const bphotosPrice = updatedPrices.find(p => p.symbol === 'BPHOTOS');
      
      const specialTokens: TokenPrice[] = [];
      
      // Add BSV first
      if (bsvPrice) {
        specialTokens.push({
          ...bsvPrice,
          change24h: bsvPrice.change_24h,
          changePercent: bsvPrice.change_percent_24h,
          isSpecial: true,
          isPhoto: false
        });
      }
      
      // Add BPHOTOS second
      if (bphotosPrice) {
        specialTokens.push({
          ...bphotosPrice,
          change24h: bphotosPrice.change_24h,
          changePercent: bphotosPrice.change_percent_24h,
          isSpecial: true,
          isPhoto: false
        });
      }

      // Add user's handle token after BPHOTOS if available
      if (userHandle) {
        specialTokens.push({
          symbol: userHandle.toUpperCase(),
          name: `@${userHandle} Photos`,
          price: 0.00234,
          price_usd: 0.00234,
          change24h: 0.00019,
          changePercent: 8.83,
          change_24h: 0.00019,
          change_percent_24h: 8.83,
          volume_24h: 12000,
          liquidity: 12000,
          holders: 38,
          last_updated: new Date(),
          source: 'HandCash',
          isSpecial: true,
          isPhoto: false,
          category: 'Creator'
        });
      }

      // Generate trending photo tokens
      const photoTokens = generateTrendingPhotos();
      
      const allPrices = [...specialTokens, ...photoTokens];
      
      setPrices(allPrices);
      setLastUpdate(new Date());
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [userHandle, currentPhotoToken]);

  const formatPrice = (price: number): string => {
    if (price >= 1000) {
      return `$${price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
    } else if (price >= 1) {
      return `$${price.toFixed(2)}`;
    } else if (price >= 0.01) {
      return `$${price.toFixed(4)}`;
    } else {
      return `$${price.toFixed(6)}`;
    }
  };

  const formatVolume = (volume?: number): string => {
    if (!volume) return 'N/A';
    if (volume >= 1000000) {
      return `$${(volume / 1000000).toFixed(1)}M`;
    } else if (volume >= 1000) {
      return `$${(volume / 1000).toFixed(1)}K`;
    }
    return `$${volume.toFixed(0)}`;
  };

  const formatLiquidity = (liquidity?: number): string => {
    if (!liquidity) return 'Low';
    if (liquidity >= 75000) return 'Very High';
    if (liquidity >= 40000) return 'High';
    if (liquidity >= 15000) return 'Medium';
    if (liquidity >= 5000) return 'Fair';
    return 'Low';
  };

  const getLiquidityColor = (liquidity?: number): string => {
    if (!liquidity) return '#666';
    if (liquidity >= 75000) return '#4CAF50';
    if (liquidity >= 40000) return '#8BC34A';
    if (liquidity >= 15000) return '#FFC107';
    if (liquidity >= 5000) return '#FF9800';
    return '#f44336';
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      second: '2-digit' 
    });
  };

  return (
    <div className={`ticker-sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="ticker-header">
        <h3>$bPhotos Market</h3>
        <div className="ticker-header-controls">
          <button 
            className="ticker-toggle"
            onClick={() => setIsCollapsed(!isCollapsed)}
            title={isCollapsed ? 'Expand ticker' : 'Collapse ticker'}
          >
            {isCollapsed ? '←' : '→'}
          </button>
        </div>
      </div>

      {!isCollapsed && (
        <>
          {isLoading ? (
            <div className="ticker-loading">Loading prices...</div>
          ) : (
            <div className="ticker-list">
              {prices.map((token, index) => {
                // Add divider after last special token
                const showDivider = token.isSpecial && 
                  index < prices.length - 1 && 
                  !prices[index + 1].isSpecial;
                
                return (
                  <React.Fragment key={token.symbol}>
                    <div className={`ticker-item ${token.isSpecial ? 'special' : ''} ${token.isPhoto ? 'photo' : ''}`}>
                  <div className="ticker-symbol-row">
                    <span className="ticker-symbol">${token.symbol}</span>
                    <span className={`ticker-change ${token.change24h >= 0 ? 'positive' : 'negative'}`}>
                      {token.change24h >= 0 ? '↑' : '↓'} {Math.abs(token.changePercent).toFixed(2)}%
                    </span>
                  </div>
                  
                  <div className="ticker-name">
                    {token.name}
                    {token.category && (
                      <span className="ticker-category"> • {token.category}</span>
                    )}
                  </div>
                  
                  <div className="ticker-price-row">
                    <span className="ticker-price">{formatPrice(token.price)}</span>
                    {token.contractId && (
                      <span className="ticker-contract-id">#{token.contractId}</span>
                    )}
                  </div>
                  
                  <div className="ticker-stats">
                    {token.volume_24h && (
                      <span className="ticker-volume">
                        Vol: {formatVolume(token.volume_24h)}
                      </span>
                    )}
                    {token.liquidity !== undefined && (
                      <span 
                        className="ticker-liquidity"
                        style={{ color: getLiquidityColor(token.liquidity) }}
                      >
                        {formatLiquidity(token.liquidity)}
                      </span>
                    )}
                    {token.holders !== undefined && (
                      <span className="ticker-holders">
                        {token.holders} holders
                      </span>
                    )}
                  </div>
                </div>
                {showDivider && (
                  <div className="ticker-divider">
                    <span>Trending Photos</span>
                  </div>
                )}
              </React.Fragment>
              );
            })}
            </div>
          )}

          <div className="ticker-footer">
            <div className="ticker-disclaimer">
              Prices update every 30s
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default TickerSidebar;