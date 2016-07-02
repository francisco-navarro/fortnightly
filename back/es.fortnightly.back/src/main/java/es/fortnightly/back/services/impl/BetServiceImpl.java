package es.fortnightly.back.services.impl;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.fortnightly.back.resources.Bet;
import es.fortnightly.back.resources.Team;
import es.fortnightly.back.resources.persistence.BetMapper;
import es.fortnightly.back.services.BetService;

@Service("betService")
public class BetServiceImpl implements BetService {
	
	private BetMapper betMapper;
	
	@Autowired
	public BetServiceImpl(BetMapper betMapper) {
		this.betMapper = betMapper;
	}

	@Override
	public List<Bet> list(Integer id) {
		return betMapper.list(id);
	}

	public void createLeague(List<Team> teams){
		Collections.sort(teams, new Comparator<Team>(){
			public int compare(Team o1, Team o2) {
				return (int) ((Math.random()*10)-5);
			}
		});
		
		for(int i=0;i<teams.size();i++){
			for(int j=0;j<teams.size()/2;j++){
				
			}
		}
	}

	@Override
	public void add(Bet bet) {
		betMapper.add(bet);;
	}

}
