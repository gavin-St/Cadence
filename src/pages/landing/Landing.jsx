import React from 'react'

import Header from "./Header";
import Carousel from "./Carousel";
import Transition from "./Transition";
import githubIcon from "../../res/github-icon.png"
import './landing.css';

function Landing() {
  return (
    <div className='landing'>
      <Header />
      <Carousel />
      <Transition />
      <a href="https://github.com/gavin-St/Cadence" target='_blank' className="github-link">
        <img src={githubIcon} alt="GitHub Link" />
      </a>
      <p className='github-credits'>Check out the GitHub!</p>
    </div>
  )
}

export default Landing
