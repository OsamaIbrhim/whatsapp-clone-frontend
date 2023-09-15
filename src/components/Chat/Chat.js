import { Avatar, IconButton } from "@mui/material";
import "./Chat.css";
import React, { useState } from "react";
import { AttachFile, MoreVert, SearchOutlined } from "@mui/icons-material";
import { InsertEmoticon } from "@mui/icons-material";
import { Mic } from "@mui/icons-material";

function Chat({ messages }) {
  const [input, setInput] = useState([]);

  const sendMessage = async (e) => {
    e.preventDefault();

    // Create a message object with the correct structure
    const newMessage = {
      message: input,
      name: "Osama",
      timestamp: "Just now!",
      received: false,
    };

    // Make a POST request with the message data
    await fetch("http://localhost:9000/messages/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessage),
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chatHeader">
        <Avatar />
        <div className="chatHeaderInfo">
          <h3>Room name</h3>
          <p>Last seen at....</p>
        </div>
        <div className="chatHeaderRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chatBody">
        {messages.map((message) => {
          return (
            <p className={`chatMessage ${message.received && "chatReciever"}`}>
              <span className="chatName">{message.name}</span>
              {message.message}
              <span className="chatTime">{message.timestamp}</span>
            </p>
          );
        })}
      </div>
      <div className="chatFooter">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              console.log(e.target.value);
            }}
            placeholder="Type a message"
            type="text"
          />
          <button onClick={sendMessage} type="submit"></button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
