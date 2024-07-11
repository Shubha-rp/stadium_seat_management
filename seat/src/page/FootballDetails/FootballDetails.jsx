import React from 'react';
import { Link } from 'react-router-dom';
import './FootballDetails.css';

const FootballDetails = () => {
  return (
   <div id='FootballDetails'>
    <h1 className="aaa">Upcoming Matches</h1>
    <div className="football-details">
      
      <div className="match">
        <h2>Match 1: India vs Australia</h2>
        <ul>
          <li>Team 1: India</li>
          <li>Team 2: Qatar</li>
          <li>Match Date: 20th March 2023</li>
          <li>Match Time: 10:00 AM IST</li>
          <li>Venue: Melbourne Cricket Ground</li>
        </ul>
        <h2>Ticket Information</h2>
        <p>Ticket prices start from  RS 8500</p>
        <Link to="/booking" className="buy-ticket-button">Buy Ticket</Link>
      </div>

      <div className="match">
        <h2>Match 2: England vs France</h2>
        <ul>
          <li>Team 1: England</li>
          <li>Team 2: Pakistan</li>
          <li>Match Date: 22nd March 2023</li>
          <li>Match Time: 2:00 PM IST</li>
          <li>Venue: Sydney Cricket Ground</li>
        </ul>
        <h2>Ticket Information</h2>
        <p>Ticket prices start from RS 15000 </p>
        <Link to="/booking" className="buy-ticket-button">Buy Ticket</Link>
      </div>

      <div className="match">
        <h2>Match 3: South Africa vs New Zealand</h2>
        <ul>
          <li>Team 1: South Africa</li>
          <li>Team 2: New Zealand</li>
          <li>Match Date: 24th March 2023</li>
          <li>Match Time: 6:00 PM IST</li>
          <li>Venue: Brisbane Cricket Ground</li>
        </ul>
        <h2>Ticket Information</h2>
        <p>Ticket prices start from RS 11000</p>
        <Link to="/booking" className="buy-ticket-button">Buy Ticket</Link>
      </div>
    </div>
    </div>
  );
};

export default FootballDetails;