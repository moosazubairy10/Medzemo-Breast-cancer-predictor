import React from 'react';
import './addemp.css';

const API = 'http://localhost:5000/getprediction';
class addemp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: {},
      data:{},
      name:'',
      designation:'',
      counter:0,
      prediction:'',
      field1:'',
      field2:'',
      field3:'',
      field4:'',
      field5:'',
      field6:'',
      field7:'',
      field8:'',
      field9:'',
      field10:'',
      field11:'',
      field12:'',
      field13:'',
      field14:'',
      field15:''
    };


  }
  submitForm() {
    
    alert(this.state.field2);
    // let col1=this.refs.col1.value;
    // let col2=this.refs.col2.value;
    // let col3=this.refs.col3.value;
    // let col4=this.refs.col4.value;
    // let col5=this.refs.col5.value;
    // let col6=this.refs.col6.value;
    // let col7=this.refs.col7.value;
    // let col8=this.refs.col8.value;
    // let col9=this.refs.col9.value;
    // let col10=this.refs.col10.value;
    // let col11=this.refs.col11.value;
    // let col12=this.refs.col12.value;
    // let col13=this.refs.col13.value;
    // let col14=this.refs.col14.value;
    // let col15=this.refs.col15.value;

    // console.log(this.refs.col1.value)

    let data={
      "Diagnosis Age":this.state.field1,
      "ER Status By IHC":this.state.field2,
      "Person Gender":this.state.field3,
      "Neoplasm Histologic Type Name":this.state.field4,
      "IHC-HER2":this.state.field5,
      "Primary Lymph Node Presentation Assessment Ind-3":this.state.field6,
      "Menopause Status":this.state.field7,
      "First Pathologic Diagnosis Biospecimen Acquisition Method Type":this.state.field8,
      "Oncotree Code":this.state.field9,
      "Primary Tumor Site":this.state.field10,
      "PR status by ihc":this.state.field11,
      "AgeCat":this.state.field12,
      "Fraction Genome Altered":this.state.field13,
      "Lymph Node(s) Examined Number":this.state.field14,
      "Mutation Count":this.state.field15
    }
    console.log(data);
  fetch(API, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json'
    }}).then((response) => response.json()).then((responseJson) => {
      console.log(responseJson.finalPrediction);
      this.setState({prediction: responseJson.finalPrediction})
     //this.setState({pressed: false});
    })
  }


  onChange(e)
  {
    this.setState({[e.target.name]:e.target.value})
    console.log([e.target.name]+e.target.type+e.target.value)
   
    
    
   
  }
  render() {
    return (
  <div className="abc">
  <div >
  <p>Diagnosis Age: <input type="text" onChange={this.onChange.bind(this)} value={this.state.field1} name="field1" /></p>
  <p>ER Status By IHC: <input type="text" onChange={this.onChange.bind(this)} value={this.state.field2} name="field2" /></p>
  <p>Person Gender: <input type="text" onChange={this.onChange.bind(this)} value={this.state.field3} name="field3" /></p>
  <p>Neoplasm Histologic Type Name: <input type="text" value={this.state.field4} onChange={this.onChange.bind(this)} name="field4" /></p>
  <p>IHC-HER2: <input type="text" value={this.state.field5} onChange={this.onChange.bind(this)} name="field5" /></p>
  <p>Primary Lymph Node Presentation Assessment Ind-3: <input type="text" onChange={this.onChange.bind(this)} value={this.state.field6} name="field6" /></p>
  <p>Menopause Status: <input type="text" value={this.state.field7} onChange={this.onChange.bind(this)} name="field7" /></p>
  <p>First Pathologic Diagnosis Biospecimen Acquisition Method Type: <input type="text" onChange={this.onChange.bind(this)} value={this.state.field8} name="field8" /></p>
  <p>Oncotree Code: <input type="text" value={this.state.field9} onChange={this.onChange.bind(this)} name="field9" /></p>
  <p>Primary Tumor Site: <input type="text" value={this.state.field10} onChange={this.onChange.bind(this)} name="field10" /></p>
  <p>PR status by ihc: <input type="text" value={this.state.field11} onChange={this.onChange.bind(this)} name="field11" /></p>
  <p>AgeCat: <input type="text" name="field12" value={this.state.field12} onChange={this.onChange.bind(this)} /></p>
  <p>Fraction Genome Altered: <input type="text" value={this.state.field13} onChange={this.onChange.bind(this)} name="field13" /></p>
  <p>Lymph Node(s) Examined Number: <input type="text" value={this.state.field14} onChange={this.onChange.bind(this)} name="field14" /></p>
  <p>Mutation Count: <input type="text" value={this.state.field15} onChange={this.onChange.bind(this)} name="field15" /></p>

  <p><input type="submit" onClick={this.submitForm.bind(this)} value="Predict" /></p>
</div>
<h1>Likelihood of having:{this.state.prediction} </h1>
  </div>
);
    }
  }

export default addemp;