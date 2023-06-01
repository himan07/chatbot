import React from 'react'
import "../assets/css/ChatBot.css";
import Header from './Header';

const ChatBot = () => {
    return (
        <div className='container'>
            <div className='chat_boat'>
                <Header />
                <dv className="chatbot_text">
                    <h4>Hi I am Natasha How Can I help you?</h4>

                </dv>
                <div className='chat_bot_field'>
                    <input type='text' className='input_text'/>
                </div>
            </div>
        </div>
    )
}

export default ChatBot