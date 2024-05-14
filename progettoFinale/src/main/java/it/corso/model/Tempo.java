package it.corso.model;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "tempo")
public class Tempo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private int id;
	
	@Column(name = "nome_citta")
	private String nomeCitta;
	
	@Column(name = "temperatura")
	private double temperatura;
	
	@Column(name = "max_temp")
	private double maxTemp;
	
	@Column(name = "min_temp")
	private double minTemp;
	
	@Column(name = "umidita")
	private int umidita;
	
	@Column(name = "tempo")
	private String tempo;
	
	
	@ManyToMany(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
	@JoinTable
	(
		name = "utente_tempo", joinColumns = @JoinColumn(name = "fk_u", referencedColumnName = "ID"),
		inverseJoinColumns = @JoinColumn(name = "fk_t", referencedColumnName = "ID")
	)
	private List<Utente> listaUtenti = new ArrayList<>();


	public int getId() {
		return id;
	}


	public void setId(int id) {
		this.id = id;
	}


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


	public List<Utente> getListaTempi() {
		return listaUtenti;
	}


	public void setListaTempi(List<Utente> listaUtenti) {
		this.listaUtenti = listaUtenti;
	}
	
	
}
