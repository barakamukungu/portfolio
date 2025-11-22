import React, { useRef } from 'react';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_93w6u3h', 'template_3twzx85', form.current, {
        publicKey: 'MmGFD-ZzHS5LxAtwD',
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert('Email Sent!');
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send email. Check console.");
        }
      );
  };

  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDesc'>
          Please fill out the form below to discuss any work opportunities.
        </span>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type='text' className='name' placeholder='Your Name' name='your_name' required />
          <input type='email' className='email' placeholder='Your Email' name='your_email' required />
          <textarea className='msg' name='message' rows="5" placeholder='Your Message' required></textarea>

          <button type='submit' className='submitBtn'>Submit</button>

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
};

export default Contact;