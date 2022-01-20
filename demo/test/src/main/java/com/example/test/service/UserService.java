package com.example.test.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.test.model.User;
import com.example.test.repository.UserRepository;

@Service
@Transactional
public class UserService
{
    @Autowired
    UserRepository userRepository;


    /*public List<User> findAll() {
        return UserRepository.findAllOrderById();
    }*/

    public   User findid(int id)
    {
    	return userRepository.findById(id);
    }



    public void insert(User user)
    {
        userRepository.save(user);
    }

    public void update(User user)
    {
        userRepository.save(user);
    }

    public User updateUser(User user)
    {
        return userRepository.save(user);
    }

   /* public void delete(Integer id) {
        UserRepository.deleteById(id);
    }

    //public Optional<User> selectById(Integer id) {
        return UserRepository.findById(id);
    }*/
}