package es.fortnightly.back.resources.persistence;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import es.fortnightly.back.resources.Match;

public interface MatchMapper {

	public List<Match> list(@Param("id")int id, @Param("round")int round );
	
}
