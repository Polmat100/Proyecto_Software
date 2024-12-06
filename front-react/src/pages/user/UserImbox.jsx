import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import { getUserData } from "../../scripts/getUserData";
import { useLocation } from "react-router-dom";
import "./StyleChat.css";

export const UserImbox = () => {
  const [user, setUser] = useState();
  const [name, setName] = useState('Unknown');
  const [stompClient, setStompClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [connected, setConnected] = useState(false);
  const location = useLocation();
  const { product } = location.state || {}; // Datos producto

  // Cargar datos del user logeado
  useEffect(() => {
    const userData = getUserData();
    if (userData) setUser(userData);
  }, []);

  // Config del WebSocket
  useEffect(() => {
    const client = new Client({
      brokerURL: 'ws://localhost:8089/websocket',
      onConnect: () => {
        console.log('Conexión WebSocket establecida');
        setConnected(true);
        client.subscribe('/tema/messages', (message) => {
          console.log('Mensaje recibido:', message);
          const newMessage = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        });
      },
      onError: (error) => {
        console.error('Error en STOMP:', error);
        setConnected(false);
      }
    });

    client.activate();
    setStompClient(client);

    return () => {
      client.deactivate();
    };
  }, []);

  const dateSend = new Date().toISOString();
  // Enviar mensaje
  const sendMessage = () => {
    if (!stompClient || !connected) {
      alert("No estás conectado al servidor de chat.");
      return;
    }

    // Limpiar el contenido del mensaje, eliminando espacios al principio y al final
    const trimmedMessage = message.trim();

    if (!trimmedMessage) {
      alert("El mensaje no puede estar vacío.");
      return;
    }

    const payload = {
      content: trimmedMessage,
      dateSend: dateSend,
    };

    stompClient.publish({
      destination: "/app/send",
      body: JSON.stringify(payload),
    });
    setMessage(""); // Limpiar el campo de texto
  };

  return (
    <div className="container chat-container">
      <div className="row">
        {/* USERS */}
        <div className="col-md-4">
          <div className="user-list">
            <h5>Tus mensajes</h5>
            <div className="user-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                alt="User"
                className="user-logo"
              />
              <span>{user?.name || "Usuario Anónimo"}</span>
            </div>
          </div>
        </div>

        {/* CHAT */}
        <div className="col-md-8 chat-box">
          <h5>Chat {product ? `sobre ${product.name}` : ""}</h5>
          <div className="chat-messages">
            {messages.length === 0 ? (
              <p className="text-muted">No hay mensajes todavía.</p>
            ) : (
              messages.map((msg, i) => (
                <div key={i} className={`message-item ${msg.name === user?.name ? "message-sent" : "message-received"}`}>
                  <span>
                    <b>{user.name}</b>: {msg.content}
                  </span>
                </div>
              ))
            )}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={product ? `Mensaje sobre ${product.name}` : "Escribe un mensaje..."}
              className="form-control mb-2"
            />
            <button
              className="btn btn-primary"
              onClick={sendMessage}
              disabled={!connected}
            >
              {connected ? "Enviar" : "Conectando..."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
