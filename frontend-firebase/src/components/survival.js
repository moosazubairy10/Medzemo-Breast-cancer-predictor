import React from "react";
//import "./addemp.css";
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
var prediction1;

const API = "http://localhost:5000/survivalprediction";
class survival extends React.Component {
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
      field15: ""
    };
  }
  //THIS HANDLER MAKES A PDF FILE AND DOWNLOADS IT
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
        doc.setFontSize(15);
        doc.setFontStyle("bold");
        doc.text(80, 10, `Pridiction Report`);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 20, `ER Status Primary`);
        doc.text(120, 20, field1Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 30, `HER2 Status Primary`);
        doc.text(120, 30, field2Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 40, `Primary Tumor Laterality`);
        doc.text(120, 40, field3Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 50, `Menopausal Status At Diagnosis`);
        doc.text(120, 50, field4Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 60, `Metastatic Disease at Last Follow-up`);
        doc.text(120, 60, field5Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 70, `Overall Patient HER2 Status`);
        doc.text(120, 70, field6Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 80, `Overall Patient HR Status`);
        doc.text(120, 80, field7Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 90, `PR Status Primary`);
        doc.text(120, 90, field8Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 100, `Site of Sample `);
        doc.text(120, 100, field9Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 110, `Sample Type`);
        doc.text(120, 110, field10Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 120, `Stage at Diagnosis`);
        doc.text(120, 120, field11Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 130, `Tumor Stage`);
        doc.text(120, 130, field12Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 140, `Age Category:`);
        doc.text(120, 140, field13Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 150, `Fraction Genome Altered:`);
        doc.text(120, 150, field14Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 160, `Mutation Count`);
        doc.text(120, 160, field15Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(
          10,
          190,
          `  ${prediction1 * 100} % likely to survive in next 10 years`
        );

        doc.save("Report.pdf");
      });
    });
  };
  submitForm(e) {
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

    e.preventDefault();
    let data = {
      "ER Status Primary": this.state.field1,
      "HER2 Primary Status": this.state.field2,
      "Primary Tumor Laterality": this.state.field3,
      "Menopausal Status At Diagnosis": this.state.field4,
      "Metastatic Disease at Last Follow-up": this.state.field5,
      "Overall Patient HER2 Status": this.state.field6,
      "Overall Patient HR Status": this.state.field7,
      "PR Status Primary": this.state.field8,
      "Site of Sample": this.state.field9,
      "Sample Type": this.state.field10,
      "Stage at Diagnosis": this.state.field11,
      "Tumor Stage": this.state.field12,
      "Age Category": this.state.field13,
      "Fraction Genome Altered": this.state.field14,
      "Mutation Count": this.state.field15
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
          height: "600px",
          margin: "-60px"
        }}
      >
        <Navbar
          className="justify-content-center"
          color="light"
          style={{
            fontFamily: "arial",
            marginTop: "20px",
            marginBottom: "0px",
            height: "80px"
          }}
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
            <NavLink href="/recommendation" style={{ fontFamily: "arial" }}>
              Recommendations
            </NavLink>
          </NavItem>
        </Navbar>
        <div
          className="text-center"
          style={{ backgroundColor: "#5b6a70", height: "30px", font: "Arial" }}
        >
          {" "}
          <h4>
            {this.state.prediction1 * 100} % likely to survive in next 10 years{" "}
          </h4>
        </div>
        <div
          style={{
            borderRadius: "5%",
            columnCount: 2,
            WebkitColumnCount: 2,
            MozColumnCount: 2
          }}
        >
          <Form
            onSubmit={this.onSubmit}
            style={{ marginBottom: "10px", padding: "20px" }}
          >
            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                ER Primary Status
              </label>
              <select
                name="field1"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
              >
                <option value="">Select</option>
                <option value="2">Positive</option>
                <option value="1">Negative</option>
                <option value="0">Intermediate</option>
              </select>
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Her2 Primary Status
              </label>
              <select
                name="field2"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
              >
                <option value="">Select</option>
                <option value="3">Positive</option>
                <option value="1">Negative</option>
                <option value="0">Equivocal</option>
                <option value="4">unknown</option>
              </select>
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Primary status Laterality
              </label>
              <select
                name="field3"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
              >
                <option value="">Select</option>
                <option value="3">Right</option>
                <option value="2">Left</option>
                <option value="1">Bilateral/Right</option>
                <option value="0">Bilateral/Left</option>
              </select>
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Menopausal Status at Diagnosis
              </label>
              <select
                name="field4"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
              >
                <option value="">Select</option>
                <option value="3">Pre</option>
                <option value="2">Post</option>
                <option value="1">Peri</option>
                <option value="0">Male</option>
                <option value="4">unknown</option>
              </select>
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Metastatic Disease
              </label>
              <select
                name="field5"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
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
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Overall Her2 status
              </label>
              <select
                name="field6"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
              >
                <option value="">Select</option>
                <option value="1">Positive</option>
                <option value="0">Negative</option>
              </select>
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Overall HR status
              </label>
              <select
                name="field7"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
              >
                <option value="">Select</option>
                <option value="1">Positive</option>
                <option value="0">Negative</option>
              </select>
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px",
                  marginBottom: "60px"
                }}
              >
                PR Primary Status
              </label>
              <select
                name="field8"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  marginBottom: "60px",
                  blockSize: 30
                }}
              >
                <option value="">Select</option>
                <option value="1">Positive</option>
                <option value="0">Negative</option>
                <option value="2">Unknown</option>
              </select>
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginBottom: "3px",
                  marginRight: "50px"
                }}
              >
                Site of Sample
              </label>
              <select
                name="field9"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  marginBottom: "3px",
                  height: "70%",
                  blockSize: 30
                }}
              >
                <option value="">Select</option>
                <option value="25">Uterus</option>
                <option value="24">Treatment Naive Primary</option>
                <option value="23">Trachea</option>
                <option value="22">Stomach</option>
                <option value="21">Spleen</option>
                <option value="20">Soft Tissue</option>
                <option value="19">Skin</option>
                <option value="18">Post-Treatment Primary</option>
                <option value="17">Post-Neo Primary</option>
                <option value="16">Pleura</option>
                <option value="15">Peritoneum</option>
                <option value="14">Pericardium</option>
                <option value="13">Ovary</option>
                <option value="12">Orbit</option>
                <option value="11">Lymph node</option>
                <option value="10">Lung</option>
                <option value="9">Local Recurrence/Lymph Node</option>
                <option value="8">Local Recurrence/Breast</option>
                <option value="7">Local Recurrence</option>
                <option value="6">Liver</option>
                <option value="5">Esophegus</option>
                <option value="4">Epidural Mass</option>
                <option value="3">Chest Wall</option>
                <option value="2">Breast</option>
                <option value="1">Brain</option>
                <option value="0">Bone</option>
              </select>
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Sample Type
              </label>
              <select
                name="field10"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
              >
                <option value="">Select</option>
                <option value="1">Primary</option>
                <option value="0">Metastatic</option>
              </select>
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                State at Diagnosis
              </label>
              <select
                name="field11"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
              >
                <option value="">Select</option>

                <option value="0">IA</option>
                <option value="1">IB</option>
                <option value="2">IIA</option>
                <option value="3">IIB</option>
                <option value="4">IIIA</option>
                <option value="5">IIIB</option>
                <option value="6">IIIC</option>
                <option value="7">IV</option>

                <option value="8">unknown</option>
              </select>
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Tumor Stage
              </label>
              <select
                name="field12"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
              >
                <option value="">Select</option>
                <option value="0">T0</option>
                <option value="1">T1</option>
                <option value="2">T1C</option>
                <option value="3">T1a</option>
                <option value="4">T1b</option>
                <option value="5">T1c</option>
                <option value="6">T1mi</option>
                <option value="7">T2</option>
                <option value="8">T3</option>
                <option value="9">T4</option>
                <option value="10">T4a</option>
                <option value="11">T4b</option>
                <option value="12">T4c</option>
                <option value="13">T4d</option>
                <option value="14">TX</option>
                <option value="15">Tis</option>

                <option value="16">unknown</option>
              </select>
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Age Category
              </label>
              <select
                name="field13"
                onChange={this.onChange.bind(this)}
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
              >
                <option value="">Select</option>

                <option value="0">10-35</option>
                <option value="1">35-45</option>
                <option value="2">45-60</option>
                <option value="3">60+</option>
              </select>
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Fraction Genome Altered
              </label>
              <input
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
                type="text"
                value={this.state.field14}
                onChange={this.onChange.bind(this)}
                name="field14"
              />
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Mutation count
              </label>
              <input
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
                type="text"
                value={this.state.field15}
                onChange={this.onChange.bind(this)}
                name="field15"
              />
            </div>
            <div className="text-left">
              <br />
              <Button
                style={{
                  marginLeft: 24,
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
                    marginLeft: 9,
                    width: 190
                  }}
                  onClick={this.handleDownload}
                  type="button"
                  className="btn btn-info"
                >
                  Download PDF
                </Button>
              )}
            </div>
          </Form>
        </div>
        <ReactTooltip />
      </div>
    );
  }
}

export default survival;
