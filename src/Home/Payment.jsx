const express = require("express");
const Razorpay = require("razorpay");
const router = express.Router();

const razorpay = new Razorpay({
  key_id: "rzp_test_S7DtflZNf8tyQt",
  key_secret: "RAZORPAY_SECRET",
});

router.post("/create-order", async (req, res) => {
  const order = await razorpay.orders.create({
    amount: req.body.amount * 100,
    currency: "INR",
    receipt: "receipt_" + Date.now(),
  });

  res.json(order);
});

module.exports = router;
