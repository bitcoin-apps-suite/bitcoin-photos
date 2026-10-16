'use client';

import Image from 'next/image';
import React, { useState, useCallback } from 'react';
import ProofOfConceptBar from '@/components/ProofOfConceptBar';
import CleanTaskbar from '@/components/CleanTaskbar';
import DevSidebar from '@/components/DevSidebar';
import MinimalDock from '@/components/MinimalDock';
import { useWallet, inscribeFile } from '@/lib/bwallet';
import { Upload, Zap } from 'lucide-react';

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

  const { user, connect } = useWallet();
  const [result, setResult] = useState<{ ok: boolean; text: string } | null>(null);

  // Each photo is inscribed on-chain as a 1Sat ordinal from the user's own wallet.
  // The wallet shows the fee and asks for approval; nothing is held by this site.
  const handleUpload = async () => {
    setResult(null);
    if (!user && !(await connect())) return;
    setUploading(true);
    const done: string[] = [];
    try {
      for (const file of uploadedFiles) {
        done.push(await inscribeFile(file, 'Save photo on-chain'));
      }
      setResult({ ok: true, text: `Saved ${done.length} photo${done.length === 1 ? '' : 's'} on-chain.` });
      setUploadedFiles([]);
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'The wallet did not complete the save.';
      setResult({ ok: false, text: done.length ? `Saved ${done.length}, then stopped: ${msg}` : msg });
      setUploadedFiles((prev) => prev.slice(done.length));
    } finally {
      setUploading(false);
    }
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <ProofOfConceptBar />
      <CleanTaskbar />
      <DevSidebar />

      <div className="pt-16 pl-64 pr-6 pb-20">
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
                <Upload size={48} className="mx-auto mb-4 text-pink-500" />
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
                        <div className="relative aspect-square bg-gray-800 rounded-lg overflow-hidden">
                          <Image
                            fill
                            unoptimized
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
                      Network fee: shown by your wallet before you approve
                    </div>
                    <button
                      onClick={handleUpload}
                      disabled={uploading}
                      className="bg-gradient-duo-tone text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
                    >
                      {uploading ? 'Waiting for wallet…' : user ? `Save ${uploadedFiles.length} on-chain` : 'Sign in with bWalletX to save'}
                    </button>
                  </div>
                  {result && <p className={`mt-3 text-sm ${result.ok ? 'text-green-400' : 'text-red-400'}`}>{result.text}</p>}
                </div>
              )}
            </div>

            {/* Upload Info */}
            <div className="space-y-4">
              <div className="glass rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-3">
                  <Zap size={20} className="text-yellow-500" />
                  <h3 className="font-semibold">How saving works</h3>
                </div>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Pick photos (up to 5 MB each)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Your wallet shows the network fee</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Inscribed on-chain as a 1Sat ordinal</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Held in your own wallet</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-primary-500 rounded-full"></span>
                    <span>Share trading: not live yet</span>
                  </div>
                </div>
              </div>

              <div className="glass rounded-lg p-4 text-sm text-white/70">
                Inscriptions are public: anyone can view a photo saved on-chain. Do not save private photos.
              </div>
            </div>
          </div>
        </div>
      </div>

      <MinimalDock />
    </div>
  );
}