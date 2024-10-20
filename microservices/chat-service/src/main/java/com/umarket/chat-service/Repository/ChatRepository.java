package com.umarket.chat-service.Repository;

import com.umarket.chat-service.Model.Chat;
import java.util.List;

public interface ChatRepository {
    List<Chat> findAll();
    Chat findById(Long chatId);
    void save(Chat chat);
    void update(int chat);
    void delete(int chatId);
}