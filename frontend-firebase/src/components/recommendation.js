import React from "react";
import "./recommendation.css";
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
import Image1 from "../assets/img/me/doc.jpg";
import Image2 from "../assets/img/me/foo.jpg";
import Image3 from "../assets/img/me/ex.jpg";

class recommendation extends React.Component {
  handleDoctor = () => {
    window.open("https://www.marham.pk/find-a-doctor");
  };

  handleFood = () => {
    window.open(
      "https://www.medicalnewstoday.com/articles/316720.php#foods-to-eat"
    );
  };

  handlehealth = () => {
    window.open(
      "https://www.maurerfoundation.org/how-to-reduce-your-risk-of-breast-cancer-with-exercise/"
    );
  };

  render() {
    return (
      <div style={{ backgroundColor: "rgba(0,0,0,0.5)", margin: "3px" }}>
        <Navbar
          className="justify-content-center"
          color="light"
          style={{ fontFamily: "arial", marginTop: "-43px" }}
        >
          <NavItem>
            <NavLink href="/predictor2" style={{ fontFamily: "arial" }}>
              BETA-PRED
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/predictor1" style={{ fontFamily: "arial" }}>
              ALPHA-PRED
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/survival" style={{ fontFamily: "arial" }}>
              RISK ASSESSMENT
            </NavLink>
          </NavItem>
        </Navbar>
        <h3 className="centered" style={{ color: "lightblue" }}>
          Recommendations
        </h3>

        <div className="card-deck">
          <div className="card">
            <img
              src={Image1}
              alt="Doctor"
              style={{
                height: "259px",
                width: "348.756px"
              }}
            />
            <div classname="card-body">
              <h5 className="centered" style={{ color: "black" }}>
                Doctors
              </h5>
              <p className="centered" style={{ color: "black" }}>
                You can view specialized doctors(eg. Oncologists, Radiologist)
                directory
              </p>
              <button
                className="btn btn-info"
                size="lg"
                style={{
                  marginRight: 5,
                  marginLeft: 130,
                  border: "1px solid"
                }}
                onClick={this.handleDoctor}
              >
                More
              </button>
            </div>
          </div>
          <div className="card" style={{}}>
            <img
              src={Image2}
              alt="Food"
              style={{
                height: "259px",
                width: "348.756px"
              }}
            />
            <div classname="card-body">
              <h5 className="centered" style={{ color: "black" }}>
                Food and Nutrition
              </h5>
              <p className="centered" style={{ color: "black" }}>
                Healthy food and food to avoid are mentioned in the directory
              </p>

              <button
                className="btn btn-info"
                size="lg"
                style={{ marginRight: 5, marginLeft: 130, border: "1px solid" }}
                onClick={this.handleFood}
              >
                More
              </button>
            </div>
          </div>

          <div className="card" style={{}}>
            <img
              src={Image3}
              alt="Health"
              style={{
                height: "259px",
                width: "348.756px"
              }}
            />
            <div classname="card-body">
              <h5 className="centered" style={{ color: "black" }}>
                Healthy Exercises
              </h5>
              <p className="centered" style={{ color: "black" }}>
                Exercises that keeps you healthy and affective to cure breast
                cancer
              </p>
              <button
                className="btn btn-info"
                size="lg"
                style={{ marginRight: 5, marginLeft: 130, border: "1px solid" }}
                onClick={this.handlehealth}
              >
                More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default recommendation;
