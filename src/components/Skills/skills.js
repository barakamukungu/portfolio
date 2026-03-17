import React from 'react';
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faShieldAlt, faHandsHelping } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>I use data to solve problems, uncover insights, and support decision-making through analysis, dashboards, and security data investigation.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <FontAwesomeIcon icon={faCode} className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Data Analysis (SQL & Python)</h2>
            <p>I analyze large datasets using SQL and Python to uncover trends, patterns, and actionable insights.</p>
          </div>
        </div>
        
        <div className='skillBar'>
          <FontAwesomeIcon icon={faShieldAlt} className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Dashboarding (Excel)</h2>
            <p>I build interactive dashboards using Excel to visualize performance metrics, trends, and business insights.</p>
          </div>
        </div>
        
        <div className='skillBar'>
          <FontAwesomeIcon icon={faHandsHelping} className='skillBarImg' />
          <div className='skillBarText'>
            <h2>Security & Log Analysis</h2>
            <p>I analyze system and network logs to identify suspicious activity, traffic patterns, and potential threats.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills
