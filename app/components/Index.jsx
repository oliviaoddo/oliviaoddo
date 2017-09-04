import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navigation from './Nav';
import Footer from './Footer';
import Home from './Home';

import Projects from './Projects';
import Blog from './Blog';
import Education from './Education';
import Contact from './Contact';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navColor: ''
    };
  }

  setNavColor = color => {
    this.setState({ navColor: color });
  };

  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/blog" component={Blog} />
            <Route exact path="/education" component={Education} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
