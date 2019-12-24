import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import { FacebookLoginButton } from "react-social-login-buttons";
import logo from "./logo.svg";
import Image from '../assets/img/background.jpg';

import { withRouter } from "react-router-dom";

import { SignUpLink } from "./SignUp";
import { PasswordForgetLink } from "./PasswordForget";
import { auth, db } from "../firebase";
import * as routes from "../constants/routes";

const SignInPage = ({ history }) => {
  return (
    <div className="div-flex">
      <div>
        <h1 className="centered" style={{color:"black"}}>Login</h1>
        {/* <img src={logo} className="App-logo" alt="My logo" /> */}
        <SignInForm history={history} /> 
      </div>
    </div>
  );
};

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
  showingAlert: false
};

class SignInForm extends Component {
  state = { ...INITIAL_STATE };

  onSubmit = event => {
    const { email, password } = this.state;

    const { history } = this.props;

    auth
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
        this.timer(); //defined below
      });

    event.preventDefault();
  };

  facebookLogin = () => {
    const { history } = this.props;
    auth
      .doFacebookSignIn()
      .then(authUser => {
        console.log("authUser", authUser);

        db.doCreateUser(
          //store some info from facebook into the firebase db
          authUser.user.uid,
          authUser.user.displayName,
          authUser.user.email
        )
          .then(() => {
            // this.setState({
            //   ...INITIAL_STATE
            // });
            history.push(routes.HOME); //redirects to Home Page
          })
          .catch(error => {
            this.setState(byPropKey("error", error));
          });
      })
      .catch(error => {
        this.setState(byPropKey("error", error));
      });
  };

  timer = () => {
    this.setState({
      showingAlert: true
    });

    setTimeout(() => {
      this.setState({
        showingAlert: false
      });
    }, 4000);
  };

  render() {
    const { email, password, error, showingAlert } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div  style={{backgroundColor:"rgba(0,0,0,0.5)",margin:"10px",borderRadius:"5%"}}>
        {showingAlert && (
          <Alert color="danger" onLoad={this.timer}>
            {error.message}
          </Alert>
        )}

        <Form onSubmit={this.onSubmit} style={{marginBottom:"10px",padding:"20px"}}>
          <FormGroup>
            <Label for="exampleEmail" style={{color:"white"}}>Email</Label>
            <Input
              className="form-control"
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="user@gmail.com"
              value={email}
              onChange={event =>
                this.setState(byPropKey("email", event.target.value))
              }
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword" style={{color:"white"}}>Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="****"
              value={password}
              onChange={event =>
                this.setState(byPropKey("password", event.target.value))
              }
            />
          </FormGroup>

          <div className="text-center">
            <Button disabled={isInvalid} type="submit" className="btn btn-info">
              Login
            </Button>
          </div>
           <hr/>      
 <div style={{marginBottom:"30px"}}><FacebookLoginButton onClick={this.facebookLogin} /></div> 
        {/* <button onClick={this.facebookLogin}>Login with Facebook</button> */}
        <SignUpLink />
        <PasswordForgetLink  />
        </Form>
      </div>
    );
  }
}

export default withRouter(SignInPage);

export { SignInForm };

{
  /* <form onSubmit={this.onSubmit} className="center-form">
          <input
            value={email}
            onChange={event =>
              this.setState(byPropKey("email", event.target.value))
            }
            type="text"
            placeholder="Email Address"
          />
          <input
            value={password}
            onChange={event =>
              this.setState(byPropKey("password", event.target.value))
            }
            type="password"
            placeholder="Password"
          />
          <button disabled={isInvalid} type="submit">
            Sign In
          </button>

          {error && <p>{error.message}</p>}
        </form> */
}
