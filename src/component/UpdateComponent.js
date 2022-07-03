import React, { Component } from 'react';

class UpdateComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Mohamed',
    };

    this.changeName = this.changeName.bind(this);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('UpdateComponent GetDerivedState');
    return null;
  }

  shouldComponentUpdate() {
    console.log('Should Component Update');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Get Snapshot Before Update');
    return null;
  }

  componentDidUpdate() {
    console.log('Component Did Update');
  }

  changeName() {
    this.setState({
      name: 'Gamal',
    });
  }

  render() {
    console.log('I am Render');
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.changeName}>Change my Name</button>
      </div>
    );
  }
}

export default UpdateComponent;
