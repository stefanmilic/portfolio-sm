import React, { useState } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { block } from 'bem-cn';
import Home from '@components/Home';
import About from '@components/About';
import Technologies from 'src/components/Technologies';
import Contact from '@components/Contact';
import MyWork from '@components/MyWork';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const b = block('main-container');

const routes = [
  { path: '/about', component: <About /> },
  { path: '/my-work', component: <MyWork /> },
  { path: '/technologies', component: <Technologies /> },
  { path: '/contact', component: <Contact /> },
  { path: '/', showFooter: 'NO', component: <Home /> },
];

const App: React.FC = () => {
  const [showFooter, setShowFooter] = useState<boolean>(true);

  const showComponent = (route: any) => {
    return (
      <>
        {route.component}
        {setShowFooter(route.showFooter ? false : true)}
      </>
    );
  };

  return (
    <Router>
      <NavBar />
      <div className={b()}>
        <Switch>
          {routes.map(route => (
            <Route
              key={route.path}
              exact
              path={route.path}
              render={() => showComponent(route)}
            />
          ))}
        </Switch>
      </div>
      {showFooter && <Footer />}
    </Router>
  );
};

export default App;
