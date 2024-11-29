import React, { useState } from 'react';
import './App.css';
import { Link, Routes, Route} from 'react-router-dom';
import About from './pages/about';

function App() {
    return (
        <div className="container">
            {/* 左侧文本和按钮 */}
            <div className="text-container">
                <h1 className="title">WELCOME</h1>
                <div className="button-container">
                    <button className="button "><Link to="About">About Me</Link></button>
                    <button className="button">Media Gallery</button>
                    <button className="button">PortfolioContact</button>
                    <button className="button">Contact</button>
                </div>
        
            </div>
        <Routes>
            <Route path='/About' element={<About/>} />
            
        </Routes>

            {/* 右侧的 3D 资源 */}
            <div className="spline-background">
                <spline-viewer url="https://prod.spline.design/xPUmhwdLsF5BVkp9/scene.splinecode"></spline-viewer>
            </div>
        
        </div>
    );
}

export default App;
