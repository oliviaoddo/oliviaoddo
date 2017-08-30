import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Navigation from './Nav';
import Footer from './Footer';
import Home from './Home';

import Projects from './Projects';
import Blog from './Blog';


export default class Main extends Component{
    render(){
        return(
                <Router>
                    <div>
                        <Navigation/>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/projects" component={Projects} />
                            <Route exact path="/blog" component={Blog} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
               )
    }
}

