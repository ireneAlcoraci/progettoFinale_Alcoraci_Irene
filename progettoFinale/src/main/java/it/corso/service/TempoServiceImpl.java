package it.corso.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import it.corso.dao.TempoDao;
import it.corso.dto.TempoDto;
import it.corso.model.Tempo;

@Service
public class TempoServiceImpl implements TempoService {
	private ModelMapper modelMapper = new ModelMapper();
	
	@Autowired
	private TempoDao tempoDao;

	@Override
	public void creaNuovoTempo(TempoDto tempoDto) {
		Tempo tempo = modelMapper.map(tempoDto, Tempo.class);
		
		tempoDao.save(tempo);
	}

	@Override
	public boolean esisteDaNome(String nomeCitta) {
		return tempoDao.existsByNomeCitta(nomeCitta);
	}

}
