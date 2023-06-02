import React from 'react'
import "./achievement.css"
import a1 from '../../assets/a1.jpg'
import a2 from '../../assets/a2.jpg'
import a3 from '../../assets/a3.jpg'
import a4 from '../../assets/a4.jpg'
import a5 from '../../assets/a5.jpg'
import a6 from '../../assets/a6.png'
import a7 from '../../assets/a7.jpg'


// import Swiper core and required modules
import {  Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';








export const Achievement = () => {
  return (
    
    <section id="testimonials">
      <h5>My Achievement</h5>
      <h2>Achievement</h2>
      <br /><br />
      <Swiper className="container testimonials_container"
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }} >
      

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={a1} alt="Avatar One" />
          </div>
            <h5 className="client_name">SIH 2022</h5>
           
        
        </SwiperSlide>
<SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={a2} alt="Avatar One" />
          </div>
            <h5 className="client_name">SIH 2022</h5>
           
        
        </SwiperSlide>

        <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={a3} alt="Avatar One" />
          </div>
            <h5 className="client_name">SIH 2022</h5>
           
        
        </SwiperSlide>

       <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={a4} alt="Avatar One" />
          </div>
            <h5 className="client_name">SIH 2022</h5>
           
        
              </SwiperSlide>
              <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={a5} alt="Avatar One" />
          </div>
            <h5 className="client_name">Blue Horn Award 2013</h5>
           
        
              </SwiperSlide>
              
              <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={a6} alt="Avatar One" />
          </div>
            <h5 className="client_name">Published Paper</h5>
           
        
              </SwiperSlide>
              <SwiperSlide className="testimonial">
          <div className="client_avatar">
            <img src={a7} alt="Avatar One" />
          </div>
            <h5 className="client_name">10th distriction</h5>
           
        
        </SwiperSlide>
      </Swiper>
    </section>
    
    
  )
}
export default Achievement;