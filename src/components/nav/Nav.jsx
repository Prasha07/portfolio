import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {FaUserGraduate} from 'react-icons/fa'
import {BiMessageSquareDetail} from 'react-icons/bi'

const Nav = () => {
  // usestate is ued to identify which nav icon(part of website is active).
  // by default active is home with id #
  // jo active component hoga uska icon  white krna pdega using usestate
  const[activeNav,setActiveNav]=useState('#');
  return (
    <nav>
    {/* jiska id about hoga uspe chla jayega (about.jsx ka h) */}
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav=== '#'? 'active' :''}><AiOutlineHome/></a>
      {/* on click about activenav value becomes #about and active classname is given to this sec . So it appears white as this component is active */}
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav=== '#about'? 'active' :''}><AiOutlineUser/></a>
      <a href="#skill" onClick={() => setActiveNav('#skill')} className={activeNav=== '#skill'? 'active' :''}><BiBook/></a>
      <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav=== '#services'? 'active' :''}><FaUserGraduate/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav=== '#contact'? 'active' :''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav
