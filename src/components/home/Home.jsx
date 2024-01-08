import styles from "./Home.module.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className={styles.home}>
      <Link to="shop">
        <button>Shop now</button>
      </Link>
    </main>
  );
};

export default Home;
