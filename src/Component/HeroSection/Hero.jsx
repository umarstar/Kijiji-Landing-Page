import React from 'react'
import "./Hero.scss";
import img from "../../img/WTK-Banner-IYKYK.webp";
import { Link } from 'react-router-dom';

function hero() {
  return (
    <>
      <section className="Hero">
        <div className="container-fluid">
            <div className="row row-custom">
                <div className="col-lg-4 col-md-8 col-sm-12 mar-place-otr">
                    <div className="mar-place-inr">
                        <p className="place-txt">
                        Welcome to Canada’s #1 visited rentals marketplace. 
                        <span className='place-txt1'>If you know, you Kijiji.</span>
                        </p>
                    </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 rental-otr">
                  <Link to="" className='rental-inr'>
                      <img src={img} alt="img" className='bg-hero'/>
                        <div className="btn-otr">
                          <Link className='btn-inr'>Search rentals</Link>
                        </div>
                  </Link>
                    <div className="rental-inr">
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default hero
