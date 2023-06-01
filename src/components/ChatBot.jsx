import React from "react";
import "../assets/css/ChatBot.css";
import Header from "./Header";

const ChatBot = () => {
  return (
    <div className="container">
      <div className="chat_boat">
        <Header />
        <div className="chat_bot_field">
          <input type="text" className="input_text" />
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
