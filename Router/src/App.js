import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Navbar from './Navbar';
import Menu from './Menu';
import Error from './Error';
const App = () => {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route exact path='/about' component={About} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/' component={Navbar} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );  
};

export default App;
