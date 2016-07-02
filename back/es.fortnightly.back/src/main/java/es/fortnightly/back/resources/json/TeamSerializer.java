package es.fortnightly.back.resources.json;

import java.io.IOException;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import es.fortnightly.back.resources.Team;

public class TeamSerializer extends JsonSerializer<Team> {

	@Override
	public void serialize(Team team, JsonGenerator jgen, SerializerProvider provider)
			throws IOException, JsonProcessingException {
		jgen.writeStartObject();
	    jgen.writeStringField("id", ""+ team.getId());
	    jgen.writeStringField("name", team.getNombre());
	    jgen.writeStringField("position", ""+ team.getPosition());
	    jgen.writeStringField("points", ""+ team.getPoints());
	    
	    jgen.writeEndArray();
	    jgen.writeEndObject();
		
	}
	

}
