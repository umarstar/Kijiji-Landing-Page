import React from 'react';
// import ClassSite from '../Component/classSIte/ClassSite';
import Hero from "../Component/HeroSection/Hero";
import Slider from '../Component/Slider/Slider';
import Popular from '../Component/Popular/Popular';
import PopBuy from '../Component/PopBuy/PopBuy';
import SignIn from '../Component/SignIn/SignIn';
import PopEstate from '../Component/PopEstate/PopEstate';
import KajiCenter from '../Component/KajiCentar/KajiCenter';
import ClassSite from '../Component/classSIte/ClassSite';



function LandingPage() {
  return (
    <>
      <Hero/>
        <Slider/>  
        <Popular/>
        <PopBuy/>
        <SignIn/>
        <PopEstate/>
        <KajiCenter/>
        <ClassSite/>
    </>
  )
}

export default LandingPage
