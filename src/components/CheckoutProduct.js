import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = forwardRef(
  ({ id, image, title, price, rating, hideButton }, ref) => {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasketHandler = () => {
      dispatch({ type: "REMOVE_FROM_BASKET", id });
    };

    return (
      <div ref={ref} className="checkoutProduct">
        <img src={image} alt="prodcut" className="checkoutProduct__image" />
        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map(() => (
                <p>⭐️</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={removeFromBasketHandler}>
              Remove from basket
            </button>
          )}
        </div>
      </div>
    );
  }
);

export default CheckoutProduct;
