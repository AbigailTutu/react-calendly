/* eslint-disable no-unused-vars */
import React from 'react'

const Enterprise = () => {
  return (
    <>
    <div className="container text-center under-nav">
    <strong><h1 style={{marginBottom: 0}}><strong style={{color: 'blue'}}>Way more</strong> than a</h1>
    <h1 style={{marginTop: 0}}>scheduling link</h1></strong>
    <p style={{marginBottom: 0}}>
      Standardize on the #1 scheduling platform and
    </p>
    <p style={{marginTop: 0, marginBottom: 0}}>
       deliver of Calendly across your entire
    </p>
    <p style={{marginTop: 0}}>
        organization.
    </p>

    <button type="button" className="btn btn-dark">Contact sales</button>
  </div>


  <div className="container-fluid">
  <div className="jumbotron jumbotron-fluid jumbo">
    <div className="container">
      <strong><h3 className="display-4 text-center" style={{color: 'hotpink'}}>Trusted by more than 50,000 of the worlds leading organizations</h3></strong>
      <div className="container-fluid">
        <div className="row imgs">
          <div className="col-md-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Dropbox_logo_2017.svg/2560px-Dropbox_logo_2017.svg.png" className="img-fluid" style={{width: '100px'}}/>
          </div>

          <div className="col-md-2">
            <img src="https://ir.ebaystatic.com/cr/v/c1/ebay-logo-1-1200x1200-margin.png" className="img-fluid" style={{width: '100px'}}/>
          </div>

          <div className="col-md-2">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="img-fluid" style={{width: '100px'}}/>
          </div>

          <div className="col-md-6">
            <div className="row">
            <div className="col-md-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Lyft_logo.svg/1200px-Lyft_logo.svg.png" className="img-fluid" style={{width: '90px'}}/>
            </div>

            <div className="col-md-6">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/L%27Or%C3%A9al_logo.svg/2560px-L%27Or%C3%A9al_logo.svg.png" className="img-fluid" style={{width: '100px'}}/>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="container cards">
<div className="row">
  <div className="col-md-4">
    <div className="card cardss" style={{width: '18rem'}}>
          <div>
          <h3>Sales</h3>
          </div>
          <img src="https://img.freepik.com/free-vector/set-vector-transparent-glasses-with-white-red-wine-with-splash-out-them_1441-549.jpg?w=740&t=st=1670936850~exp=1670937450~hmac=84d7f871c6a9e81ac37c6bcb6f35906c548771f395159d7dc26386e4eaf68870" className="img-fluid" style={{borderRadius: '100%', width: '180px', margin: '50px'}}/>
          <p>Convert more leads and prospects into meetings and revenue. Easily book demos and customer calls without the back and forth.</p>
          </div>
  </div>

  <div className="col-md-4">
    <div className="card cardss" style={{width: '18rem'}}>
          <div>
          <h3>Customer Success</h3>
          </div>
          <img src="https://img.freepik.com/premium-vector/businesswoman-holding-speech-bubble-looking-camera-covering-his-mouth-single-line-art-style_7647-193.jpg?w=740" className="img-fluid" style={{borderRadius: '100%', width: '220px', margin: '50px'}}/>
          <p>Deliver better support interactions and customer consultations. Stay connected with automated remainders and follow-ups.</p>
          </div>
  </div>

  <div className="col-md-4">
    <div className="card cardss" style={{width: '18rem'}}>
          <div>
          <h3>Recruiting</h3>
          </div>
          <img src="https://img.freepik.com/free-vector/collection-characters-from-various-occupation-young-man-working-doctor-farmer-electrician-photographer-blogger-professions-cartoon-style-hand-drawn-vector-design-illustrations_1150-65223.jpg?w=740&t=st=1670938387~exp=1670938987~hmac=3beb2f218d56d402d9951c414c35cef8883735393115e64ad07bda41c16dc39b" style={{borderRadius: '100%', width: '200px', margin: '50px'}}/>
          <p>Fill your candidate pipeline and book more interviews and recuiter screens with easy, standardized scheduling.</p>
          </div>
  </div>
</div>
</div>



<div className="container">
<div className="row easy-ahead">
  <div className="col-md-3">
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

export default Enterprise
