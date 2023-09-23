import React from 'react'
import {Routes, Route, BrowserRouter, useParams, Navigate} from "react-router-dom";
import LandigPage from './pages/landingPage/LandigPage'
import About from './pages/about/About'
import Achievements from './pages/achievements/Achievements'
import Blogs from './pages/blogs/Blogs';
import Executives from './pages/executives/Executives';
import Activities from './pages/activities/Activities';
import Competitions from './pages/competitions/Competitions';

const App = () => {
  return (
    <>
      {/* <LandigPage/> */}
      {/* <About /> */}
      {/* <Achievements /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandigPage/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/achievements" element={<Achievements/>} />
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="/executives" element={<Executives/>} />
          <Route path="/activities" element={<Activities/>} />
          <Route path="/competitions" element={<Competitions/>} />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
