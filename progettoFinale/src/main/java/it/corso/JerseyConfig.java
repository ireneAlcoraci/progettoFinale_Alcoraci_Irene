package it.corso;

import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.stereotype.Component;

import jakarta.ws.rs.ApplicationPath;

@Component
@ApplicationPath("api")
public class JerseyConfig extends ResourceConfig{
	
	public JerseyConfig() {
		register(CorsFilter.class);
		packages("it.corso");
		
	}
}
