import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";
import Details from '../details';
import History from '../../history';

class SignUpForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const links = [
      {
        _id: 0,
        title: 'Not Registered? Create account here',
        onClick: () => History.push('/signup')
      },
      {
        _id: 1,
        title: 'Forgot account email?',
        onClick: () => console.log('forgot email')
      },
      {
        _id: 2,
        title: 'Forgot password?',
        onClick: () => console.log('forgot password')
      }
    ]
    return (
      <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
        <Field
          className="sign-in-form__name"
          type="name"
          title="Name"
          placeholder="Name"
          name="name"
          component={FormInput}
        />
        <Field
          className="sign-in-form__email"
          type="email"
          title="Email"
          placeholder="Email"
          name="email"
          component={FormInput}
        />
        <Field
          className="sign-in-form__password"
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
          component={FormInput}
          />
        <Field
          className="sign-in-form__confirm-password"
          type="password"
          title="Confirm Password"
          placeholder="Confirm Password"
          name="confirm"
          component={FormInput}
          />


          <div className="sign-in-form__line"></div>
        <Field
          className="sign-in-form__login"
          onClick={ () => console.log('trying to submit')}
          type="submit"
          title="Login"
          name="login"
          component={FormButton}
        />
        <Field
          className="sign-in-form__back"
          onClick={ () => console.log('trying to got back')}
          type="button"
          title="Back"
          name="back"
          component={FormButton}
        />
        <Details className='sign-in-form__details' title='QuickLinks' links={links} />
      </form>
    );
  }
}

SignUpForm = reduxForm({
  form: "SignUpForm"
})(SignUpForm);

export default SignUpForm;
