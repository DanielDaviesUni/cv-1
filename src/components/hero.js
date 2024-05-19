import React from 'react'
import { Button } from './Button'
import '../components/hero.css'
import '../App.css'

function Hero() {
  return (
    <div className='hero-container'>
      <h1>Hi, I'm Daniel Davies</h1>
      <p>I am a web designer & digital marketer</p>
      <div className='hero-btns'>
        <Button className="btns" buttonStyle='btn--primary' buttonSize='btn--large'>View my Work</Button>
      </div>
    </div>
  )
}

export default Hero
