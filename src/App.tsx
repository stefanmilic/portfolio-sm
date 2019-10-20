import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

const App: React.FC = () => {
  const [count] = useState();
  let a = '';

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React {a}
        </a>
      </header>
    </div>
  );
};

export default App;
