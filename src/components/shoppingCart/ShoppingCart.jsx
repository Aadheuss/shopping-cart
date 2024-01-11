import styles from "./ShoppingCart.module.css";
import PropTypes from "prop-types";
import CartList from "../cartList/CartList";

const ShoppingCart = ({ cart, cartOnView, spinnerFn, deleteItem }) => {
  const sumTotal = () => {
    return cart.reduce((sum, item) => {
      if (cart.length === 1) {
        return item.item.price * item.quantity;
      }

      if (typeof sum === "number") {
        return sum + item.item.price * item.quantity;
      }

      return sum.item.price * sum.quantity + item.item.price * item.quantity;
    }, 0);
  };
  const result = cart.length > 0 ? sumTotal() : 0;

  const getTwoDecimal = (num) => {
    if ("num".split(".").length > 1) {
      return Number.parseFloat(num).toFixed(2);
    }

    return num;
  };

  const total = getTwoDecimal(result);

  return (
    <div className={styles.shoppingCart}>
      <header className={styles.header}>
        <h2 className={styles.h2}>Cart ({cart.length})</h2>
        <button
          aria-label="close-shopping-cart-button"
          type="button"
          onClick={cartOnView.toggleFn}
        >
          X
        </button>
      </header>
      <CartList cart={cart} spinnerFn={spinnerFn} deleteItem={deleteItem} />
      <div>
        Total:
        <span className={styles.price}>{" " + total + "$"}</span>
      </div>
      <button type="button">Checkout</button>
    </div>
  );
};

ShoppingCart.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  cartOnView: PropTypes.object,
  spinnerFn: PropTypes.object,
  deleteItem: PropTypes.func,
};

export default ShoppingCart;
