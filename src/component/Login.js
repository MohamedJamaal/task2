import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.userData = {
      username: 'ITI',
      password: 'P@ssw0rd',
    };

    this.state = {
      name: '',
      pass: '',
    };

    this.userNameChng = this.userNameChng.bind(this);
    this.passChng = this.passChng.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  //username handler
  userNameChng(event) {
    console.log(event.target.value);
    this.setState({
      name: event.target.value,
    });
  }

  //password handler
  passChng(event) {
    console.log(event.target.value);
    this.setState({
      pass: event.target.value,
    });
  }

  // submit handler
  formSubmit(event) {
    event.preventDefault();
    if (
      this.state.name === this.userData.username &&
      this.state.pass === this.userData.password
    ) {
      alert('Thank you !');
      //   alert('Error Logging in');
    } else {
      //   alert('Thank you !');
      alert('Error Logging in');
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.formSubmit} className="mainForm">
          <div className="form-group">
            <label>Name </label>
            <input
              type="name"
              className="form-control nameInput"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={this.userNameChng}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control passInput"
              id="exampleInputPassword1"
              placeholder="Password"
              onChange={this.passChng}
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
