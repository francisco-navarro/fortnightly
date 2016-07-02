package es.fortnightly.back.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import es.fortnightly.back.resources.User;
import es.fortnightly.back.services.userService;

@Controller
public class UserController {
	
	userService userService;
	
	@Autowired
	public UserController(userService userService) {
		this.userService = userService;
	}

	@ResponseBody
	@RequestMapping(value = "/user/{username}/", method = RequestMethod.GET, produces = "application/json")
	public User getByUsernameId(
			@PathVariable("username") String username){
		return userService.getUser(username);
	}
	
}
