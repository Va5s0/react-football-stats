import React, { Component } from 'react';
import Nav from './Nav';

class Output extends Component {
  render() {
    let containerStyle = {
      marginTop: "60px"
    };
    return (
      <div>
        <Nav/>;
        <div className="container" style={containerStyle}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Output;
