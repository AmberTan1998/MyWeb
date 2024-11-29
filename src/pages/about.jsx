import React from 'react';
import Box from './Box';
import "./about.css"

const About = () => {
    return (
        <div id="About" >
            <Box /> 
            <div className='About'>
                <h1>About Me</h1> {/* 标题部分 */}
                <p>
                        Hello! I'm Amber Tan, currently studying Interaction and Experience Design. <br />
                    I enjoy creating interactive user experiences and exploring the intersection of design and technology.
                </p> {/* 文本部分 */}
            </div>
            <div className='Education'>
                <h1>Education</h1>
                <p className='p1'>Currently: University of Limerick---Interaction and experience design</p>
                <p className='p2'>Bechlor: Beijing City University---digital and media arts</p>
            </div>
            <div className='Personal'>
                <h1>Personal</h1>
                <p className='p3'>Currently: University of Limerick---Interaction and experience design</p>
                <p className='p4'>Bechlor: Beijing City University---digital and media arts</p>
            </div>
        </div>
    );
};

export default About;
