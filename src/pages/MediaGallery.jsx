import React from 'react';
import { useNavigate, Link} from 'react-router-dom'; // 导入 useNavigate
import './MediaGallery.css';
import close from '../assets/close.png'; // 叉号图标
import pic1 from '../assets/business-shot-small.jpeg';
import pic2 from '../assets/aesthetic-shot-small.jpeg';
import pic3 from '../assets/passion in life-small.jpeg';
import arrow from '../assets/right-arrow.png';


const MediaGallery = () => {
    const navigate = useNavigate(); // 初始化 navigate 函数 Initialize the navigate function, which allows navigation between routes

    return (
        <div id="MediaGallery">
            {/* Section Header: Blog */}
            <div className="box">
                {/* 叉号图标，点击时返回主页 */}
                {/*Clicking on close image will navigate the user back to the homepage */}
                <img 
                    src={close} 
                    alt="close" 
                    className="close" 
                    onClick={() => navigate('/')} // 点击时导航到主页
                />
                
                <h1>Blog</h1>

                {/* 图片网格容器 */}
                {/* Image Grid Container */}
                <div class="grid-container">
                    {/* Image Elements: Display individual photos in the grid */}
                    <div className='grid-photo'>
                        <img src={pic1} alt="pic1" />
                        <img src={pic2} alt="pic2" />
                        <img src={pic3} alt="pic3" />
                    </div>
                </div>

                {/* Button to viewmore */}
                <div className="more">
                    <Link to="/ViewMore2"><span>View More</span></Link>
                    <img src={arrow} alt="arrow" className="arrow" />
                </div>
            </div>
        </div>
    );
};

export default MediaGallery;
