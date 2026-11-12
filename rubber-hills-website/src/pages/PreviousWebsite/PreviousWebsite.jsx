import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, History, Home } from 'lucide-react';
import './PreviousWebsite.css';

export default function PreviousWebsite() {
  return (
    <div className="previous-website-page">
      {/* Top Banner Bar */}
      <div className="previous-bar">
        <div className="container previous-bar-container">
          <div className="previous-bar-left">
            <Link to="/" className="btn-back-new">
              <ArrowLeft size={16} />
              <span>Back to New Website</span>
            </Link>
            <div className="previous-pill">
              <History size={14} />
              <span>Archived Previous Website</span>
            </div>
          </div>

          <div className="previous-bar-right">
            <span className="previous-info">
              Preserved version of the previous single-page design
            </span>
            <Link to="/" className="btn-home-icon" title="Return to 2027 Homepage">
              <Home size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Frame displaying the previous website */}
      <div className="previous-frame-container">
        <iframe
          src="/previous-website.html"
          title="Previous Rubber Hills Kindergarten Website"
          className="previous-iframe"
        />
      </div>
    </div>
  );
}

