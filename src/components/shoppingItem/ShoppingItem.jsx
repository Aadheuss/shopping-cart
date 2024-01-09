import PropTypes from "prop-types";
import styles from "./ShoppingItem.module.css";

const ShoppingItem = ({ item = {} }) => {
  console.log(item);
  return (
    <div className={styles.shoppingItem}>
      <div className={styles.imgContainer}>
        <img className={styles.img} src={item.image} alt="" />
      </div>
      <div className={styles.shoppingItemDesc}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p className={styles.bold}>{item.price + "$"}</p>
      </div>
    </div>
  );
};

ShoppingItem.propTypes = {
  item: PropTypes.object,
};

export default ShoppingItem;
