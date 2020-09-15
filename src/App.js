import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Routes from './Routes';
import { Template } from './components/MainComponents';
import Header from './components/patials/Header';
import Footer from './components/patials/Footer';

const App = (props) => (
  <BrowserRouter>
    <Template>
      <Header />

       <Routes />

      <Footer />
    </Template>
  </BrowserRouter>
);

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispachToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispachToProps)(App);
