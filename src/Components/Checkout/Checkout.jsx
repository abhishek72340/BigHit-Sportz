import "./Checkout.css";
import PropTypes from "prop-types";
const Checkout = ({ calculateSubtotal }) => {
  return (
    <>
      <div className="total_container">
        <div className="total_price_container">
          <div className="subtotal_container">
            <span>Subtotal</span>
            <span>${calculateSubtotal()}</span>
          </div>
          <div className="delivery_container">
            <span>Delivery</span>
            <span>$2</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span>${calculateSubtotal() + 2}</span>
          </div>
          <button className="proceed_checkout_btn">Proceed To Checkout</button>
        </div>
      </div>
    </>
  );
};

Checkout.propTypes = {
  calculateSubtotal: PropTypes.node.isRequired,
};

export default Checkout;
