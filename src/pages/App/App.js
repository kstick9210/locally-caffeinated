import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import ShopSearchPage from '../ShopSearchPage/ShopSearchPage';

import NavBar from "../../components/NavBar/NavBar";

import userService from '../../services/userService';
import * as GoogleAPI from '../../services/googleplaces-api';

import "./App.css";

const App = () => {
  const [user, setUser] = useState('');
  const [shops, setShops] = ([]);

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  };

  const handleSearchSubmit = async (event, searchTerm) => {
    event.preventDefault();
    console.log(searchTerm);
    
  };

  return (
    <>
      <NavBar 
        user={user}
        handleLogout={handleLogout}
      />

      <Switch>
        <Route exact path="/login" render={({history}) => 
          <>
            <LoginPage 
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          </>
        }></Route>

        <Route exact path="/signup" render={({history}) => 
          <>
            <SignupPage 
              history={history}
              handleSignupOrLogin={handleSignupOrLogin}
            />
          </>
        }></Route>

        <Route exact path="/search" render={({history}) => 
          <>
            <ShopSearchPage 
              history={history}
              handleSearchSubmit={handleSearchSubmit}
            />
          </>
        }></Route>
      </Switch>
    </>
  );
};

export default App;