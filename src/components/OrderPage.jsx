// src/components/OrderPage.jsx
import React from 'react';
import './OrderPage.css';

const OrderPage = () => (
  <main>
    <form className="order-form">
      <h2>Order Food</h2>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Food Item:
        <input type="text" name="food" />
      </label>
      <label>
        Quantity:
        <input type="number" name="quantity" />
      </label>
      <button type="submit">Order</button>
    </form>
  </main>
);

export default OrderPage;