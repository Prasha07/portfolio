import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg'
import IMG2 from '../../assets/portfolio2.jpeg'
import IMG3 from '../../assets/portfolio3.jpeg'
import IMG4 from '../../assets/portfolio4.jpeg'
import IMG5 from '../../assets/portfolio5.jpeg'
import IMG6 from '../../assets/portfolio6.jpeg'
const data=[
  {
    id: 1,
    image: IMG1,
    title: 'Project Name',
    github: 'https://github.com/Prasha07/portfolio',
    demo: '#'
  },
  {
    id: 2,
    image: IMG2,
    title: 'To-Do-List',
    github: 'https://github.com/Prasha07/Todolist',
    demo: 'https://lambent-starship-58f743.netlify.app'
  },
  {
    id: 3,
    image: IMG3,
    title: 'DrumKit',
    github: 'https://github.com/Prasha07/drum',
    demo: 'https://prasha07.github.io/drum/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Keep Notes',
    github: 'https://github.com/Prasha07/keepapp',
    demo: 'https://subtle-treacle-9745c8.netlify.app'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Netflix Series',
    github: 'https://github.com/Prasha07/netflix_series',
    demo: 'https://netflix-series-top5.netlify.app'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Dice Game',
    github: 'https://github.com/Prasha07/dice',
    demo: 'https://prasha07.github.io/dice/'
  }
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
          {/* array destructuring is used here  */}
        {
          data.map(({id,image,title,github,demo})=>{
           return (
            <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
               <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
           )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
