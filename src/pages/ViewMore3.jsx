import React from 'react'
import './Viewmore3.css'
import arrow from '../assets/right-arrow.png';
import pic9 from '../assets/po1.jpg';
import pic10 from '../assets/po2.jpg';
import pic11 from '../assets/po3.jpg';
import pic12 from'../assets/po4.jpg';

function ViewMore3() {
  return (
    <div className='container'>
        <div className='view-container'>
            <img src={arrow} alt="arrow" className='arrow_top' />
            <h1>Portfolio</h1>
            <div className="photos">
                <h2>Cases</h2>
                <div class="photo-container">
                    <div className='portfolio-photo'>
                        <a href="https://my.zcool.com.cn/preview/work/ZNzA3MDUyODg=.html"><img src={pic9} alt="pic9" /></a>
                        <a href="https://my.zcool.com.cn/preview/work/ZNzA3MDUyOTI=.html"><img src={pic10} alt="pic10" /></a>
                        <a href="https://my.zcool.com.cn/preview/work/ZNzA3MDUzMTI=.html"><img src={pic11} alt="pic11" /></a>
                        <a href="https://my.zcool.com.cn/preview/work/ZNzA3MDUzMTY=.html"><img src={pic12} alt='pic12' /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewMore3