import React, { Component } from "react";
import withAuthorization from "./withAuthorization";
import {
  link,
  Navbar,
  NavbarBrand,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";
import "./recommendation.css";
import { Route, Link, Switch, Redirect } from "react-router-dom";
import { db } from "../firebase";
import Image1 from "../assets/img/me/breast-cancer-21-638.jpg";
import Image2 from "../assets/img/me/Breast-Survival-2018.png";
import Image3 from "../assets/img/me/rec.jpg";
import Navigation from "./Navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { firestore } from "firebase";
import { SketchPicker } from "react-color";

class HomePage extends Component {
  state = {
    users: null,
    username: "",
    loading: true
  };

  componentDidMount() {
    // db.onceGetUsers().then(res => {
    //   this.setState({
    //     users: res.val()
    //   });
    // });

    const { loggedUser } = this.props;
    db.doGetAnUnser(loggedUser.uid).then(res => {
      this.setState({
        username: res.val().username,
        loading: false
      });
    });
  }

  render() {
    const { users, username, loading } = this.state;
    // console.log("dasdf", this.props.loggedUser);
    return (
      <div>
        <Navigation></Navigation>
        <div style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: "0%" }}>
          <h1 className="centered" style={{ color: "white" }}>
            WELCOME TO MEDZEMO
          </h1>
          <div className="card-deck" style={{ marginTop: "40px" }}>
            <div className="card" style={{}}>
              <img
                src={Image1}
                alt="Doctor"
                mode="fit"
                style={{
                  width: 350,
                  height: 250
                }}
              />
              <div classname="card-body" style={{}}>
                <h5 className="centered" style={{ color: "black" }}>
                  BREAST CANCER PREDICTORS
                </h5>
                <p className="centered" style={{ color: "black" }}>
                  You can check Breast cancer type through these predictors.
                </p>
                <Button
                  href="./predictor1"
                  className="btn btn-info"
                  size="lg"
                  style={{
                    marginRight: 4,
                    marginLeft: 25,
                    marginBottom: 1
                  }}
                >
                  ALPHA-PRED
                </Button>

                <Button
                  href="./predictor2"
                  className="btn btn-info"
                  size="lg"
                  style={{
                    marginRight: 5,
                    marginLeft: 5,
                    marginBottom: 1
                  }}
                >
                  BETA-PRED
                </Button>
              </div>
            </div>

            <div className="card">
              <img
                src={Image2}
                alt="Doctor"
                style={{
                  width: 350,
                  height: 250
                }}
              />
              <div classname="card-body">
                <h5 className="centered" style={{ color: "black" }}>
                  Risk Assessment
                </h5>
                <p className="centered" style={{ color: "black" }}>
                  You can get probability of your survival rate from cancer
                </p>
                <Button
                  href="./survival"
                  size="lg"
                  className="btn btn-info"
                  style={{
                    marginRight: 15,
                    marginLeft: 75,
                    marginBottom: 1
                  }}
                >
                  Risk Assessment
                </Button>
              </div>
            </div>
            <div className="card" style={{}}>
              <img
                src={Image3}
                alt="Doctor"
                style={{
                  width: 350,
                  height: 250
                }}
              />
              <div classname="card-body">
                <h5 className="centered" style={{ color: "black" }}>
                  Recommendations
                </h5>
                <p
                  className="centered"
                  style={{ color: "black", fontFamily: "arial" }}
                >
                  You can check recomendations for doctors,healthy exercises
                  and food.
                </p>
                <Button
                  href="./recommendation"
                  className="btn btn-info"
                  size="lg"
                  style={{
                    marginRight: 5,
                    marginLeft: 75,
                    marginBottom: 1,
                    color: "white"
                  }}
                >
                  Recommendation
                </Button>
              </div>
            </div>
          </div>
        </div>

        {!loading && <p className="centered">Hello {username}!</p>}

        {/* {!!users && <UserList users={users} />} */}
      </div>
    );
  }
}

// const UserList = ({ users }) => (
//   <div>
//     {console.log("users", users)}
//     <h2>List of Usernames of Users</h2>
//     <p>(Saved on Sign Up in Firebase Database)</p>

//     {Object.keys(users).map(key => (
//       <div key={key}>{users[key].username}</div>
//     ))}
//   </div>
// );

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(HomePage); //grants authorization to open endpoint if an user is signed in
