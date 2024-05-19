import React from 'react';
import { Button } from '../Button';
import { Link } from 'react-router-dom';
import './content.css';

function WebDesc({
    lightBg, topLine, lightText, lightTextDesc, headline, description, buttonLabel, img, alt, imgStart
}) {
  return (
    <>
        <div className={lightBg ? 'fc__content-section' : 'fc__content-section darkBg'}>
          <div className='container'>
            <div className='row fc__content-row'
              style={{
                display: 'flex',
                flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
              }}>
              <div className='col'>
                <div className='fc__content-text-wrapper'>
                  <div className='top-line'>{topLine}</div>
                  <h1 className={lightText ? 'heading' : 'heading-dark'}>{headline}</h1>
                  <p className={lightTextDesc ? 'subtitle' : 'subtitle-dark'}>{description}</p>
                  <Link to='/'>
                    <Button buttonStyle='btn--primary' buttonSize='btn--large'>{buttonLabel}</Button>
                  </Link>
                </div>
              </div>
              <div className='col'>
                <div className='fc__content-img-wrapper'>
                  <img src={img} alt={alt} className='fc__content-img'/>
                </div>
              </div>
            </div>
          </div>
        </div> 
    </>
  );
}

export default WebDesc;
