package es.fortnightly.back.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.fortnightly.back.resources.Bet;
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


	@Override
	public void add(Bet bet) {
		betMapper.add(bet);;
	}

}
