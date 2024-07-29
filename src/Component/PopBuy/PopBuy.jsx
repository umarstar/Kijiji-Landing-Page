import React from 'react';
import "./PopBuy.scss";
import { Link } from 'react-router-dom';
import kaji1 from "../../img/31.webp";
import kaji2 from "../../img/32.webp";
import kaji3 from "../../img/33.webp";


function PopBuy() {
    const popularbuy=[{name:"Furniture",popimg:kaji1},
        {name:"Home - Outdoor & Garden",popimg:kaji2},
        {name:"Tools",popimg:kaji3}
    ]
  return (
    <>
     <section className="Popular-buy">
                <div className="container-fluid">
                    <div className="row row-custom2">
                        <div className="col-lg-9 col-md-12 col-sm-12 left-side-otr">
                        <div className="wrapper">
                    <h2 className="pop-heading">Popular in Buy and Sell in Ontario</h2>
                    <Link to="" className='popLink'><p className="popLINk-inr">Browse All Buy and Sell</p></Link>
                </div>
                <div className="row row-custom3">
                    {popularbuy.map((item)=><div className="col-lg-4 col-md-6 col-sm-12 pop-box">
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
            </section>
      
    </>
  )
}

export default PopBuy
