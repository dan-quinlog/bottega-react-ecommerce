import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormButton } from "../form-fields";
import History from '../../history';

class ReviewForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    
    return (
      <form onSubmit={handleSubmit} className={`${className} review-form`}>
        
          <div className="review-form__line"></div>
        <Field
          className="review-form__proceed"
          onClick={ () => History.push('/account')}
          type="submit"
          title="Proceed to Checkout"
          name="proceed"
          component={FormButton}
        />
        <Field
          className="review-form__back"
          onClick={ () => History.push('/shop')}
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

ReviewForm = reduxForm({
  form: "ReviewForm"
})(ReviewForm);

export default ReviewForm;
