import React, { useState } from 'react';
import './App.css';
import { Link, Routes, Route} from 'react-router-dom';
import About from './pages/about';
import Blog from './pages/MediaGallery';
import Spline from '@splinetool/react-spline';
import Portfolio from './pages/Portfolio';
import ViewMore from './pages/ViewMore';
import ViewMore2 from './pages/ViewMore2';
import ViewMore3 from './pages/ViewMore3';
import Contact from './pages/contact';
import mylogo from './assets/mylogo.png';


function App() {
    return (
        <main>
            <div className="container">
                {/* Outer container that wraps the main content of the page */}
                {/* Left section containing text and navigation buttons */}
            {/* 左侧文本和按钮 */}
            {/* Navigation: Clicking on the arrow image will navigate the user back to the homepage */}
            <div className='mylogo'>
            <Link to="/">
            <img src={mylogo} alt="mylogo" />
            </Link>
            </div>
            <div className="text-container">
                {/* Website title */}
                <h1 className="title">Amber's Website</h1>
                
                {/* Container for navigation buttons */}
                <div className="button-container">
                    {/* Button - navigates to the each page when clicked */}
                    <Link to="/About"><button className="button ">About Me</button></Link>
                    <Link to="/Blog"><button className="button">Blog</button></Link>
                    <Link to="/Portfolio"><button className="button">Portfolio</button></Link>
                    <Link to="/contact"><button className="button">Contact</button></Link>
                </div>
        
                </div>
            <div>
            <Routes>
                 {/* Define the routing paths and the components they render */}
                 {/* When the path is '/About /Blog /Portfolio /viewmore /contact', render the each component */}
                <Route path='/About' element={<About/>} />
                <Route path='/Blog' element={<Blog/>} />
                <Route path='/Portfolio' element={<Portfolio />} />
                <Route path='/ViewMore' element={<ViewMore />} />
                <Route path='/ViewMore2' element={<ViewMore2 />} />
                <Route path='/ViewMore3' element={<ViewMore3 />} />
                <Route path='/contact' element={<Contact />} />
             
            </Routes>
            </div>
                {/*  3D 资源 */}
                {/*The outer container assigned the CSS class spline-background */}
                <div className="spline-background">
                    {/*URL pointing to the Spline 3D scene file*/}
                    
                    <Spline className="spline" scene="https://prod.spline.design/dp8lgxE0S45N5Ud1/scene.splinecode" />
                </div>
            
            </div>
        </main>



    );
}

export default App;
