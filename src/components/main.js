import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import About from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume';
import notFound from './notFound';
const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path ="/contact" component={Contact} />
        <Route path ="/projects" component={Projects} />
        <Route path = "/resume" component={Resume} />
        <Route component={notFound} />
    </Switch>
)

export default Main;