package com.umarket.chat_service.test2.Controller;

import com.umarket.chat_service.test2.Domain.Model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class ChatController {
    @Autowired
    private SimpMessagingTemplate simpMessagingTemplate;

    @MessageMapping("/message") // /app/message
    @SendTo("/chatroom/public")
    private Message receivePublicMessage(@Payload Message message){
        return message;
    }
    @MessageMapping("/private-message")
    private Message recievedPrivateMessage(@Payload Message message){
        simpMessagingTemplate.convertAndSendToUser(message.getReceiverName(), "/private",message);
        return message;
    }
}
