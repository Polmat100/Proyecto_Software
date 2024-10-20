package com.umarket.chat-service.Controller;
import com.umarket.chat-service.Model.Message;
import com.miapp.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/messages")
public class MessageController {

    @Autowired
    private MessageService messageService;

    @GetMapping("/chat/{chatId}")
    public List<Message> getMessagesByChatId(@PathVariable int chatId) {
        return messageService.getMessagesByChatId(chatId);
    }

    @PostMapping
    public void sendMessage(@RequestBody Message message) {
        messageService.sendMessage(message);
    }

    @PutMapping("/{id}")
    public void updateMessage(@PathVariable int id, @RequestBody Message message) {
        message.setMessageId(id);
        messageService.updateMessage(message);
    }

    @DeleteMapping("/{id}")
    public void deleteMessage(@PathVariable int id) {
        messageService.deleteMessage(id);
    }
}

