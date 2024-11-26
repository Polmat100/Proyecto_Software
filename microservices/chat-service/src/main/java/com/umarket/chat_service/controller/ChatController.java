package com.umarket.chat_service.controller;

import com.umarket.chat_service.model.Message;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {

    @MessageMapping("/send")
    @SendTo("/tema/messages")
    public Message sendMessage(Message message) {
        System.out.println("Mensaje recibido: " + message);

        //ACA VA CODIGO PARA GUARDAR MENSAJE EN DB
        return new Message(message.name(), message.content());
    }
}