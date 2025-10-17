'use client';

import React from 'react';
import './MinimalDock.css';

export default function MinimalDock() {
  return (
    <div className="minimal-dock">
      <div className="minimal-dock-container">
        <div className="minimal-dock-apps">
          {/* Minimal dock content */}
        </div>
        <div className="minimal-dock-status">
          <div className="minimal-status-time">
            <span>{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
          </div>
        </div>
      </div>
    </div>
  );
}