import React from "react";
//import './addemp.css';
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
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
import "../pdfMaker";
import jsPDF from "jspdf";
import $ from "jquery";
import ReactTooltip from "react-tooltip";

var field1Value;
var field2Value;
var field3Value;
var field4Value;
var field5Value;
var field6Value;
var field7Value;
var field8Value;
var field9Value;
var field10Value;
var field11Value;
var field12Value;
var field13Value;
var field14Value;
var field15Value;
var field16Value;
var field17Value;
var prediction1;

const API = "http://localhost:5000/TNBCprediction";
class predictor2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      prediction1: "",
      prediction2: "",
      field1: "",
      field2: "",
      field3: "",
      field4: "",
      field5: "",
      field6: "",
      field7: "",
      field8: "",
      field9: "",
      field10: "",
      field11: "",
      field12: "",
      field13: "",
      field14: "",
      field15: "",
      field16: "",
      field17: ""
    };
  }
  handleDownload = () => {
    this.setState({ hide: false });
    $().ready(function() {
      var specialElementHandlers = {
        "#editor": function(element, renderer) {
          return true;
        }
      };

      $("#cmd").click(function() {
        var doc = new jsPDF();
        // doc.fromHTML($("#root").html(), 15, 15, {
        //   width: 170,
        //   elementHandlers: specialElementHandlers
        // });
        // var value = this.state.field1;
        doc.setFontSize(25);
        doc.setFontStyle("bold");
        doc.text(70, 10, ` PREDICTION REPORT `);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 20, `ALDH1A1`);
        doc.text(120, 20, field1Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 30, `GLI2`);
        doc.text(120, 30, field2Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 40, `BRCA1`);
        doc.text(120, 40, field3Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 50, `BRCA2`);
        doc.text(120, 50, field4Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 60, `CDH1`);
        doc.text(120, 60, field5Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 70, `PTEN`);
        doc.text(120, 70, field6Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 80, `PTPN3`);
        doc.text(120, 80, field7Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 90, `TP53`);
        doc.text(120, 90, field8Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 100, `PDGFD `);
        doc.text(120, 100, field9Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 110, `CLDN2`);
        doc.text(120, 110, field10Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 120, `TJP2`);
        doc.text(120, 120, field11Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 130, `CD44`);
        doc.text(120, 130, field12Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 140, `PAM50_Basal`);
        doc.text(120, 140, field13Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 150, `PAM50_LumA`);
        doc.text(120, 150, field14Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 160, `PAM50_LumB`);
        doc.text(120, 160, field15Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 170, `PAM50lite_Basal`);
        doc.text(120, 170, field16Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 180, `PAM50lite_Non Basal`);
        doc.text(120, 180, field17Value);

        doc.setFontSize(16);
        doc.setFontStyle("bold");
        doc.text(
          10,
          190,
          `Likelihood of having Tripple Negative Breast Cancer: ${prediction1 *
            100}`
        );

        doc.save("Report.pdf");
      });
    });
  };
  submitForm(e) {
    e.preventDefault();

    //ASSIGNING VALUES TO THE VARIABLES FOR PDF FILE
    field1Value = this.state.field1;
    field2Value = this.state.field2;
    field3Value = this.state.field3;
    field4Value = this.state.field4;
    field5Value = this.state.field5;
    field6Value = this.state.field6;
    field7Value = this.state.field7;
    field8Value = this.state.field8;
    field9Value = this.state.field9;
    field10Value = this.state.field10;
    field11Value = this.state.field11;
    field12Value = this.state.field12;
    field13Value = this.state.field13;
    field14Value = this.state.field14;
    field15Value = this.state.field15;
    field16Value = this.state.field16;
    field17Value = this.state.field17;

    let data = {
      ALDH1A1: this.state.field1,
      GLI2: this.state.field2,
      BRCA1: this.state.field3,
      BRCA2: this.state.field4,
      CDH1: this.state.field5,
      PTEN: this.state.field6,
      PTPN3: this.state.field7,
      TP53: this.state.field8,
      PDGFD: this.state.field9,
      CLDN2: this.state.field10,
      TJP2: this.state.field11,
      CD44: this.state.field12,
      PAM50_Basal: this.state.field13,
      PAM50_LumA: this.state.field14,
      PAM50_LumB: this.state.field15,
      PAM50lite_Basal: this.state.field16,
      PAM50lite_Non_basal: this.state.field17
    };
    console.log(data);
    fetch(API, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.finalPrediction);
        this.setState({
          prediction1: responseJson.finalPrediction1
        });
        this.setState({
          prediction2: responseJson.finalPrediction2
        });
        //this.setState({pressed: false});
        prediction1 = this.state.prediction1;
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log([e.target.name] + e.target.type + e.target.value);
  }
  render() {
    return (
      <div
        style={{
          backgroundColor: "rgba(0,0,0,0.5)",
          margin: "-43px",
          height: "550px"
        }}
      >
        <Navbar
          className="justify-content-center"
          color="light"
          style={{ fontFamily: "arial", marginTop: "-20px", height: "84px" }}
        >
          <NavItem>
            <NavLink
              href="/predictor1"
              style={{ fontFamily: "arial", marginTop: "3px" }}
            >
              ALPHA-PRED
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/survival"
              style={{ fontFamily: "arial", marginTop: "3px" }}
            >
              RISK ASSESSMENT
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="/recommendation"
              style={{ fontFamily: "arial", marginTop: "3px" }}
            >
              RECOMMENDATION
            </NavLink>
          </NavItem>
        </Navbar>{" "}
        <div
          className="text-center"
          style={{ backgroundColor: "#5b6a70", height: "30px", font: "Arial" }}
        >
          {" "}
          <h4>
            {"Likelihood to have Tripple Negative Breast Cancer:"}
            {this.state.prediction1 * 100}
            {"% "}
          </h4>
        </div>
        <div
          style={{
            borderRadius: "5%",
            columnCount: 3,
            WebkitColumnCount: 3,
            MozColumnCount: 3
          }}
        >
          <Form
            onSubmit={this.onSubmit}
            style={{ marginBottom: "10px", padding: "20px" }}
          >
            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                ALDH1A1
              </label>
              <input
                data-tip="Range (0.0 - o.99) ALDH1A1 Gene altered "
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 33
                }}
                type="text"
                onChange={this.onChange.bind(this)}
                value={this.state.field1}
                name="field1"
              />
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                GLI2
              </label>
              <input
                data-tip="Range (0.0 - o.99)GLI2 Gene altered "
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 33
                }}
                type="text"
                onChange={this.onChange.bind(this)}
                value={this.state.field2}
                name="field2"
              />
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                BRCA1
              </label>
              <input
                data-tip="Range (0.0 - o.99)BRCA Gene altered "
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 33
                }}
                type="text"
                onChange={this.onChange.bind(this)}
                value={this.state.field3}
                name="field3"
              />
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                BRCA2
              </label>
              <input
                data-tip="Range (0.0 - o.99)BRCA2 Gene altered "
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 33
                }}
                type="text"
                value={this.state.field4}
                onChange={this.onChange.bind(this)}
                name="field4"
              />
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                CDH1
              </label>
              <input
                data-tip="Range (0.0 - o.99)CDH1 Gene altered "
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 33
                }}
                type="text"
                value={this.state.field5}
                onChange={this.onChange.bind(this)}
                name="field5"
              />
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                PTEN
              </label>
              <input
                data-tip="Range (0.0 - o.99)PTEN Gene altered "
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  marginBottom: "28px",
                  height: "70%",
                  blockSize: 33
                }}
                type="text"
                value={this.state.field6}
                onChange={this.onChange.bind(this)}
                name="field6"
              />
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                PTPN3
              </label>
              <Input
                data-tip="Range (0.0 - o.99)PTPN3 Gene altered "
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 33
                }}
                type="text"
                value={this.state.field7}
                onChange={this.onChange.bind(this)}
                value={this.state.field7}
                name="field7"
              />
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                TP53
              </label>
              <Input
                data-tip="Range (0.0 - o.99)TP53 Gene altered "
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 33
                }}
                type="text"
                value={this.state.field8}
                onChange={this.onChange.bind(this)}
                name="field8"
              />
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px",
                  marginTop: "0px",
                  marginBottom: "0px"
                }}
              >
                PDGFD
              </label>
              <Input
                data-tip="Range (0.0 - o.99)PDGFD Gene altered "
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  height: "70%",
                  marginTop: "3px",
                  blockSize: 33
                }}
                type="text"
                value={this.state.field9}
                onChange={this.onChange.bind(this)}
                name="field9"
              />
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px",
                  marginTop: "0px"
                }}
              >
                CLDN2
              </label>
              <Input
                data-tip="Range (0.0 - o.99)CLDN2 Gene altered "
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 33
                }}
                type="text"
                value={this.state.field10}
                onChange={this.onChange.bind(this)}
                name="field10"
              />
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                TJP2
              </label>
              <Input
                data-tip="Range (0.0 - o.99)TJP2 Gene altered "
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 33
                }}
                type="text"
                value={this.state.field11}
                onChange={this.onChange.bind(this)}
                name="field11"
              />
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                CD44
              </label>
              <Input
                data-tip="Range (0.0 - o.99)CD44 Gene altered "
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",

                  height: "70%",
                  blockSize: 33
                }}
                type="text"
                value={this.state.field12}
                onChange={this.onChange.bind(this)}
                name="field12"
              />
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px",
                  marginTop: "70px"
                }}
              >
                PAM50_Basal
              </label>
              <select
                data-tip="BASAL Status by Prediction Analysis of Microarray 50(PAM50) testing "
                name="field13"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  marginTop: "70px",
                  height: "70%",
                  blockSize: 33
                }}
              >
                <option value="">Select</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                PAM50_LumA
              </label>
              <select
                data-tip="Luminal A finding by Prediction Analysis of Microarray 50(PAM50) testing "
                name="field14"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 33
                }}
              >
                <option value="">Select</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                PAM50_LumB
              </label>
              <select
                data-tip="Luminal B finding by Prediction Analysis of Microarray 50(PAM50) testing "
                name="field15"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 33
                }}
              >
                <option value="">Select</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                PAM50lite_Basal
              </label>
              <select
                data-tip="Luminal B finding by Prediction Analysis of Microarray 50(PAM50) testing "
                name="field16"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 33
                }}
              >
                <option value="">Select</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "77.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                PAM50lite_Non_basal
              </label>
              <select
                data-tip="Non Basal finding by Prediction Analysis of Microarray 50(PAM50) testing "
                name="field17"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "3px",
                  marginTop: "10px",
                  height: "120%",
                  blockSize: 33
                }}
              >
                <option value="">Select</option>
                <option value="1">Yes</option>
                <option value="0">No</option>
              </select>
            </div>

            <div className="text-left">
              <br />
              <Button
                style={{
                  marginLeft: -4,
                  width: 120
                }}
                onClick={this.submitForm.bind(this)}
                type="submit"
                className="btn btn-info"
              >
                Predict
              </Button>
              {this.state.prediction1 && (
                <Button
                  id="cmd"
                  style={{
                    marginLeft: 7,
                    width: 190
                  }}
                  onClick={this.handleDownload}
                  type="button"
                  className="btn btn-info"
                >
                  Download PDF
                </Button>
              )}

              <h5></h5>
            </div>
          </Form>
        </div>
        <ReactTooltip />
      </div>
    );
  }
}

export default predictor2;
