import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../services/userService';
import './SignupForm.css';

const SignupForm = ({history, handleSignupOrLogin, updateMessage}) => {

  const [signupInfo, setSignupInfo] = useState({
    name:'',
    email:'',
    password:'',
    passwordConf:''
  })

  const handleChange = (e) => {
    updateMessage('');
    setSignupInfo({...signupInfo, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(signupInfo);
      handleSignupOrLogin();
      history.push('/');
    } catch (err) {
      updateMessage(err.message);
    }
  }

  const isFormInvalid = () => {
    return !(signupInfo.name && signupInfo.email && signupInfo.password === signupInfo.passwordConf);
  }
  
  return (
    <div className="SignupFormComp">
      <h1 className="signup-title">Sign Up</h1>
      <br />
      <form className="signup-form" autoComplete="off" onSubmit={handleSubmit} >
        <div className="signup-input-wrapper">
          <label htmlFor="name" className="signup-label">Name: </label>
          <input type="text" autoComplete="off" className="active signup-input" id="name" value={signupInfo.name} name="name" onChange={handleChange}/>
        </div>
        <div className="signup-input-wrapper">
          <label htmlFor="email" className="signup-label">Email: </label>
          <input type="text" autoComplete="off" className="active signup-input" id="email" value={signupInfo.email} name="email" onChange={handleChange}/>
        </div>
        <div className="signup-input-wrapper">
          <label htmlFor="password" className="signup-label">Password: </label>
          <input type="password" autoComplete="off" className="active signup-input" id="password" value={signupInfo.password} name="password" onChange={handleChange}/>
        </div>
        <div className="signup-input-wrapper">
          <label htmlFor="passwordConf" className="signup-label">Confirm Password: </label>
          <input type="password" autoComplete="off" className="active signup-input" id="confirm" value={signupInfo.passwordConf} name="passwordConf" onChange={handleChange}/>
        </div>
        <br />
        <div className="signup-btn-wrapper">
          <button className="btn pos-btn" disabled={isFormInvalid()}>Sign Up</button>
          <Link to="/" className="btn neg-btn">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;