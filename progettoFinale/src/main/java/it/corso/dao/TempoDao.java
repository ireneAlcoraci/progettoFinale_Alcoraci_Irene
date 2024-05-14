package it.corso.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import it.corso.model.Tempo;

public interface TempoDao extends JpaRepository<Tempo, Integer> {
	
	boolean existsByNomeCitta(String nomeCitta);
}
