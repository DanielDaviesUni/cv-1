import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom';
import '../components/hero.css'
import '../App.css'

function Hero() {
  return (
    <div className='hero-container'>
      <h1>Hi, I'm Daniel Davies</h1>
      <p>I am a web designer & digital marketer</p>
      <div className='hero-btns'>
        <Link to='projects'>
        <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>View my Work</Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
