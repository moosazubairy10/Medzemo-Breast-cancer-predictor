import React from "react";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.jsx";
import Footer from "components/Footer/Footer.jsx";
import Image1 from "../assets/img/me/4.jpg";
import Image2 from "../assets/img/me/2.jpg";
import Image3 from "../assets/img/me/5.jpg";
// reactstrap components
import SwiftSlider from "react-swift-slider";
import { Container } from "reactstrap";
import { Carousel } from "react-bootstrap";

const data = [
  {
    id: "1",
    src:
      "https://nutritionreview.org/wp-content/uploads/2014/09/HERfamily_lg.png"
  },
  {
    id: "2",
    src:
      "https://www.verywellhealth.com/thmb/qbybLU8tzKxBz3anjLZeUGJUctk=/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/diagnosis-and-testing-for-her2-positive-breast-cancer-4151804-53c6bdb1bb654ed69ce7f967626b7e4e.png"
  },
  {
    id: "3",
    src:
      "https://media.npr.org/assets/img/2015/04/21/double-helix_wide-59d06ae2356d33d5dc7e81f380e9e29686c9f48c.jpg?s=1400"
  },
  {
    id: "4",
    src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNEOjCletptqn3Ojjg3iXqao1OmwtRTLNjNQYiBwyOYQncBg1f&s"
  },
  {
    id: "5",
    src:
      "https://mdedge-files-live.s3.us-east-2.amazonaws.com/files/s3fs-public/gene_mutation_2_web.jpg"
  }
];
class LandingPage extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <h1
          className="centered"
          style={{
            color: "white",
            fontFamily: "Arial, Helvetica, sans-serif",
            margin: "27px"
          }}
        >
          MEDZEMO ❤
        </h1>

        <SwiftSlider data={data} style={{ height: 10, width: 50 }} />
      </div>
    );
  }
}

export default LandingPage;
