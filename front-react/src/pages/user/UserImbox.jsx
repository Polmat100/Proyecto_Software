import React, { useState } from "react";
import { Header } from "../../components/Header";
import Footer from "../../components/Footer";

import "./StyleChat.css";

let stompClient = null;

export const UserImbox = () => {
  const [publicChats, setPublicChats] = useState([]); // Para mensajes públicos
  const [privateChats, setPrivateChats] = useState(new Map()); // Para mensajes privados
  const [userData, setUserData] = useState({
    username: "",
    recievername: "",
    connected: false,
    message: "",
  });

  // Maneja cambios en el input del nombre de usuario
  const handleUserName = (event) => {
    setUserData({ ...userData, username: event.target.value });
  };

  // Función para registrar y conectar al usuario
  const registerUser = () => {
    const socket = new WebSocket("ws://localhost:8080/ws");
    
    socket.onopen = () => {
      stompClient = socket;
      onConnected();
    };

    socket.onerror = (err) => {
      onError(err);
    };
    
    socket.onmessage = (message) => {
      const payloadData = JSON.parse(message.data);
      if (payloadData.status === "MESSAGE") {
        onPublicMessageReceived(message);
      } else if (payloadData.status === "PRIVATE") {
        onPrivateMessageReceived(message);
      }
    };
  };

  // Cuando la conexión es exitosa
  const onConnected = () => {
    setUserData({ ...userData, connected: true });
    // Suscribirse a los mensajes públicos y privados
    stompClient.send("/chatroom/public");
    stompClient.send(`/user/${userData.username}/private`);
  };

  // Manejo de errores de conexión
  const onError = (err) => {
    console.error("Error de conexión:", err);
  };

  // Maneja los mensajes públicos recibidos
  const onPublicMessageReceived = (message) => {
    const payloadData = JSON.parse(message.data);
    switch (payloadData.status) {
      case "JOIN":
        if (!privateChats.get(payloadData.senderName)) {
          privateChats.set(payloadData.senderName, []);
          setPrivateChats(new Map(privateChats));
        }
        break;
      case "MESSAGE":
        setPublicChats((prevChats) => [...prevChats, payloadData]);
        break;
      default:
        break;
    }
  };

  // Maneja los mensajes privados recibidos
  const onPrivateMessageReceived = (message) => {
    const payloadData = JSON.parse(message.data);
    if (privateChats.get(payloadData.senderName)) {
      privateChats.get(payloadData.senderName).push(payloadData);
      setPrivateChats(new Map(privateChats));
    } else {
      let list = [];
      list.push(payloadData);
      privateChats.set(payloadData.senderName, list);
      setPrivateChats(new Map(privateChats));
    }
  };

  // Maneja los cambios en el input del mensaje
  const handleMessage = (event) => {
    setUserData({ ...userData, message: event.target.value });
  };

  // Enviar mensaje público
  const sendMessage = () => {
    if (stompClient && userData.message.trim() !== "") {
      const message = {
        senderName: userData.username,
        message: userData.message,
        status: "MESSAGE",
      };
      stompClient.send("/app/message", {}, JSON.stringify(message));
      setUserData({ ...userData, message: "" });
    }
  };

  return (
    <>
      <Header />
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
                <span>Diegogo</span>
              </div>
            </div>
          </div>
          <div className="col-md-8 chat-box">
            <h5>Chat</h5>
            <h6 className="text-start text-secondary">
            
            </h6>
            <div className="chat-messages">
              
                <div key="" className="message-item">
                  <span>Hola!!</span>
                </div>
              
            </div>
            <div className="chat-input">
              <input
                type="text"
                value=""
                
                placeholder="Escribe un mensaje..."
                className="form-control"
              />
              <button className="btn btn-primary">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};