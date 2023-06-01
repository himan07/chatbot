import React from "react";
import "../assets/css/ChatBot.css";
import Header from "./Header";
import chatbot from "../assets/video/chatbot.mp4";

const ChatBot = () => {
  return (
    <>
      <video id="videoBackground" autoPlay loop muted>
        <source src={chatbot} type="video/mp4" />
      </video>
      <div className="container">
        <div className="chat_boat">
          <Header />
          <div className="chat_bot_field">
            <input type="text" className="input_text" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
