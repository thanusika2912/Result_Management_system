package com.practice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.practice.entity.Student;
import com.practice.service.StudentService;


@RestController
@RequestMapping("/api/students")
@CrossOrigin("http://localhost:4200/")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	/* Request for getting paginated students list, based on the provided query parameters */
	@GetMapping
	public Page<Student> getAllStudents(@RequestParam(name = "page", defaultValue = "0") int page,
										@RequestParam(name = "size", defaultValue = "3") int size) {
		Pageable paging = PageRequest.of(page, size);
		return studentService.getAllStudents(paging);
	}
	
	/* Request for authenticating a student, from the provided student DTO object */
	@PostMapping("/authenticate")
	public ResponseEntity<String> authenticateStudent(@RequestBody Student student) {
		boolean isCorrectCredentials = studentService.authenticateStudent(student);
		return isCorrectCredentials ? 
				ResponseEntity.status(HttpStatus.OK).body("Student Crededntials are correct") : 
					ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Incorrect Credentials.");
	}
	
	/* Request for getting a student from the provided roll_no */
	@GetMapping("/{roll_no}")
	public ResponseEntity<?> getStudent(@PathVariable String roll_no) {
		Student student = studentService.getStudent(roll_no);
		return (student != null) ? 
				ResponseEntity.ok(student) : 
					ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
	}
	
	/* Request for adding a new student to the dB */
	@PostMapping
	public ResponseEntity<String> addNewStudent(@RequestBody Student student) {
		boolean isStudentAdded = studentService.addNewStudent(student);
		return isStudentAdded ? 
				ResponseEntity.status(HttpStatus.CREATED).body("Student is added.") :
					ResponseEntity.status(HttpStatus.CONFLICT).body("Roll No is already present.");
	}
	
	/* Request for editing/updating an already existing student in dB */
	@PutMapping("/edit/{roll_no}")
	public ResponseEntity<String> editStudent(@PathVariable String roll_no, @RequestBody Student student) {
		return (studentService.editStudent(roll_no, student) != null) ? 
				ResponseEntity.ok("Student data updated") : 
					ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student data not updated");
	}
	
	/* Request for removing a student object from the dB */
	@DeleteMapping("/delete/{roll_no}")
	public ResponseEntity<String> deleteStudent(@PathVariable String roll_no) {
		String response = studentService.deleteStudent(roll_no);
		return (response != null) ? 
				ResponseEntity.status(HttpStatus.OK).body(response) : 
					ResponseEntity.status(HttpStatus.NOT_FOUND).body("Student not found");
	}

}
