package com.practice.service.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;


import com.practice.entity.Student;
import com.practice.repository.StudentRepository;
import com.practice.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService {
	
	@Autowired
	private StudentRepository studentRepository;
	
	/* Returns a page (i.e., sublist of a list) of student objects */
	@Override
	public Page<Student> getAllStudents(Pageable paging) {
		return studentRepository.findAll(paging);
	}

	@Override
	public boolean authenticateStudent(Student student) {
		Optional<Student> studentObj = studentRepository.findById(student.getRoll_no());
		
		if(studentObj.isPresent() && studentObj.get().getName().equals(student.getName())) {
			return true;
		}
		return false;
	}
	
	/* Returns a student object or null, based on the provided roll_no */
	@Override
	public Student getStudent(String roll_no) {
		Optional<Student> student = studentRepository.findById(roll_no);
		return student.isPresent() ? student.get() : null;
	}
	
	/* Add a new student to the database, if the roll_no is not in dB */
	@Override
	public boolean addNewStudent(Student student) {
		Optional<Student> studentObj = studentRepository.findById(student.getRoll_no());
		
		if(studentObj.isPresent()) {
			return false;
		}
		double total=student.getMark1()+student.getMark2()+student.getMark3()+student.getMark4()+student.getMark5();
		
		student.setScore(total);
		student.setPercentage(total/5);
		studentRepository.save(student);
		return true;
	}

	/* Edit/Update an already existing student with new details */
	@Override
	public Student editStudent(String roll_no, Student student_new) {
		Optional<Student> student = studentRepository.findById(roll_no);
		
		if(student.isPresent() && student.get().getRoll_no().equals(student_new.getRoll_no())) {
			double total=student_new.getMark1()+student_new.getMark2()+student_new.getMark3()+student_new.getMark4()+student_new.getMark5();
			
			student_new.setScore(total);
			student_new.setPercentage(total/5);
			return studentRepository.save(student_new);
			
		}
		return null;
	}
	
	/* Deletes a student from the dB */
	@Override
	public String deleteStudent(String roll_no) {
		Optional<Student> student = studentRepository.findById(roll_no);
		
		if(student.isEmpty()) {
			return null;
		}
		studentRepository.deleteById(roll_no);
		return "Student record deleted successfully";
	}

	

}
