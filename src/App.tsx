import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import Home from '@components/Home';
import About from '@components/About';
import Tehnologies from '@components/Tehnologies';
import Contact from '@components/Contact';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/tehnologies' component={Tehnologies} />
        <Route path='/contact' component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
