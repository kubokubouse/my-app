package com.example.test.controller;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import com.example.test.repository.UserRepository;
import com.example.test.service.UserService;

import com.example.test.model.User;

@Controller
public class HomeController
{
	private final UserRepository repository;
    @Autowired //← コンストラクタが１つの場合、@Autowiredは省略できます
    User user;
    @Autowired
    UserService userService;
    @Autowired
    HttpSession session;


    public HomeController(UserRepository repository)
    {
        this.repository = repository;

    }


		//トップページは特段渡す数字とかないから引数渡さんでよい
	    @GetMapping("/test")
	    public String index(Model model, User user){

	    	User users=userService.findid(1);

	    	model.addAttribute("user",users);
	        return "index";
	    }



	


}