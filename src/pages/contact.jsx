import React from 'react';
import './contact.css';
import AddPostForm from '../features/posts/AddPostForm';
import PostsList from '../features/posts/PostsList';



function Contact() {
    return (
        <div id="contact">
            <div className="box">
                {/* 叉号图标，点击时返回主页 */}
                <div>
                    <div className='contact'>
                        <h2> Contact Me</h2>
                        <form>
                            <label htmlFor="postEmail">Name:</label>
                            <input
                                type="text"
                                id="postName"
                                name="postName"
                                placeholder='name'
                            />

                            <label htmlFor="postEmail">Email:</label>
                            <input
                                type="text"
                                id="postEmail"
                                name="postEmail"
                                placeholder='email'
                            />

                            <label htmlFor="postphone">Phone:</label>
                            <input
                                type="text"
                                id="postEmail"
                                name="postEmail"
                                placeholder='email'
                            />
                        </form>
                    </div>
                    <AddPostForm />
                    <PostsList />
                </div>
                </div>
        </div>
    );
};

export default Contact;
