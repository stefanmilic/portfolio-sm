import React, { Component } from 'react';
import { block } from 'bem-cn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faViber,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const b = block('home-page');

export default class Home extends Component {
  render() {
    return (
      <div className={b()}>
        <div className={b('name')}>Stefan Milic</div>
        <div className={b('position')}> Programer, Frontend Developer</div>
        <div className='icons'>
          <FontAwesomeIcon icon={faGithub} size='2x' />
          <FontAwesomeIcon icon={faLinkedin} size='2x' />
          <FontAwesomeIcon icon={faViber} size='2x' mask={['fas', 'circle']} />
          <FontAwesomeIcon icon={faEnvelope} size='2x' />
        </div>
        <div id='quote' data-aos='zoom-in' data-aos-delay='1000'>
          <h2>
            &#8220;There is nothing like a dream to create the future &#8221;
          </h2>
          <p>~Victor Hugo~</p>
        </div>
      </div>
    );
  }
}
