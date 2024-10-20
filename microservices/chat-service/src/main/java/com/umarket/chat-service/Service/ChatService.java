package com.umarket.chat-service.Service;

import com.umarket.chat-service.Model.Chat;
import com.miapp.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatService {

    @Autowired
    private ChatRepository chatRepository;

    public List<Chat> getAllChats() {
        return chatRepository.findAll();
    }

    public Chat getChatById(int chatId) {
        return chatRepository.findById(chatId);
    }

    public void createChat(Chat chat) {
        chatRepository.save(chat);
    }

    public void updateChat(Chat chat) {
        chatRepository.update(chat);
    }

    public void deleteChat(int chatId) {
        chatRepository.delete(chatId);
    }
}