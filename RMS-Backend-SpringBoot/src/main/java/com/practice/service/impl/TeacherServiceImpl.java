package com.practice.service.impl;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.practice.entity.Teacher;

import com.practice.repository.TeacherRepository;
import com.practice.service.TeacherService;


@Service
public class TeacherServiceImpl implements TeacherService {
	
	@Autowired
	private TeacherRepository teacherRepository;
	
	/* Returns the complete list of teacher DTO */
	public List<Teacher> getAllTeachers() {
		return teacherRepository.findAll();
		
		//return teachers.stream().map(TeacherMapper::mapToTeacher).collect(Collectors.toList());
	}
	
	/* Returns boolean response, after authenticating the provided teacher object */
	public boolean authenticateTeacher(Teacher teacher) {
		Optional<Teacher> teacherObj = teacherRepository.findById(teacher.getTeacherId());
		
		if(teacherObj.isPresent() && teacherObj.get().getPassword().equals(teacher.getPassword())) {
			return true;
		}
		return false;
	}

}