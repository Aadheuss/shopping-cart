import { useEffect, useState } from "react";
import ShoppingList from "../shoppingList/ShoppingList";
import styles from "./Shop.module.css";
import { useParams } from "react-router-dom";
import ShoppingItem from "../shoppingItem/ShoppingItem";
import { useOutletContext } from "react-router-dom";
import Loading from "../loading/Loading";

const Shop = () => {
  const [data, setData] = useState(null);
  const { name } = useParams();
  const [addItemToCart] = useOutletContext();

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
    <div className={styles.shop}>
      {name === undefined ? (
        data !== null ? (
          <ShoppingList list={data} />
        ) : (
          <Loading />
        )
      ) : data !== null ? (
        <ShoppingItem item={findItem()} onSubmit={addItemToCart} />
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Shop;
