import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h1 className={styles.h1}>FakeShop</h1>
      </Link>
    </header>
  );
};

export default Header;
