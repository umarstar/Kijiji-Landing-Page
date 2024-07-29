import React from 'react';
import "./KajiCenter.scss";
import { Link } from 'react-router-dom';
import p1 from "../../img/p1.jpg";
import p2 from "../../img/p2.jpg";
import p3 from "../../img/p3.jpg";


function KajiCenter() {

  const popkaji=[{name:"How to make and save money from home",popimg:p1},
    {name:"How to find the perfect apartment for rent on Kijiji",popimg:p2},
    {name:"8 essential tools to have on hand for jobs around your home",popimg:p3}
]
  return (
    <>
     <section className="kajiCenter-section">
                <div className="container-fluid">
                    <div className="row row-custom2">
                        <div className="col-lg-9 col-md-12 col-sm-12 left-side-otr">
                        <div className="kajiCenter">
                    <h2 className="pop-heading">Kijiji Central</h2>
                
                <div className="row row-custom3">
                    {popkaji.map((item ,u)=>
                    <div key={u} className="col-lg-4 col-md-6 col-sm-6 pop-box">
                    <div className="kaji-otr-img">
                        <img src={item.popimg} alt="img" className='kajiImg' />
                        <div className="btn-otr">
                            <Link className='btn-inr'><span className='btn-detail'>{item.name}</span>
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.7 61.6" aria-hidden="true" color="#FFFFFF" focusable="false" height="32" width="32"><path fill="currentColor" d="M57.6 35.1c-2.1 0-4.1 1.1-5.2 2.9l-6.8-2.3c.7-3.2.2-6.5-1.3-9.4l5.6-3.8c1.1 1 2.6 1.6 4.1 1.6 3.4 0 6.1-2.7 6.1-6.1 0-3.4-2.7-6.1-6.1-6.1-3.4 0-6.1 2.7-6.1 6.1 0 .8.1 1.5.4 2.1L42.7 24c-2.3-2.7-5.4-4.4-8.9-4.8l.1-7.1c2.8-.7 4.7-3.1 4.7-6 0-3.4-2.7-6.1-6.1-6.1s-6.1 2.7-6.1 6.1c0 2.8 1.9 5.3 4.7 6l-.1 7c-5.7.5-10.4 4.5-11.9 9.8l-6.7-1.2c-.2-3.3-2.9-5.8-6.1-5.8C2.7 21.9 0 24.6 0 28s2.7 6.1 6.1 6.1c2.4 0 4.6-1.4 5.6-3.7l6.7 1.2c0 .4 0 .7-.1 1.1 0 4.4 2.1 8.3 5.3 10.8l-3.8 6.1c-3.2-1.1-6.7.6-7.8 3.8-.2.6-.3 1.3-.3 2 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-1.6-.6-3.2-1.8-4.3l3.8-6.1c1.9.9 3.9 1.4 6 1.4 5.6 0 10.4-3.3 12.5-8.1l6.8 2.3v.5c0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c.3-3.3-2.4-6-5.8-6M54 14.8c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3-1.8 0-3.3-1.5-3.3-3.3 0-1.9 1.5-3.3 3.3-3.3M6.1 31.3c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3M18 58.8c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3c-.1 1.8-1.5 3.3-3.3 3.3M29.1 6.1c0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3-1.8 0-3.3-1.5-3.3-3.3m3 37.6c-6 0-10.9-4.9-10.9-10.9s4.9-10.9 10.9-10.9S43 26.8 43 32.8s-4.9 10.9-10.9 10.9m25.5.8c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3"></path></svg>
                              </span></Link>
                        </div>
                    </div>
                </div>
                    )}
                    
                </div>
            </div>
                        </div>

                    </div>
                </div>
            </section>
      {/* <div className="kajiCenter">
                    <h2 className="pop-heading">Kijiji Central</h2>
                
                <div className="row row-custom3">
                    {popkaji.map((item ,u)=>
                    <div key={u} className="col-lg-4 pop-box">
                    <div className="kaji-otr-img">
                        <img src={item.popimg} alt="img" className='kajiImg' />
                        <div className="btn-otr">
                            <Link className='btn-inr'>{item.name}
                            <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63.7 61.6" aria-hidden="true" color="#FFFFFF" focusable="false" height="32" width="32"><path fill="currentColor" d="M57.6 35.1c-2.1 0-4.1 1.1-5.2 2.9l-6.8-2.3c.7-3.2.2-6.5-1.3-9.4l5.6-3.8c1.1 1 2.6 1.6 4.1 1.6 3.4 0 6.1-2.7 6.1-6.1 0-3.4-2.7-6.1-6.1-6.1-3.4 0-6.1 2.7-6.1 6.1 0 .8.1 1.5.4 2.1L42.7 24c-2.3-2.7-5.4-4.4-8.9-4.8l.1-7.1c2.8-.7 4.7-3.1 4.7-6 0-3.4-2.7-6.1-6.1-6.1s-6.1 2.7-6.1 6.1c0 2.8 1.9 5.3 4.7 6l-.1 7c-5.7.5-10.4 4.5-11.9 9.8l-6.7-1.2c-.2-3.3-2.9-5.8-6.1-5.8C2.7 21.9 0 24.6 0 28s2.7 6.1 6.1 6.1c2.4 0 4.6-1.4 5.6-3.7l6.7 1.2c0 .4 0 .7-.1 1.1 0 4.4 2.1 8.3 5.3 10.8l-3.8 6.1c-3.2-1.1-6.7.6-7.8 3.8-.2.6-.3 1.3-.3 2 0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c0-1.6-.6-3.2-1.8-4.3l3.8-6.1c1.9.9 3.9 1.4 6 1.4 5.6 0 10.4-3.3 12.5-8.1l6.8 2.3v.5c0 3.4 2.7 6.1 6.1 6.1s6.1-2.7 6.1-6.1c.3-3.3-2.4-6-5.8-6M54 14.8c1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3-1.8 0-3.3-1.5-3.3-3.3 0-1.9 1.5-3.3 3.3-3.3M6.1 31.3c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3M18 58.8c-1.8 0-3.3-1.5-3.3-3.3s1.5-3.3 3.3-3.3 3.3 1.5 3.3 3.3c-.1 1.8-1.5 3.3-3.3 3.3M29.1 6.1c0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3-1.8 0-3.3-1.5-3.3-3.3m3 37.6c-6 0-10.9-4.9-10.9-10.9s4.9-10.9 10.9-10.9S43 26.8 43 32.8s-4.9 10.9-10.9 10.9m25.5.8c-1.8 0-3.3-1.5-3.3-3.3 0-1.8 1.5-3.3 3.3-3.3 1.8 0 3.3 1.5 3.3 3.3 0 1.8-1.5 3.3-3.3 3.3"></path></svg>
                              </span></Link>
                        </div>
                    </div>
                </div>
                    )}
                    
                </div>
            </div> */}
    </>
  )
}

export default KajiCenter
