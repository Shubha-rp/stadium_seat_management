import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Cricketmatches.css';
import { Link } from 'react-router-dom';


const CricketMatches = () => {
  const [cricketMatches, setCricketMatches] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/api/cricketmatches')
     .then(response => {
        setCricketMatches(response.data);
      })
     .catch(error => {
        console.error(error);
        setErrorMessage('Error fetching cricket matches');
      });
  }, []);

  return (
    <div className='matches'>
      <h1>Cricket Matches</h1>
      {errorMessage? (
        <p style={{ color: 'red' }}>{errorMessage}</p>
      ) : (
        <ul className='swayam'>
          {cricketMatches.map((cricketMatch, index) => (
            <li key={index} className='sumit'>
              <h2>Match {index + 1}</h2>
              <p>Team 1: {cricketMatch.match.teams.team1}</p>
              <p>Team 2: {cricketMatch.match.teams.team2}</p>
              <p>Match Date: {cricketMatch.match.match_date}</p>
              <p>Match Time: {cricketMatch.match.match_time}</p>
              <p>Venue: {cricketMatch.match.venue.name}</p>
              <p>Ticket Info: {cricketMatch.match.ticket_info.price_starts_from}</p>
              <Link to="/SeatingChart/${cricketMatch.matchId}">Book Ticket</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CricketMatches;