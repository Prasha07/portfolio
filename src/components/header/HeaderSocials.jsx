import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiLeetcode} from 'react-icons/si'
import {SiGeeksforgeeks} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/prashant-shukla-74a589225/" target="_blank"><BsLinkedin/></a>
      <a href="https://github.com/Prasha07" target="_blank"><FaGithub/></a>
      <a href="https://leetcode.com/prashantshukla0710/" target="_blank"><SiLeetcode/></a>
      <a href="https://auth.geeksforgeeks.org/user/prashantshukla0710/practice" target="_blank"><SiGeeksforgeeks/> </a>
    </div>
  )
}

export default HeaderSocials
