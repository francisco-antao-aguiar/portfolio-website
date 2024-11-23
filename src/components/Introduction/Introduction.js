import React from 'react'
import ProfilePic from '../../assets/profile-pic.jpg'
import Document from '../../assets/document.svg'
import Email from '../../assets/email.svg'
import Github from '../../assets/github.svg'
import Linkedin from '../../assets/linkedin.svg'
import Telephone from '../../assets/telephone.svg'
import './Introduction.css'

function Introduction() {
  return (
    <div id='introduction' className='introduction'>
      <img className='profile-pic' src={ProfilePic} alt='ProfilePic' width={300}></img>
      <div className='greetings'>Hi, my name is Francisco and I'm a Fullstack Developer</div>
      <div className='contacts'>
          <div className='contacts-entry'>
            <img src={Email} height={40}></img>
            <span>francisco.antao.aguiar@gmail.com</span>  
          </div>
          <div className='contacts-entry'>
            <img src={Telephone} height={40}></img>
            <span>+351 969622880</span>  
          </div>
          <div className='contacts-entry'>
            <img src={Linkedin} height={40}></img>
            <span>LinkedIn</span>  
          </div>
          <div className='contacts-entry'>
            <img src={Github} height={40}></img>
            <span>GitHub</span>  
          </div>
          <div className='contacts-entry'>
            <img src={Document} height={40}></img>
            <span>Download CV</span>
          </div>
      </div> 
    </div>
  )
}

export default Introduction