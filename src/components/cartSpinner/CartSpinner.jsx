import styles from "./CartSpinner.module.css";
import PropTypes from "prop-types";

const CartSpinner = ({ id, quantity, decrement, increment, onChange }) => {
  return (
    <div className={styles.spinner}>
      <button
        className={styles.spinnerBtn}
        type="button"
        aria-label="decrement"
        onClick={decrement}
      >
        -
      </button>
      <label htmlFor={"quantity" + `${id}`} aria-label="quantity"></label>
      <input
        className={styles.spinnerInput}
        type="tel"
        id={"quantity" + `${id}`}
        name={"quantity" + `${id}`}
        value={quantity}
        onChange={onChange}
      />
      <button
        className={styles.spinnerBtn}
        type="button"
        aria-label="increment"
        onClick={increment}
      >
        +
      </button>
    </div>
  );
};

CartSpinner.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  quantity: PropTypes.number,
  decrement: PropTypes.func,
  increment: PropTypes.func,
  onChange: PropTypes.func,
};

export default CartSpinner;
