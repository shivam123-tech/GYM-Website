import React from 'react'
import aboutimage from '../images/about.png';
function About() {
  return (
    <div id='about'>
      <div className='about-image'>
        <img src={aboutimage} alt=''/>
      </div>
      <div className='about-text'>
          <h1>LEARN MORE ABOUT US</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi cum enim voluptatibus? Deserunt qui adipisci modi maxime, totam ipsa. Obcaecati expedita doloribus ad nulla possimus.</p>
          <button>READ MORE</button>
      </div>
    </div>
  )
}

export default About
