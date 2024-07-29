import React from 'react';
import "./popEstate.scss";
import { Link } from 'react-router-dom';
import kaji1 from "../../img/41.webp";
import kaji2 from "../../img/42.webp";
import kaji3 from "../../img/43.webp";

function PopEstate() {
    const popularEstate = [{ name: "Apartments & Condos for Rent", popimg: kaji1 },
    { name: "Houses for Rent", popimg: kaji2 },
    { name: "Houses for Sale", popimg: kaji3 }
    ]
    return (
        <>
            <section className="PopularEState-section">
                <div className="container-fluid">
                    <div className="row row-custom2">
                        <div className="col-lg-9 col-md-12 col-sm-12 left-side-otr">
                            <div className="PopularEState">
                                <div className="wrapper">
                                    <h2 className="pop-heading">Popular in Real Estate in Ontario</h2>
                                    <Link to="" className='popLink'><p className="popLINk-inr">Browse All Real Estate</p></Link>
                                </div>
                                <div className="row row-custom3">

                                    {popularEstate.map((item) => <div className="col-lg-4 col-md-6 col-sm-6 pop-box">
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

                    </div>
                </div>
            </section>
          
        </>
    )
}

export default PopEstate
