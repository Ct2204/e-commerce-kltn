
package com.kltn.server.module.seller.service;

public interface SlugService {

    String createSlug(String productName);

    String addTimestampOrRandomString(String slug);
}
