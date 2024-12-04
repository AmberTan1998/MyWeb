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


function App() {
    return (
        <main>
            {/* outer container that wraps the main content of the page */}
            <div className="container">
            {/* left section containing text and navigation buttons */}
            <div className="text-container">
                 {/* website title */}
                <h1 className="title">Amber's Website</h1>
                {/* using React Router's <Link> component to navigate between pages */}
                <div className="button-container">
                    {/*Link button, click it, can go to About me/ Blog/ Portfolio/ Contact pages*/}
                    <Link to="/About"><button className="button ">About Me</button></Link>
                    <Link to="/Blog"><button className="button">Blog</button></Link>
                    <Link to="/Portfolio"><button className="button">Portfolio</button></Link>
                    <Link to="/contact"><button className="button">Contact</button></Link>
                </div>
        
            </div>
            <div>
            <Routes>
                  {/* Define the routing paths and the components they render */}
                <Route path='/About' element={<About/>} />
                <Route path='/Blog' element={<Blog/>} />
                <Route path='/Portfolio' element={<Portfolio />} />
                <Route path='/ViewMore' element={<ViewMore />} />
                <Route path='/ViewMore2' element={<ViewMore2 />} />
                <Route path='/ViewMore3' element={<ViewMore3 />} />
                <Route path='/contact' element={<Contact />} />
             
            </Routes>
            </div>
                {/*outer container for background*/}
                <div className="spline-background">
                {/*this URL pointing to the Spline 3D scene file */}
                    <Spline className="spline" scene="https://prod.spline.design/dp8lgxE0S45N5Ud1/scene.splinecode" />
                </div>
            
            </div>
        </main>



    );
}

export default App;
