package com.kltn.server.common.security;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @io.swagger.v3.oas.annotations.info.Info(
                description = "OpenApi documentation for Ecommerce Application",
                title = "OpenApi specification",
                version = "1.0",
                termsOfService = "Terms of service"
        ),
        servers = {
                @Server(
                        description = "Dev environment",
                        url = "http://localhost:8080"
                ),
                @Server(
                        description = "Testing environment",
                        url = "https://ecommerce-api.com"
                )
        }


)
public class OpenApiConfig {
}
