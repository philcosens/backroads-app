import React from 'react';
import { pageLinks, navIcons } from '../data'; 

const Footer = (props) => {
    return (
        <footer className="section footer">
      <ul className="footer-links">
        { pageLinks.map((pageLink)=> {
            const { id, href, text } = pageLink;
            return (
              <li key={id}>
                <a href={href} className="footer-link">{text}</a>
              </li>
            )
          })}        
      </ul>
      <ul className="footer-icons">
        { navIcons.map(navIcon => {
            const { id, href, icon } = navIcon;
            return (
              <li key={id}>
                <a href={href} target="_blank" rel="noreferrer" className="footer-icon">
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}        
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{ new Date().getFullYear() }</span> all rights reserved
      </p>
    </footer>
    );
}

export default Footer;