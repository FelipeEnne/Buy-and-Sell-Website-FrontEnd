import React from 'react';
import { Switch, Route } from 'react-router-dom';
import RouterHandler from './components/RouteHandler';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd';


export default () => (
    <Switch>
        <RouterHandler exact path='/'>
            <Home />
        </RouterHandler>
        <RouterHandler exact path='/about'>
            <About />
        </RouterHandler>
        <RouterHandler exact path='/signin'>
            <SignIn />
        </RouterHandler>
        <RouterHandler exact path='/signup'>
            <SignUp />
        </RouterHandler>
        <RouterHandler exact path='/ad/:id'>
            <AdPage />
        </RouterHandler>
        <RouterHandler exact private path='/ad/:id'>
            <AdPage />
        </RouterHandler>
        <RouterHandler exact private path='/post-and-ad'>
            <AddAd />
        </RouterHandler>
        <RouterHandler>
            <NotFound />
        </RouterHandler>
    </Switch>
);