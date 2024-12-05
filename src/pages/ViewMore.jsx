import React from 'react'
import './Viewmore.css'
import arrow from '../assets/right-arrow.png';
import ullogo from '../assets/ullogo.png';
import bclogo from '../assets/bclogo.jpeg';
import inkdeeps from '../assets/inkdeeps.png';
import mao from '../assets/mao.png';
import CV from '../assets/CV-Zhixuan Tan.pdf';
import { Link } from 'react-router-dom';

function ViewMore() {
  return (
    <div className='container'>
        <div className='view-container'>
     {/* Navigation: Clicking on the arrow image will navigate the user back to the homepage */}
        <Link to="/">
          <img src={arrow} alt="arrow" className="arrow_top" />
        </Link>
        {/* Section Header: "About Me" */}
            <h1>About me  </h1>
            {/* Education Section */}
            <div className="education">
                <h2>Education
                    {/* Download Link: Allows users to download the CV as a PDF file */}
                    <a href={CV} download='CV.pdf'>Download CV</a>
                </h2> 
                {/* Current Education Wrapper */}
                <div className="wrapper1">
                    {/* University Logo */}
                    <div className='text-wrapper1'>
                        <img src={ullogo} alt="ullogo-img" />
                        {/* Introduction words about school */}
                        <div className='education-text'>
                            <span>Currently</span>
                            <p>
                                University of Limerick <br />
                                Interaction and Experience Design
                            </p>
                        </div>
                    </div>
                     {/* Past Education Wrapper */}
                    <div className='text-wrapper2'>
                        {/* University Logo */}
                        <img src={bclogo} alt="bclogo-img" />
                        <div className='education-text'>
                            {/* Introduction words about school */}
                            <span>Bachelor</span>
                            <p>
                                Beijing City University<br /> 
                                Digital and Media Arts
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
            {/* Work Section, basically same as education part */}
            <div className="education">
                <h2>Work Experience</h2>
                <div className="wrapper2">
                    <div className='text-wrapper3'>
                        <img src={inkdeeps} alt="inkdeeps-img" />
                        <div className='education-text'>
                            <span>Shanghai Inkdeeps Tech Ltd.</span>
                            <p>
                                Head of design department <br />
                                · Creating framework diagrams for software developments<br/>
                                · Providing professional design advices to clients in the early stages<br />
                                · Internal team management 
                            </p>
                        </div>
                    </div>
                    <div className='text-wrapper4'>
                        <img src={mao} alt="mao-img" />
                        <div className='education-text'>
                            <span>Shanghai Huichengen Tech Ltd. </span>
                            <p>
                                Marketing Intern
                                · Docking with production suppliers <br />
                                · Organising the progresses of daily production work <br />
                                · Engaging with the design department
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewMore