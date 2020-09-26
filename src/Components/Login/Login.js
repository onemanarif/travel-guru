import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import fbImg from '../Icon/fb.png';
import googleImg from '../Icon/google.png';
import { UserContext } from '../../App';
import { createUserWithEmailAndPassword, handleFbSignIN, handleGooglesignIn, handleSignOut, initializeLoginFramework, signInWithEmailAndPassword } from './LoginManager';

const Login = () => {

  const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useState({
    isSignIn: false,
    name: '',
    email: '',
    password: '',
    photo: ''
  })
  initializeLoginFramework();

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  let { from } = location.state || { from: { pathname: "/destination" } };

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          setUser(res);
          setLoggedInUser(res);
          history.replace(from);
        })
    }
    if (!newUser && user.email && user.password) {
      signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          setUser(res);
          setLoggedInUser(res);
          history.replace(from);
        })
    }
    e.preventDefault();
  }
  const googlesignIn = () => {
    handleGooglesignIn()
      .then(res => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      })
  }
  const fbSignIN = () => {
    handleFbSignIN()
      .then(res => {
        setUser(res);
        setLoggedInUser(res);
        history.replace(from);
      })
  }
  const signOut = () => {
    handleSignOut()
      .then(res => {
        setUser(res);
        setLoggedInUser(res);
      })
  }
  


  const handleBlur = (event) => {
    let isFieldValid;
    if (event.target.name === 'email') {
      isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
    }
    if (event.target.name === 'password') {
      const isPasswordValid = event.target.value.length > 6;
      const passwordHasNumber = /\d{1}/.test(event.target.value)
      isFieldValid = passwordHasNumber && isPasswordValid;
    }
    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[event.target.name] = event.target.value;
      setUser(newUserInfo);
    }
  }
  return (
    <div className="d-flex flex-column justify-content-center">
      <div className="from-style">
        <Form className="formStyle" onSubmit={handleSubmit} >
          {newUser && <input className="inputText" type="text" name="name" placeholder="Your name" id="" />}<br /><br/>
          <input type="text"  className="inputText"  onBlur={handleBlur} name="email" placeholder="Your email address" required /><br /><br />
          <input type="password"  className="inputText"  onBlur={handleBlur} name="password" id="" placeholder="Your password" required /><br />
          <Form.Group controlId="formBasicCheckbox" className="d-flex justify-content-between">
            <Form.Check type="checkbox" label="Remember Me" />
            <Link className="forgetPassword" href="#">Forget Password</Link>
          </Form.Group>
          <input type="submit" className="btn btn-warning btnStyle justify-content-center" value={newUser ? "Submit" : "login"} />
          <div className="text-center text-light span_link">
            <span >Don’t have an account? <Link onClick={() => setNewUser(!newUser)}>Create an account</Link> </span>
          </div>
          <div className="form_bottom">
            <div className="d-flex justify-content-center">
              <span></span> <h6>OR</h6>
              <span></span>
            </div>
          </div>
        </Form>
      </div><br />

      <div className="fbGoogleStyle ">
        <button className="fbBtn" onClick={()=>fbSignIN()}>

          <img src={fbImg} style={{ width: '30px', float: 'left', marginLeft: '20px' }} alt="" /> Continue with Facebook

                  </button> <br />
        <button className="fbBtn" onClick={() => googlesignIn()}>

          <img src={googleImg} style={{ width: '30px', float: 'left', marginLeft: '20px' }} alt="" /> Continue with Google

        </button>

      </div>
    </div>
  );
};

export default Login;