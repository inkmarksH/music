import React, { Component } from 'react';
import Router from './router'
import first from './router/first'
import './common/js/rem'
import './App.css'

class App extends Component {
  render() {
    return (
      <Router routes={first}/>
    );
  }
}

export default App;
