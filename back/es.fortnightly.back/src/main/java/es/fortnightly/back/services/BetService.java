package es.fortnightly.back.services;

import java.util.List;

import es.fortnightly.back.resources.Bet;

public interface BetService {

	List<Bet> list(Integer id);

	void add(Bet bet);

}
