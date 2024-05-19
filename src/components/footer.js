// Footer.js
import React from 'react';
import './footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer({ footerRef }) {
  return (
    <div className='footer-container'>
      <section className='footer-subscription' ref={footerRef}>
        <p className='footer-subscription-heading'>
          If you're interested in discussing a project, contact me here.
        </p>
        <p className='footer-subscription-text'>
          I'll get back to you asap.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='name'
              type='text'
              placeholder='Your Name'
            /> <br/>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            /><br/>
            <input
              className='footer-input-message'
              name='message'
              type='textarea'
              placeholder='Your Message'
            /><br/>
            <Button buttonStyle='btn--outline'>Send Message</Button>
          </form>
        </div>
      </section>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              DANIEL DAVIES
              <i className="fa-solid fa-code"></i>
            </Link>
          </div>
          <small className='website-rights'>DD © 2020</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fab fa-twitter' />
            </Link>
            <Link
              className='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i className='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
