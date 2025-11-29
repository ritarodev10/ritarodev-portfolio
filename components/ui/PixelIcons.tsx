import React from "react";

export const PixelHeart = ({ className = "w-8 h-8", color = "currentColor" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4 4h4v4H4V4zm12 0h4v4h-4V4zM4 8h4v4H4V8zm12 0h4v4h-4V8zM8 8h8v4H8V8zm-4 4h4v4H4v-4zm16 0h4v4h-4v-4zM8 12h8v4H8v-4zM8 16h8v4H8v-4zM12 20h-4v-4h4v4z"
      fill={color}
    />
    {/* Pixelated outline effect */}
    <path d="M4 4h4v4H4V4zm12 0h4v4h-4V4z" fill={color} fillOpacity="0.2"/>
  </svg>
);

export const PixelHandshake = ({ className = "w-8 h-8", color = "currentColor" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="2" y="10" width="4" height="4" fill={color} />
    <rect x="6" y="6" width="4" height="4" fill={color} />
    <rect x="10" y="10" width="4" height="4" fill={color} />
    <rect x="14" y="6" width="4" height="4" fill={color} />
    <rect x="18" y="10" width="4" height="4" fill={color} />
    <rect x="6" y="14" width="12" height="4" fill={color} />
  </svg>
);

export const PixelSkull = ({ className = "w-8 h-8", color = "currentColor" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6 2h12v4h4v8h-4v4h-4v4h-4v-4H6v-4H2V6h4V2zm4 10h4v4h-4v-4zm-4-4h4v4H6V8zm12 0h-4v4h4V8z"
      fill={color}
    />
  </svg>
);

export const PixelWarning = ({ className = "w-8 h-8", color = "currentColor" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 2h4v4h-4V2zm-4 4h4v4H6V6zm12 0h-4v4h4V6zm-4 4h-4v4h4v-4zm-8 4h4v4H6v-4zm12 0h-4v4h4v-4zm-8 4h4v4h-4v-4zm8 0h-4v4h4v-4zM2 18h20v4H2v-4z"
      fill={color}
    />
    <rect x="10" y="8" width="4" height="6" fill="black" fillOpacity="0.3" />
    <rect x="10" y="16" width="4" height="2" fill="black" fillOpacity="0.3" />
  </svg>
);

export const PixelMedal = ({ className = "w-8 h-8", color = "currentColor" }: { className?: string, color?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    {/* Ribbon */}
    <path d="M6 2h4v8H6V2zm8 0h4v8h-4V2z" fill="#3B82F6" />
    <path d="M2 2h4v6H2V2zm16 0h4v6h-4V2z" fill="#1D4ED8" />
    
    {/* Medal */}
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 10h8v2h2v2h2v4h-2v2h-2v2H8v-2H6v-2H4v-4h2v-2h2v-2z"
      fill={color}
    />
    <rect x="10" y="14" width="4" height="4" fill="white" fillOpacity="0.3" />
  </svg>
);
