package es.fortnightly.back.resources.persistence;


import org.apache.ibatis.annotations.Param;

import es.fortnightly.back.resources.User;

public interface UserMapper {


	public User getUser(@Param("username")String username);
	
	
}
