import React from 'react';
import { Link } from 'react-router-dom';
import "./SignIn.scss"

function SignIn() {
  return (
    <>
      <section className="SignIn-section">
        <div className="container-fluid">
          <div className="row row-custom2">
            <div className="col-lg-9 col-md-12 col-sm-12 left-side-otr">
              <div className="SignIn">
                <div className="row row-custom">
                  <div className="col-lg-12 SignIn-otr">
                    <div className="SignIn-inr">
                      <h2 className="heading-sign">Kijiji’s better when you’re a member</h2>
                      <p className="detail-sign">See more relevant listings, find what you’re looking for quicker, and more!</p>
                      <div className="btn-signOtr">
                        <Link className='btn-sign-in'>Sign In</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* <section className="SignIn">
     <div className="row row-custom">
                <div className="col-lg-12 SignIn-otr">
                    <div className="SignIn-inr">
                        <h2 className="heading-sign">Kijiji’s better when you’re a member</h2>
                        <p className="detail-sign">See more relevant listings, find what you’re looking for quicker, and more!</p>
                        <div className="btn-signOtr">
                            <Link className='btn-sign-in'>Sign In</Link>
                        </div>
                    </div>
                </div>
            </div>
     </section>  */}
    </>
  )
}

export default SignIn;
