import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
          alt="Amazon background"
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="213421"
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="213423"
            title="Amazon Basics 8-Sheet Capacity, Cross-Cut Paper and Credit Card Shredder, 4.1 Gallon"
            price={35.49}
            image="https://m.media-amazon.com/images/I/71IywmQMCTL._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="213422"
            title="Logitech G502 HERO High Performance Wired Gaming Mouse, HERO 25K Sensor, 25,600 DPI, RGB, Adjustable Weights, 11 Programmable Buttons"
            price={59.99}
            image="https://m.media-amazon.com/images/I/61mpMH5TzkL._AC_UL640_QL65_.jpg"
            rating={5}
          />
          <Product
            id="213425"
            title="PlayStation DualSense Wireless Controller – Midnight Black"
            price={69.0}
            image="https://m.media-amazon.com/images/I/61O9tWR6WDS._AC_UL640_QL65_.jpg"
            rating={3}
          />
          <Product
            id="213426"
            title="Xbox Series S"
            price={599.0}
            image="https://m.media-amazon.com/images/I/71NBQ2a52CL._AC_UL640_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="213428"
            title="Oculus Quest 2 — Advanced All-In-One Virtual Reality Headset — 128 GB"
            price={299.0}
            image="https://m.media-amazon.com/images/I/615YaAiA-ML._AC_UL640_QL65_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
