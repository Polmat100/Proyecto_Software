import React, { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";
import "./StyleChat.css";
import { io } from 'socket.io-client';
const socket=io.connect('http://localhost:3001');


export const UserImbox = () => {
  const [username,setUsername] = useState('')
  const [room,setRoom] = useState('')
  const joinRoom=()=>
  {
    if(username!='' && room!=''){
      socket.emit('join_room',room)
    }
  }

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [selectedUser, setSelectedUser] = useState("Jose Manuel Garces");
  const [isConnected, setIsConnected]=useState();
  useEffect(()=>{
    socket.on('connect',()=>setIsConnected(true));
  },[]);
  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };


  return (
    <>
      <Header></Header>
      <div className="container chat-container">
        <div className="row">
          <div className="col-md-4">
            <div className="user-list">
              <h5>Tus mensajes</h5>
              <div className="user-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                  alt="User"
                  className="user-logo"
                />
                <span>Jose Manuel Garces</span>
              </div>
              <div className="user-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                  alt="User"
                  className="user-logo"
                />
                <span>Lucas Benavides</span>
              </div>
              <div className="user-item">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                  alt="User"
                  className="user-logo"
                />
                <span>Carlos Mauricio</span>
              </div>
            </div>
          </div>
          <div className="col-md-8 chat-box">
            <h5>Chat</h5>
            <h6 className="text-start text-secondary">{isConnected ? 'Conectado': 'Desconectado'}</h6>
            <div className="chat-messages">
              {messages.map((message, index) => (
                <div key={index} className="message-item">
                  <span>{message}</span>
                </div>
              ))}
            </div>
            <div className="chat-input">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Escribe un mensaje..."
                className="form-control"
              />
              <button
                className="btn btn-primary"
                onClick={handleSendMessage}
              >
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};
