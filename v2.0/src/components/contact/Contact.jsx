import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FiTwitter} from 'react-icons/fi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0stlo4f', 'template_pknewir', form.current, 'WrflOUl79kX3PQhbc')
      e.target.reset()
  };
  
  return (
    <section id='contact'>
      <h5>You can just call me..(I'm always up for a conversation)</h5>
      <h2>Let's Get in Touch</h2>
      <div className="container contact__container">
        <div className="contact__options">
          {/*=====Contact Options=====*/}
          <a href="mailto:mannemsrivishnureddy@gmail.com" target='_blank' rel='noreferrer' >
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>EMAIL ME</h4>
            <small><a href="mailto:mannemsrivishnureddy@gmail.com">mannemsrivishnureddy@gmail.com</a></small>
          </article>
          </a>
          <a href="https://twitter.com/messages/compose?recipient_id=807973650506903553&text=Hey%20Vishnu%20I%20wanna%20Hire%20you" target='_blank' rel='noreferrer'  data-screen-name="@sri_wierdo">
          <article className="contact__option">
            <FiTwitter className='contact__option-icon'/>
            <h4>DM Me</h4>
            <small><a href="https://twitter.com/messages/compose?recipient_id=807973650506903553&text=Hey%20Vishnu%20I%20wanna%20Hire%20you" target='_blank' rel='noreferrer'  data-screen-name="@sri_wierdo"> Dm me on twitter</a></small>
          </article>
          </a>

          <a href="https://wa.me/message/F6MMOCNQCKDUF1" target="_blank" rel='noreferrer' ><article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp Me</h4>
            <small><a href="https://wa.me/message/F6MMOCNQCKDUF1" target='_blank' rel='noreferrer' >+91-9110546342</a></small>
          </article>
          </a>
      </div>
      <form ref={form} onSubmit={sendEmail} >
        <h5 className='hidden'>Or....</h5>
        <input type="text" name='name' placeholder='Your Name..' required />
        <input type="text" name='email' placeholder='Your Email..' required/>
        <textarea name='message' rows='7' placeholder='What do you wanna talk about?..' required/>
        <button type='submit' className='btn btn-primary'>Send</button>
      </form>
      </div>



    </section>
  )
}

export default Contact