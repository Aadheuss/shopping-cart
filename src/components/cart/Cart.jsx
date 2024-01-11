import PropTypes from "prop-types";
import styles from "./Cart.module.css";
import CartSpinner from "../cartSpinner/CartSpinner";

const Cart = ({ item, quantity, increment, decrement, onChange, onSubmit }) => {
  return (
    <form
      className={styles.form}
      id="product-cart"
      onSubmit={(e) => onSubmit(e, { item, quantity })}
    >
      <CartSpinner
        id={item.id}
        quantity={quantity}
        decrement={decrement}
        increment={increment}
        onChange={onChange}
      />
      <button>Add to cart</button>
    </form>
  );
};

Cart.propTypes = {
  item: PropTypes.object,
  quantity: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Cart;
