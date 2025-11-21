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
      <span className='worksDesc'>I take pride in paying attention to the smallest details and ensuring the best output. Click on the images to view.</span>
      <div className='worksImgs'>
        <a href='https://food-delivery-home.onrender.com'><img src={Portfolio6} alt='' className='worksImg' /></a>
        <a href='https://blog-app-dlvr.onrender.com'><img src={Portfolio2} alt='' className='worksImg' /></a>
        <a href='https://github.com/barakamukungu/simscanner'><img src={Portfolio3} alt='' className='worksImg' /></a>
        <a href='https://github.com/barakamukungu/log-analyzer'><img src={Portfolio4} alt='' className='worksImg' /></a>
        {/*<img src={Portfolio5} alt='' className='worksImg' />
        <img src={Portfolio1} alt='' className='worksImg' />*/}
      </div>
      {/*<button className='worksBtn'>See More</button>*/}
    </section>
  );
}

export default Works
