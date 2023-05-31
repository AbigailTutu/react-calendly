/* eslint-disable no-unused-vars */
import React from 'react'

const Individual = () => {
  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-md-1">

        </div>


        <div className="col-md-11">
          <div className="row">
            <div className="col-md-6 the-genius-way">
              <strong><h1>The genius way</h1>
              <h1>to work <strong style={{color: 'blue'}}>better</strong></h1></strong>

               <p>
                 Calendly makes it easy to work smarter when you are working solo. Meetings, sessions, and appointments become more efficient ways to achieve success and accomplish goals.
              </p>

              <button type="button" className="btn btn-dark">Sign up for free</button>
             </div>

             <div className="col-md-6 img-under-nav">
               <img src="https://fps.cdnpk.net/landings-paid/23022022/mockups/img-product-2.webp" className="img-fluid"/>
             </div>
             </div>
           </div>
        </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-md-1">
       
        </div>


        <div className="col-md-11">
          <div className="row">
            <div className="col-md-6 img2">
              <img src="https://fps.cdnpk.net/landings-paid/23022022/mockups/img-product-3.webp" className="img-fluid"/>
            </div>


            <div className="col-md-6 book-up-efficiently">
               <p className="para">A CURATED CALENDAR</p>

               <h2>Book up efficiently</h2>

              <p>
                When invitees select a meeting slot from your schedule, they only see the times you are available, and only the length and type of meeting you want to have. Your schedule fills up efficiently, and everyone avoids excess email exchanges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="container">
      <div className="row">
        <div className="col-md-1">
      
        </div>


        <div className="col-md-11">
          <div className="row">
            <div className="col-md-6 automated-notifications">
              <p className="para1">
                 AUTOMATED NOTIFICATIONS & FOLLOW-UPS
              </p>

              <h2>
                Work like you have a personal assistant
              </h2>

              <p>
                Because Calendly automates administrative tasks like sending reminder emails and follow-ups, you can focus on the work that builds your business and brings customers back for more.
              </p>
            </div>


            <div className="col-md-6 img3">
              <img src="https://img.freepik.com/free-photo/videographer-using-computer-with-chroma-key-mock-up-isolated-display-editing-video-audio-footage_482257-3410.jpg?w=900&t=st=1670595547~exp=1670596147~hmac=1695784a00e4cf729c30e2de36c4ffa7d7c5a5ec0a6c4b4247d64eb49aecbe11" className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="container-fluid">  
        <div className="jumbotron jumbo">
        <h1>Find just-right plans</h1> 
        <h1>for individuals and</h1> 
        <h1>samall teams</h1>
        <a className="btn btn-primary btn-lg" href="#" role="button">See our plans</a>
        </div>
      </div>



      <div className="container">
        <div className="row">
          <div className="col-md-3 easy-ahead">
            <h1>Easy</h1>
            <h1 style={{color: 'blue'}}>ahead</h1>

            <p style={{color: 'gray'}}>
              We take the work out of connecting with others so you can accomplish more.
            </p>

            <select className="custom-select">
            <option selected>English</option>
            <option value="1">French</option>
            <option value="2">Spanish</option>
            <option value="3">Danish</option>
                </select>
        </div>

        <div className="col-md-3 about">
            <h1>About</h1>
            <p>About Calendly</p>
            <p>Contact Sales</p>
            <p>Newsroom</p>
            <p>Careers</p>
            <p>Security</p>
            </div>

          <div className="col-md-3 solution">
            <h1>Solution</h1>
            <p>Customer Success</p>
            <p>Sales</p>
            <p>recruiting</p>
            <p>Education</p>
            <p>Marketing</p>
          </div>

          <div className="col-md-3 popular-features">
            <h1>Popular Features</h1>
            <p>Embed Calendly</p>
            <p>Availability</p>
            <p>Sending Notifications</p>
            <p>Using Calendly Mobile</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Individual
