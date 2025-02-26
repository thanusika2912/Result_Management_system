import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { dobValidator } from '../../shared/directives/dob.validator';
import { StudentDataService } from '../../core/service/student-data.service';
import { Student } from '../../core/model/student';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {
  addStudentForm: FormGroup = new FormGroup({
    roll_no: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    dob: new FormControl('', [Validators.required, dobValidator()]),
    mark1: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    mark2: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    mark3: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    mark4: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    mark5: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)])
   
  });
  errorMessage!: string;

  constructor(private studentDataService: StudentDataService, private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  get roll_no() {
    return this.addStudentForm.get('roll_no');
  }
  get name() {
    return this.addStudentForm.get('name');
  }
  get dob() {
    return this.addStudentForm.get('dob');
  }
  get mark1() {
    return this.addStudentForm.get('mark1');
  }
  get mark2() {
    return this.addStudentForm.get('mark2');
  }
  get mark3() {
    return this.addStudentForm.get('mark3');
  }
  get mark4() {
    return this.addStudentForm.get('mark4');
  }
  get mark5() {
    return this.addStudentForm.get('mark5');
  }
  get score() {
    return this.addStudentForm.get('score');
  }

  onSubmit() {
    const roll_no = this.addStudentForm.get('roll_no')?.value;
    const name = this.addStudentForm.get('name')?.value;
    const dob = this.addStudentForm.get('dob')?.value;
    const mark1=this.addStudentForm.get('mark1')?.value;
    const mark2=this.addStudentForm.get('mark2')?.value;
    const mark3=this.addStudentForm.get('mark3')?.value;
    const mark4=this.addStudentForm.get('mark4')?.value;
    const mark5=this.addStudentForm.get('mark5')?.value;
    const percentage=(mark1+mark2+mark3+mark4+mark5)/5;
    const score = this.addStudentForm.get('score')?.value;

    const student = new Student(roll_no,name,dob,mark1,mark2,mark3,mark4,mark5,percentage,score);

    this.studentDataService.addNewStudent(student).subscribe(res => {
      if(res.status === 201) {
        this.location.back();
      }
    }, error => {
      this.errorMessage = error.error;
    });
  }

  gotoBack() {
    this.location.back();
  }

}
