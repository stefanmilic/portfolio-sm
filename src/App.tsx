import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { block } from 'bem-cn';
import Home from '@components/Home';
import About from '@components/About';
import Technologies from 'src/components/Technologies';
import Contact from '@components/Contact';
import MyWork from '@components/MyWork';
import NavBar from './components/NavBar';

const b = block('app-pages');

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <div className={b()}>
        <Switch>
          <Route path='/about' component={About} />
          <Route path='/my-work' component={MyWork} />
          <Route path='/technologies' component={Technologies} />
          <Route path='/contact' component={Contact} />
          <Route exact path='/' component={Home} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
