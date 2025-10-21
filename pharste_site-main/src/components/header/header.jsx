import React, { useState } from 'react';
import './header.css';
import Logo from '../../asset/logo-white.png';
import { Link } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to handle Get App button click
  const handleGetAppClick = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    const playStoreLink = 'https://play.google.com/store/apps/details?id=com.app.transmitex&pcampaignid=web_share';
    const appleStoreLink = 'https://apps.apple.com/ng/app/pharste/id6744074834';

    if (/android/i.test(userAgent)) {
      // Redirect Android users to Google Play
      window.location.href = playStoreLink;
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // Redirect iOS users to Apple Store
      window.location.href = appleStoreLink;
    } else {
      // For desktop or unknown devices, you can choose one or show both links
      window.open(playStoreLink, '_blank');
    }
  };

  return (
    <>
      <header className="desktop_menu_container w-100">
        <nav className="desktop_menu">
          <img className="logo" src={Logo} alt="Company Logo" />

          {/* Navigation Menu */}
          <ul className="nav_menu d-flex align-items-center justify-content-center">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Service">Our Service</Link></li>
            <li><a href="https://blog.pharste.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>

          {/* Get App Button */}
          <div className="nav-end d-flex align-items-center justify-content-end">
            <button className="get_app_btn !text-[blue]" onClick={handleGetAppClick}>
              Get the App
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <header className="mobile_menu_container">
        <img src={Logo} className="logo" alt="company logo" />
        <div className="dropdowns">
          <button className="menu-btn" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={menuOpen ? 'open' : ''}>
            <button className="cross-button" onClick={toggleMenu}>
              <span></span>
              <span></span>
            </button>

            <hr style={{ background: '#14373D' }} />
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Service">Our Service</Link></li>
            <li><a href="https://blog.pharste.com/" target="_blank" rel="noopener noreferrer">Blog</a></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/help">Help</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
