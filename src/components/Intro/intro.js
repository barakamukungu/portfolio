import React from 'react';
import './intro.css';
import bg from '../../assets/image.jpg';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
        <span  className='hello'></span>
        <span  className='introText'>I'm <span className='introName'>Baraka Mukungu</span> <br />Web Developer|Cybersecurity Enthusiast</span>
        <p className='introPara'>I build and secure websites <br />Helping small businesses and individuals get online safely.</p>
        <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg' /> Hire Me</button></Link>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro
