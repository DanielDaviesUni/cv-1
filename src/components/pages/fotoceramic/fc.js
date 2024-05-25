import React from 'react'
import WebDesc from '../WebDesc'
import { fcObjfour, fcObjone, fcObjtwo, fcObjthree } from './data'

function fc() {
  return (
    <>
    <WebDesc {...fcObjone}/>
    <WebDesc {...fcObjtwo}/>
    <WebDesc {...fcObjthree}/>
    <WebDesc {...fcObjfour}/>
    </>
  )
}

export default fc
