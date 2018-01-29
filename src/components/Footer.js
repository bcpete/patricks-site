import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div>
      <ul className="footer-profiles">
        <li>
          <a href="mailto:beardpatrick80@gmail.com?Subject=Business%20Inquiry" target="_top">
            <img className="icon" src="/images/emailicon.png" />
          </a>
          </li>
        <li>
          <a href="https://www.facebook.com/BeardsDesigns" target="_blank">
            <img className="icon" src="/images/fbookicon.png" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/beardsdesign/?hl=en" target="_blank">
            <img className="icon" src="/images/instagramicon.png" />
          </a>
        </li>
      </ul>
      <p className="plug">
        Website designed and developed by Brady Peters 
      </p>
    </div>
  </footer>
);

export default Footer;