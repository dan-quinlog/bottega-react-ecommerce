import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../form-fields";
import History from "../../history";
import OrderSummary from './order-summary';

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${className} payment-form`}>
        <Field
          className="payment-form__name"
          type="name"
          title="Name on Credit Card"
          placeholder="Name"
          name="name"
          component={FormInput}
        />
        <Field
          className="payment-form__card"
          type="card"
          title="Credit Card Number"
          placeholder="____-____-____-____"
          name="card"
          component={FormInput}
        />
        <Field
          className="payment-form__expiration"
          type="expiration"
          title="Expiration Date"
          placeholder="expiration"
          name="expiration"
          component={FormInput}
        />
        <Field
          className="payment-form__ccv"
          type="CCV"
          title="CCV"
          placeholder="CCV"
          name="CCV"
          component={FormInput}
        />
        <div className="payment-form__line"></div>
        <Field
          className="payment-form__pay-complete"
          onClick={() => History.push("/information/payment")}
          type="submit"
          title="Complete"
          name="pay-complete"
          component={FormButton}
        />
        <Field
          className="payment-form__back"
          onClick={() => History.push("/shop")}
          type="button"
          title="Back"
          name="back"
          short={true}
          component={FormButton}
        />
        <OrderSummary className='payment-form__order-summary' />
      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: "PaymentForm"
})(PaymentForm);

export default PaymentForm;
