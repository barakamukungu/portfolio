import React from 'react';
import './works.css';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
import Portfolio4 from '../../assets/portfolio-4.png';
import Portfolio6 from '../../assets/portfolio-6.png';

const Works = () => {
  return (
    <section id='works'>
      <h2 className='worksTitle'>My Projects</h2>
      <span className='worksDesc'>I take pride in paying attention to the smallest details and ensuring the best output. Click on the images to view my work.</span>
     <div className='worksImgs'>
      <a href='https://github.com/barakamukungu/amazon_analysis'>
        <img src={Portfolio2} alt='Amazon Analysis' className='worksImg' />
      </a>
    
      <a href='https://github.com/barakamukungu/crm-sales-dashboard'>
        <img src={Portfolio3} alt='CRM Dashboard' className='worksImg' />
      </a>
    
      <a href='https://github.com/barakamukungu/coffee-shop-analysis'>
        <img src={Portfolio4} alt='Coffee Analysis' className='worksImg' />
      </a>
    
      <a href='https://github.com/barakamukungu/security-log-analysis'>
        <img src={Portfolio6} alt='Security Analysis' className='worksImg' />
      </a>
    </div>
      {/*<button className='worksBtn'>See More</button>*/}
    </section>
  );
}

export default Works
