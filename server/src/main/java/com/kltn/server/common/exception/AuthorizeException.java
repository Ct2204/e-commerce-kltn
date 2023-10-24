package com.kltn.server.common.exception;

public class AuthorizeException extends RuntimeException{

    public AuthorizeException(String message) {
        super(message);
    }
}
