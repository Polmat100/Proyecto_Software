/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Service;

import Model.Chat;
import Repository.ChatRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

/**
 *
 * @author livia
 */
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
