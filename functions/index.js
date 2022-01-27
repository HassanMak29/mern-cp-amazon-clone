/* eslint-disable indent */
/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(process.env.SECRET_KEY);

// API

// App config
const app = express();

// Middlewares
// app.use(cors({ origin: true }));
app.use(cors());
app.options("*", cors());
app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.status(200).send("Hello");
});

app.post("/payment/create", async (req, res) => {
  const total = req.query.total;
  console.log("Payment request received: ", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-b33cf/us-central1/api
