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
  state = {
    toggle: false,
  };
  render() {
    const { toggle } = this.state;
    return (
      <div className={b()}>
        <div className={b('cover-image')} />

        <header className={b('header')}>
          <div
            className={b('menu-btn', { close: toggle })}
            onClick={() => this.setState({ toggle: !toggle })}
          >
            <div className={b('btn-line')}></div>
            <div className={b('btn-line')}></div>
            <div className={b('btn-line')}></div>
          </div>
          <nav className={b('menu', { show: toggle })}>
            <div className='menu-branding'>
              <div className='portrait'></div>
            </div>
            <ul className='menu-nav'>
              <li className='nav-item current'>
                <a href='index.html' className='nav-item-link'>
                  Home
                </a>
              </li>
              <li className='nav-item'>
                <a href='about.html' className='nav-item-link'>
                  About me
                </a>
              </li>
              <li className='nav-item '>
                <a href='Technologies.html' className='nav-item-link'>
                  Technologies
                </a>
              </li>
              <li className='nav-item'>
                <a href='work.html' className='nav-item-link'>
                  My Work
                </a>
              </li>
              <li className='nav-item'>
                <a href='contact.html' className='nav-item-link'>
                  How to Reach me
                </a>
              </li>
            </ul>
          </nav>
        </header>
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
