import React, { useState } from 'react';
import './EventPage.css';
import { Link } from 'react-router-dom';


const EventPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleEvent = (event) => {
    setSelectedEvent(selectedEvent === event ? null : event);
  };

  return (
    <div className="event-page">
      <h1>Featured Events</h1>
      <ul className="event-list">
        <li className="main-event" onClick={() => toggleEvent('Sports')}>
          Sports
          {selectedEvent === 'Sports' && (
            <div className="sub-event-container">
              
              <div className="sub-event">
             <Link to="/CricketStadium"><img src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_960,q_50/lsci/db/PICTURES/CMS/384000/384059.6.jpg" alt="Cricket Match" />
  <p>Cricket Match</p>
</Link>
              </div>
              <div className="sub-event">
             <Link to="/"><img src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2020/04/pjimage-2020-04-16t092158-1587009146.jpg" alt="Football Match" />
  <p>Football Match</p>
</Link>
              </div>
              
              
            </div>
          )}
        </li>
        <li className="main-event" onClick={() => toggleEvent('Concerts')}>
          Concerts
          {selectedEvent === 'Concerts' && (
            <div className="sub-event-container">
              <div className="sub-event">
              <Link to="/Rockconcert"><img src="rock.jpg" alt="Rock Concert" />
                <p>Rock Concert</p>
                </Link>
              </div>
              
              
              <div className="sub-event">
               <Link to="/Classicalconcert"> <img src="classical.jpg" alt="Classical Concert" />
                <p>Classical Concert</p>
                </Link>
              </div>
            </div>
          )}
        </li>
        <li className="main-event" onClick={() => toggleEvent('Theater')}>
          Theater
          {selectedEvent === 'Theater' && (
            <div className="sub-event-container">
              
              <div className="sub-event">
                <img src="play.jpg" alt="Play" />
                <p>Play</p>
              </div>
              <div className="sub-event">
                <img src="opera.jpg" alt="Opera" />
                <p>Opera</p>
              </div>
            </div>
          )}
        </li>
        
      </ul>
    </div>
  );
};

export default EventPage;
