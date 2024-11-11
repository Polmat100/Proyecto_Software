/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Repository;

import Model.Message;
import java.util.List;
import org.springframework.web.bind.annotation.PathVariable;

/**
 *
 * @author livia
 */
public interface MessageRepository {

    public List<Message> findByChatId(int chatId);

    public void save(Message message);

    public void update(Message message);

    public void delete(int messageId);
    public void getMessagesByChatId(int chatId);
    
    public void setMessageId(int id);
    
}
