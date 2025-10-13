'use client';

import React from 'react';
import Link from 'next/link';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import CleanTaskbar from '@/components/CleanTaskbar';
import DevSidebar from '@/components/DevSidebar';
import MinimalDock from '@/components/MinimalDock';
import TickerSidebar from '@/components/TickerSidebar';
import { Camera, TrendingUp, Coins, Shield, Zap, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <ProofOfConceptBar />
      <CleanTaskbar />
      <DevSidebar />
      <TickerSidebar />
      
      <div className="pt-16 pl-64 pr-80 pb-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-secondary-500/10" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="text-6xl font-bold mb-4">
              <span className="text-gradient-duo">₿</span>
              <span className="text-white ml-4">Bitcoin Photos</span>
            </div>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Auto-NFT your photos, encrypt them securely, and trade image shares on Bitcoin. 
              Earn <span className="text-primary-500 font-semibold">$bPhotos</span> for your creative content.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/" className="bg-gradient-duo-tone text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">
              Launch App
            </Link>
            <Link href="/exchange" className="btn-glass px-8 py-4 text-lg font-semibold">
              View Exchange
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Auto-NFT Creation</h3>
              <p className="text-white/70">Every upload automatically becomes an NFT with trading shares</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trade Image Shares</h3>
              <p className="text-white/70">Buy and sell shares in photo collections, earn from your creativity</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Coins size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Earn $bPhotos</h3>
              <p className="text-white/70">Get rewarded for uploads, trading, and platform participation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient-duo">
            The Future of Photo Ownership
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h3 className="text-3xl font-bold mb-6">Automatic NFT Generation</h3>
              <p className="text-white/80 text-lg mb-6">
                Every photo you upload is automatically converted into an NFT with tradeable shares. 
                No complex processes, no gas fees - just instant value creation for your content.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-white/90">Instant NFT creation on upload</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-white/90">Automatic share generation for trading</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                  <span className="text-white/90">Built-in royalty and fee structures</span>
                </li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-duo-tone rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap size={40} className="text-white" />
              </div>
              <div className="text-2xl font-bold mb-2">Instant Processing</div>
              <div className="text-white/70">Photos to NFTs in seconds</div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="glass rounded-2xl p-8 text-center order-2 md:order-1">
              <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield size={40} className="text-white" />
              </div>
              <div className="text-2xl font-bold mb-2">Military-Grade Security</div>
              <div className="text-white/70">Your photos, encrypted and protected</div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-3xl font-bold mb-6">Encryption & Control</h3>
              <p className="text-white/80 text-lg mb-6">
                Choose how to store and publish your images. Set access prices, issue shares, 
                and maintain complete control over your digital assets with enterprise-level encryption.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-white/90">End-to-end encryption for all photos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-white/90">Granular access control and pricing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-white/90">Your keys, your content, your rules</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-6">Share Trading Economy</h3>
              <p className="text-white/80 text-lg mb-6">
                Photo collections become tradeable assets. Shares in popular images appreciate in value, 
                creating a new economy around visual content where creators and collectors both profit.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-white/90">Real-time trading of image shares</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-white/90">Revenue sharing for creators</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-white/90">Liquidity pools for popular collections</span>
                </li>
              </ul>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={40} className="text-white" />
              </div>
              <div className="text-2xl font-bold mb-2">Community Driven</div>
              <div className="text-white/70">Creators and collectors unite</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary-500/10 to-secondary-500/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Platform Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary-500 mb-2">45.7K</div>
              <div className="text-white/70">Photos Encrypted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">$181.4K</div>
              <div className="text-white/70">Trading Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">2,341</div>
              <div className="text-white/70">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">156</div>
              <div className="text-white/70">Live Collections</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Monetize Your Photos?</h2>
          <p className="text-xl text-white/80 mb-8">
            Join the new economy of visual content. Upload, encrypt, trade, and earn with Bitcoin Photos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="bg-gradient-duo-tone text-white px-8 py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity">
              Start Creating
            </Link>
            <Link href="/token" className="btn-glass px-8 py-4 text-lg font-semibold">
              Learn About $bPhotos
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <span className="text-2xl font-bold text-gradient-duo">₿</span>
            <span className="text-xl font-semibold">Bitcoin Photos</span>
          </div>
          <div className="flex space-x-6 text-white/70">
            <Link href="/" className="hover:text-white transition-colors">App</Link>
            <Link href="/exchange" className="hover:text-white transition-colors">Exchange</Link>
            <Link href="/token" className="hover:text-white transition-colors">Token</Link>
          </div>
        </div>
      </footer>
      </div>
      
      <MinimalDock />
    </div>
  );
}