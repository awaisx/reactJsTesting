import React from 'react';
import Salary from './salary';
export default class Employee extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Employee Component...</h1>
        <p>
          <label>
            Id : <b>{this.props.Id}</b>
          </label>
        </p>
        <p>
          <label>
            Name : <b>{this.props.Name}</b>
          </label>
        </p>
        <p>
          <label>
            Location : <b>{this.props.Location}</b>
          </label>
        </p>
        <p>
          <label>
            Total Salary : <b>{this.props.Salary}</b>
          </label>
        </p>
        <Salary BasicSalary={this.props.BasicSalary} HRA={this.props.HRA} SpecialAllowance={this.props.SpecialAllowance}></Salary>
      </div>
    );
  }
}
