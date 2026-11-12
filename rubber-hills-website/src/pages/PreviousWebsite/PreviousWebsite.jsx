import React, { useEffect } from 'react';
import { History } from 'lucide-react';
import './PreviousWebsite.css';

export default function PreviousWebsite() {
  useEffect(() => {
    // Immediately redirect browser to the full-page legacy website archive
    window.location.replace('/previous-website.html');
  }, []);

  return (
    <div className="previous-website-page" style={{ padding: '80px 20px', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div className="previous-pill" style={{ marginBottom: '16px', background: '#064B25', color: '#FFD21C', display: 'inline-flex', padding: '8px 18px', borderRadius: '999px', gap: '8px', alignItems: 'center' }}>
        <History size={16} />
        <span style={{ fontWeight: 700 }}>Rubber Hills Kindergarten Archive</span>
      </div>
      <h2 style={{ color: '#064B25', marginBottom: '12px', fontSize: '1.8rem' }}>Opening Previous Website...</h2>
      <p style={{ color: '#4B5563', marginBottom: '24px', maxWidth: '480px', fontSize: '1rem' }}>
        Navigating to the complete preserved original single-page design.
      </p>
      <a href="/previous-website.html" className="btn-back-new" style={{ background: '#064B25', color: '#FFFFFF', padding: '12px 28px', textDecoration: 'none', borderRadius: '999px', fontWeight: 700 }}>
        Click here if not redirected automatically
      </a>
    </div>
  );
}

