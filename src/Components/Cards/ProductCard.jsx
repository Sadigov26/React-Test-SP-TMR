import React from "react";
import styles from "./ProductCard.module.css";

const ProductCard = ({ item }) => {
  return (
    <div className={styles.Procard}>
      <div className={styles.Card}>
        <p>{item.title}</p>
        <p>{item.price}</p>
        <img src={item.thumbnail} alt="" />
      </div>
    </div>
  );
};

export default ProductCard;
