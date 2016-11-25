package es.fortnightly.back.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import es.fortnightly.back.resources.Bet;
import es.fortnightly.back.services.BetService;

@Controller
public class BetController {
	
	BetService betService;
	
	@Autowired
	public BetController(BetService betService) {
		this.betService = betService;
	}

	@ResponseBody
	@RequestMapping(value = "/user/{id}/bets/", method = RequestMethod.GET, produces = "application/json")
	public List<Bet> getByUser(
			@PathVariable("id") Integer id){
		return betService.list(id);
	}
	
	@RequestMapping(value = "/user/{id}/bets/", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody String addBet(HttpServletRequest request, 
			@PathVariable("id") Integer id,
			@RequestBody Bet bet) {
		bet.setUserId(id);
		betService.add(bet);
		return null;
	}
	
}
