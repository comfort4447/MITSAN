import React from "react"
import Footer from "./Footer"
import { Link } from 'react-router-dom'
/* import datalist from "./datalist" */

export default function AboutPage(){
    /* {dataset.map((slider, index) => { */
    // eslint-disable-next-line no-lone-blocks
    /* {datalist.map((item) =>{
        return(
            <ul>
                <li key={item.id}>
                    {item.list}
                </li>
            </ul>
        )
    })} */
    return (
        <main>
            <div className='nav'>
                <div className="nav-details">
                    <img src='../images/MITSAN.png' alt='' className='nav-img' />
                </div>
                    <ul className='nav-header'>
                            <li ><Link to='/home' >Home</Link></li>
                            <li className='active'><a href='/about'>About Us</a></li>
                    </ul>
                    <div className='nav-button'>
                        <li><button className="nav-start1">Enquiry</button></li>
                        <li><button className="nav-start">Join Us Now</button></li>
                    </div>
            </div>
            <div className="about--hero">
                <h1>About US</h1>
            </div>
            <div className="about--text">
                <p>
                    The Maritime Information Technology Stakeholders Association of Nigeria(MITSAN)
                    is the premier maritime industry association for information technologyprofessionals working independently to promote the concepts of
                    data security, data connectivity,data sharing within the port and maritime businesses and inter-government agencies.  
                    MITSAN is the voice of the ICT practitioners and professionals and theundisputable digital voice from the technology interactions within theinformation technology landscape of the maritime and transport industry inNigeria.
                </p>
                <p>
                    In 2012 we formed a community of foremost IT leaders from businessorganizations within the 
                    maritime industry including shipping agencies, shippingcompanies, terminal operators, 
                    inland cargo facility operators, bondedterminals, maritime tech service providers, and other 
                    private; commercialbusinesses participating or interfacing with organizations in the maritime 
                    andtransport industry in Nigeria. We called these entities (ICT Stakeholders).
                </p>
                <p>
                    The Maritime Info-Tech Stakeholders Association of Nigeria (MITSAN) wasfounded (2015) to support the 
                    ICT community of professionals, practitioners, ICTservice providers representatives, and computing 
                    professionals operating andservicing within the Nigeria maritime and transport industry. The goal is to 
                    set upa framework for collaborative ICT development; to regulate communicationcollaboration and ensure 
                    best practices for ICT processes in businesses withinthe same environment. MITSAN estows the ideals of an ethical, 
                    empowered, continually developing,professionally certified, experienced IT practitioner.
                </p>
                <p>
                    Among the objectives of the Association are to unite maritime industry ICTprofessionals 
                    throughout Nigeria; to connect the members to best ICT practicesin the world, to identify 
                    and meet members' organization's technologydevelopment needs, and to promote standard 
                    technical inter-relationship withtheir employers, service providers, government agencies 
                    ICT services and publicpractitioners.
                </p>
                <p>
                    <h2>The MITSAN Board</h2>
                    The MITSAN Board is made up of experienced ICT professionals, ICT Managers,cyber security professionals, maritime
                    technology professionals, digital businessprofessionals, who are passionate about the industry & committed to serving our members
                    Chris Okechukwu
                    CISSP, CISM. 25+ years serving the information security field across ShippingLines in West Africa
                    Felix Ezeis the head of Cyber Threat Intel at MSC Nigeria
                    Dotun Hassan,
                    Head of information security at Five Star Logistics.
                    Director
                    Lee Neely is a senior IT and security professional at ENL COnsortium
                    Jim Angyu
                    Head of IT Data forensics for Private and Govt Regulatory Documents, SpecialAdvisory on intergovernmental document compliance at the Tin Can Island PortsLagos
                </p>
                {/* <p>
                    <h2>Core Areas of Work</h2>
                    
                    {datalist}
                </p> */}
            </div>
            <Footer />
        </main>
    )

}