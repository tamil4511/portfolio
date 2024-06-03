import React from 'react'
const AboutMe = () => {
  return (
    <div className='main-div'>
      <h2 className='about-heading'>About Me</h2>
      <div className="contact-details">
        <div className="row">
        <div className="col">
        <span><span className='contact-dd'>Name </span> TAMILARASU E R</span>
        </div>
        <div className="col">
            <span><span className='contact-dd'>Phone </span> +91 9159106519</span>
        </div>
        </div>
        <div className="row">
            <div className="col">
            <span><span className='contact-dd'>Experience </span>Fresher</span>
            </div>
            <div className="col">
            <span><span className='contact-dd'>Nationality </span>Indian</span>
            </div>
        </div>
        <div className="row">
            <div className="col">
            <span><span className='contact-dd'>Email </span>tamilravi37@gmail.com</span>
            </div>
            <div className="col">
            <span><span className='contact-dd'>Languages </span>English, Tamil</span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
