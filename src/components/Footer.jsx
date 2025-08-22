import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';








const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        
        {/* Contact Info */}
        <div className="footer-contact">
          <p><FontAwesomeIcon icon={faEnvelope} /> jrajput2175@gmail.com</p>
          <p><FontAwesomeIcon icon={faPhone} /> +91 842119488</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Pune, India</p>
        </div>

        {/* Social Links */}
        <div className="footer-social">
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        {/* Copyright */}
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Jivansing Ingle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
