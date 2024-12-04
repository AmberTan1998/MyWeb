import React from 'react'
import './Viewmore.css'
import arrow from '../assets/right-arrow.png';
import ullogo from '../assets/ullogo.png';
import bclogo from '../assets/bclogo.jpeg';
import inkdeeps from '../assets/inkdeeps.png';
import mao from '../assets/mao.png';
import CV from '../assets/CV-Zhixuan Tan.pdf';

function ViewMore() {
  return (
    <div className='container'>
        <div className='view-container'>
        <img src={arrow} alt="arrow" className='arrow_top' />
            <h1>About me  </h1>
            <div className="education">
                <h2>Education
                    <a href={CV} download='CV.pdf'>Download CV</a>
                </h2> 
                <div className="wrapper1">
                    <div className='text-wrapper1'>
                        <img src={ullogo} alt="ullogo-img" />
                        <div className='education-text'>
                            <span>Currently</span>
                            <p>
                                University of Limerick <br />
                                Interaction and Experience Design
                            </p>
                        </div>
                    </div>
                    <div className='text-wrapper2'>
                        <img src={bclogo} alt="bclogo-img" />
                        <div className='education-text'>
                            <span>Bachelor</span>
                            <p>
                                Beijing City University<br /> 
                                Digital and Media Arts
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
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