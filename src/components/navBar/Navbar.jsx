import Nav from "../nav/Nav";
import Header from "../header/Header";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navBar}>
      <Header />
      <Nav />
    </div>
  );
};

export default Navbar;
