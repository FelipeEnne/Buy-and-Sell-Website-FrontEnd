import React from 'react';
import './App.css';
import { connect } from 'react-redux';

const App = (props) => {
  return (
    <div className="App">
      Hello
    </div>
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
