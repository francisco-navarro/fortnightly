package es.fortnightly.back.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.fortnightly.back.resources.Match;
import es.fortnightly.back.resources.Team;
import es.fortnightly.back.resources.persistence.MatchMapper;
import es.fortnightly.back.services.MatchService;
import es.fortnightly.back.services.TeamService;

@Service("matchService")
public class MatchServiceImpl implements MatchService {
	
	private MatchMapper matchMapper;
	
	@Autowired
	public MatchServiceImpl(MatchMapper matchMapper) {
		super();
		this.matchMapper = matchMapper;
	}


	@Override
	public List<Match> list( Integer id, Integer round) {
		 return  matchMapper.list(id, round);
	}


}
