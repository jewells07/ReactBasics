import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
import Service from './Service';
import User from './User';
import Home from './Home';
import Search from './Search';
import Error from './Error';
import './App.css'
const App = () => {
  // Difference => Component will create new everytime when its called and render will change only in update

  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/about" component={() => <About name="About" />} />
          <Route
            exact
            path="/service"
            render={() => <Service name="Service" />}
          />
          <Route exact path="/search" component={Search} />
          <Route exact path="/contact" component={Contact} />
          <Route  path="/user/:fname/:lname" component={User} />
          <Route  path="/" component={Home} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
