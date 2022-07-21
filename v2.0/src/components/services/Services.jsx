import React from 'react'
import './services.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import Slide from 'react-reveal/Slide'

const Services = () => {
  return (
    <section id="toolkit">
      <h5>I think of Building Stuff for web is like working in a garage and for that...</h5>
      <h2>This is my Toolkit</h2>

      <div className="container services__container">
        <Slide right cascade>
        <div className="services__frontend">
          <h3>Frontend Development</h3>
          <div className="services__content">
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>React</h4>
            </article>
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>Redux</h4>
            </article>
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>HTML</h4>
            </article>
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>CSS</h4>
            </article>
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>Material UI</h4>
            </article>
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>Java Script</h4>
            </article>            
          </div>

        </div>
        {/*======= End of Backend======*/}
        <div className="services__backend">
        <h3>Backend Development</h3>
          <div className="services__content">
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>NodeJs</h4>
            </article>
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>ExpressJs</h4>
            </article>
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>MangoDB</h4>
            </article>
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>Commerce.js</h4>
            </article>
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>Scripe</h4>
            </article>
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>Python</h4>
            </article>            
          </div>
        </div>
      
        </Slide>
      </div>
    </section>
  )
}

export default Services