import PropTypes from "prop-types";
import styles from "./ShoppingItem.module.css";
import Cart from "../cart/Cart";
import { useState } from "react";

const ShoppingItem = ({ item = {}, onSubmit }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const onChange = (e) => {
    const digit = /^[0-9]*$/;
    if (digit.test(Number(e.target.value))) {
      setQuantity(Number(e.target.value));
    }
  };

  return (
    <div className={styles.shoppingItem}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={item.image} alt="" />
      </div>
      <div className={styles.shoppingItemDesc}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p className={styles.bold}>{item.price + "$"}</p>
        <Cart
          item={item}
          quantity={quantity}
          increment={increment}
          decrement={decrement}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

ShoppingItem.propTypes = {
  item: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default ShoppingItem;
