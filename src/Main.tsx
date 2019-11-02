import React, { useEffect } from 'react';
import { block } from 'bem-cn';
import AOS from 'aos';
import 'aos/dist/aos.css';
import App from './App';

const b = block('portfolio');

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className={b()}>
      <div className={b('cover-overlay')} />
      <App />
    </div>
  );
};

export default Main;
