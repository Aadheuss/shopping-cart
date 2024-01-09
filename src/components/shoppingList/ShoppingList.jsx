import ShoppingCard from "../shoppingCard/ShoppingCard";
import styles from "./ShoppingList.module.css";

const ShoppingList = ({ list }) => {
  return (
    <ul className={styles.shoppingList}>
      {list.map((item) => (
        <ShoppingCard key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default ShoppingList;
