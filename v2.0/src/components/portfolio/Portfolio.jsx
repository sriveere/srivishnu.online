import React from 'react'
import './portfolio.css'
import img1 from '../../assets/portfolio1.jpg'
import img2 from '../../assets/portfolio2.jpg'
import img3 from '../../assets/portfolio3.jpg'
import img4 from '../../assets/portfolio4.jpg'
import img5 from '../../assets/portfolio5.png'
import img6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Here are my</h5>
      <h2>Featured Projects</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item__image">
          <img src={img1} alt="" />
          </div>
            <h3>This is a Portfolio Item Title1</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com/sri-wierdo" className='btn' target='_blank' rel='noreferrer' >View Code</a>
            <a href="https://www.google.com"  className="btn btn-primary" target='_blank'  rel='noreferrer'>Live View</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
          <img src={img2} alt="" />
          </div>
            <h3>This is a Portfolio Item Title2</h3>
            <div className="portfolio__item-cta">
            <a href="https://www.github.com/sri-wierdo" className='btn' target='_blank' rel='noreferrer' >View Code</a>
            <a href="https://www.google.com"  className="btn btn-primary" target='_blank'  rel='noreferrer'>Live View</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
          <img src={img3} alt="" />
          </div>
            <h3>This is a Portfolio Item Title3</h3>
            <div className="portfolio__item-cta">
            <a href="https://www.github.com/sri-wierdo" className='btn' target='_blank' rel='noreferrer' >View Code</a>
            <a href="https://www.google.com"  className="btn btn-primary" target='_blank'  rel='noreferrer'>Live View</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
          <img src={img4} alt="" />
          </div>
            <h3>This is a Portfolio Item Title4</h3>
            <div className="portfolio__item-cta">
            <a href="https://www.github.com/sri-wierdo" className='btn' target='_blank' rel='noreferrer' >View Code</a>
            <a href="https://www.google.com"  className="btn btn-primary" target='_blank'  rel='noreferrer'>Live View</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
          <img src={img5} alt="" />
          </div>
            <h3>This is a Portfolio Item Title5</h3>
            <div className="portfolio__item-cta">
            <a href="https://www.github.com/sri-wierdo" className='btn' target='_blank' rel='noreferrer' >View Code</a>
            <a href="https://www.google.com"  className="btn btn-primary" target='_blank'  rel='noreferrer'>Live View</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item__image">
          <img src={img6} alt="" />
          </div>
            <h3>This is a Portfolio Item Title6</h3>
            <div className="portfolio__item-cta">
            <a href="https://www.github.com/sri-wierdo" className='btn' target='_blank' rel='noreferrer' >View Code</a>
            <a href="https://www.google.com"  className="btn btn-primary" target='_blank'  rel='noreferrer'>Live View</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio