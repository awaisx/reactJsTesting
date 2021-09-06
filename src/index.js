import React from 'react';
import ReactDOM from 'react-dom';
import Employee from './Employee';

const e = (
  <Employee
    Id="101"
    Name="Pragim"
    Location="Bangalore"
    Salary="50000"
    BasicSalary="25000"
    HRA="10000"
    SpecialAllowance="15000"
  />
);

ReactDOM.render(e, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById("root"));
