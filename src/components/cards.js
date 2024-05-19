import React from 'react';
import './cards.css';
import CardItem from './carditem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my work!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/sadlergreen.png'
              text='E-Commerce Ceramic Decoration service'
              label='E-Commerce'
              path='/services'
            />
            <CardItem
              src='/Xerital.png'
              text='High Temperature Barcodes'
              label='Wordpress'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/FotoCeramic.png'
              text='Bespoke Ceramic Decoration'
              label='Wordpress'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;