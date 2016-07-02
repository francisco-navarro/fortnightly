package es.fortnightly.back.services;

import java.util.List;

import es.fortnightly.back.resources.Match;

public interface MatchService {

	List<Match> list(Integer id, Integer round);

}
