import React, { useState } from 'react';
import { ImagePlus, UploadCloud } from 'lucide-react';

export default function ImageSlot({
  src,
  alt = 'Kindergarten visual',
  title = 'Photo Placeholder',
  recommendedSize = '1200 × 800 px',
  isPlaceholder = true,
  className = '',
  imgClassName = '',
  style = {},
  children,
}) {
  const [loadError, setLoadError] = useState(false);

  // If isPlaceholder is true or if image fails to load or no src provided:
  const showPlaceholder = isPlaceholder || loadError || !src;

  return (
    <div
      className={`image-slot-wrapper ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        ...style,
      }}
    >
      {showPlaceholder ? (
        <div
          className="image-placeholder-box"
          style={{
            width: '100%',
            height: '100%',
            minHeight: '220px',
            backgroundColor: '#F3F8ED',
            border: '2.5px dashed #76B82A',
            borderRadius: 'inherit',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px 20px',
            textAlign: 'center',
            color: '#064B25',
            boxSizing: 'border-box',
            position: 'relative',
          }}
        >
          {/* Subtle Grid / Pattern in background */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'radial-gradient(#CDE7B0 1.2px, transparent 1.2px)',
              backgroundSize: '16px 16px',
              opacity: 0.6,
              pointerEvents: 'none',
            }}
          />

          <div
            style={{
              position: 'relative',
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              backgroundColor: '#DFF0C9',
              border: '2px solid #76B82A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '10px',
              color: '#064B25',
              boxShadow: '0 4px 14px rgba(6, 75, 37, 0.12)',
            }}
          >
            <ImagePlus size={28} />
          </div>

          <span
            style={{
              position: 'relative',
              display: 'inline-block',
              backgroundColor: '#FFD21C',
              color: '#073D20',
              fontSize: '0.74rem',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              padding: '3px 12px',
              borderRadius: '999px',
              marginBottom: '8px',
              boxShadow: '0 2px 6px rgba(245, 184, 0, 0.3)',
            }}
          >
            Image Placeholder
          </span>

          <strong
            style={{
              position: 'relative',
              fontSize: '1.05rem',
              fontWeight: '800',
              color: '#064B25',
              marginBottom: '4px',
              fontFamily: 'var(--font-heading)',
            }}
          >
            {title}
          </strong>

          <span
            style={{
              position: 'relative',
              fontSize: '0.85rem',
              color: '#4B6354',
              fontWeight: '700',
              marginBottom: '6px',
            }}
          >
            Recommended: {recommendedSize}
          </span>

          <span
            style={{
              position: 'relative',
              fontSize: '0.74rem',
              color: '#76B82A',
              fontWeight: '600',
            }}
          >
            Upload or insert your image file here
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={imgClassName}
          onError={() => setLoadError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      )}

      {/* Overlaid Badges / Accents */}
      {children}
    </div>
  );
}
