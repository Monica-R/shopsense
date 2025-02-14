import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function About() {
  return (
    <div className='about'>
      <p>
        This React app has developed with  
        <FontAwesomeIcon className="icon-heart" icon={faHeart} /> by 
        <a href="https://github.com/Monica-R">Mónica R.</a>
      </p>
    </div>
  )
}

export default About