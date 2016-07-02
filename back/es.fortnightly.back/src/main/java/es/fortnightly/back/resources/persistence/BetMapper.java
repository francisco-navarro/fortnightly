package es.fortnightly.back.resources.persistence;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import es.fortnightly.back.resources.Bet;
import es.fortnightly.back.resources.Match;

public interface BetMapper {

	public List<Bet> list(@Param("id")int id );
	
	public void add(Bet bet);
	
}
