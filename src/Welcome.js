import React from 'react'

export default function Welcome() {
    
    return(
        <div>
            <div className='welcome'>
                <h1>Welcome</h1>
                <div className='welcome-details'>
                    <img src='../images/welcome.png' alt='' />
                    <div className='details-p'>
                    <p>The Maritime Information Technology Stakeholders Association of Nigeria(MITSAN)
                        is the premier maritime industry association for information technologyprofessionals 
                        working independently to promote the concepts ofdata security, data connectivity,data 
                        sharing within the port and maritimebusinesses and inter-government agencies.
                        
                        MITSAN is the voice of the ICT practitioners and professionals and theundisputable 
                        digital voice from the technology interactions within theinformation technology landscape
                        of the maritime and transport industry inNigeria.</p>
                        <button>Read More...</button>
                        </div>
                </div>
        </div>
        </div>
    )
}