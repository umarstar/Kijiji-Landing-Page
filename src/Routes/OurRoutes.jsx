import React from 'react';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Footer from "../Component/Footer/Footer";
import NavUpper from '../Component/Navbar/NavUpper';



function OurRoutes() {
  return (
    <>
    
      <Router>
        <NavUpper/>
        <LandingPage/>
        <Routes>
          <Route path='/' component={<LandingPage/>}/>
          
          {/* <Route path='/' exact={true} element={<LandingPage/>}/> */}
          <Route path='/2' element={<h1>hy i am umar2</h1>}/>
          {/* <Route path='/3' element={<h1>hy i am umar3</h1>}/> */}
          
        </Routes>
       
        <Footer/>
        
      </Router>
    </>
  )
}

export default OurRoutes
