import styles from "./CartList.module.css";
import PropTypes from "prop-types";
import CartItem from "../cartItem/CartItem";

const CartList = ({ cart, spinnerFn, deleteItem }) => {
  return (
    <ul className={styles.list}>
      {cart.map((item) => (
        <CartItem
          key={item.item.id}
          item={item}
          spinnerFn={spinnerFn}
          deleteItem={deleteItem}
        />
      ))}
    </ul>
  );
};

CartList.propTypes = {
  cart: PropTypes.array,
  spinnerFn: PropTypes.object,
  deleteItem: PropTypes.func,
};

export default CartList;
