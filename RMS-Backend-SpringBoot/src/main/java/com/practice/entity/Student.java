package com.practice.entity;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Student {
	
	@Id
	private String roll_no;
	
	private String name;
	
	private LocalDate dob;
	private int mark1;
	private int mark2;
	private int mark3;
	private int mark4;
	private int mark5;
	private Double score;
	private Double percentage;
	
	public Student() { }
	
	public Student(String roll_no, String name, LocalDate dob, int mark1, int mark2, int mark3,int mark4, int mark5,Double score) {
		super();
		this.roll_no = roll_no;
		this.name = name;
		this.dob = dob;
		this.mark1 = mark1;
		this.mark2 = mark2;
		this.mark3 = mark3;
		this.mark4 = mark4;
		this.mark5 = mark5;
		
	}

	public String getRoll_no() {
		return roll_no;
	}

	public void setRoll_no(String roll_no) {
		this.roll_no = roll_no;
	}

	public int getMark4() {
		return mark4;
	}

	public void setMark4(int mark4) {
		this.mark4 = mark4;
	}

	public int getMark5() {
		return mark5;
	}

	public void setMark5(int mark5) {
		this.mark5 = mark5;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public LocalDate getDob() {
		return dob;
	}

	public void setDob(LocalDate dob) {
		this.dob = dob;
	}
	
	public Double getScore() {
		return score;
	}

	public void setScore(Double score) {
		this.score = score;
	}

	public int getMark1() {
		return mark1;
	}

	public int getMark2() {
		return mark2;
	}

	public int getMark3() {
		return mark3;
	}
	

	public void setMark1(int mark1) {
		this.mark1 = mark1;
	}

	public void setMark2(int mark2) {
		this.mark2 = mark2;
	}

	public void setMark3(int mark3) {
		this.mark3 = mark3;
	}

	public Double getPercentage() {
		return percentage;
	}

	public void setPercentage(Double percentage) {
		this.percentage = percentage;
	}
	
	
	

}
