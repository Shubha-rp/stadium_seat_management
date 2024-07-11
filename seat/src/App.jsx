import React from 'react';
import './index.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,BrowserRouter,
}from "react-router-dom";

import Home from './page/Home/Home';
import Profile from './page/Profile';
import SignIn from './page/SignIn/SignIn';
import SignUp from './page/SignUp/SignUp';
import Header from './components/Header';
import EventPage from './page/EventPage/EventPage';
import AboutUs from './page/AboutUs/AboutUs';
import CricketMatches from './page/Cricketmatches/Cricketmatches';
import FootballDetails from './page/FootballDetails/FootballDetails';
import Classicalconcert from './page/Classicalconcert/Classicalconcert';
import SeatingChart from './page/SeatingChart/SeatingChart';
import PaymentPage from './page/PaymentPage/PaymentPage';
// import CricketStadium from './page/CricketStadium/CricketStadium';
import CricketStadium from './page/Cricket_stadium/CricketStadium';
export default function App() {
  return ( 
  <BrowserRouter>
  <Header/>
  <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/AboutUs' element={<AboutUs/>}></Route>
      <Route path='/Profile' element={<Profile/>}></Route>
      <Route path='/SignIn' element={<SignIn/>}></Route>
      <Route path='/SignUp' element={<SignUp/>}></Route>
      <Route path='/EventPage' element={<EventPage/>}></Route>
      <Route path='/CricketMatches' element={<CricketMatches/>}></Route>
      <Route path='/FootballDetails' element={<FootballDetails/>}></Route>
      <Route path='/Classicalconcert' element={<Classicalconcert/>}></Route>
      <Route path='/SeatingChart/:matchId' element={<SeatingChart/>}></Route>
      <Route path='/Payment' element={<PaymentPage/>}></Route>
      <Route path='/CricketStadium' element={<CricketStadium/>}></Route>
      <Route path='/CricketMatches' element={<CricketMatches/>}></Route>

      
    </Routes>
    </BrowserRouter>
  )
}
