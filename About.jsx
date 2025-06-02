import React from 'react';
import './About.css';

export default function About() {
    return (
        <section className="about-section">
            <div className="about-content">
                <h1 className="about-title">About Us</h1>
                <hr className="divider" />
                <p className="about-description">
                    Welcome to <strong>Shoppershow</strong>! Since 1993, we've been <strong>dedicated to offering the best deals, premium products, and an unmatched customer experience</strong>—all in one place. From hassle-free EMI options to a seamless <strong>window shopping experience</strong>, we make shopping easier and more exciting!
                </p>
                <button className="explore-btn">Explore More</button>
            </div>

            {/* Add an engaging image */}
            <div className="about-image">
                <img src="https://plus.unsplash.com/premium_photo-1683121817275-85d1dcf9e4c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Shopping Experience" />
            </div>
        </section>
    );
}
