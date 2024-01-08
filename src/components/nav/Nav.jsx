import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import shoppingCartIcon from "../../assets/shopping_cart.svg";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.noneList}>
        <li className={styles.li}>
          <Link to="/">
            <button className={styles.navBtn}>Home</button>
          </Link>
        </li>
        <li className={styles.li}>
          <Link to="shop">
            <button className={styles.navBtn}>Shop</button>
          </Link>
        </li>
        <li className={styles.li}>
          <button className={styles.navBtn}>
            <img
              className={styles.icon}
              src={shoppingCartIcon}
              alt="Shopping cart"
            />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
