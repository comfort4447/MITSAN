import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
   
  
    return(
        <div>
            <div className='nav'>
                <div className="nav-details">
                    <img src='../images/MITSAN.png' alt='' className='nav-img' />
                </div>
                    <ul className='nav-header'>
                            <li className='active' ><Link to='/home' >Home</Link></li>
                            <li><a href='#about'>About Us</a></li>
                            <li><a href='#contact'>Contact</a></li>
                    </ul>
                    <div className='nav-button'>
                        <li><button className="nav-start1">Enquiry</button></li>
                        <li><button className="nav-start">Join Us Now</button></li>
                    </div>
            </div>
        </div>
    )
}