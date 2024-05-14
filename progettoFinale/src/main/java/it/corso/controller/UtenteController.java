package it.corso.controller;

import java.security.Key;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import it.corso.dto.UtenteLoginRequestDto;
import it.corso.dto.UtenteLoginResponceDto;
import it.corso.dto.UtenteRegistrazioneDto;
import it.corso.model.Utente;
import it.corso.service.BlackListService;
import it.corso.service.UtenteService;
import jakarta.validation.Valid;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.GET;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.Produces;
import jakarta.ws.rs.container.ContainerRequestContext;
import jakarta.ws.rs.core.HttpHeaders;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Controller
@Path("/")
public class UtenteController {
	
	@Autowired
	private UtenteService utenteService;
	
	@Autowired
	private BlackListService blackListService;
	
	@POST
	@Path("registra")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response registrazioneUtente(@Valid @RequestBody UtenteRegistrazioneDto utenteDto) {
		
		try {
			if (!Pattern.matches("(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,20}",utenteDto.getPassword())) {
				return Response.status(Response.Status.BAD_REQUEST).build();
			} 
			
			if(utenteService.esisteUtenteTramiteEmail(utenteDto.getEmail())) {
				return Response.status(Response.Status.BAD_REQUEST).build();
			}
						
			utenteService.registrazioneUtente(utenteDto);
			return Response.status(Response.Status.OK).build();
			
		} catch (Exception e) {
			return Response.status(Response.Status.BAD_REQUEST).build();
		}
	}
	
	
	private UtenteLoginResponceDto creaToken(String email) {
		//eseguiamo una cifratura attraverso l'algoritmo di crittografia HMAC
		byte[] chiaveSegreta = "chiaveSegretaImportante3452793865425781598484481561527".getBytes();
		
		//crittografia
		Key chiave = Keys.hmacShaKeyFor(chiaveSegreta);
		
		Utente utente = utenteService.trovaUtenteDaEmail(email);
		
		//racchiudiamo le informazioni utente in una mappa che passeremo al token
		Map<String, Object> map = new HashMap<>();
		map.put("email", email);
		map.put("nome", utente.getNome());
		map.put("cognome", utente.getCognome());
		
		//data di creazione e ttl(time to live)
		Date creationDate = new Date();		
		Date end = java.sql.Timestamp.valueOf(LocalDateTime.now().plusMinutes(30L));
		
		//creazione del token firmato con la chiave segreta
		String jwtToken = Jwts.builder()
		.setClaims(map)
		.setIssuer("http://localhost:8080")
		.setIssuedAt(creationDate)
		.setExpiration(end)
		.signWith(chiave)
		.compact();
		
		UtenteLoginResponceDto token = new UtenteLoginResponceDto();
		token.setToken(jwtToken);
		token.setTokenCreationTime(creationDate);
		token.setTtl(end);		
		
		return token;
		
	}
	
	@POST
	@Path("login")
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response loginUtente(@RequestBody UtenteLoginRequestDto utenteLoginRequestDto) {
		try {
			
			if (utenteService.loginUtente(utenteLoginRequestDto)) {
				return Response.ok(creaToken(utenteLoginRequestDto.getEmail())).build();
			}  
			
			 return Response.status(Response.Status.BAD_REQUEST).build();

			  } catch (Exception e) {

			   return Response.status(Response.Status.BAD_REQUEST).build();
			  }
	}
	
	@GET
	@Path("logout")
	public Response logoutUtente(ContainerRequestContext requestContext) {
		try {
			String authorizationHeader = requestContext.getHeaderString(HttpHeaders.AUTHORIZATION);
			String token = authorizationHeader.substring("Bearer".length()).trim();
			
			blackListService.invalidateToken(token);
			return Response.status(Response.Status.OK).build();
			
		} catch (Exception e) {
			return Response.status(Response.Status.INTERNAL_SERVER_ERROR).build();
		}
	}
}
