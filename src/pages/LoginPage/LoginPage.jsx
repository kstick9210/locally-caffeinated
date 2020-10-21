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
    <div className="flex-wrapper">
      <div className="LoginPage">
        <h1>Log In</h1>
        <form className="login-form" autoComplete="off" onSubmit={handleSubmit} >
          <div className="login-input-wrapper">
            <label htmlFor="email" className="login-label">Email: </label>
            <input type="text" autoComplete="off" id="email" className="active login-input" value={loginInfo.email} name="email" onChange={handleChange} />
          </div>
          <div className="login-input-wrapper">
            <label htmlFor="password" className="login-label">Password: </label>
            <input type="password" autoComplete="off" className="active login-input" id="password" value={loginInfo.password} name="password" onChange={handleChange} />
          </div>
          <div className="login-btn-wrapper">
            <button className="btn pos-btn" id="login-button">Log In</button>
            <Link to="/" className="btn neg-btn">Cancel</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;