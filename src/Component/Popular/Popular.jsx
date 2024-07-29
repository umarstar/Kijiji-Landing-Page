import React from 'react'
import { Link } from 'react-router-dom';
import { CaretRight } from '@phosphor-icons/react';
import kaji from "../../img/20.webp";
import kaji1 from "../../img/21.webp";
import kaji2 from "../../img/22.webp";
import kaji3 from "../../img/23.webp";
import kaji4 from "../../img/24.webp";
import kaji5 from "../../img/25.webp";
import kaji6 from "../../img/26.webp";
import kaji7 from "../../img/27.webp";

import "./Popular.scss";

function Popular() {
    const popularData = [{ name: "Cars & Trucks", popimg: kaji1 },
    { name: "Classic Cars", popimg: kaji2 },
    { name: "RV's, Campers & Trailers", popimg: kaji3 },
    { name: "Boats & Watercraft", popimg: kaji4 },
    { name: "Motorcycles", popimg: kaji5 },
    { name: "Vehicle Parts, Tires, & Accessories", popimg: kaji6 },
    { name: "Heavy Equipment", popimg: kaji7 }
    ]
    return (
        <>
            <section className="PopularAuto">
                <div className="container-fluid">
                    <div className="row row-custom2">
                        <div className="col-lg-9 col-md-12 col-sm-12 left-side-otr">
                            <div className="Popular">
                                <div className="wrapper">
                                    <h2 className="pop-heading">Popular in Autos in Ontario</h2>
                                    <Link to="" className='popLink'><p className="popLINk-inr">Browse All Autos</p></Link>
                                </div>
                                <div className="row row-custom3">
                                    <div className="col-lg-3 col-md-6 col-sm-6 pop-box">
                                        <div className="kaji-otr-img">
                                            <img src={kaji} alt="img" className='kajiImg' />
                                        </div>
                                    </div>
                                    {popularData.map((item, g) => <div key={g} className="col-lg-3 col-md-6 col-sm-6 pop-box">
                                        <Link className="kaji-otr-img">
                                            <img src={item.popimg} alt="img" className='kajiImg' />
                                            <div className="btn-otr">
                                                <Link className='btn-inr'>{item.name}</Link>
                                            </div>
                                        </Link>
                                    </div>)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-10 RightSide-otr">
                        <div className="popKijij-otr">
                    <div className="popKijiji-inr">
                        <h4 className='popkiji-heading'>Popular on Kijiji</h4>
                        <ul className="ul-kijiji">
                            <li className="li-kijiji">
                                <Link className='a-kijiji'>
                                <span className='kiji-txt'>Free Stuff</span>
                                <span><CaretRight size={18} className='arrow' /></span>
                                </Link>
                            </li>
                            <li className="li-kijiji">
                                <Link className='a-kijiji'>
                                <span className='kiji-txt'>Swap / Trade</span>
                                <span><CaretRight size={18} className='arrow' /></span>
                                </Link>
                            </li>
                            <li className="li-kijiji">
                                <Link className='a-kijiji'>
                                <span className='kiji-txt'>Wanted Ads</span>
                                <span><CaretRight size={18} className='arrow' /></span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Popular
