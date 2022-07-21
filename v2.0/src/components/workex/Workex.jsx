import React from 'react'
import './workex.css'
import logo1 from '../../assets/avatar1.webp'
import logo2 from '../../assets/avatar2.jpg'
import logo3 from '../../assets/avatar3.jpg'
import logo4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    logo : logo1,
    Name: 'Scaler Academy',
    work: 'I was Part of the Business Development team, where I was responsibile for providing the necessary consult for the sales Team, when they need any technical assiatance, I was part of a team developing an internal Lead management tool for team as well.'
    
    },
    {
    logo : logo2,
    Name: 'Company_Name',
    work: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore tempora, incidunt aliquam labore, est quo accusantium beatae magnam dicta velit perspiciatis dolor praesentium optio, recusandae reprehenderit cupiditate? Id, eligendi repellat!'
    
    },
    
    {
    logo : logo3,
    Name: 'Company_Name',
    work: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore tempora, incidunt aliquam labore, est quo accusantium beatae magnam dicta velit perspiciatis dolor praesentium optio, recusandae reprehenderit cupiditate? Id, eligendi repellat!'
    
    },
    
    {
    logo : logo4,
    Name: 'Company_Name',
    work: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore tempora, incidunt aliquam labore, est quo accusantium beatae magnam dicta velit perspiciatis dolor praesentium optio, recusandae reprehenderit cupiditate? Id, eligendi repellat!'
    
    }
]
const Workex = () => {
  return (
    <section id="Workex">
      <h5>This Section includes my work experience in both tech and non-tech roles</h5>
      <h2>Work Experience</h2>

      <Swiper 
      modules={[Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ dynamicBullets: true ,clickable: true }}
      className='container workex__container'>
        {
          data.map(({logo , Name , work} , index)=> {
            return (
              <SwiperSlide key={index} className="workex">
          <div className="workex__logo">
            <img src={logo} alt="Company logo" />
          </div>
          <h5 className='workex__name'>{Name}</h5>
            <small className="workex__work">{work}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>

    </section>
  )
}

export default Workex