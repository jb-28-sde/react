import React from 'react';
import './Services.css';

export default function Services() {
  return (
    <section className="services-section">
      <h1 className="services-title">Our Services</h1>
      <marquee className="services-subtitle">Providing the best shopping experience tailored for you!</marquee>

      <div className="services-container">
      
        <div className="service-card">
          <img src="https://img.freepik.com/free-vector/loading-workman-carrying-boxes_74855-14096.jpg" alt="Fast Delivery" />
          <h2>Fast & Secure Delivery</h2>
          <p>Get your products delivered swiftly and safely to your doorstep.</p>
        </div>

      
        <div className="service-card">
          <img src="https://img.freepik.com/premium-photo/happy-african-american-shopaholic-woman-advertising-sale-showing-purchases-collage_116547-96043.jpg?semt=ais_hybrid&w=740" alt="Best Deals" />
          <h2>Exclusive Discounts</h2>
          <p>Enjoy amazing deals and cashback offers on every purchase.</p>
        </div>

      
        <div className="service-card">
          <img src="https://blog.happyfox.com/wp-content/uploads/2020/10/Customer-Service-Vs-Customer-Support-Vs-Customer-Success.png" alt="24/7 Customer Support" />
          <h2>24/7 Customer Support</h2>
          <p>We are always available to assist you with your shopping queries.</p>
        </div>
      </div>
    </section>
  );
}
