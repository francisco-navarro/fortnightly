package es.fortnightly.back.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.fortnightly.back.resources.Team;
import es.fortnightly.back.resources.persistence.TeamMapper;
import es.fortnightly.back.services.TeamService;

@Service("sectionService")
public class TeamServiceImpl implements TeamService {
	
	private TeamMapper teamMapper;
	
	@Autowired
	public TeamServiceImpl(TeamMapper teamMapper) {
		super();
		this.teamMapper = teamMapper;
	}


	@Override
	public List<Team> list(Integer id) {
		 teamMapper.list(id);
		 return null;
	}


}
