import React, {useEffect, useState} from 'react'
import dataset from './dataset'
import Nav from './Nav'
import Welcome from './Welcome'
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai' 
import AboutUs from './AboutUs'
import Contact from './Contact'
import Footer from './Footer'

export default function Home(){

    const [currentSlide, setCurrentSlide] = useState(0)
    const slideLength = dataset.length;

  
  const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1)
  }
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1)
}

const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;

function auto() {
    slideInterval = setInterval(nextSlide, intervalTime)
}

useEffect(() => {
    setCurrentSlide(0)
}, [])

useEffect(() => {
    if (autoScroll) {
        auto()
    }
    return () => clearInterval(slideInterval)
}, [currentSlide])
    return(
        <div className='homepage'>
            <Nav />

            {/* Hero Page */ }
            <div className='slider'>
                <AiOutlineArrowLeft className = 'leftArrow' onClick={prevSlide}/>
                <AiOutlineArrowRight className = 'rightArrow' onClick={nextSlide} />
            {dataset.map((slider, index) => {
                return(
                    <div className={index.currentSlide ? 'hero-details' : 'slide current' } key={index}>
                    {index === currentSlide && (
                    <div className='hero-details'>
                        <h2>{slider.details}</h2>
                        <img src={`../images/${slider.img}`} alt='' />
                    </div>
                    )}
                    </div>
                )
            })}
            </div>

            {/* WELCOME PAGE */}
            <Welcome />
            <AboutUs />
            <Contact />
            <Footer />
            </div>
    )
}
            