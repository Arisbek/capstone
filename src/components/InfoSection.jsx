// src/components/InfoSection.jsx
import React from 'react';
import './InfoSection.css';

const InfoSection = () => (
  <section className="info-section">
    <div className="info-box">
      <img src="media/menu.png" alt="Menu" />
      <h2>Our Menu</h2>
      <p>The best dishes from Italian, Greek, and Turkish cultures with 12–15 items that we rotate seasonally.</p>
    </div>
    <div className="info-box">
      <img src="media/staff.png" alt="Chefs" />
      <h2>Meet our staff</h2>
      <p>Our staff will make sure you have a great time trying our multicultural menu and are satisfied with our service.</p>
    </div>
    <div className="info-box">
      <img src="media/cafe.png" alt="Ambience" />
      <h2>Cozy atmosphere</h2>
      <p>The restaurant has a relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.</p>
    </div>
  </section>
);

export default InfoSection;