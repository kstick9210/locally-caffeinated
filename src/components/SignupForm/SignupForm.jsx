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
    <div>
      <h1 className="signup-title">Sign Up</h1>
      <form className="signup-form" autoComplete="off" onSubmit={handleSubmit} >
        <input type="text" autoComplete="off" className="active signup-input" id="name" value={signupInfo.name} name="name" onChange={handleChange} placeholder="Name"/>
        <input type="text" autoComplete="off" className="active signup-input" id="email" value={signupInfo.email} name="email" onChange={handleChange} placeholder="Email"/>
        <input type="password" autoComplete="off" className="active signup-input" id="password" value={signupInfo.password} name="password" onChange={handleChange} placeholder="Password"/>
        <input type="password" autoComplete="off" className="active signup-input" id="confirm" value={signupInfo.passwordConf} name="passwordConf" onChange={handleChange} placeholder="Confirm Password"/>
        <div className="btn-wrapper">
          <button disabled={isFormInvalid()}>Sign Up</button>
          <Link to="/">Cancel</Link>
        </div>
      </form>
    </div>
  );
}

export default SignupForm;