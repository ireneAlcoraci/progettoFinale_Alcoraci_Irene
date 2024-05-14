package it.corso.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;

import it.corso.dto.TempoDto;
import it.corso.service.TempoService;
import jakarta.ws.rs.Consumes;
import jakarta.ws.rs.POST;
import jakarta.ws.rs.Path;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Controller
@Path("/tempo")
public class TempoController {
	
	@Autowired
	private TempoService tempoService;
	
	@POST
	@Path("/crea")
	@Consumes(MediaType.APPLICATION_JSON)
	public Response creaTempo(@RequestBody TempoDto tempoDto) {
		try {
			if(tempoService.esisteDaNome(tempoDto.getNomeCitta())) {
				return Response.status(Response.Status.BAD_REQUEST).build();
			}
			
			tempoService.creaNuovoTempo(tempoDto);
			return Response.status(Response.Status.OK).build();
		} catch (Exception e) {
			return Response.status(Response.Status.BAD_REQUEST).build();
		}
	}
}
