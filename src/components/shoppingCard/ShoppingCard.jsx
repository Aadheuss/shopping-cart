import styles from "./ShoppingCard.module.css";
import { useState } from "react";
import PropTypes from "prop-types";

const ShoppingCard = ({ item }) => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });
  console.log(item);

  function onImgLoad(e) {
    setDimensions({
      ...dimensions,
      height: e.target.naturalHeight,
      width: e.target.naturalWidth,
    });
  }

  return (
    <li className={styles.shoppingCard}>
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
      <div>
        <p>{item.title}</p>
        <p className={styles.boldText}>{item.price}$</p>
      </div>
    </li>
  );
};

ShoppingCard.propTypes = {
  item: PropTypes.object,
};

export default ShoppingCard;
