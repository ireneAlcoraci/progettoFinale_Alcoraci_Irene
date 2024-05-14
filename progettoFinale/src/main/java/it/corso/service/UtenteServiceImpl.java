package it.corso.service;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.corso.dao.UtenteDao;
import it.corso.dto.UtenteLoginRequestDto;
import it.corso.dto.UtenteRegistrazioneDto;
import it.corso.model.Utente;

@Service
public class UtenteServiceImpl implements UtenteService {

	@Autowired
	private UtenteDao utenteDao;
	
	@Override
	public boolean loginUtente(UtenteLoginRequestDto utenteLoginRequestDto) {
		Utente utente = new Utente();
		
		utente.setEmail(utenteLoginRequestDto.getEmail());
		utente.setPassword(utenteLoginRequestDto.getPassword());
		
		String sha256Hex = DigestUtils.sha256Hex(utente.getPassword());
		
		Utente credenzialiUtente = utenteDao.findByEmailAndPassword(utente.getEmail(), sha256Hex);
		
		return credenzialiUtente != null ? true : false;
	}

	@Override
	public void registrazioneUtente(UtenteRegistrazioneDto utenteRegitrazioneDto) {
		
		Utente utente = new Utente();
		utente.setNome(utenteRegitrazioneDto.getNome());
		utente.setCognome(utenteRegitrazioneDto.getCognome());
		utente.setEmail(utenteRegitrazioneDto.getEmail());
		
		String sha256Hex = DigestUtils.sha256Hex(utenteRegitrazioneDto.getPassword());
		utente.setPassword(sha256Hex);
		
		
		utenteDao.save(utente);
		
	}

	@Override
	public boolean esisteUtenteTramiteEmail(String email) {
		return utenteDao.existsByEmail(email);
	}

	@Override
	public Utente trovaUtenteDaEmail(String email) {
		return utenteDao.findByEmail(email);
	}

}
