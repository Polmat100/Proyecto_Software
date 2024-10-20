package com.umarket.chat-service.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Chat {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int chat_id;
    private int buyer_id;
    private int seller_id;
    private int product_id;
    private Date date_creation;
    private boolean statusChat;

    public Chat() {
    }

    public Chat(int chat_id, int buyer_id, int seller_id, int product_id, Date date_creation, boolean statusChat) {
        this.chat_id = chat_id;
        this.buyer_id = buyer_id;
        this.seller_id = seller_id;
        this.product_id = product_id;
        this.date_creation = date_creation;
        this.statusChat = statusChat;
    }

    public int getChat_id() {
        return chat_id;
    }

    public void setChat_id(int chat_id) {
        this.chat_id = chat_id;
    }

    public int getBuyer_id() {
        return buyer_id;
    }

    public void setBuyer_id(int buyer_id) {
        this.buyer_id = buyer_id;
    }

    public int getSeller_id() {
        return seller_id;
    }

    public void setSeller_id(int seller_id) {
        this.seller_id = seller_id;
    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public Date getDate_creation() {
        return date_creation;
    }

    public void setDate_creation(Date date_creation) {
        this.date_creation = date_creation;
    }

    public boolean isStatusChat() {
        return statusChat;
    }

    public void setStatusChat(boolean statusChat) {
        this.statusChat = statusChat;
    }
}
