import React from 'react';
import "./about.css";
import arrow from '../assets/right-arrow.png';
import close from '../assets/close.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div id="About">
            <div className="box">
            {/*Set the close icon as a link to return to the homepage */}
                <Link to="/">
                    <img src={close} alt="close" className="close" />
                </Link>
                {/*Introduce myself briefly*/}
                <div>
                    <p>
                    Hello, my name is Amber. This is my personal website, where I’ll be introducing myself in detail.</p>
                    <p>
                    I was born in China and completed my education there through university. </p>
                    <p>
                    Afterward, I worked in Shanghai for 3 years. In 2024, I chose to come to Ireland to further my studies.</p>
                    <p>
                    If you’d like to learn more about my academic and professional experiences, please click View More.
                    </p>
                    {/* 其他文本内容 */}
                </div>
                {/*Personal professional skill introduction*/}
                <div>
                    <h3>Professional Knowledge</h3>
                    <h4>Interaction Design / User Experience Design / Graphic Design / 3D Modeling / Unity Development</h4>
                </div>

                <Link to="/ViewMore" className="more">
                    <div>
                        <span>View More </span>
                        <div className="arrow">
                            <img src={arrow} alt="arrow" className="arrow" />
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default About;

