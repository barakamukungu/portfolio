import React, { useRef } from 'react';
import './contact.css';
import FacebookIcon from '../../assets/linkedin.svg';
import TwitterIcon from '../../assets/github.svg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_93w6u3h', 'template_3twzx85', form.current, {
        publicKey: '2bzatYm9PdUfOhHb7',
      })
      .then(
        () => {
          console.log(XPathResult.text);
          e.target.reset();
          alert('Email Sent !');
        },
        (error) => {
          console.log(error.text);
        },
      );
  };

  return (
    <section id='contactPage'>
      {/*<div id='clients'>
        <h1 className='contactPageTitle'>My Clients</h1>
        <p className='clientDesc'>I have had the opportunity to work with a diverse group of companies. Some of the notable companies I hae worked with includes</p>
        <div className='clientImgs'>
          <img src={Walmart} alt='Client' className='clientImg' />
          <img src={Adobe} alt='Client' className='clientImg' />
          <img src={Microsoft} alt='Client' className='clientImg' />
          <img src={Facebook} alt='Client' className='clientImg' />
        </div>
      </div>*/}
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='your_name' />
          <input type='email' className='email' placeholder='Your Email' name='your_email' />
          <textarea className='msg' name='message' rows="5" placeholder='Your Message'></textarea>
          <button type='submit' value='Send' className='submitBtn'>Submit</button>
          <div className='links'>
            <a href='https://github.com/barakamukungu/' className='Link'>
              <img src={TwitterIcon} alt='GitHub' className='github-icon' />
            </a>

            <a href='https://www.linkedin.com/in/baraka-mukungu-5a649a384/' className='Link'>
              <img src={FacebookIcon} alt='LinkedIn' className='linkedin-icon' />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact
