import React, { Component } from 'react';
import { IndexLink, Link } from "react-router";

class Nav extends Component {

  render() {

    return (
      <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>
          <div className="navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><IndexLink to='/' activeClassName="active">Home</IndexLink></li>
              <li><Link to='/competitions' activeClassName="active">Competitions</Link></li>
            </ul>

            <div className="content">
              {this.props.children}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

module.exports = Nav;
