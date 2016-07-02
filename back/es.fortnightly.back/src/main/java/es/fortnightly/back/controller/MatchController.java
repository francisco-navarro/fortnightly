package es.fortnightly.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import es.fortnightly.back.resources.Match;
import es.fortnightly.back.services.MatchService;

@Controller
public class MatchController {
	
	MatchService matchService;
	
	@Autowired
	public MatchController(MatchService matchService) {
		this.matchService = matchService;
	}

	@ResponseBody
	@RequestMapping(value = "/competitions/{id}/matches/{round}", method = RequestMethod.GET, produces = "application/json")
	public List<Match> getByParentId(
			@PathVariable("id") Integer id,
			@PathVariable("round") Integer round){
		return matchService.list(id, round)	;
	}
	
}
