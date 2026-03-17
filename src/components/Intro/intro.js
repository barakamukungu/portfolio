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
        <span  className='introText'>I'm <span className='introName'>Baraka Mukungu</span> <br />Data Analyst | SQL • Python • Excel | Cybersecurity & Log Analysis</span>
        <p className='introPara'>I specialize in analyzing large datasets to uncover insights, build dashboards, and support decision-making. <br />My work includes customer sentiment analysis, sales performance dashboards, and security log analysis.</p>
        <Link><button className='btn'><img src={btnImg} alt='Hire Me' className='btnImg' /> Hire Me</button></Link>
      </div>
      <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default Intro
