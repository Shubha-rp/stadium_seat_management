import React from 'react';
import { Link } from 'react-router-dom';
import './Classicalconcert.css';

const Classicalconcert = () => {
  return (
   <div id='Classicalconcert'>
    <h1 className="aaa">Upcoming Concerts</h1>
    <div className="concert-details">
      
      <div className="concert">
        <h2>Concert:one Direction-Reunion</h2>
        <ul>
          <li>Date: 5-07-2024</li>
          <li>Time: 7:30pm</li>
          <li>Artists:Zayn Malik,Harry Styles</li>
          
          <li>Venue: Melbourne Cricket Ground</li>
        </ul>
        <h2>Ticket Information</h2>
        <p>Ticket prices start from $50</p>
        <Link to="/booking" className="buy-ticket-button">Buy Ticket</Link>
      </div>
      </div>
    </div>
  );
};

export default Classicalconcert;