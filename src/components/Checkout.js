import React from "react";
import FlipMove from "react-flip-move";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="amazon ad"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your shopping Basket</h2>
        </div>

        <FlipMove typeName={null}>
          {basket.map((item, i) => (
            <CheckoutProduct
              key={i}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </FlipMove>

        {/* <ul className="checkout__list">
          {basket.map((item, i) => (
            <li key={basket[i].id} className="checkout__list--item">
              <img
                src={basket[i].image}
                alt="product"
                className="checkout__image"
              />
              <div>
                <p className="checkout__listItem--title">{basket[i].title}</p>
                <p className="checkout__price">
                  <small>$</small>
                  <strong>{basket[i].price.toFixed(2)}</strong>
                </p>
                <div className="checkout__rating">
                  {Array(basket[i].rating)
                    .fill()
                    .map((_, i) => (
                      <p>⭐️</p>
                    ))}
                </div>
                <button onClick={removeFromBasketHandler}>
                  Remove from basket
                </button>
              </div>
            </li>
          ))}
        </ul> */}
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
