import React, { Component } from 'react';
import { block } from 'bem-cn';
import { NavLink } from 'react-router-dom';

const b = block('nav-bar');

export default class NavBar extends Component {
  state = {
    toggle: false,
  };

  handleToggleChange = () => {
    this.setState({ toggle: !this.state.toggle });
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
          onClick={this.handleToggleChange}
        >
          <div className={b('btn-line')}></div>
          <div className={b('btn-line')}></div>
          <div className={b('btn-line')}></div>
        </div>
        <nav className={b('menu', { show: toggle })}>
          <div className={b('menu-branding', { show: toggle })}>
            <div className={b('portrait')}></div>
          </div>
          <ul className={b('menu-nav', { show: toggle })}>
            {links.map(item => {
              return (
                <li className={b('nav-item', { show: toggle })} key={item.name}>
                  <NavLink
                    exact
                    to={item.link}
                    className={String(b('nav-item-link'))}
                    onClick={this.handleToggleChange}
                  >
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
