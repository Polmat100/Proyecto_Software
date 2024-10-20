package com.umarket.chat-service.Controller;
import com.umarket.chat-service.Model.Chat;
import com.miapp.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chats")
public class ChatController {

    @Autowired
    private ChatService chatService;

    @GetMapping
    public List<Chat> getAllChats() {
        return chatService.getAllChats();
    }

    @GetMapping("/{id}")
    public Chat getChatById(@PathVariable int id) {
        return chatService.getChatById(id);
    }

    @PostMapping
    public void createChat(@RequestBody Chat chat) {
        chatService.createChat(chat);
    }

    @PutMapping("/{id}")
    public void updateChat(@PathVariable int id, @RequestBody Chat chat) {
        chat.setChatId(id);
        chatService.updateChat(chat);
    }

    @DeleteMapping("/{id}")
    public void deleteChat(@PathVariable int id) {
        chatService.deleteChat(id);
    }
}