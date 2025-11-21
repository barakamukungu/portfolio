import React from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faShieldAlt, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>Whether you’re an individual or a small business owner, I’ll help you get online
      with a website that not only looks great but is also safe from cyber threats.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <FontAwesomeIcon icon={faCode} className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Website development</h2>
            <p>I’ll design and build you a modern, responsive website that fits your brand and works on any device.</p>
          </div>
        </div>
        <div className='skillBar'>
          <FontAwesomeIcon icon={faShieldAlt} className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Cybersecurity Protection</h2>
            <p>Your site will be secured with SSL, safe configurations, and protection from common vulnerabilities — so you and your customers stay safe.</p>
          </div>
        </div>
        <div className='skillBar'>
          <FontAwesomeIcon icon={faHandsHelping} className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Ongoing Support</h2>
            <p>I’ll be here after launch too — handling updates, maintenance, and monitoring so you can focus on running your business.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills
