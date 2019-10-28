import React, { Component } from 'react';
import { block } from 'bem-cn';
import { NavLink } from 'react-router-dom';

const b = block('nav-bar');

export default class NavBar extends Component {
  state = {
    toggle: false,
  };
  render() {
    const { toggle } = this.state;
    const links = [
      { name: 'Home', link: '/' },
      { name: 'About me', link: '/about' },
      { name: 'Technologies', link: '/technologies' },
      { name: 'My Work', link: '/my-work' },
      { name: 'How to Reach me', link: '/contact' },
    ];
    return (
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
          <div className={b('menu-branding', { show: toggle })}>
            <div className='portrait'></div>
          </div>
          <ul className={b('menu-nav', { show: toggle })}>
            {links.map(item => {
              return (
                <li className={b('nav-item', { show: toggle })} key={item.name}>
                  <NavLink to={item.link} className={b('nav-item-link')}>
                    {item.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    );
  }
}
