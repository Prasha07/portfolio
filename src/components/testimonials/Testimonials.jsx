import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.webp'
import AVTR2 from '../../assets/avatar2.png'
import AVTR3 from '../../assets/avatar3.png'
import AVTR4 from '../../assets/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
const data=[
  {
    avatar:AVTR1,
    name:'client_name',
    review:'aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae'
  },
  {
    avatar:AVTR2,
    name:'client_name',
    review:'aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae'
  },
  {
    avatar:AVTR3,
    name:'client_name',
    review:'aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae'
  },
  {
    avatar:AVTR4,
    name:'client_name',
    review:'aliquet nibh praesent tristique magna sit amet purus gravida quis blandit turpis cursus in hac habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat mauris nunc congue nisi vitae'
  },
]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
    {/* carousel lane k liye bs jo imort kiye hai usi ka use kr rehe hai swiper se */}
      <Swiper  className="container testimonials__container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable: true}}>
       {
        data.map(({avatar,name,review},index)=>{
          return (
            <SwiperSlide key={index} className="testimonial"> 
             <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
             </div>
             <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
          )
        })
       }
      </Swiper>
    </section>
  )
}

export default Testimonials
