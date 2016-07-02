package es.fortnightly.back.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import es.fortnightly.back.resources.Team;
import es.fortnightly.back.services.TeamService;

@Controller
public class TeamController {
	
	TeamService teamService;
	
	@Autowired
	public TeamController(TeamService teamService) {
		this.teamService = teamService;
	}

	@ResponseBody
	@RequestMapping(value = "/competitions/{id}/teams", method = RequestMethod.GET, produces = "application/json")
	public List<Team> getByParentId(
			@PathVariable("id") Integer id){
		return teamService.list(id)	;
	}
}
