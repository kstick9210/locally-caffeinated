import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import ShopSearchPage from "../ShopSearchPage/ShopSearchPage";
import ShopDetailsPage from "../ShopDetails/ShopDetailsPage";
import UserPage from "../UserPage/UserPage";

import NavBar from "../../components/NavBar/NavBar";

import userService from "../../services/userService";
import * as GoogleAPI from "../../services/googleplaces-api";
import * as ShopsAPI from "../../services/shops-api";

import "./App.css";

const App = () => {
  const [user, setUser] = useState('');
  const [shops, setShops] = useState([]);
  const [userShops, setUserShops] = useState([]);

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

  const handleAddShop = async (shopData) => {
    const newShop = await ShopsAPI.create(shopData);
    console.log("newShop in app.js -->", newShop);
    setUserShops([...userShops, newShop]);
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
              user={user}
              handleAddShop={handleAddShop}
            />
          </>
        }></Route>
        <Route path="/user/:id" render={({history}) => 
          <>
            <UserPage 
              history={history}
              user={user}
            />
          </>
        }></Route>
      </Switch>
    </>
  );
};

export default App;