package es.fortnightly.back.resources;

import java.io.Serializable;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;

import es.fortnightly.back.resources.json.TeamSerializer;

@JsonSerialize(using=TeamSerializer.class)
public class Team implements Serializable {
	
	private long id;
	private String nombre;
	
	
}
