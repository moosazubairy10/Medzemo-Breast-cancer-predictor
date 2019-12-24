import React, { Component } from "react";
import { BrowserRouter,Route, Link, Switch, Redirect } from "react-router-dom";
import { Container } from "reactstrap";
import "./App.css";
import "../index.css";


import { firebase } from "../firebase";
import * as routes from "../constants/routes";

//nav stuff
import Navigation from "./Navigation";
import LandingPage from "./Landing";
import SignUpPage from "./SignUp";
import SignInPage from "./SignIn";
import PasswordForgetPage from "./PasswordForget";
import HomePage from "./Home";
import AccountPage from "./Account";
import AboutUs from "./AboutUs";
import predictor1 from "./predictor1";
import survival from "./survival";
import predictor2 from "./predictor2";
import recommendation from "./recommendation";


import withAuthentication from "./withAuthentication";



const App = () => (

  
  <BrowserRouter>
    <Container>
    <Navigation></Navigation>
      <Route exact path={routes.LANDING} component={LandingPage} />
      <Route path={routes.SIGN_UP} component={SignUpPage} />
      <Route path={routes.SIGN_IN} component={SignInPage} />
      <Route path={routes.PASSWORD_FORGET} component={PasswordForgetPage}
      />
      <Route path={routes.HOME} component={HomePage} />
      <Route path={routes.ACCOUNT} component={AccountPage} />
           <Route path="/predictor1" component={predictor1} />
            <Route path="/survival" component={survival} />
            <Route path="/predictor2" component={predictor2} />
            <Route path="/recommendation" component={recommendation} />
            <Route path="/AboutUs" component={AboutUs} />
            
        
    </Container>
  </BrowserRouter>
 
);
// class App extends Component {
//   //holds info about if an user is signed in or not
//   state = {
//     authUser: null
//   };

//   componentDidMount() {
//     //a listener for the authenticated user
//     //if the user signs out, the authUser becomes null
//     firebase.auth.onAuthStateChanged(authUser => {
//       authUser
//         ? this.setState({ authUser })
//         : this.setState({ authUser: null });
//     });
//   }

//   render() {
//     return (
//       // <div className="App">
//       <BrowserRouter>
//         <div>
//           <Navigation authUser={this.state.authUser} />

//           <hr />

//           <Route exact path={routes.LANDING} component={LandingPage} />
//           <Route exact path={routes.SIGN_UP} component={SignUpPage} />
//           <Route exact path={routes.SIGN_IN} component={SignInPage} />
//           <Route
//             exact
//             path={routes.PASSWORD_FORGET}
//             component={PasswordForgetPage}
//           />
//           <Route exact path={routes.HOME} component={HomePage} />
//           <Route exact path={routes.ACCOUNT} component={AccountPage} />
//         </div>
//       </BrowserRouter>
//       // </div>
//     );
//   }
// }

// export default App;
export default withAuthentication(App); 
