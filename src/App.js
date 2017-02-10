import React, { Component } from 'react';
import Home from './Components/Home';
import Competitions from './Components/Competitions';
import Teams from './Components/Teams';
import Output from './Components/Output';
import './App.css';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

class App extends Component {
  render() {
    return (
      <Router key={Math.random()} history={browserHistory}>
        <Route path='/' component={Output}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path='/competitions' component={Competitions}></Route>
          <Route path='/competitions/:id' component={Teams}></Route>
        </Route>
      </Router>
    )
  }
}

export default App;
