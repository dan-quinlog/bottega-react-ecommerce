import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

import History from "../../history";

import { FormButton } from "../form-fields";
import ReviewProducts from "./review-products";

class ReviewForm extends Component {
  render() {
    const { className, handleSubmit, subtotal } = this.props;
    const tax = (subtotal * 0.06).toFixed(2);
    const total = parseFloat(subtotal) + parseFloat(tax);

    return (
      <form onSubmit={handleSubmit} className={`${className} review-form`}>
        <div className="review-form__legend">
          <div className="review-form__legend__name">Name</div>
          <div className="review-form__legend__quantity">Quantity</div>
          <div className="review-form__legend__price">Price</div>
        </div>
        <ReviewProducts className="review-form__products" />
        <div className="review-form__line"></div>
        <Field
          className="review-form__proceed"
          onClick={() => History.push("/information/shipping")}
          type="submit"
          title="Proceed to Checkout"
          name="proceed"
          component={FormButton}
        />
        <Field
          className="review-form__back"
          onClick={() => History.push("/shop")}
          type="button"
          title="Back"
          name="back"
          short={true}
          component={FormButton}
        />
        <div className="review-form__details review-details">
          <div className="review-details__subtotal review-detail">
            <div className="review-detail__title">Subtotal</div>
            <div className="review-detail__price">${subtotal}</div>
          </div>
          <div className="review-details__tax review-detail">
            <div className="review-detail__title">Tax</div>
            <div className="review-detail__price">${tax}</div>
          </div>
          <div className="review-details__shipping review-detail">
            <div className="review-detail__title">Shipping</div>
            <div className="review-detail__price">$0.00</div>
          </div>
          <div className="review-details__total review-detail review-detail-green">
            <div className="review-detail__title review-detail-green__title">
              Total
            </div>
            <div className="review-detail__price review-detail-green__price">
              ${total}
            </div>
          </div>
        </div>
      </form>
    );
  }
}

ReviewForm = reduxForm({
  form: "ReviewForm"
})(ReviewForm);

export default ReviewForm;
