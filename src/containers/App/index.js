/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { IntlProvider } from 'react-intl';
import { Switch, Route } from 'react-router-dom';

import HomePage from '../HomePage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import Header from '../Header';
import AuthService from '../AuthService';
import AuthPage from '../AuthPage';
import HOMain from '..//HotelOwnerContainer/index' 

import RMContact from '../../static/RMContact'
import RMFAQ from '../../static/RMFAQ'
import RMPolicy from '../../static/RMPolicy'
import RMTerms from '../HomePage/Loadable';
import './colors.css';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <AuthService />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/auth/:type(register|login)" component={AuthPage} />
        <Route path="/policy" component={RMPolicy}/>
        <Route path="/terms" component={RMTerms}/>
        <Route path="/faq" component={RMFAQ}/>
        <Route path="/contact" component={RMContact} />
        <Route path="/hotelportal" component={HOMain} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
