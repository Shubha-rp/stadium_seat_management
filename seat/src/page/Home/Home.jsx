import React from 'react';
import './Home.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section with Images and Welcome */}
      <div className="hero-section">
        <div className="hero-content">
          <br /><br />
          <h1>Welcome to Stadium</h1><h1> Seat Booking</h1><br />
          <p>Find and book seats for your favorite events with ease.</p>
          <Link to="/EventPage" className="cta-button">Featured events</Link>
          <br /><br />
          <h2 >Experience Unforgettable Events</h2><br />
        <p>At Stadium Seat Booking, we bring you closer to your favorite sports, concerts, and cultural performances. Whether you're a die-hard fan or just looking for a memorable experience, we make it easy to find and book seats.</p>
        <p>Explore our wide range of events, from thrilling sports matches to electrifying concerts, all in one convenient platform.</p>
        </div>

        <div className="carousel-container">
          <Carousel
            showArrows={true}
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={2000}
            transitionTime={500}
            className="custom-carousel"
          >
            <div>
              <img src="https://img.freepik.com/premium-photo/stadium-seating-layout-vip-experience_933496-8987.jpg" alt="Promo 1" />
            </div>
            <div>
              <img src="https://images.indianexpress.com/2024/04/rcb.jpg" alt="Promo 2" />
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEeVBv-kddiHGiwOHW9hOt_UHRdIdv6lfsLA&s" alt="Promo 3" />
            </div>
          </Carousel>
        </div>
      </div>

      <div className="home-link">
      
        <Link to="/events" className="cta-button">View my ticket</Link>
      </div>

      {/* Customer Testimonials */}
      <div className="testimonials">
        <h2>Customer Reviews</h2>
        <div className="testimonial">
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          <p>- John Doe</p>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          <p>- John Doe</p>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
          <p>- John Doe</p>
        </div>
      </div>

      {/* Featured Services */}
      <div className="featured-services">
        <h2>Featured Services</h2>
        <ul>
          <li>VIP Packages</li>
          <li>Group Bookings</li>
          <li>Hospitality Options</li>
        </ul>
      </div>

      {/* News and Updates */}
      <div className="news-updates">
        <h2>News and Updates</h2>
        <div className="news-item">
          <h3>Latest News </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <a href="#" className="read-more">Read More</a>
        </div>
      </div>

      

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <Link to="/AboutUs">About Us</Link>
          
        </div>
        <div className="footer-contact">
          <p>Contact: info@stadiumbooking.com</p>
          <p>Phone: +1234567890</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
