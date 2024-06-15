import React, { useEffect,useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,  faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import img1 from '../images/tamilarasu-E-R.pdf';
import emailjs from '@emailjs/browser';
const ContactMe = () => {
  const [submit, setSubmit] = useState({form:true,submit:false});
  useEffect(() => {
    emailjs.init('DkWern0_PDw3z0jYY');
  }, []);
  const submitForm = (e) => {
    e.preventDefault();

      // console.log(e.target[0].value);
    emailjs.send("service_fcirgb7","template_avdnurv",{
      from_name:e.target[0].value,
      message: e.target[2].value,
      email_id: e.target[1].value,
      }).then((response) => {
        
      }
    );
    e.target.reset();
    setSubmit({form:false,submit:true});
  }

  return (
    <div className="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left col-12 col-md-5">
            <h1 className='sub-title'>Contact <span className='me-text'>Me</span></h1>
            <p><FontAwesomeIcon className='icon' icon={faPaperPlane}/> tamilravi37@gmail.com</p>
            <p><FontAwesomeIcon className='icon' icon={faPhone} /> 9159106519</p>
            <div className="social-icons">
              <a href="#contact"><FontAwesomeIcon className='contact-icon' icon={faFacebook} /></a>
              <a href="#contact"><FontAwesomeIcon className='contact-icon' icon={faInstagram} /></a>
              <a href="#contact"><FontAwesomeIcon className='contact-icon' icon={faLinkedin} /></a>
              <a href="#contact"><FontAwesomeIcon className='contact-icon' icon={faGithub} /></a>
            </div>
            <div className="download">
              <a className='btn-btn' href={img1} download="resume">Download Resume</a>
            </div>
          </div>
          <div className="contact-right col-12 col-md-7">
           {submit.form && <form id='contact-form' onSubmit={submitForm}>
              <input type="text" name='Name' placeholder='Your Name' required />
              <input type="email" name='email' placeholder='Your Email' required />
              <textarea name="message" rows="6" placeholder='Your Message' required></textarea>
              <div className="submit-block">
                <button type='submit' className='submit-btn'>Submit</button>
              </div>
            </form>}
            {submit.submit && <div className="after-submit">
              <div className="after-submit-img">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck}  style={{width:"90px",height:"60px"}}/>
              </div>
              <p>Thanks for contacting me. I will get back to you soon.</p>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
