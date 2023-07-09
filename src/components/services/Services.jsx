import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import AVTR1 from '../../assets/avatar1.webp'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I have Achieved</h5>
      <h2>Education</h2>
      <div className="container services__container">
      <article className="service">
        
        <div className="service__head">
          
          <h3>Graduation</h3>
          
        </div>
        <ul className='service__list'>
        <img className='service__list-image' src={AVTR1} alt="" />
        <li>
          <BiCheck className='service__list-icon'/>
          <p>Final Year B.Tech in Information Technology.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Harcourt Butler Technical University</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Scored a CGPA of 8.48 <br/>&#40;till 6th Semester&#41;.</p>
        </li>

        {/* <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </li> */}

        {/* <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </li>

        <li>
          <BiCheck className='service__list-icon'/>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </li> */}
        </ul>
      </article>
          {/* END OF UI/UX */}
          <article className="service">
             <div className="service__head">
               <h3>Intermediate</h3>
             </div>
             <ul className='service__list'>
             <img className='service__list-image' src={AVTR2} alt="" />
                 <li>
                    <BiCheck className='service__list-icon' />
                    <p>Intermediate in Science in 2020</p>
                 </li>
                 <li>
                    <BiCheck className='service__list-icon' />
                    <p>Harihar singh Academy<br/> Varanasi , Uttar Pradesh</p>
                 </li>
                 <li>
                    <BiCheck className='service__list-icon' />
                    <p>Scored an Aggregate Percentage of 81.4%</p>
                 </li>
                 
             </ul>
          </article>
          {/* END OF WEB DEVELOPMENT */}
          <article className="service">
             <div className="service__head">
               <h3>High School</h3>
             </div>
             <ul className='service__list'>
             <img className='service__list-image' src={AVTR3} alt="" />
                 <li>
                    <BiCheck className='service__list-icon' />
                    <p>Completed in June 2018</p>
                 </li>
                 <li>
                    <BiCheck className='service__list-icon' />
                    <p>Divine Sainik School<br/> Varanasi , Uttar Pradesh</p>
                 </li>
                 <li>
                    <BiCheck className='service__list-icon' />
                    <p>Scored 89.6%</p>
                 </li>
                 
             </ul>
          </article>
          {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services
