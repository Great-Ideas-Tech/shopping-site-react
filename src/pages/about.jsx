import React from 'react'
import Team from './components/Team'
import Intro from './components/Intro'
import Bredcamb from './components/Bredcamb'
import About from './components/About'

function about() {
  return (
    <>
    <Bredcamb page='About'/>
    <About/>
    <Team/>
    <Intro/>
    </>
  )
}

export default about