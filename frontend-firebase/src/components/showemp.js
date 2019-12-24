import React from 'react';
const API = 'http://localhost:4000/emp/employees';
class showemp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ employees: data }));
  }
  
  render() {
    const { employees } = this.state;

    return (<div>
<table align="center" border="1">
      <tr>
        <th>Name of Employee</th>
        <th>Designation</th>
        </tr>

        {employees.map(emp =>
          <tr>
             <td key={emp.name}>
            {emp.name}</td>
            <td key={emp.designation}>
            {emp.designation}</td>
                      </tr>
        )}
     </table>
      </div>
    );

  }
}

export default showemp;