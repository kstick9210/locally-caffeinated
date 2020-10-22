import React, { useState } from "react";
import { Route, Switch } from 'react-router-dom';

import NavBar from "../../components/NavBar/NavBar";

import LoginPage from '../LoginPage/LoginPage';
import SignupPage from '../SignupPage/SignupPage';

import userService from '../../services/userService';

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

    axios
      .get("/api/shops", {
        params: {
          searchTerm: searchTerm,
        },
      })
      .then((response) => {
        setShops(response.data.results);
      })
      .catch((err) => console.log(err));
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
      </Switch>
    </>
  );
};

export default App;