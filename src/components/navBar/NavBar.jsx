import Nav from "../nav/Nav";
import Header from "../header/Header";
import styles from "./NavBar.module.css";
import PropTypes from "prop-types";

const NavBar = ({ cart, cartOnView }) => {
  return (
    <div className={styles.navBar}>
      <Header />
      <Nav cart={cart} cartOnView={cartOnView} />
    </div>
  );
};

NavBar.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  cartOnView: PropTypes.object,
};

export default NavBar;
