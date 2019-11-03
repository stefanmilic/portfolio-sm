import React from 'react';
import { block } from 'bem-cn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

const b = block('footer');

const socialIcons = [faGithub, faTwitter, faLinkedin, faFacebook];

function Footer() {
  return (
    <footer className={b()}>
      <div className={b('footer-right')}>
        {socialIcons.map((icon, index) => (
          <div key={index} className={b('wrapper')}>
            <FontAwesomeIcon icon={icon} size='1x' />
          </div>
        ))}
      </div>
      <div className={b('footer-left')}>
        <p className={b('footer-links')}>
          <NavLink to='/' className={String(b('link'))}>
            Home
          </NavLink>
          <NavLink to='/about' className={String(b('link'))}>
            About
          </NavLink>
          <NavLink to='/technologies' className={String(b('link'))}>
            Technologies
          </NavLink>
          <NavLink to='/my-work' className={String(b('link'))}>
            My work
          </NavLink>
          <NavLink to='/contact' className={String(b('link'))}>
            Contact
          </NavLink>
        </p>
        <p> Copyright&copy; Stefan Milic 2019</p>
      </div>
    </footer>
  );
}

export default Footer;
