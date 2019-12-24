import React from 'react';
const API = 'http://localhost:4000/emp/employees';
const API2 = 'http://localhost:4000/emp/employees/';
const API1 = 'http://localhost:4000/emp/editemp/';
class editemp extends React.Component {
  constructor(props) {
    super(props);
   this.state = {
    employees: [],
   employee:[],
    test1:0,
     };
   
   this.editemployee.bind(this);
   this.updateemployee.bind(this);
          }
  editemployee=(e)=> {
    e.preventDefault();
    let name=this.refs.list.value;
           fetch(API2+name)
      .then(response => response.json())
      .then(data => this.setState({ employee: data }));
       }
    updateemployee=(e)=> {
      e.preventDefault();
      let name=this.refs.newname.value;
      let designation=this.refs.newd.value;
      let Id=this.refs.id.value;
      let data={
        Id,name,designation
      };
      fetch(API1, {
        method: "PUT",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }}).then(function(response) {
          if (response.ok) {
            alert('Record Updated Successfully')    
          } else {
            var error = new Error(response.statusText)
            error.response = response
            throw error
          }
        })

      }
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ employees: data }));
  }
  render() {
    const { employees } = this.state;
    return (<div align="center">
    <h1>Select an Employee to Edit</h1>
<form name="del">
<select ref="list" align="center">
                 {employees.map(emp =>
                 <option key={emp.name} value={emp.name}>
            {emp.name}</option>
                 )}
                     </select>                  
                     <button onClick={this.editemployee}>
        Edit Employee
      </button>
</form>
<br></br>
<form name="editform">
    <table align="center">
      <tr>
        <td>Name of Employee</td>
        <td><input type="text" ref="newname" placeholder="Enter Name" value={this.state.employee.name}></input></td></tr>
      <tr><td>Designation of Employee</td>
        <td>
      <input type="text" ref="newd" placeholder="Enter Designation" value={this.state.employee.designation}></input></td></tr>
      <tr><td colSpan="2" align="center">
      <input type="hidden" ref="id" value={this.state.employee._id}></input>
      </td></tr>
      <tr><td colSpan="2" align="center">
      <button onClick={this.updateemployee}>Update Employee</button>
      </td></tr>
    
      </table>
    </form>
      </div>
    );

  }

}

export default editemp;