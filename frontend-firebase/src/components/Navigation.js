import React from "react";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col
} from "reactstrap";
import { Link } from "react-router-dom";
import SignOutButton from "./SignOut";
import * as routes from "../constants/routes";
import AuthUserContext from "./AuthUserContext";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth userInfo={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationNonAuth = () => (
  <Navbar className="fixed-top" expand="lg" color="dark">
    <NavbarBrand
      data-placement="bottom"
      to="/"
      rel="noopener noreferrer"
      title="Designed and Coded by MEDZEMO"
      tag={Link}
      style={{ color: "white" }}
    >
      <span>MEDZEMO. </span>
      Breast Cancer Predictor
    </NavbarBrand>
    <div
      className="nav justify-content-end"
      style={{ color: "white", marginLeft: "50%" }}
    >
      <NavItem>
        <NavLink
          style={{
            color: "white"
          }}
          className="nav-link-icon"
          to="/AboutUs"
          tag={Link}
        >
          <span className="nav-link-inner--text">About Us</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          style={{
            color: "white"
          }}
          className="nav-link-icon"
          to="/SignIn"
          tag={Link}
        >
          <span className="nav-link-inner--text">Login</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink
          style={{
            color: "white"
          }}
          className="nav-link-icon"
          to="/SignUp"
          tag={Link}
        >
          <span className="nav-link-inner--text">Register</span>
        </NavLink>
      </NavItem>
    </div>
  </Navbar>
);

export default Navigation;

const NavigationAuth = ({ userInfo }) => (
  <Navbar className="fixed-top" expand="lg" color="dark">
    <NavbarBrand
      data-placement="bottom"
      to="/"
      rel="noopener noreferrer"
      title="Designed and Coded by MEDZEMO"
      tag={Link}
      style={{ color: "white" }}
    >
      <span>MEDZEMO. </span>
      Breast Cancer Predictor
    </NavbarBrand>
    <Nav className="ml-auto" navbar>
      <NavItem>
        <NavLink>
          <Link
            to={routes.HOME}
            style={{
              color: "white"
            }}
          >
            Home
          </Link>
        </NavLink>
      </NavItem>
      {userInfo.providerData[0].providerId === "facebook.com" ? null : (
        <NavItem>
          <NavLink>
            <Link
              to={routes.ACCOUNT}
              style={{
                color: "white"
              }}
            >
              Account
            </Link>
          </NavLink>
        </NavItem>
      )}
      <NavItem>
        <SignOutButton />
      </NavItem>
    </Nav>
  </Navbar>
);

// const NavigationAuth = ({ userInfo }) => (
//   <ul>
//     {/* {console.log("NavigationAuth", userInfo)} */}
//     <li>
//       <Link to={routes.LANDING}>Landing</Link>
//     </li>
//     <li>
//       <Link to={routes.HOME}>Home</Link>
//     </li>
//     {/* disabling password changes/resets if user is logged in through facebook */}
//     {userInfo.providerData[0].providerId === "facebook.com" ? null : (
//       <li>
//         <Link to={routes.ACCOUNT}>Account</Link>
//       </li>
//     )}
//     <li>
//       <SignOutButton />
//     </li>
//   </ul>
// );

// const NavigationNonAuth = () => (
//   <ul>
//     <li>
//       <Link to={routes.LANDING}>Landing</Link>
//     </li>
//     <li>
//       <Link to={routes.SIGN_IN}>Sign In</Link>
//     </li>
//   </ul>
// );
