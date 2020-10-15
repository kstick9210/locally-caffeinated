import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../services/userService';

const LoginPage = ({history, handleSignupOrLogin}) => {

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    setLoginInfo({...loginInfo, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(loginInfo);
      handleSignupOrLogin();
      history.push('/');
    } catch (err) {
      console.log(err)
    }
  }
  
  return (
    <div className="LoginPage">
      <h1>Log In</h1>
      <form className="login-form" autoComplete="off" onSubmit={handleSubmit} >
          <div>
            <input type="text" autoComplete="off" id="email" className="active login-input" value={loginInfo.email} name="email" onChange={handleChange} />
            <label htmlFor="email">Email</label>
          </div>
          <div>
            <input type="password" autoComplete="off" className="active login-input" id="password" value={loginInfo.password} name="password" onChange={handleChange} />
            <label htmlFor="password">Password</label>
          </div>
          <button id="login-button">Log In</button>
      </form>
      <Link to='/'>Cancel</Link>
    </div>
  );
}

export default LoginPage;