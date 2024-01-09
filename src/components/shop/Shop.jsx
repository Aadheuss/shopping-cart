import { useEffect, useState } from "react";
import ShoppingList from "../shoppingList/ShoppingList";
import styles from "./Shop.module.css";
import { useParams } from "react-router-dom";
import ShoppingItem from "../shoppingItem/ShoppingItem";

const Shop = () => {
  const [data, setData] = useState(null);
  const { name } = useParams();

  useEffect(() => {
    async function fetchData() {
      const result = await fetch("https://fakestoreapi.com/products");
      const resultJson = await result.json();
      setData(resultJson);
    }

    fetchData();

    return setData(null);
  }, []);

  const findItem = () => data.find((item) => item.id === Number(name));

  return (
    <main className={styles.shop}>
      {name === undefined ? (
        data !== null ? (
          <ShoppingList list={data} />
        ) : (
          <div>Loading...</div>
        )
      ) : data !== null ? (
        <ShoppingItem item={findItem()} />
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default Shop;
