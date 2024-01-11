import CartSpinner from "../cartSpinner/CartSpinner";
import styles from "./CartItem.module.css";
import PropTypes from "prop-types";

const CartItem = ({ item, spinnerFn, deleteItem }) => {
  const { increment, decrement, onChange } = spinnerFn;
  return (
    <li className={styles.list}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={item.item.image} alt="" />
      </div>
      <div>
        <div className={styles.header}>
          <h3 className={styles.h3}>{item.item.title}</h3>
          <button
            aria-label="delete-item"
            type="button"
            onClick={() => deleteItem(item.item)}
          >
            X
          </button>
        </div>

        <div className={styles.priceDesc}>
          <CartSpinner
            id={item.item.id}
            quantity={item.quantity}
            decrement={() => decrement(item)}
            increment={() => increment(item)}
            onChange={(e) => {
              onChange(e, item);
            }}
          />
          <p className={styles.price}>{item.item.price + "$"}</p>
        </div>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
  spinnerFn: PropTypes.object.isRequired,
  deleteItem: PropTypes.func,
};

export default CartItem;
