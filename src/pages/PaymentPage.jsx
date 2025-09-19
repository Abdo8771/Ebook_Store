// src/pages/PaymentPage.jsx

import React, { useState } from "react";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

// هناخد منها الدوال اللى هنحتاجها
function PaymentPage() {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  // بيخزن بيانات الكارت اللى المستخدم هيكتبها
  const [cardInfo, setCardInfo] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  // بيحسب السعر الكلى
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
// بيغير القيم اللى المستخدم بيكتبها ف الفورم
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setCardInfo((prev) => ({ ...prev, [id]: value }));
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault(); 
// لو المستخدم نسي يكتب حاجه ف الفورم بتظهر له رساله
    if (
      !cardInfo.name ||
      !cardInfo.cardNumber ||
      !cardInfo.expiry ||
      !cardInfo.cvv
    ) {
      toast.error("Please fill in all card details.");
      return;
    }
// لو ملى كله وضغط يظهر له الرساله دى
    toast.loading("Processing payment...");
// بيستنى ثانيتين وبعدين يظهر الرساله وبعدين يروح للصفحه الرئيسيه 
    setTimeout(() => {
      toast.dismiss();
      toast.success("Payment successful! Thank you for your purchase.");
      clearCart(); 
      navigate("/home"); 
    }, 2000); 
  };
// لو السله فاضيه بيظهر الرساله دى
  if (cartItems.length === 0) {
    return (
      <div
        className="container text-center"
        style={{ paddingTop: "100px", minHeight: "70vh" }}
      >
        <h2>Your cart is empty.</h2>
        <p>There's nothing to pay for. Let's go shopping!</p>
        <button onClick={() => navigate("/home")} className="btn btn-primary">
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div
      className="container"
      style={{ paddingTop: "100px", paddingBottom: "50px" }}
    >
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">Complete Your Payment</h1>

          <div className="card shadow-sm mb-4">
            <div className="card-header">
              <h4 className="my-0 fw-normal">Order Summary</h4>
            </div>
            <div className="card-body">
              <ul className="list-group list-group-flush">
                {/* هنا بنعرض المنتجات اللى ف السله */}
                {cartItems.map((item) => (
                  <li
                    key={item.id}
                    className="list-group-item d-flex justify-content-between lh-sm"
                  >
                    <div>
                      <h6 className="my-0">{item.title}</h6>
                      <small className="text-muted">{item.author}</small>
                    </div>
                    {/* بيحول السعر لرقم عشرى */}
                    <span className="text-muted">${item.price.toFixed(2)}</span>
                  </li>
                ))}
                <li className="list-group-item d-flex justify-content-between">
                  <span className="fw-bold">Total (USD)</span>
                  <strong>${totalPrice.toFixed(2)}</strong>
                </li>
              </ul>
            </div>
          </div>

          {/* Payment Form */}
          <div className="card shadow-sm">
            <div className="card-header">
              <h4 className="my-0 fw-normal">Payment Details</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handlePaymentSubmit}>
                <div className="row">
                  <div className="col-12 mb-3">
                    <label htmlFor="name" className="form-label">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={cardInfo.name}
                      onChange={handleInputChange}
                      placeholder="Abdelrhman"
                      required
                    />
                  </div>
                  <div className="col-12 mb-3">
                    <label htmlFor="cardNumber" className="form-label">
                      Card Number
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cardNumber"
                      value={cardInfo.cardNumber}
                      onChange={handleInputChange}
                      placeholder="XXXX XXXX XXXX"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="expiry" className="form-label">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="expiry"
                      value={cardInfo.expiry}
                      onChange={handleInputChange}
                      placeholder="DD/MM/YY"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="cvv" className="form-label">
                      CVV
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="cvv"
                      value={cardInfo.cvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      required
                    />
                  </div>
                </div>
                <hr className="my-4" />
                <button className="w-100 btn btn-success btn-lg" type="submit">
                  Pay Now (${totalPrice.toFixed(2)})
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPage;
