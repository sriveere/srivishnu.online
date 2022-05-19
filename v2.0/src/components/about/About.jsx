import React from 'react'
import './about.css'
import ME1 from '../../assets/me.about.jpg'
import ME from '../../assets/me-about.jpg'
import {CgWorkAlt} from 'react-icons/cg'
import {BsPenFill} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Slide from 'react-reveal/Slide'

const About = () => {
  return (
    <section id='about'>
      <h2>Come get to Know me..</h2>
      <Slide left>
      <div className="container about__container">
        <div className="about__hero">
        <div className="about__me">

          <div className="about__me-image">
            <img src={ME1} alt="again a beautiful bald man" />

          </div>
        </div>
        <h2>Let's Get Straight to the point here..click on these Tiles</h2>
        </div>
        <div className="about__content">
          <div className="about__cards">
            
            {/*=============My skillset and tools============*/}

            <a href="#toolkit">
            <article className="about__card">
              <CgWorkAlt className='about__icon' />
              <h5>My Skillset</h5>
              <small>An unordered list of my Skills along with the languages I speak and Tools I use  </small>
            </article>
            </a>

            {/*=============REPOS============*/}

            <a href="https://www.github.com/sri-wierdo" target="_blank" rel='noreferrer'>
            <article className="about__card">
              <BsGithub className='about__icon' />
              <h5>My Project Repos</h5>
              <small>an assortment of cool Projects I've worked on and also some open source Projects I work on..</small>
            </article>
            </a>
            {/*=============BLOG============*/}


            
            <a href="https://www.instagram.com/sri_wierdo" target="_blank" rel='noreferrer'><article className="about__card">
              <BsPenFill className='about__icon' />
              <h5>My Blog</h5>
              <small>I write about my journey through coding and may be some cheesy poetry</small>
            </article>
            </a>
            {/*==============More About me=========*/}            
            <a href="">
            <article className="about__card">
            <BsFillPersonLinesFill className='about__icon' size='25'/>
              <h5><br /> <u>My Story...</u> </h5>
            <small>Click to know more about me  <br /> <br /> </small>
            </article>
            </a>
            



          </div>
        </div>
      </div>
      </Slide>
    </section>
  )
}

export default About