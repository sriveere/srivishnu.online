import React from 'react'
import './services.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Services = () => {
  return (
    <section id="toolkit">
      <h5>I think of Building Stuff for web is like working in a garage and for that...</h5>
      <h2>This is my Toolkit</h2>

      <div className="container services__container">
        <div className="services__frontend">
          <h3>Frontend Development</h3>
          <div className="services__content">
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
              <h4>javaScript</h4>
            </article>
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>React</h4>
            </article>
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>Bootstrap</h4>
            </article>
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>Tailwind</h4>
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
              <h4>Redux</h4>
            </article>
            <article className="services__details">
              <BsPatchCheckFill className='services__details-icon'/>
              <h4>Python</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services