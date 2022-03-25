import React from 'react'
import { Link } from 'react-router-dom'

export default function AboutUs() {
    return(
        <>
        <div className='about_us' id='about'>
                <h1>About Us</h1>
                <div className='welcome-details'>
                    <div className='details-p'>
                        <p>The Maritime Information Technology Stakeholders Association of Nigeria(MITSAN)
                        is the premier maritime industry association for information technologyprofessionals 
                        working independently to promote the concepts ofdata security, data connectivity,data 
                        sharing within the port and maritimebusinesses and inter-government agencies.
                        
                        MITSAN is the voice of the ICT practitioners and professionals and theundisputable 
                        digital voice from the technology interactions within theinformation technology landscape
                        of the maritime and transport industry inNigeria.</p>
                        <Link to='/AboutPage'><button>Read More...</button></Link>
                    </div>
                    <img src='../images/welcome.png' alt='' />
                </div>
        </div>
        </>
    )
}