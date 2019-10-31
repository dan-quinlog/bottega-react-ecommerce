import React, { Component } from "react";

import SignInForm from "./signin-form";
import PageTitle from '../page-title';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import History from '../../history';

class SignIn extends Component {

  componentDidMount() {
    this.props.setHeaderLinks([]);
    this.props.setNavbarLinks([]);
  }
  
  onSubmit = fields => {
    this.props.signIn(fields);
    History.push('/account');
  };

  render() {
    return (
      <div className="sign-in">
        <PageTitle className="sign-in__page-title" title="Login" />
        <SignInForm onSubmit={this.onSubmit} className="sign-in__form" />
      </div>
    );
  }
}

SignIn = connect(null, actions)(SignIn);

export default SignIn;
