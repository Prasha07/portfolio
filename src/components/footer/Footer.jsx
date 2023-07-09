import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import {AiOutlineLinkedin} from 'react-icons/ai'
const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>PRASHANT</a>
        <ul className='permalinks'>
          <li><a href="#">Home</a> </li>
          <li><a href="#about">About</a> </li>
          <li><a href="#skill">Skill</a> </li>
          <li><a href="#portfolio">Portfolio</a> </li>
          <li><a href="#services">Education</a> </li>
          <li><a href="#contact">Contact</a> </li>
        </ul>
        <div className='footer__socials'>
           <a href="https://www.facebook.com/profile.php?id=100012656341422" target='_blank'><FaFacebookF/></a>
           <a href="https://www.instagram.com/prashantshukla_07_10/" target='_blank' ><FiInstagram/></a>
           <a href="https://twitter.com/Prashan12169094" target='_blank'><IoLogoTwitter/></a>
           <a href="https://www.linkedin.com/in/prashant-shukla-74a589225/" target='_blank'><AiOutlineLinkedin/></a>
        </div>
        <div className="footer__copyright">
          <small>© All Rights Reserved.</small>
        </div>
    </footer>
  )
}

export default Footer
