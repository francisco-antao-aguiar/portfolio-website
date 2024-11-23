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
          <div>
            <img src={Email} width={40}></img>
            <span>francisco.antao.aguiar@gmail.com</span>  
          </div>
          <div>
            <img src={Telephone} width={40}></img>
            <span>+351 969622880</span>  
          </div>
          <div>
            <img src={Linkedin} width={40}></img>
            <span>LinkedIn</span>  
          </div>
          <div>
            <img src={Github} width={40}></img>
            <span>GitHub</span>  
          </div>
          <div>
            <img src={Document} width={40}></img>
            <span>Download CV</span>
          </div>
      </div> 
    </div>
  )
}

export default Introduction