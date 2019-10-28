import React, { Component } from 'react';
import { block } from 'bem-cn';

import App from './App';

const b = block('portfolio');

export default class Home extends Component {
  render() {
    return (
      <div className={b()}>
        <div className={b('cover-overlay')} />
        <App />
      </div>
    );
  }
}
