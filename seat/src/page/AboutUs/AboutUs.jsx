
// AboutUs.jsx
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <section className="about-us-header">
        <h1>About Us</h1>
        <p>Your ultimate solution for booking stadium seats with ease and convenience.</p>
      </section>
      
      <section className="our-mission">
        <h2>Our Mission</h2>
        <p>We aim to provide a seamless and efficient platform for sports fans and event-goers to book their favorite seats in the stadium. Our mission is to enhance your event experience by making seat booking simple and hassle-free.</p>
      </section>
      
      <section className="our-story">
        <h2>Our Story</h2>
        <p>Founded in [Year], our company started with a vision to revolutionize the way people book seats for stadium events. With a team of passionate individuals who are avid sports and entertainment enthusiasts, we have built a platform that puts the user experience at the forefront.</p>
      </section>
      
      <section className="our-values">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Customer Focus:</strong> We prioritize our users and their needs.</li>
          <li><strong>Innovation:</strong> Continuously improving and innovating our platform.</li>
          <li><strong>Reliability:</strong> Ensuring a dependable booking process.</li>
          <li><strong>Transparency:</strong> Clear and honest communication with our users.</li>
        </ul>
      </section>
      
      <section className="our-team">
        <h2>Meet the Team</h2>
        <p>Our team consists of experienced professionals dedicated to providing the best service. [Include brief descriptions or profiles of key team members, if applicable]</p>
      </section>
      
      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>If you have any questions or need assistance, feel free to reach out to us at <a href="mailto:support@example.com">support@example.com</a>.</p>
      </section>
    </div>
  );
};

export default AboutUs;