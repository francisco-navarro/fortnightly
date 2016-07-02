package es.fortnightly.back.resources.persistence;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import es.fortnightly.back.resources.Team;

public interface TeamMapper {

	public List<Team> list(@Param("id")long id);
	

//	public Team get(@Param("id")long id);

}
