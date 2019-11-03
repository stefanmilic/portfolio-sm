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
          <div className={b('wrapper')}>
            <FontAwesomeIcon key={index} icon={icon} size='1x' />
          </div>
        ))}
      </div>
      <div className={b('footer-left')}>
        <p className={b('footer-links')}>
          <NavLink to='/' className={b('link')}>
            Home
          </NavLink>
          <NavLink to='/about' className={b('link')}>
            About
          </NavLink>
          <NavLink to='/technologies' className={b('link')}>
            Technologies
          </NavLink>
          <NavLink to='/my-work' className={b('link')}>
            My work
          </NavLink>
          <NavLink to='/contact' className={b('link')}>
            Contact
          </NavLink>
        </p>
        <p> Copyright&copy; Stefan Milic 2019</p>
      </div>
    </footer>
  );
}

export default Footer;
