import React, { useState, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';
import ShopSearchPage from '../ShopSearchPage/ShopSearchPage';
import ShopDetailsPage from '../ShopDetails/ShopDetailsPage';

import NavBar from "../../components/NavBar/NavBar";

import userService from '../../services/userService';
import * as GoogleAPI from '../../services/googleplaces-api';

import "./App.css";

const App = () => {
  const [user, setUser] = useState('');
  const [shops, setShops] = useState([]);

  const handleLogout = () => {
    userService.logout();
    setUser(null);
  };

  const handleSignupOrLogin = () => {
    setUser(userService.getUser());
  };

  const handleSearchSubmit = async (event, searchTerm) => {
    event.preventDefault();
    const searchResults = await GoogleAPI.search(searchTerm);
    setShops(searchResults.data.results);
  };

  useEffect(() => console.log(shops))

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
              shops={shops}
            />
          </>
        }></Route>

        <Route path="/shopdetails/:id" render={({history}) => 
          <>
            <ShopDetailsPage 
              history={history}
            />
          </>
        }></Route>
      </Switch>
    </>
  );
};

export default App;