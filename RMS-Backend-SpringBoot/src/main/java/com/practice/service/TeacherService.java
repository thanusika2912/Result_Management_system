package com.practice.service;

import java.util.List;

import com.practice.entity.Teacher;


public interface TeacherService {
	
	public List<Teacher> getAllTeachers();
	
	public boolean authenticateTeacher(Teacher teacher);

}
