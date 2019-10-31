import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";
import History from "../../history";

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
        <Field
          className="sign-up-form__name"
          type="name"
          title="Name"
          placeholder="Name"
          name="name"
          component={FormInput}
        />
        <Field
          className="sign-up-form__street-address"
          type="address"
          title="Street Address"
          placeholder="address"
          name="address"
          component={FormInput}
        />
        <Field
          className="sign-up-form__city"
          type="city"
          title="City"
          placeholder="City"
          name="city"
          component={FormInput}
        />
        <Field
          className="sign-up-form__state"
          type="state"
          title="State"
          placeholder="State"
          name="state"
          component={FormInput}
        />
        <Field
          className="sign-up-form__zipcode"
          type="zipcode"
          title="Zipcode"
          placeholder="Zipcode"
          name="zipcode"
          component={FormInput}
        />
        <Field
          className="sign-up-form__password"
          type="password"
          title="Password"
          placeholder="Password"
          name="password"
          component={FormInput}
        />
        <Field
          className="sign-up-form__confirm"
          type="password"
          title="Confirm Password"
          placeholder="Confirm Password"
          name="confirm"
          component={FormInput}
        />

        <div className="sign-up-form__line"></div>
        <Field
          className="sign-up-form__use-this-address"
          onClick={() => History.push("/information/payment")}
          type="submit"
          title="Use This Address"
          name="use-this-address"
          component={FormButton}
        />
        <Field
          className="sign-up-form__back"
          onClick={() => History.push("/signin")}
          type="button"
          title="Back"
          name="back"
          short={true}
          component={FormButton}
        />
      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: "PaymentForm"
})(PaymentForm);

export default PaymentForm;
