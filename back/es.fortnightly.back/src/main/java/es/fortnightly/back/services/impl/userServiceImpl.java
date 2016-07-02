package es.fortnightly.back.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import es.fortnightly.back.resources.User;
import es.fortnightly.back.resources.persistence.UserMapper;
import es.fortnightly.back.services.userService;

@Service("userService")
public class userServiceImpl implements userService {

	private UserMapper userMapper;
	
	@Autowired
	public userServiceImpl(UserMapper userMapper) {
		super();
		this.userMapper = userMapper;
	}


	public User getUser(String username){
		
		return userMapper.getUser(username);
		
	}


}
