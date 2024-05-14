package it.corso.service;

import org.springframework.stereotype.Service;

import it.corso.dto.UtenteLoginRequestDto;
import it.corso.dto.UtenteRegistrazioneDto;
import it.corso.model.Utente;



@Service
public interface UtenteService {
	
	//funzione che permette di gestire la login
		boolean loginUtente(UtenteLoginRequestDto utenteLoginRequestDto); 
			
		//funzione che permette di registrare l'utente
		void registrazioneUtente(UtenteRegistrazioneDto utenteRegistrazioneDto);
		
		//funzione che permette di restituire un boolean per verificare se l'utente esiste tramite email
		boolean esisteUtenteTramiteEmail(String email);
		
		//funzione che permette di restituire un utente tramite email
		Utente trovaUtenteDaEmail(String email);
		
		//funzione che permette di eliminare un utente tramite email
		void eliminaUtente(String email);
}
