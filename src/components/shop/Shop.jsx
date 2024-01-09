import { useEffect, useState } from "react";
import ShoppingList from "../shoppingList/ShoppingList";
import styles from "./Shop.module.css";

const Shop = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("https://fakestoreapi.com/products");
      const resultJson = await result.json();
      setData(resultJson);
    }

    fetchData();

    return setData(null);
  }, []);

  console.log(data);

  return (
    <main className={styles.shop}>
      {data !== null ? <ShoppingList list={data} /> : <div>Loading...</div>}
    </main>
  );
};

export default Shop;
