import React from 'react'
import WebDesc from '../WebDesc'
import { xObjfour, xObjone, xObjtwo, xObjthree } from './data'

function x() {
  return (
    <>
    <WebDesc {...xObjone}/>
    <WebDesc {...xObjtwo}/>
    <WebDesc {...xObjthree}/>
    <WebDesc {...xObjfour}/>
    </>
  )
}

export default x