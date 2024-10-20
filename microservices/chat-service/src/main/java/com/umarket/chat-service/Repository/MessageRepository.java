package com.umarket.chat-service.Repository;
import com.umarket.chat-service.Model.Message;
import java.util.List;

public interface MessageRepository {
    List<Message> findByChatId(int chatId);
    void save(Message message);
    void update(Message message);
    void delete(int messageId);
}