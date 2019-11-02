import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer className='footer-distributed'>
      <div className='footer-right'>
        <div className={'wrapper'}>
          <FontAwesomeIcon icon={faGithub} size='1x' />
        </div>
        <div className={'wrapper'}>
          <FontAwesomeIcon icon={faTwitter} size='1x' />
        </div>
        <div className={'wrapper'}>
          <FontAwesomeIcon icon={faLinkedin} size='1x' />
        </div>
        <div className={'wrapper'}>
          <FontAwesomeIcon icon={faFacebook} size='1x' />
        </div>
      </div>
      <div className='footer-left'>
        <p className='footer-links'>
          <a className='link-1'>Home</a>

          <a>About</a>

          <a>Contact</a>
        </p>

        <p>Company Name &copy; 2015</p>
      </div>
    </footer>
  );
}

export default Footer;
