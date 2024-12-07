// src/components/ReservePage.jsx
import React from 'react';
import './ReservePage.css';

const ReservePage = () => (
  <main>
    <form className="reserve-form">
      <h2>Reserve a Table</h2>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Date:
        <input type="date" name="date" />
      </label>
      <label>
        Time:
        <input type="time" name="time" />
      </label>
      <label>
        Number of Guests:
        <input type="number" name="guests" />
      </label>
      <button type="submit">Reserve</button>
    </form>
  </main>
);

export default ReservePage;