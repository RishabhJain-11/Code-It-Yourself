import React from 'react';
import './Hero.css';
// import johnDoe from './john-doe.jpg';

function Hero() {
    return (
        <section className="hero">
            <div className="hero__content">
                <div className="hero__left">
                    <h1>Remembering John Doe</h1>
                    <p>A tribute to a life well lived</p>
                    <button className="hero__cta">Learn More</button>
                </div>
                <div className="hero__right">
                    <img src='./johndoe.jpg' alt="John Doe" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
