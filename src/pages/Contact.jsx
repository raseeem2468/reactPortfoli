import React from 'react';
import '../assets/styles/Contact.css';

const Contact = () => {
  return (
    <section className='contactPage'>
      <div id='Contact'>
        <h1 className="contactTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
        <form action="" className="contactForm">
          <input type="text" className='name' placeholder='Your name...' />
          <input type="email" className='email' placeholder='Your email...' />
          <textarea className='msg' name='message' rows="5" placeholder='Your message...'></textarea>
          <button className='btn' type='submit'>Submit</button>
          <div className='links'>
            <a href=''>
            <img src='./images/facebook.png' alt='Facebook' className='link' />
            </a>
           <a href='https://www.instagram.com/s/aGlnaGxpZ2h0OjE4MDI3MDAyMzg3MTY1MjMz?story_media_id=3401057752798679706_35872667093&igsh=M2dmNWg4eXV4Nmtp'>
           <img src='./images/insta.png' alt='Instagram' className='link' />

           </a>
           <a href='https://www.linkedin.com/in/raseem-y-73856227b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>
           <img src='./images/linked in.png' alt='LinkedIn' className='link' />

           </a>
           <a href='https://github.com/'>
           <img src='./images/git.png' alt='GitHub' className='link' />

           </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
