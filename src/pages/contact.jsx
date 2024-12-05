import React from 'react';
import './contact.css';
import AddPostForm from '../features/posts/AddPostForm';
import PostsList from '../features/posts/PostsList';



function Contact() {
    return (
        <div id="contact">
             {/* Section for navigation icon to return to the homepage */}
            <div className="box">
                {/* 叉号图标，点击时返回主页 Function to handle navigation to homepage*/}
                <div>
                    <div className='contact'>
                        <h2> Contact Me</h2>
                        {/* Input field for name */}
                        <form>
                            <label htmlFor="postEmail">Name:</label>
                            <input
                                type="text"
                                id="postName"
                                name="postName"
                                placeholder='name'
                            />{/*laceholder text for the input field// 输入字段的占位符*/}

                             {/* Input field for email */}
                            <label htmlFor="postEmail">Email:</label>
                            <input
                                type="text"
                                id="postEmail"
                                name="postEmail"
                                placeholder='email'
                            />
                            {/*Placeholder text for the input field// 输入字段的占位符 */}
                            {/* Input field for phone number */}
                            <input
                                type="text"
                                id="postPhone"
                                name="postPhone"
                                placeholder='phone'
                            />{/*Placeholder text for the input field // 输入字段的占位符*/}
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
