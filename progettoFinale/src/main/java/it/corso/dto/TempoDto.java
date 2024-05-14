package it.corso.dto;

import java.util.List;

public class TempoDto {

	private String nomeCitta;
	private double temperatura;
	private double maxTemp;
	private double minTemp;
	private int umidita;
	private String tempo;
	private List<TempoUtenteDto> listaUtenti;
	
	
	public String getNomeCitta() {
		return nomeCitta;
	}
	public void setNomeCitta(String nomeCitta) {
		this.nomeCitta = nomeCitta;
	}
	public double getTemperatura() {
		return temperatura;
	}
	public void setTemperatura(double temperatura) {
		this.temperatura = temperatura;
	}
	public double getMaxTemp() {
		return maxTemp;
	}
	public void setMaxTemp(double maxTemp) {
		this.maxTemp = maxTemp;
	}
	public double getMinTemp() {
		return minTemp;
	}
	public void setMinTemp(double minTemp) {
		this.minTemp = minTemp;
	}
	public int getUmidita() {
		return umidita;
	}
	public void setUmidita(int umidita) {
		this.umidita = umidita;
	}
	public String getTempo() {
		return tempo;
	}
	public void setTempo(String tempo) {
		this.tempo = tempo;
	}
	public List<TempoUtenteDto> getListaUtenti() {
		return listaUtenti;
	}
	public void setListaUtenti(List<TempoUtenteDto> listaUtenti) {
		this.listaUtenti = listaUtenti;
	}
	
	
}
