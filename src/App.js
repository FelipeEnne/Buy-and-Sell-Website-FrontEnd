import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import Routes from './Routes';

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user:state.user
  }
}

const mapDispachToProps = (dispatch) => {
  return {

  };
}

export default connect(mapStateToProps, mapDispachToProps)(App);
