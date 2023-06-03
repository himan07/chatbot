import { IconButton, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import React, { useState, useEffect } from "react";
import "../assets/css/ChatBot.css";
import Header from "./Header";
import { io } from "socket.io-client";

const ChatBot = () => {
  const [message, setMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newSocket = io("https://wqfbit-3001.csb.app/", { secure: true });
    setSocket(newSocket);

    newSocket.on("chat message", (receivedMessage) => {
      setMessages((prevMessages) => [...prevMessages, receivedMessage]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() !== "") {
      socket.emit("chat message", message);
      setMessage("");
      setMessages((prevMessages) => [...prevMessages, message]);
    }
  };

  return (
    <>
      <div className="container">
        <Typography variant="h4" className="typo_h4">
          Do you want to talk to AI right now? <br />
          IntelliBot should be a good choice.
        </Typography>
        <div className="chat_boat">
          <Header />
          <div className="message_container">
            {messages.map((msg, index) => (
              <Typography key={index} className="message right">
                {msg}
              </Typography>
            ))}
          </div>
          <div className="chat_bot_field">
            <form action="#" id="send_container" onSubmit={handleSubmit}>
              <input
                type="text"
                className="input_text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <IconButton className="send_icon" type="submit">
                <SendIcon />
              </IconButton>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
