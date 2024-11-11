/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Repository;

import com.umarket.chat.Chat;
import java.util.List;

/**
 *
 * @author livia
 */
public interface ChatRepository {

    List<Chat> findAll();

    Chat findById(int chatId);

    void save(Chat chat);

    public void update(Chat chat);

    public void delete(int chatId);
}
