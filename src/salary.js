import React from 'react';
class Salary extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>
          <label>
            Basic Salary :
            <input
              type="text"
              defaultValue={this.state.basic}
              ref="BasicSalary"
            />
          </label>
        </p>
        <p>
          <label>
            HRA : <input type="text" defaultValue={this.state.hra} ref="HRA" />
          </label>
        </p>
        <p>
          <label>
            Special Allowance :{' '}
            <input
              type="text"
              defaultValue={this.state.sa}
              ref="SpecialAllowance"
            />
          </label>
        </p>
      </div>
    );
  }
}
