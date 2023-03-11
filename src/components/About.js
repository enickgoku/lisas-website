import React from 'react'

import './About.css'

const About = () => {
  return (
    <div className='about'>
      <div className='container'>
        {/* add image here */}
        <div className='col-2'>
          <h1>About Us</h1>
          <span className='line'></span>
          <p>Stuff Here</p>
          <p>Stuff Here</p>
          <button className='button'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About
