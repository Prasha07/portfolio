import React from 'react'
import './skill.css'
import {BsPatchCheckFill} from 'react-icons/bs'
const Skill = () => {
  return (
    <section id='skill'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>
      <div className="container skill__container">
        <div className="skill__frontend">
           <h3>Languages</h3>
           <div className="skill__content">
              <article className="skill__details">
                   <BsPatchCheckFill className='skill__details-icons'/>
                   <div>
                     <h4>JAVA</h4>
                     <small className='text-light'>Intermediate</small>
                   </div>
              </article>
              <article className="skill__details">
                   <BsPatchCheckFill className='skill__details-icons'/>
                   <div>
                      <h4>C++</h4>
                      <small className='text-light'>Basic</small>
                   </div>
              </article>
              <article className="skill__details">
                   <BsPatchCheckFill className='skill__details-icons'/>
                   <div>
                     <h4>Python</h4>
                     <small className='text-light'>Basic</small>
                   </div>
              </article>
              <article className="skill__details">
                   <BsPatchCheckFill className='skill__details-icons'/>
                   <div>
                     <h4>HTML</h4>
                     <small className='text-light'>Experienced</small>
                   </div>
              </article>
              <article className="skill__details">
                   <BsPatchCheckFill className='skill__details-icons'/>
                   <div>
                     <h4>CSS</h4>
                     <small className='text-light'>Intermediate</small>
                   </div>
              </article>
              <article className="skill__details">
                   <BsPatchCheckFill className='skill__details-icons'/>
                   <div>
                     <h4>JavaScript</h4>
                     <small className='text-light'>Intermediate</small>
                   </div>
              </article>
           </div>
        </div>
        {/* end of  development */}
        <div className="skill__backend">
        <h3>Frameworks & Tools</h3>
           <div className="skill__content">
              <article className="skill__details">
                   <BsPatchCheckFill className='skill__details-icons'/>
                   <div>
                     <h4>React</h4>
                     <small className='text-light'>Experienced</small>
                   </div>
              </article>
              <article className="skill__details">
                   <BsPatchCheckFill className='skill__details-icons'/>
                   <div>
                     <h4>Bootstrap</h4>
                     <small className='text-light'>Experienced</small>
                   </div>
              </article>
              <article className="skill__details">
                   <BsPatchCheckFill className='skill__details-icons'/>
                   <div>
                     <h4>MySQL</h4>
                     <small className='text-light'>Experienced</small>
                   </div>
              </article>
              <article className="skill__details">
                   <BsPatchCheckFill className='skill__details-icons'/>
                   <div>
                     <h4>JQuery</h4>
                     <small className='text-light'>Intermediate</small>
                   </div>
              </article>
              <article className="skill__details">
                   <BsPatchCheckFill className='skill__details-icons'/>
                   <div>
                     <h4>Node JS</h4>
                     <small className='text-light'>Basic</small>
                   </div>
              </article>
              <article className="skill__details">
                   <BsPatchCheckFill className='skill__details-icons'/>
                   <div>
                     <h4>Figma</h4>
                     <small className='text-light'>Intermediate</small>
                   </div>
              </article>
           </div>
        </div>
      </div>
    </section>
  )
}

export default Skill
