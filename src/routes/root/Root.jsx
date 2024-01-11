import Navbar from "../../components/navbar/Navbar";
import "../../App.css";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import ShoppingCart from "../../components/shoppingCart/ShoppingCart";
import styles from "./Root.module.css";

const Root = () => {
  const [cart, setCart] = useState([]);
  const [cartOnView, setCartOnView] = useState(false);

  const createCopyIndex = (item) => {
    const arrCopy = [...cart];
    const index = cart.findIndex(
      (cartItem) => cartItem.item.id === item.item.id
    );

    return { arrCopy, index };
  };

  const addItemToCart = (e, item) => {
    e.preventDefault();

    const isItemNew = !cart.find(
      (cartItem) => cartItem.item.id === item.item.id
    );

    if (isItemNew) {
      setCart([...cart, item]);
    } else {
      const { arrCopy, index } = createCopyIndex(item);
      arrCopy[index] = {
        ...item,
        quantity: item.quantity,
      };
      setCart([...arrCopy]);
    }
  };

  const deleteItemFromCart = (item) => {
    const filteredArr = cart.filter((cartItem) => cartItem.item.id !== item.id);
    setCart([...filteredArr]);
  };

  const toggleCartOnView = () => {
    setCartOnView(!cartOnView);
  };

  const increment = (item) => {
    const { arrCopy, index } = createCopyIndex(item);
    arrCopy[index] = {
      ...item,
      quantity: item.quantity + 1,
    };
    setCart([...arrCopy]);
  };

  const decrement = (item) => {
    const { arrCopy, index } = createCopyIndex(item);
    if (item.quantity > 1) {
      arrCopy[index] = {
        ...item,
        quantity: item.quantity - 1,
      };
      setCart([...arrCopy]);
    }
  };

  const onChange = (e, item) => {
    const digit = /^[0-9]*$/;
    if (digit.test(Number(e.target.value))) {
      const { arrCopy, index } = createCopyIndex(item);
      arrCopy[index] = {
        ...item,
        quantity: Number(e.target.value),
      };
      setCart([...arrCopy]);
    }
  };

  return (
    <>
      <Navbar
        cart={cart}
        cartOnView={{
          value: cartOnView,
          toggleFn: toggleCartOnView,
        }}
      />
      <main className={styles.main}>
        <Outlet context={[addItemToCart]} />
      </main>
      {cartOnView && (
        <ShoppingCart
          cart={cart}
          cartOnView={{
            value: cartOnView,
            toggleFn: toggleCartOnView,
          }}
          spinnerFn={{
            increment: increment,
            decrement: decrement,
            onChange: onChange,
          }}
          deleteItem={deleteItemFromCart}
        />
      )}
    </>
  );
};

export default Root;
