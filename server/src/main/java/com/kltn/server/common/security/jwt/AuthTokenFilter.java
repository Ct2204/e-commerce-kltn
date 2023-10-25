package com.kltn.server.common.security.jwt;


import com.kltn.server.common.exception.AuthorizeException;
import com.kltn.server.common.security.service.impl.UserDetailsServiceImpl;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.util.Arrays;

@Component
public class AuthTokenFilter extends OncePerRequestFilter {

    public static final String[] AUTH_WHITELIST = {
            "/swagger-ui",
            "/v3/api-docs",
            "/api/v1/users/register",
            "/api/v1/users/login",
            "/api/v1/users/refreshToken",
            "/api/v1/product/**",
            "/images",
            "/videos",
            "/api/v1/users/send-verification-code",
            "/api/v1/users/confirm-verification-code",
            "/api/v1/users/activate-user",
            "/api/v1/product",
            "/api/v1/seller/login"
    };

    @Autowired
    private JwtUtils jwtUtils;

    @Autowired
    private UserDetailsServiceImpl userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        try {
            String authHeader = request.getHeader("Authorization");
            String token = null;
            String username = null;
            boolean check = false;

            check = Arrays.stream(AUTH_WHITELIST)
                    .anyMatch(request.getRequestURI()::contains);

            if (authHeader != null && authHeader.startsWith("Bearer ") && !check) {
                token = authHeader.substring(7);
                username = jwtUtils.extractUserName(token);
            }

            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null && !check) {

                if (!jwtUtils.isTokenInvalidated(token)) {

                    UserDetails userDetails = userDetailsService.loadUserByUsername(username);

                    if (jwtUtils.validateToken(token, userDetails)) {
                        UsernamePasswordAuthenticationToken authToken =
                                new UsernamePasswordAuthenticationToken(userDetails,
                                        null,
                                        userDetails.getAuthorities());
                        authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                        SecurityContextHolder.getContext().setAuthentication(authToken);
                        check = true;
                    }
                }
            }

            if (!check) {
                throw new AuthorizeException("UNAUTHORIZED");
            }
        } catch (AuthorizeException e) {
            response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
            response.setContentType("application/json");

            StringBuilder errorStatus = new StringBuilder();

            errorStatus.append("{");
            errorStatus.append("\"status\": \"FORBIDDEN\",\n");
            errorStatus.append("    \"code\": 403,\n");
            errorStatus.append("    \"message\": \"Unauthorized\"");
            errorStatus.append("}");

            response.getWriter().write(errorStatus.toString());
            return;
        }

        filterChain.doFilter(request, response);
    }
}
