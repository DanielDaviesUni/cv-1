import React from 'react'
import WebDesc from '../WebDesc'
import { fcObjone } from './data'
import { fcObjtwo } from './data'

function fc() {
  return (
    <>
    <WebDesc {...fcObjone}/>
    <WebDesc {...fcObjtwo}/>
    </>
  )
}

export default fc
