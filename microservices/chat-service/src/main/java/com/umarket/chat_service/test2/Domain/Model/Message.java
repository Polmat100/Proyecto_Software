package com.umarket.chat_service.test2.Domain.Model;


public class Message {
    private String senderName;
    private String receiverName;
    private String content;
    private String date;
    private Status status;

    public Message() {
    }

    public Message(String senderName, String receiverName, String content, String date, Status status) {
        this.senderName = senderName;
        this.receiverName = receiverName;
        this.content = content;
        this.date = date;
        this.status = status;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getSenderName() {
        return senderName;
    }

    public void setSenderName(String senderName) {
        this.senderName = senderName;
    }

    public String getReceiverName() {
        return receiverName;
    }

    public void setReceiverName(String receiverName) {
        this.receiverName = receiverName;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Status getStatus() {
        return status;
    }

    public void setStatus(Status status) {
        this.status = status;
    }
}
