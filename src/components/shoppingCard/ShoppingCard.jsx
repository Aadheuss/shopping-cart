import styles from "./ShoppingCard.module.css";
import { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ShoppingCard = ({ item }) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  function onImgLoad(e) {
    setDimensions({
      ...dimensions,
      height: e.target.naturalHeight,
      width: e.target.naturalWidth,
    });
  }

  return (
    <li className={styles.shoppingCard}>
      <Link to={"/shop/" + item.id}>
        {" "}
        <div className={styles.imgContainer}>
          <img
            onLoad={onImgLoad}
            className={
              dimensions.height > dimensions.width
                ? styles.imgPortrait
                : styles.imgLandscape
            }
            src={item.image}
          />
        </div>
      </Link>
      <div>
        <Link to={"/shop/" + item.id}>
          <p className={styles.text}>{item.title}</p>
        </Link>
        <p className={styles.boldText}>{item.price}$</p>
      </div>
    </li>
  );
};

ShoppingCard.propTypes = {
  item: PropTypes.object,
};

export default ShoppingCard;
