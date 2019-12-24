import React from "react";
// nodejs library that concatenates classes
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    Label,
    FormGroup,
    Form,
    Input,
    FormText,
    NavItem,
    NavLink,
    Nav,
    Table,
    TabContent,
    TabPane,
    Container,
    Row,
    Col,
    UncontrolledTooltip,
    UncontrolledCarousel
} from "reactstrap";

// core components




class AboutUs extends React.Component {
  
  render() {
    return (
      <>
      <div style={{backgroundColor:"rgba(0,0,0,0.5)",margin:"10px",borderRadius:"5%"}}>
      
        <main ref="main">
          <div className="position-relative">
          </div>
               <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3 text-white" >
                    TEAM
                  </h2>
                  <p className="lead text-white" style={{paddingTop:50}}>
                  </p>
                </Col>
              </Row>
              <Container>
              <Row className="justify-content-between">
                
                <Col md="5">
                  <h1 className="profile-title text-left">Moosa Zubairi</h1>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description text-left">
                    Backend Developer
                  </p>
                  </Col>
              </Row>
            </Container>
            <Container>
              <Row className="justify-content-between">
                
                <Col md="5">
                  <h1 className="profile-title text-left">Zeenat Khan</h1>
                  <h5 className="text-on-back">02</h5>
                  <p className="profile-description text-left">
                    Frontend Developer
                  </p>
                 
                </Col>
               
              </Row>
            </Container>
          </Container>
      
        </main>
        </div>
      </>
    );
  }
}

export default AboutUs;
