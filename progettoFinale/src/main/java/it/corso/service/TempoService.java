package it.corso.service;

import it.corso.dto.TempoDto;

public interface TempoService {
	
	void creaNuovoTempo(TempoDto tempoDto);
	boolean esisteDaNome(String nomeCitta);
}
