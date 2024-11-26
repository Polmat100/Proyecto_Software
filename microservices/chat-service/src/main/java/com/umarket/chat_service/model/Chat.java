package com.umarket.chat_service.model;

public class Chat {
    private String idChat;
    private String user1;
    private String user2;
    private String idProduct;

    // Constructor
    public Chat(String idChat, String user1, String user2, String idProduct) {
        this.idChat = idChat;
        this.user1 = user1;
        this.user2 = user2;
        this.idProduct = idProduct;
    }

    // Getters y Setters
    public String getIdChat() {
        return idChat;
    }

    public void setIdChat(String idChat) {
        this.idChat = idChat;
    }

    public String getUser1() {
        return user1;
    }

    public void setUser1(String user1) {
        this.user1 = user1;
    }

    public String getUser2() {
        return user2;
    }

    public void setUser2(String user2) {
        this.user2 = user2;
    }

    public String getIdProduct() {
        return idProduct;
    }

    public void setIdProduct(String idProduct) {
        this.idProduct = idProduct;
    }
}