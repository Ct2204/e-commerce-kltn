package com.kltn.server.common.exception;

public class NotActivatedExceptionHandler extends RuntimeException{
    public NotActivatedExceptionHandler(String msg) {
        super(msg);
    }
}
