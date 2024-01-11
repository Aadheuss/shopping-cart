import Nav from "../nav/Nav";
import Header from "../header/Header";
import styles from "./Navbar.module.css";
import PropTypes from "prop-types";

const Navbar = ({ cart, cartOnView }) => {
  return (
    <div className={styles.navBar}>
      <Header />
      <Nav cart={cart} cartOnView={cartOnView} />
    </div>
  );
};

Navbar.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.object),
  cartOnView: PropTypes.object,
};

export default Navbar;
