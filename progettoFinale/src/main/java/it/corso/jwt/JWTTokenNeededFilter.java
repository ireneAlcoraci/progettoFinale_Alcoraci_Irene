package it.corso.jwt;

import java.io.IOException;
import java.security.Key;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import it.corso.service.BlackListService;
import jakarta.ws.rs.NotAuthorizedException;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.container.ContainerRequestFilter;
import jakarta.ws.rs.container.ResourceInfo;
import jakarta.ws.rs.core.Context;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.core.Response;
import jakarta.ws.rs.ext.Provider;

@JWTTokenNeeded
@Provider
public class JWTTokenNeededFilter implements ContainerRequestFilter {

	@Context
	private ResourceInfo resourceInfo;
	
	@Autowired
	private BlackListService blackList;
	
	@Override
	public void filter(ContainerRequestContext requestContext) throws IOException {
		Secured annotationRole = resourceInfo.getResourceMethod().getAnnotation(Secured.class);
		
		if (annotationRole == null) {
			annotationRole = resourceInfo.getResourceClass().getAnnotation(Secured.class);
		
		}
		
		String authorizationHeader = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);
		if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
			throw new NotAuthorizedException("Authorization header must be provided");
		}
		
				
		//estrae il token dalla HTTP Authorization header
		String token = authorizationHeader.substring("Bearer".length()).trim();
		
		if (blackList.isTokenRevoked(token)) {
			throw new NotAuthorizedException("BackList item");
		}
	
		try {

			byte[] chiaveSegreta = "chiaveSegretaImportante3452793865425781598484481561527".getBytes();
			//crittografia
			Key chiave = Keys.hmacShaKeyFor(chiaveSegreta);
			
			Jws<Claims> claims = Jwts.parserBuilder().setSigningKey(chiave).build().parseClaimsJws(token);			
			//contiene le informazioni passate con map
			Claims body = claims.getBody();
			List<String> rolesToken = body.get("ruoli", List.class);
			boolean hasRole = false;
			
			for (String role : rolesToken) {
				if (role.equals(annotationRole.role())) {
					hasRole = true;
				}
			}
			
			if(!hasRole) {
				requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
			}
			
		} catch (Exception e) {
			requestContext.abortWith(Response.status(Response.Status.UNAUTHORIZED).build());
		
		}
	}

}
