package com.kltn.server.module.user.validator;

public class InvalidEmailOrPasswordException extends RuntimeException {

    public InvalidEmailOrPasswordException(String message) {
        super(message);
    }
}
