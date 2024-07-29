import React from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
// import colony from "../../img/"
// import colony1 from "../../img/colony2-img1.jpg"
// import colony2 from "../../img/colony3-img3.jpg"
// import colony3 from "../../img/colony3-img4.jpg"
import './Slider.scss';
import imgsli from "../../img/21.webp";
import imgsli1 from "../../img/22.webp";
import imgsli2 from "../../img/23.webp";

import { CaretRight, CaretLeft } from '@phosphor-icons/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


function Slider() {
  const swidata = [
    {
      imag: imgsli,
      heading: "A Relax SPA",
      price: "$2,800.00"
    },
    {
      imag: imgsli1,
      heading: "The all New FGS 5 wide Combo Vending Machine",
      price: "$2,800.00"
    },
    {
      imag: imgsli2,
      heading: "A Relax SPA"
    },
    {
      imag: imgsli,
      heading: "A Relax SPA",
    },
    {
      imag: imgsli2,
      heading: "A Relax SPA",
      price: "$2,800.00"
    },
    {
      imag: imgsli1,
      heading: "The all New FGS 5 wide Combo Vending Machine",
      price: "$2,800.00"
    },
    {
      imag: imgsli,
      heading: "A Relax SPA",
      price: "$2,800.00"
    },
    {
      imag: imgsli2,
      heading: "The all New FGS 5 wide Combo Vending Machine",
      price: "$2,800.00"
    },
    {
      imag: imgsli,
      heading: "A Relax SPA",
      price: "$2,800.00"
    },
    {
      imag: imgsli1,
      heading: "A Relax SPA",
      price: "$2,800.00"
    }
  ]
  return (
    <>
      <section className="swiper">
        <div className="container-fluid">
          <div className="row row-custom2">
            <div className="col-lg-9 col-md-12 left-side-otr">
              <div className="slider">
                <div className="wrapper1">
                  <h2 className="pop-heading">Homepage Gallery</h2>
                  <div className="sli-link">
                    <Link to="" className='popLink1'><p className="popLINk-inr1">Your Ad here</p></Link>
                    <Link to="" className='popLink'><p className="popLINk-inr">See All</p></Link>
                  </div>
                </div>
                <div class="wrapper">
                  <Swiper
                    className='swiper-wrapper'
                    // install Swiper modules
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={7}
                    navigation={{
                      nextEl: ".swiper-button-next",
                      prevEl: ".swiper-button-prev",
                    }}
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    breakpoints={
                      {
                        0: {
                          slidesPerView: 1,
                        },
                        420: {
                          slidesPerView: 2,
                        },
                        575: {
                          slidesPerView: 3,
                        },
                        768: {
                          slidesPerView: 5,
                        },
                        992: {
                          slidesPerView: 4,
                        },
                        1100: {
                          slidesPerView: 5,
                        },
                        1200: {
                          slidesPerView: 7,
                        }
                      }
                    }
                  >

                    {swidata.map((item, i) =>
                      <SwiperSlide key={i} className="swiper-slide">
                        <div className="slider-box-otr">
                          <Link className="slider-box-inr">
                            <div className="slider-img-otr">
                              <img src={item.imag} className='slider-img-inr' alt="" />
                            </div>
                            <div className="slider-detail">
                              <h4 className="heading-sli">{item.heading}</h4>
                              <p className="sli-price">{item.price}</p>
                            </div>
                          </Link>
                        </div>

                      </SwiperSlide>
                    )

                    }

                  </Swiper>

                  <div className="icon">
                    <div class="swiper-button-next">
                      <CaretRight size={32} />
                    </div>
                    <div class="swiper-button-prev">
                      <CaretLeft size={32} />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 RightSide-otr">
              <div className="ad-view">
                <Link className="ad-del"><span className='ad-del-inr'>AdChoices</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" fill-rule="evenodd" height="13" data-testid="ad-choices-logo-icon" width="13">
                    <path fill="#00aecd" d="M1.087 0L.792.051.534.188.313.376.147.633l-.11.325L0 1.334v9.921l.018.479.092.393.166.274.203.206.24.102.295.034.331-.034.369-.12.387-.154v-.017l1.124-.581.221-.154.221-.274.074-.359-.018-.137-.166-.308-.295-.154h-.387l-.111.017-.368.137-.313-.034-.221-.154-.147-.257-.055-.376V2.771l.055-.376.166-.257.258-.137.314-.017.368.12.055.017L9.671 5.73l.313.222.147.257.018.257-.147.257-.295.222-.055.035-4.2 2.018V6.62l-.11-.359-.295-.239-.313-.068-.387.103-.258.274-.073.291v3.387l.111.325.276.257.332.171.147.051.313.017.221-.103 6.576-3.318.332-.188.276-.206.203-.205.129-.205.055-.222-.018-.222-.111-.239-.203-.222-.295-.239-.35-.205L2.173.257 1.787.085 1.418 0zm5.225 4.789l-.092-.325-.258-.274-.405-.086-.35.068-.295.257-.092.359.074.342.276.257.387.103.368-.086.276-.239z"></path></svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  )
}

export default Slider
