/* eslint-disable no-unused-vars */
import React from 'react'

const Home = () => {
  return (
    <>
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">

        </div>

        <div className="col-md-10">
          <div className="row">
            <div className="col-md-4 easy-acheduling">
                <h1><strong>Easy</strong></h1>
                <h1><strong>scheduling</strong></h1>
                <h1 style={{color: 'blue'}}><strong>ahead</strong></h1>

                <p className="para1">
                 Calendly is your hub for scheduling meetings professionally and efficiently, eliminating the hassle of back-and-forth emails so you can get back to work.
                </p>

                       
                      
                  <div className="button-under-para1">
                    <div className="shadow-lg p-3 mb-5 bg-white rounded">
                      <div className="input-group mb-3">
                          <input type="text" className="form-control input-under-nav" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="button-addon2"/>
                          <div className="input-group-append">
                            <button className="btn btn-outline-secondary button-under-nav" type="button" id="button-addon2">Sign Up</button>
                          </div>
                      </div>
                    </div>

                        <p className="para2">
                        Create your free account. No credit card required
                        </p>
                  </div>
            </div>


              <div className="col-md-8">
                <img src="https://studio.tailorbrands.com/images/components/mockups/mockup_domain.png" className="img-fluid img-under-nav"/>
              </div>
          </div>
        </div>
      </div>
    </div>


    <div className="container simplified-scheduling">
      <div className="row">
        <div className="col-md-2">
        
        </div>
      </div>

      <div className="col-md-10"></div>
       <h2 className="first-h2 text-center">Simplified scheduling for more than</h2>
       <h2 className="first-h2 text-center"><strong className="strong">10,000,000</strong> users worldwide</h2>

        <div className="companies">
          <p className="para3">Compass</p>

        <img src="https://cdn-icons-png.flaticon.com/128/3621/3621459.png" width="50px"/>
        <p className="para3">ebay</p>

        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/La-Z-Boy_Logo.svg/1200px-La-Z-Boy_Logo.svg.png" width="90px"/>
        <p><img src="https://brandslogos.com/wp-content/uploads/images/large/twilio-logo-black-and-white-1.png" width="90px"/></p>
        </div>

    </div>


    <div className="container lists-of-items">
      <div className="row">
        <div className="col-md-2">
        
        </div>


        <div className="col-md-10 lists-of-items2">
          <div className="row">
            <div className="col-md-4">
                <h2> <strong className="numbers rounded-circle">1</strong>Create simple rules</h2>

                <p>
                  Let Calendly know your availability preferences and it will do the work for you.
                </p>
            </div>


              <div className="col-md-4">
                <h2> <strong className="numbers rounded-circle">2</strong>Share your link</h2>
                <p>
                   Send guests your Calendly link or embed it on your website.
                </p>
              </div>


              <div className="col-md-4">
                <h2> <strong className="numbers rounded-circle">3</strong>Get booked</h2>

                <p>
                  They pick a time and the event is added to your calender.
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
