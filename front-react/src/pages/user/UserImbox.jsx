import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";
import { getUserData } from "../../scripts/getUserData";
import { useLocation } from "react-router-dom";
import "./StyleChat.css";

export const UserImbox = () => {
  const [userData, setUserData] = useState(null);
  const [stompClient, setStompClient] = useState(null);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const [connected, setConnected] = useState(false);
  const location = useLocation();
  const { product } = location.state || {}; // Datos del producto (si están disponibles)

  // Cargar datos del user logeado
  useEffect(() => {
    const data = getUserData();
    setUserData(data || { email: "Usuario Anónimo" });
  }, []);

  // Config del WebSokcet
  useEffect(() => {
    const client = new Client({
      brokerURL: "ws://localhost:8089/websocket",
      reconnectDelay: 5000,
      onConnect: () => {
        console.log("Conexión WebSocket establecida");
        setConnected(true);
        client.subscribe("/tema/messages", (message) => {
          const newMessage = JSON.parse(message.body);
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        });
      },
      onError: (error) => {
        console.error("Error en STOMP:", error);
        setConnected(false);
      },
    });

    client.activate();
    setStompClient(client);

    return () => {
      client.deactivate();
    };
  }, []);

  // Enviar mensaje
  const sendMessage = () => {
    if (!stompClient || !connected) {
      alert("No estás conectado al servidor de chat.");
      return;
    }
    if (!message.trim()) {
      alert("El mensaje no puede estar vacío.");
      return;
    }

    const payload = {
      name: userData?.email || "Usuario Anónimo",
      content: message.trim(),
      product: product?.name || null,
    };

    stompClient.publish({
      destination: "/app/send",
      body: JSON.stringify(payload),
    });
    setMessage("");
  };

  return (
    <div className="container chat-container">
      <div className="row">
        {/* Lista de usuarios */}
        <div className="col-md-4">
          <div className="user-list">
            <h5>Tus mensajes</h5>
            <div className="user-item">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1077/1077063.png"
                alt="User"
                className="user-logo"
              />
              <span>{userData?.email || "Usuario Anónimo"}</span>
            </div>
          </div>
        </div>

        {/* Caja de chat */}
        <div className="col-md-8 chat-box">
          <h5>Chat {product ? `sobre ${product.name}` : ""}</h5>
          <div className="chat-messages">
            {messages.length === 0 ? (
              <p className="text-muted">No hay mensajes todavía.</p>
            ) : (
              messages.map((msg, i) => (
                <div
                  key={i}
                  className={`message-item ${
                    msg.name === userData?.email ? "message-sent" : "message-received"
                  }`}
                >
                  <span>
                    <b>{msg.name}</b>: {msg.content}
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
            <button className="btn btn-primary" onClick={sendMessage} disabled={!connected}>
              {connected ? "Enviar" : "Conectando..."}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};