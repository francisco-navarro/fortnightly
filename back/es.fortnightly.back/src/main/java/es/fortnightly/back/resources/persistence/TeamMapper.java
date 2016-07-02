package es.fortnightly.back.resources.persistence;

import java.util.Date;
import java.util.List;

import org.apache.ibatis.annotations.Param;

import es.fortnightly.back.resources.Team;

public interface TeamMapper {

	public List<Team> list();
	
	public Team get(@Param("id")long id);

}
