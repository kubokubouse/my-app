package com.example.test.repository;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.test.model.User;
public interface UserRepository extends JpaRepository<User, String>
{//Stringなのになんで会員登録できるんですかね…

	   User findById(int id);


}
