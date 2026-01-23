import React from "react";
import { useRazorpay } from "react-razorpay";
import axios from "axios";

const Checkout = () => {
  const { error, isLoading, Razorpay } = useRazorpay();

  const handlePayment = async () => {
    const { data } = await axios.post(
      "http://localhost:5000/api/payment/create-order",
      { amount: 50000 } // rupees
    );

    const options = {
      key: "rzp_test_S7DtflZNf8tyQt",
      amount: data.amount, // paise (backend se)
      currency: "INR",
      name: "Elite Space",
      description: "Property Token Amount",
      order_id: data.id,
      handler: function (response) {
        console.log(response);
        alert("Payment Successful!");
      },
      prefill: {
        name: "Customer Name",
        email: "customer@email.com",
        contact: "9999999999",
      },
      theme: {
        color: "#1976d2",
      },
    };

    const rzp = new Razorpay(options);
    rzp.open();
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Checkout</h2>

      {isLoading && <p>Loading payment...</p>}
      {error && <p>Error: {error}</p>}

      <button onClick={handlePayment} disabled={isLoading}>
        Pay Now ₹50,000
      </button>
    </div>
  );
};

export default Checkout;
