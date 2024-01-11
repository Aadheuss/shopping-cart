import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={styles.home}>
      <Link to="shop">
        <button>Shop now</button>
      </Link>
    </div>
  );
};

export default Home;
