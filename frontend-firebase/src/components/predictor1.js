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
import { Button, Form, FormGroup, Label, Input, Alert } from "reactstrap";
//import "./addemp.css";
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
var prediction;
const API = "http://localhost:5000/getprediction";
class predictor1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
      data: {},
      prediction: "",
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

  handleMouseIn() {
    this.setState({ hover: true });
  }
  handleMouseOut() {
    this.setState({ hover: false });
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
        doc.text(10, 20, `Diagnosis Age:`);
        doc.text(120, 20, field1Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 30, `ER Status:`);
        doc.text(120, 30, field2Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 40, `Person Gender:`);
        doc.text(120, 40, field3Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 50, `Neoplasm Histologic Type Name:`);
        doc.text(120, 50, field4Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 60, `IHC-HER2:`);
        doc.text(120, 60, field5Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 70, `Primary Lymph Node Presentation Assessment:`);
        doc.text(120, 70, field6Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 80, `Menopause Status:`);
        doc.text(120, 80, field7Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 90, `Biospecimen Acquisition Method Type: `);
        doc.text(120, 90, field8Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 100, `Oncotree Code:`);
        doc.text(120, 100, field9Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 110, `Primary Tumor Site:`);
        doc.text(120, 110, field10Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 120, `PR status by ihc:`);
        doc.text(120, 120, field11Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 130, `AgeCat:`);
        doc.text(120, 130, field12Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 140, `Fraction Genome Altered:`);
        doc.text(120, 140, field13Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 150, `Lymph Node(s) Examined Number:`);
        doc.text(120, 150, field14Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 160, `Mutation Count:`);
        doc.text(120, 160, field15Value);

        doc.setFontSize(10);
        doc.setFontStyle("bold");
        doc.text(10, 190, `Likelihood of having: ${prediction}`);

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

    let data = {
      "Diagnosis Age": this.state.field1,
      "ER Status By IHC": this.state.field2,
      "Person Gender": this.state.field3,
      "Neoplasm Histologic Type Name": this.state.field4,
      "IHC-HER2": this.state.field5,
      "Primary Lymph Node Presentation Assessment Ind-3": this.state.field6,
      "Menopause Status": this.state.field7,
      "First Pathologic Diagnosis Biospecimen Acquisition Method Type": this
        .state.field8,
      "Oncotree Code": this.state.field9,
      "Primary Tumor Site": this.state.field10,
      "PR status by ihc": this.state.field11,
      AgeCat: this.state.field12,
      "Fraction Genome Altered": this.state.field13,
      "Lymph Node(s) Examined Number": this.state.field14,
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
        this.setState({ prediction: responseJson.finalPrediction });
        //this.setState({pressed: false});
        //ASSIGNING RESULTS FROM THE SERVER TO THE VARIBLE
        prediction = this.state.prediction;
      });
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    console.log([e.target.name] + e.target.type + e.target.value);
  }
  render() {
    const tooltipStyle = {
      display: this.state.hover ? "block" : "none"
    };
    const tooltipStyle1 = {
      display: this.state.hover ? "block" : "none"
    };
    return (
      <div style={{ backgroundColor: "rgba(0,0,0,0.5)", margin: "-40px" }}>
        <Navbar
          className="justify-content-center"
          color="light"
          style={{ fontFamily: "arial", marginTop: "0px" }}
        >
          <NavItem>
            <NavLink href="/predictor2" style={{ fontFamily: "arial" }}>
              BETA-PRED
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/survival" style={{ fontFamily: "arial" }}>
              Risk Assessment
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
          <h4>Likelihood of having :{this.state.prediction} </h4>
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
                Diagnosis Age
              </label>
              <input
                data-tip="Enter age of diagnosis"
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
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
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                ER Status
              </label>
              <select
                data-tip="your estrogen receptor status"
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
                name="field2"
                onChange={this.onChange.bind(this)}
              >
                <option value="">Select</option>
                <option value="2">Positive</option>
                <option value="1">Negative</option>
                <option value="0">Intermediate</option>
              </select>
              <div style={tooltipStyle1}>thisssssssssssss!</div>
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Gender
              </label>
              <select
                data-tip="Enter your Gender"
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
                name="field3"
                onChange={this.onChange.bind(this)}
              >
                <option value="">Select Gender</option>
                <option value="1">Male</option>
                <option value="0">Female</option>
              </select>
              {this.state.hide && <h4>{this.state.field4}</h4>}
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Histologic Type Name
              </label>
              <select
                data-tip="type of tissue in which the cancer originates"
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
                name="field4"
                onChange={this.onChange.bind(this)}
              >
                <option value="">Select </option>
                <option value="7">Other</option>
                <option value="6">Mucinous Carcinoma</option>
                <option value="5">Mixed Histology</option>
                <option value="4">Metaplastic Carcinoma</option>
                <option value="3">Medullary Carcinoma</option>
                <option value="2">Infiltrating Lobular Carcinoma</option>
                <option value="1">Infiltrating Ductal Carcinoma</option>
                <option value="0">Infiltrating Carcinoma NOS</option>
              </select>
              {this.state.hide && <h4>{this.state.field5}</h4>}
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                HER2 Status
              </label>
              <select
                data-tip="(human epidermal growth factor receptor 2 status"
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
                name="field5"
                onChange={this.onChange.bind(this)}
              >
                <option value="">Select</option>
                <option value="3">Positive</option>
                <option value="2">Negative</option>
                <option value="1">Intermediate</option>
                <option value="0">Equivocal</option>
              </select>
              {this.state.hide && <h4>{this.state.field6}</h4>}
            </div>
            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Lymph Node Assessment
              </label>
              <select
                data-tip="Examination of the lymph node"
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
                name="field6"
                onChange={this.onChange.bind(this)}
              >
                <option value="">Select</option>
                <option value="1">Positive</option>
                <option value="0">Negative</option>
              </select>
              {this.state.hide && <h4>{this.state.field8}</h4>}
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "261.77px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Menopause Status
              </label>
              <select
                data-tip="Permanent cessation of ovulation"
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
                name="field7"
                onChange={this.onChange.bind(this)}
              >
                <option value="">Select</option>
                <option value="4">
                  Pre ( ">"6 months since LMP AND no prior bilateral ovariectomy
                  AND not on estrogen replacement)
                </option>
                <option value="3">
                  Post (prior bilateral ovariectomy OR ">"12 mo since LMP with
                  no prior hysterectomy)
                </option>
                <option value="1">
                  Peri (6-12 months since last menstrual period)
                </option>
                <option value="0">
                  Indeterminate (neither Pre or Postmenopausal)
                </option>
              </select>
              {this.state.hide && <h4>{this.state.field10}</h4>}
            </div>

            <div className="form-group form-inline">
              <label style={{ color: "white", marginRight: "50px" }}>
                Biospecimen Acquisition Method
              </label>
              <select
                data-tip="Method by which biospecimen is taken"
                style={{
                  width: "29%",
                  marginLeft: " 1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
                name="field8"
                onChange={this.onChange.bind(this)}
              >
                <option value="">Select</option>
                <option value="6">Tumor resection</option>
                <option value="5">Other method, specify</option>
                <option value="4">Incisional Biopsy</option>
                <option value="3">Fine needle aspiration biopsy</option>
                <option value="2">Excisional Biopsy</option>
                <option value="1">
                  Cytology (e.g. Peritoneal or pleural fluid){" "}
                  {this.state.hide && <h4>{this.state.field12}</h4>}
                </option>
                <option value="0">Core needle biopsy</option>
              </select>
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "253.39px",
                  color: "white",
                  marginRight: "50px",
                  marginTop: "20px"
                }}
              >
                Oncotree
              </label>
              <select
                data-tip="A unique code based on ontology"
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "20px",
                  height: "70%",
                  blockSize: 30
                }}
                name="field9"
                onChange={this.onChange.bind(this)}
              >
                <option value="">Select</option>
                <option value="3">MDLC</option>
                <option value="2">ILC</option>
                <option value="1">IDC</option>
                <option value="0">BRCA</option>
              </select>
              {this.state.hide && <h4>{this.state.field14}</h4>}
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "253.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Primary Tumor site
              </label>
              <select
                data-tip="Site at which primary tumor is present"
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
                name="field10"
                onChange={this.onChange.bind(this)}
              >
                <option value="">Select</option>
                <option value="33">Right|Right Upper Outer Quadrant</option>
                <option value="32">Right|Right Upper Inner Quadrant</option>
                <option value="31">Right|Right Lower Inner Quadrant</option>
                <option value="30">
                  Right Upper Outer Quadrant|Right Lower Outer Quadrant
                </option>
                <option value="29">
                  Right Upper Outer Quadrant|Right Lower Inner Quadrant|Right
                  Lower Outer Quadrant
                </option>
                <option value="28">
                  Right Upper Outer Quadrant', 'Right Upper Outer Quadrant|Right
                </option>
                <option value="27">
                  Right Upper Inner Quadrant|Right Upper Outer Quadrant|Right
                  Lower Inner Quadrant
                </option>
                <option value="26">
                  Right Upper Inner Quadrant|Right Upper Outer Quadrant|Right
                </option>
                <option value="25">
                  Right Upper Inner Quadrant|Right Upper Outer Quadrant
                </option>
                <option value="24">
                  Right Upper Inner Quadrant|Right Lower Inner Quadrant|Right
                </option>
                <option value="23">
                  Right Upper Inner Quadrant|Right Lower Inner Quadrant
                </option>
                <option value="22">
                  Right Upper Inner Quadrant', 'Right Upper Inner Quadrant|Right
                </option>
                <option value="21">
                  Right Lower Outer Quadrant', 'Right Lower Outer Quadrant|Right
                </option>
                <option value="20">
                  Right Lower Inner Quadrant|Right Lower Outer Quadrant|Right
                </option>
                <option value="19">
                  Right Lower Inner Quadrant|Right Lower Outer Quadrant
                </option>
                <option value="18">Right Lower Inner Quadrant</option>
                <option value="17">
                  Left|Left Upper Outer Quadrant', 'Right
                </option>
                <option value="16">
                  Left|Left Upper Inner Quadrant|Left Upper Outer Quadrant|Left
                  Lower Inner Quadrant
                </option>
                <option value="15">Left|Left Upper Inner Quadrant</option>
                <option value="14">
                  Left Upper Outer Quadrant|Left Lower Outer Quadrant|Left
                </option>
                <option value="13">
                  Left Upper Outer Quadrant|Left Lower Outer Quadrant'
                </option>
                <option value="12">
                  Left Upper Outer Quadrant', 'Left Upper Outer Quadrant|Left
                </option>
                <option value="11">
                  Left Upper Inner Quadrant|Left Upper Outer Quadrant|Left Lower
                  Inner Quadrant
                </option>
                <option value="10">
                  Left Upper Inner Quadrant|Left Upper Outer Quadrant|Left Lower
                  Inner Quadrant
                </option>
                <option value="9">
                  Left Upper Inner Quadrant|Left Upper Outer Quadrant|Left
                </option>
                <option value="8">
                  Left Upper Inner Quadrant|Left Upper Outer Quadrant
                </option>
                <option value="7">
                  Left Upper Inner Quadrant|Left Lower Inner Quadrant|Left Lower
                  Outer Quadrant
                </option>
                <option value="6">
                  Left Upper Inner Quadrant|Left Lower Inner Quadrant
                </option>
                <option value="5">
                  Left Upper Inner Quadrant', 'Left Upper Inner Quadrant|Left
                </option>
                <option value="4">
                  Left Lower Outer Quadrant', 'Left Lower Outer Quadrant|Left
                </option>
                <option value="3">
                  Left Lower Inner Quadrant|Left Lower Outer Quadrant|Left
                </option>
                <option value="2">
                  Left Lower Inner Quadrant|Left Lower Outer Quadrant
                </option>
                <option value="1">Left Lower Inner Quadrant|Left</option>
                <option value="0">Left', 'Left Lower Inner Quadrant</option>
              </select>
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "253.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                PR Status
              </label>
              <select
                data-tip="Proestrogen status"
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
                name="field11"
                onChange={this.onChange.bind(this)}
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
                  width: "253.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Age Category
              </label>
              <select
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
                name="field12"
                onChange={this.onChange.bind(this)}
              >
                <option value="">Select Category</option>
                <option value="4">60 +</option>
                <option value="3">45-60</option>
                <option value="2">35-45</option>
                <option value="1">10-35</option>
              </select>
            </div>

            <div className="form-group form-inline">
              <label
                style={{
                  width: "253.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Fraction Genome Altered
              </label>{" "}
              <input
                data-tip=" number of mutations that are found in the tumor genome"
                style={{
                  width: "29%",
                  marginLeft: "1px",
                  marginTop: "10px",
                  height: "70%",
                  blockSize: 30
                }}
                type="text"
                value={this.state.field13}
                onChange={this.onChange.bind(this)}
                name="field13"
              />
            </div>

            <div className="form-group form-inline">
              <label style={{ color: "white", marginRight: "50px" }}>
                Lymph Node Examined Number
              </label>
              <input
                data-tip=" the median number of examined lymph nodes"
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
                  width: "253.39px",
                  color: "white",
                  marginRight: "50px"
                }}
              >
                Mutation Count
              </label>
              <input
                data-tip="the average number of errors created in genomes of viral progeny, per base, per replication cycle (mut/nuc/rep). ... RdRps all lack the proofreading capabilities present in DNA polymerases"
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
              {this.state.prediction && (
                <Button
                  id="cmd"
                  style={{
                    marginLeft: 24,
                    width: 220
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

export default predictor1;
