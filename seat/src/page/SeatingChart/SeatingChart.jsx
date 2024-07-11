// import React, { useState,useEffect  } from 'react';
// import './SeatingChart.css';
// import { useNavigate , useParams } from 'react-router-dom';
// import axios from 'axios';
// const sections = [
//   { id: 'A_UPPER', rows: 5, seatsPerRow: 5, price: 100 },
//   { id: 'B_UPPER', rows: 5, seatsPerRow: 5, price: 90 },
//   { id: 'C_UPPER', rows: 5, seatsPerRow: 5, price: 80 },
//   { id: 'A_LOWER', rows: 5, seatsPerRow: 5, price: 70 },
//   { id: 'B_LOWER', rows: 5, seatsPerRow: 5, price: 60 },
//   { id: 'C_LOWER', rows: 5, seatsPerRow: 5, price: 50 },
//   { id: 'D_LOWER', rows: 5, seatsPerRow: 5, price: 40 },
// ];


// const SeatingChart = ({}) => {
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [bookedSeats, setBookedSeats] = useState([]);
//   const navigate = useNavigate();
//   const { matchId } = useParams();

//   useEffect(() => {
//     // Fetch booked seats for the specific match
//     axios.get(`http://localhost:8000/api/seats/${matchId}`)
//       .then(response => {
//         setBookedSeats(response.data.bookedSeats);
//       })
//       .catch(error => {
//         console.error('Error fetching booked seats:', error);
//       });
//   }, [matchId]);

//   const handleSeatClick = (section, row, seat) => {
//     const seatId = `${section}-${row}-${seat}`;
//     if (selectedSeats.includes(seatId)) {
//       setSelectedSeats(selectedSeats.filter(id => id !== seatId));
//     } else {
//       setSelectedSeats([...selectedSeats, seatId]);
//     }
//   };

//   const renderSeats = (section, rows, seatsPerRow) => {
//     const seats = [];
//     for (let row = 1; row <= rows; row++) {
//       for (let seat = 1; seat <= seatsPerRow; seat++) {
//         const seatId = `${section}-${row}-${seat}`;
//         const isSelected = selectedSeats.includes(seatId);
//         const isBooked = bookedSeats.includes(seatId);
//         seats.push(
//           <div
//             key={seatId}
//             className={`seat ${isSelected ? 'selected' : ''} ${isBooked ? 'booked' : ''}`}
//             onClick={() => !isBooked && handleSeatClick(section, row, seat)}
//           >
//             {seat}
//           </div>
//         );
//       }
//     }
//     return seats;
//   };

//   const calculateTotalPrice = () => {
//     let total = 0;
//     selectedSeats.forEach(seatId => {
//       const sectionId = seatId.split('-')[0];
//       const section = sections.find(sec => sec.id === sectionId);
//       total += section.price;
//     });
//     return total;
//   };

  
//   return (
//     <div className="seating-chart">
//       <img src="https://4.jpg" alt="stadium" />
//       <div className="summary">
//         <p>Available Seats: {sections.reduce((acc, sec) => acc + sec.rows * sec.seatsPerRow, 0) - bookedSeats.length}</p>
//         <p>Booked Seats: {bookedSeats.length}</p>
//         <p>Selected Seats: {selectedSeats.length}</p>
//         <p>Total Price: ${calculateTotalPrice()}</p>
//         <button onClick={() => navigate('/payment', { state: { selectedSeats, totalPrice: calculateTotalPrice() } })}>Proceed to Payment</button>
//       </div>
//       <div className="sections-wrapper">
//         {sections.map(section => (
//           <div className="section" key={section.id} id={section.id}>
//             <div className="section-title">{section.id.replace('_', ' ')} - ${section.price}</div>
//             <div className="seats">
//               {renderSeats(section.id, section.rows, section.seatsPerRow)}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SeatingChart;

