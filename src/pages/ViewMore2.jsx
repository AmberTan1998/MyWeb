import React, { useState } from 'react';
import './ViewMore2.css';
import { Link } from "react-router-dom"; 
import arrow from '../assets/right-arrow.png';
import pic6 from '../assets/business-shot-small.jpeg';
import pic7 from '../assets/aesthetic-shot-small.jpeg';
import pic8 from '../assets/passion in life-small.jpeg';
import pic6new from '../assets/pic6new.jpeg';
import pic7new from '../assets/pic7new.jpeg';
import pic8new from '../assets/pic8new.jpeg';
import video1 from "../assets/drinkfor.mp4";
import pic9 from '../assets/story.png';
import pic10 from '../assets/bts1.jpeg';


function ViewMore2() {
  const [modalData, setModalData] = useState(null);

  // 打开弹窗函数
  const openModal = (image, description) => {
    setModalData({ image, description });
  };

  // 关闭弹窗函数
  const closeModal = () => {
    setModalData(null);
  };

  return (
    <div className="container">
      <div className="view-container">
        <img src={arrow} alt="arrow" className="arrow_top" />
        <h1>Blog</h1>
        <div className="photos">
          <h2>Photos</h2>
          <div className="grid-container">
            <div className="grid-photos">
              {/* 第一张图片 */}
              <img
                src={pic6}
                alt="pic6"
                className="thumbnail"
                onClick={() => openModal(pic6new, `
                 <p>The photo features a light-colored background and uses even natural lighting to highlight the subject’s contours and details.</p>
                     <p>The subject is dressed in a dark inner layer and a light-colored blazer, creating a simple and harmonious color scheme that aligns with a business style.</p>
                     <p>The clean and minimal background keeps the focus on the subject, enhancing the professional feel.</p>
                     <p> The soft lighting, free of harsh shadows, creates a natural and approachable atmosphere, making it ideal for a professional headshot.</p>
                     <p>Focal Length:6.765</p>
                     <p>Aperture Value:f/1.664</p>
                     <p>Shutter Speed:1/30</p>
                     <p>ISO:1,250</p>
                `)}
              />
              {/* 第二张图片 */}
              <img
                src={pic7}
                alt="pic7"
                className="thumbnail"
                onClick={() => openModal(pic7new, `
                  <p>This photo is taken in close-up, with the subject positioned near the camera, allowing facial details to be clearly visible.</p>
                  <p>The light source comes from a candle held by the subject, casting a warm glow that illuminates the face and creates an orange-red halo on the skin.</p>
                  <p>The subject’s hair is naturally loose, enhancing the softness of the image. </p>
                  <p>The background is blurred, making the subject the focal point, with rich light and shadow effects that further emphasize the atmosphere of the photo.</p>
                  <p>This image skillfully uses light and distance to highlight a delicate texture, making it ideal for showcasing an emotional ambiance.</p>
                  <p>Focal Length：6.765</p>
                  <p>Aperture Value：f/1.78</p>
                  <p>Shutter Speed：1/20</p>
                  <p>ISO：800</p>
                `)}
              />
              {/* 第三张图片 */}
              <img
                src={pic8}
                alt="pic8"
                className="thumbnail"
                onClick={() => openModal(pic8new, `
                  <p>This photo features a dark background, with the subject illuminated by both blue and warm light, creating a strong contrast in lighting.</p>
                  <p> The subject has a bright smile, and their hair is naturally voluminous, adding a dynamic feel to the image. </p>
                  <p>Dressed in red, the subject stands out sharply against the cool-toned background, making them the focal point. </p>
                  <p>The background is blurred, while the use of blue light creates a nighttime ambiance, adding a touch of mystery and drama to the photo. 
                  <p>Through the contrast of light and color, this image highlights the subject’s smile and infectious energy.。</p>
                  <p>Focal Length：2.69</p>
                  <p>Aperture Value：f/1.852</p>
                  <p>Shutter Speed：1/30</p>
                  <p>ISO：640</p>
                `)}
              />
              
            </div>
          </div>
        </div>
        <div className="video">
          <h2>Video</h2>
          <video
            id="video"
            controls
            controlsList="nodownload"
            disablePictureInPicture
            disableRemotePlayback
            width="700px"
            height="300px"
            preload="metadata"
            src={video1}
          />
        </div>
        <div className='bts'>
        <img
                src={pic9}
                alt="story"
                className="pic9button"
                onClick={() => openModal(pic10,`
                  <p>During the production of this video, I would like to extend my special thanks to my teammates—Vanessa, Maggie, Suchira, and Elise. </p>
                  <p>It was through their collective efforts that we were able to bring this video to life.</p>
                  <p>This is a creative advertisement about apple juice, and since none of us had much filming experience, we discovered that the actual execution involved far more steps and coordination than we initially anticipated.</p>

                  <p>At the very beginning, after finalizing the story, I created a storyboard to visualize the narrative. Once the team had a clear picture, executing the plan became much easier. </p>
                  <p>Soon after, we realized that having all the team members act in the video would be challenging, as everyone was juggling multiple responsibilities. So, I started recruiting actors. </p>
                  <p>Here, I’d like to express my gratitude to my friends Morgan, Regina, Yana, and Eliza. Thanks to their voluntary participation, we were able to achieve such an amazing performance.</p>

                  <p>Coordinating everyone’s schedules and meeting the necessary conditions for the shoot was a complex task, but fortunately, everything was resolved perfectly in the end.</p>

                `)}
                />
                </div>
        {/* 弹窗内容 */}
        {modalData && (
          <div className="modal">
            <a href="#" className="close-btn" onClick={closeModal}>✕</a>
            <div className="modal-content">
              <img src={modalData.image} alt="Large view" className="modal-image" />
              <div className="description" dangerouslySetInnerHTML={{ __html: modalData.description }} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ViewMore2;
