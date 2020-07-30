import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Menu from './Menu';
import Service from './Service';
import Error from './Error';
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
          <Route exact path="/contact" component={Contact} />
          <Route component={Error} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
