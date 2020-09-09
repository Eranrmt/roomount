/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { Pane } from 'evergreen-ui';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './routes/Home';

import HOMain from './containers/HotelOwnerContainer' 
import HOAddQuantity from './containers/HotelOwnerContainer/rooms/HOAddQuantity/HOAddQunatity' 
import HOAddRate from './containers/HotelOwnerContainer/rooms/HOAddRate/HOAddRate' 
import HOAddRoom from './containers/HotelOwnerContainer/rooms/HOAddRoom/HOAddRoom' 
import HODeleteRoomType from './containers/HotelOwnerContainer/rooms/HODeleteRoomType/HODeleteRoomType' 

import { SignIn } from './routes/SignIn';
import { SignUp } from './routes/SignUp';
import { Reserve } from './routes/Reserve';
import { messages } from './intl';
import { HomePage } from './containers/HomePage'
import { RMPolicy } from './static/RMPolicy'
import { RMTerms } from './static/RMTerms'
import { RMFAQ } from './static/RMFAQ'
import { RMContact } from './static/RMContact'


function App() {
  const { locale } = useSelector((state) => state.intl);

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <Router>
        <Header />
              <Pane minHeight="calc(100vh - 120px)" maxHeight="calc(100vh - 120px)">
                  <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/home-ho" component={HOMain} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/hotelInfo/:hotelId" component={Home} />
                    <Route path="/hotelInfo" component={Home} />
                    <Route path="/reserve" component={Reserve} />
                    <Route path="/privacy-policy" component={RMPolicy} />
                    <Route path="/terms-of-use" component={RMTerms} />
                    <Route path="/faq" component={RMFAQ} />
                      <Route path="/contact-us" component={RMContact} />

                      <Route path="/HOAddRoom" component={HOAddRoom} />
                      <Route path="/HOAddRate" component={HOAddRate} />
                      <Route path="/HOAddQuantity" component={HOAddQuantity} />
                      <Route path="/HODeleteRoomType" component={HODeleteRoomType} />
                      
                  </Switch>
               </Pane>
        <Footer />
      </Router>
    </IntlProvider>
  );
}

export default App;
