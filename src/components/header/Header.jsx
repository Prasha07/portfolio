import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    // <header is an html 5 semanttic tag
    // The <header> element represents a container for introductory content or a set of navigational links.
    <header>
       <div className="container header__container">
           <h5>Hello I'm</h5>
           <h1>Prashant Shukla</h1>
           <h5 className="text-light"> An Engineering Student</h5>
           <CTA />
           <HeaderSocials />
           <div className="me">
             <img src={ME} alt="me"></img>
           </div>
           
           <a href="#contact" className='scroll__down'>Scroll Down</a>

       </div>
    </header>
  )
}

export default Header
