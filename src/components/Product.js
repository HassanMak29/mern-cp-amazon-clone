import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasketHandler = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: { id, title, image, price, rating },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price.toFixed(2)}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐️</p>
            ))}
        </div>
      </div>
      <img src={image} alt="product" />
      <button onClick={addToBasketHandler}>Add to Basket</button>
    </div>
  );
}

export default Product;
