import { Link } from "react-router-dom";
import shoppingCartIcon from "../../assets/shopping_cart.svg";
import PropTypes from "prop-types";

const Nav = ({ cart, cartOnView }) => {
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
          <button className={styles.navBtn} onClick={cartOnView.toggleFn}>
            <img
              className={styles.icon}
              src={shoppingCartIcon}
              alt="Shopping cart"
            />
            {cart.length > 0 && (
              <span className={styles.cartQuantity}>{cart.length}</span>
            )}
          </button>
        </li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  cart: PropTypes.array,
  cartOnView: PropTypes.object,
};

export default Nav;