import React, { useState, useEffect } from 'react';
import './SeatingChart.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const sections = [
  { id: 'A_UPPER', rows: 5, seatsPerRow: 5, price: 100 },
  { id: 'B_UPPER', rows: 5, seatsPerRow: 5, price: 90 },
  { id: 'C_UPPER', rows: 5, seatsPerRow: 5, price: 80 },
  { id: 'A_LOWER', rows: 5, seatsPerRow: 5, price: 70 },
  { id: 'B_LOWER', rows: 5, seatsPerRow: 5, price: 60 },
  { id: 'C_LOWER', rows: 5, seatsPerRow: 5, price: 50 },
  { id: 'D_LOWER', rows: 5, seatsPerRow: 5, price: 40 },
];

const SeatingChart = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const navigate = useNavigate();
  const { matchId } = useParams();

  useEffect(() => {
    const fetchBookedSeats = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/booked-seats/${matchId}`);
        setBookedSeats(response.data.bookedSeats);
      } catch (error) {
        console.error('Error fetching booked seats:', error);
      }
    };

    fetchBookedSeats();
  }, [matchId]);

  const handleSeatClick = (section, row, seat) => {
    const seatId = `${section}-${row}-${seat}`;
    if (selectedSeats.includes(seatId)) {
      setSelectedSeats(selectedSeats.filter(id => id !== seatId));
      // Send a request to remove the seat from booked seats
      axios.post(`http://localhost:8000/api/remove-booked-seat/${matchId}`, { seatId })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('Error removing booked seat:', error);
        });
    } else {
      setSelectedSeats([...selectedSeats, seatId]);
      // Send a request to add the seat to booked seats
      axios.post(`http://localhost:8000/api/add-booked-seat/${matchId}`, { seatId })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error('Error adding booked seat:', error);
        });
    }
  };

  const renderSeats = (section, rows, seatsPerRow) => {
    const seats = [];
    for (let row = 1; row <= rows; row++) {
      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const seatId = `${section}-${row}-${seat}`;
        const isSelected = selectedSeats.includes(seatId);
        const isBooked = bookedSeats.includes(seatId);
        seats.push(
          <div
            key={seatId}
            className={`seat ${isSelected ? 'selected' : ''} ${isBooked ? 'booked' : ''}`}
            onClick={() => !isBooked && handleSeatClick(section, row, seat)}
          >
            {seat}
          </div>
        );
      }
    }
    return seats;
  };

  const calculateTotalPrice = () => {
    let total = 0;
    selectedSeats.forEach(seatId => {
      const sectionId = seatId.split('-')[0];
      const section = sections.find(sec => sec.id === sectionId);
      if (section) {
        total += section.price;
      }
    });
    return total;
  };

  const handlePayment = () => {
    axios.post(`http://localhost:8000/api/book-seats/${matchId}`, { selectedSeats })
      .then(response => {
        console.log(response);
        navigate('/payment', { state: { selectedSeats, totalPrice: calculateTotalPrice() } });
      })
      .catch(error => {
        console.error('Error booking seats:', error);
      });
  };

  return (
    <div className="seating-chart">
      {/* Replace with your actual stadium image URL */}
      <img src="https://example.com/stadium.jpg" alt="stadium" />
      <div className="summary">
        <p>Available Seats: {sections.reduce((acc, sec) => acc + sec.rows * sec.seatsPerRow, 0) - bookedSeats.length}</p>
        <p>Booked Seats: {bookedSeats.length}</p>
        <p>Selected Seats: {selectedSeats.length}</p>
        <p>Total Price: ${calculateTotalPrice()}</p>
        <button onClick={() => navigate('/payment', { state: { selectedSeats, totalPrice: calculateTotalPrice() } })}>Proceed to Payment</button>
      </div>
      <div className="sections-wrapper">
        {sections.map(section => (
          <div className="section" key={section.id} id={section.id}>
            <div className="section-title">{section.id.replace('_', ' ')} - ${section.price}</div>
            <div className="seats">
              {renderSeats(section.id, section.rows, section.seatsPerRow)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatingChart;