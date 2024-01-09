import ShoppingCard from "../shoppingCard/ShoppingCard";
import styles from "./ShoppingList.module.css";
import PropTypes from "prop-types";

const ShoppingList = ({ list = [] }) => {
  return (
    <ul className={styles.shoppingList}>
      {list.map((item) => (
        <ShoppingCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

ShoppingList.propTypes = {
  list: PropTypes.array,
};

export default ShoppingList;
