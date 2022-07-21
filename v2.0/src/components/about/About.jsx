import React from 'react'
import './about.css'
import ME from '../../assets/me-about.webp'
import overlay from '../../assets/me-about-overlay.webp'
import {CgWorkAlt} from 'react-icons/cg'
import {BsPenFill} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Slide from 'react-reveal/Slide'

const About = () => {
  const handleblogClick = () => {
    alert('My Blog is Coming soon Until then You can check my instagram out!')
  }

  const handleStoryClick = () => {
    alert('Yeah this page is also not Done Yet.... You see I am Slow with CSS and I like my pages to look good, soooo... yeah It\'s Taking Time ')
  }

  return (
    <section id='about'>
      <h2>Come get to Know me..</h2>
      <Slide left>
      <div className="container about__container">
        <div className="about__hero">
        <div className="about__me">

          <div className="about__me-image">
            <img src={ME} alt="again a beautiful bald man" className='under' />
            <img src={overlay} alt="color overlay" className='overlay' />
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


            
            <div href="https://www.instagram.com/sri_wierdo" onClick={handleblogClick} target="_blank" rel='noreferrer'><article className="about__card">
              <BsPenFill className='about__icon' />
              <h5>My Blog</h5>
              <small>I write about my journey through coding and may be some cheesy poetry</small>
            </article>
            </div>
            {/*==============More About me=========*/}            
            <div onClick={handleStoryClick}>
            <article className="about__card">
            <BsFillPersonLinesFill className='about__icon' size='25'/>
              <h5><br /> <u>My Story...</u> </h5>
            <small>Click to know more about me  <br /> <br /> </small>
            </article>
            </div>
            



          </div>
        </div>
      </div>
      </Slide>
    </section>
  )
}

export default About