import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.png'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.jpg'
import img6 from '../../assets/portfolio6.jpg'
import Slide from 'react-reveal/Slide'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Here are my</h5>
      <h2>Featured Projects</h2>

      <div className="container portfolio__container">
        <Slide bottom cascade>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
          <img src={img1} alt="" />
          </div>
            <h3>E-commerce Store</h3>
            <small>A fully functional E-commerce Store That supports CRUD operations over Products and catagories and accepts Payments  </small>
          <div className="portfolio__item-cta">
            <a href="https://github.com/sri-wierdo/E-commerce_Store-React-" className='btn' target='_blank' rel='noreferrer' >View Code</a>
            <a href="https://srivishnu-webstore.netlify.app/"  className="btn btn-primary" target='_blank'  rel='noreferrer'>Live View</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
          <img src={img2} alt="" />
          </div>
            <h3>Pomodoro APP</h3>
            <small>A Tool that will help you be More Productive in any task you choose to perfom, built on CONTEXT-API</small>
            <div className="portfolio__item-cta">
            <a href="https://github.com/sri-wierdo/prima-pomodoro" className='btn' target='_blank' rel='noreferrer' >View Code</a>
            <a href="https://srivishnu-pomodoro.netlify.app/"  className="btn btn-primary" target='_blank'  rel='noreferrer'>Live View</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
          <img src={img3} alt="" />
          </div>
            <h3>Drug Transparency</h3>
            <small>An API based webApp that Help Consumers be aware of Medicinesth and Drugs they Consume.. <br /><br /><br /><br /> </small>
            <div className="portfolio__item-cta">
            <a href="https://github.com/sri-wierdo/prescription-transparency" className='btn' target='_blank' rel='noreferrer' >View Code</a>
            <a href="https://sri-vishnu-prescription-app.netlify.app"  className="btn btn-primary" target='_blank'  rel='noreferrer'>Live View</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
          <img src={img5} alt="" />
          </div>
            <h3>This Beautiful Portfolio</h3>
            <small>The Site you are currently On.. <br /> It was Built with Mobile First in mind and Fully upgradeable and expandable</small>
            <div className="portfolio__item-cta">
            <a href="https://github.com/sri-wierdo/srivishnu.online/tree/main/v2.0" className='btn' target='_blank' rel='noreferrer' >View Code</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
          <img src={img4} alt="" />
          </div>
            <h3>Resume Builder(Under construction)</h3>
            <small>A React Based Front-end Web APP that can Take in Data and generate a Downloadable PDF of a resume</small>
            <div className="portfolio__item-cta">
            <a href="https://github.com/sri-wierdo/resume-builder" className='btn' target='_blank' rel='noreferrer' >View Code</a>
          </div>
        </article>
        </Slide>
      </div>
    </section>
  )
}

export default Portfolio