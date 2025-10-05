'use client';

import React, { useState, useCallback } from 'react';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import CleanTaskbar from '@/components/CleanTaskbar';
import DevSidebar from '@/components/DevSidebar';
import Dock from '@/components/Dock';
import { Upload, Image, FileText, Zap, Camera, Lock, Coins, TrendingUp, Share2 } from 'lucide-react';

export default function UploadPage() {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploading, setUploading] = useState(false);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files).filter(file => 
        file.type.startsWith('image/')
      );
      setUploadedFiles(prev => [...prev, ...files]);
    }
  }, []);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files).filter(file => 
        file.type.startsWith('image/')
      );
      setUploadedFiles(prev => [...prev, ...files]);
    }
  };

  const handleUpload = async () => {
    setUploading(true);
    // Simulate upload process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setUploading(false);
    
    // Show success message
    alert(`Successfully uploaded ${uploadedFiles.length} photos! Auto-NFT minting will begin shortly.`);
    setUploadedFiles([]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <ProofOfConceptBar />
      <CleanTaskbar />
      <DevSidebar />

      <div className="pt-16 pl-64 pb-20">
        {/* Header */}
        <div className="sticky top-16 z-20 bg-black/90 backdrop-blur-md border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gradient-duo mb-2">Upload Photos</h1>
              <p className="text-white/70">Upload photos to auto-mint NFTs and generate tradeable shares</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-primary-500/20 to-secondary-500/20 border border-primary-500/30 rounded-lg p-3">
                <div className="text-sm text-white/80">Upload Cost</div>
                <div className="text-xl font-bold text-primary-500">0.1 $bPhotos</div>
                <div className="text-xs text-white/60">per photo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Upload Area */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Upload Zone */}
            <div className="lg:col-span-2">
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                  dragActive 
                    ? 'border-primary-500 bg-primary-500/10' 
                    : 'border-white/20 hover:border-white/30'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <Upload size={48} className="mx-auto mb-4 text-primary-500" />
                <h3 className="text-xl font-semibold mb-2">Drop photos here or click to browse</h3>
                <p className="text-white/60 mb-4">Supports JPG, PNG, WEBP up to 50MB each</p>
                
                <input
                  type="file"
                  id="file-upload"
                  multiple
                  accept="image/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <label
                  htmlFor="file-upload"
                  className="bg-gradient-duo-tone text-white px-6 py-3 rounded-lg font-medium cursor-pointer hover:opacity-90 transition-opacity inline-block"
                >
                  Browse Files
                </label>
              </div>

              {/* Uploaded Files Preview */}
              {uploadedFiles.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">
                    Selected Photos ({uploadedFiles.length})
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-square bg-gray-800 rounded-lg overflow-hidden">
                          <img
                            src={URL.createObjectURL(file)}
                            alt={file.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button
                          onClick={() => removeFile(index)}
                          className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          ×
                        </button>
                        <p className="text-xs text-white/60 mt-1 truncate">{file.name}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm text-white/70">
                      Total cost: <span className="text-primary-500 font-semibold">
                        {(uploadedFiles.length * 0.1).toFixed(1)} $bPhotos
                      </span>
                    </div>
                    <button
                      onClick={handleUpload}
                      disabled={uploading}
                      className="bg-gradient-duo-tone text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {uploading ? 'Uploading...' : `Upload ${uploadedFiles.length} Photos`}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Upload Info */}
            <div className="space-y-4">
              <div className="glass rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Zap size={20} className="text-yellow-500" />
                  <h3 className="font-semibold">Auto-NFT Process</h3>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Upload & encrypt photos</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Generate metadata & rarity score</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Mint NFT automatically</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Create 1000 tradeable shares</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>List on share exchange</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Coins size={20} className="text-primary-500" />
                  <h3 className="font-semibold">Rewards</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Auto-NFT Reward:</span>
                    <span className="text-green-400">+10 $bPhotos</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Creator Shares:</span>
                    <span className="text-blue-400">100 shares (10%)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Trading Royalties:</span>
                    <span className="text-purple-400">2.5% per trade</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Lock size={20} className="text-green-500" />
                  <h3 className="font-semibold">Security</h3>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>End-to-end encryption</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>IPFS decentralized storage</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Blockchain ownership proof</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <TrendingUp size={20} className="text-blue-500" />
                  <h3 className="font-semibold">Recent Activity</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-white/70">Photos uploaded today:</span>
                    <span className="text-white">1,247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">NFTs minted:</span>
                    <span className="text-white">1,198</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Avg. share price:</span>
                    <span className="text-primary-500">$0.0234</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Dock />
    </div>
  );
}