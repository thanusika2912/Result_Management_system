import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { dobValidator } from '../../shared/directives/dob.validator';
import { Student } from '../../core/model/student';
import { StudentDataService } from '../../core/service/student-data.service';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  editStudentForm: FormGroup = new FormGroup({
    roll_no: new FormControl(''),
    name: new FormControl('', Validators.required),
    dob: new FormControl('', [Validators.required, dobValidator()]),
    mark1: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    mark2: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    mark3: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    mark4: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)]),
    mark5: new FormControl('', [Validators.required, Validators.min(0), Validators.max(100)])
   
  });

  constructor(private route: ActivatedRoute, private location: Location, private studentDataService: StudentDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const roll_no = param['roll_no'];

      this.studentDataService.getStudent(roll_no).subscribe((student: any) => {
        this.fillForm(student);
      });
    });
  }

  fillForm(student: Student) {
    this.editStudentForm.patchValue({
      roll_no: student.roll_no,
      name: student.name,
      dob: student.dob,
      mark1:student.mark1,
      mark2:student.mark2,
      mark3:student.mark3,
      mark4:student.mark4,
      mark5:student.mark5
    });
  }

  get name() {
    return this.editStudentForm.get('name');
  }

  get dob() {
    return this.editStudentForm.get('dob');
  }

  get mark1() {
    return this.editStudentForm.get('mark1');
  }
  get mark2() {
    return this.editStudentForm.get('mark2');
  }
  get mark3() {
    return this.editStudentForm.get('mark3');
  }
  get mark4() {
    return this.editStudentForm.get('mark4');
  }
  get mark5() {
    return this.editStudentForm.get('mark5');
  }

  get score() {
    return this.editStudentForm.get('score');
  }

  onSubmit() {
    const roll_no = this.editStudentForm.get('roll_no')?.value;
    const name = this.editStudentForm.get('name')?.value;
    const dob = this.editStudentForm.get('dob')?.value;
    const score = this.editStudentForm.get('score')?.value;
    const mark1=this.editStudentForm.get('mark1')?.value;
    const mark2=this.editStudentForm.get('mark2')?.value;
    const mark3=this.editStudentForm.get('mark3')?.value;
    const mark4=this.editStudentForm.get('mark4')?.value;
    const mark5=this.editStudentForm.get('mark5')?.value;
    const percentage=(mark1+mark2+mark3+mark4+mark5)/5;
    const student = new Student(roll_no, name, dob,mark1,mark2,mark3,mark4,mark5,percentage, score);
    this.studentDataService.editStudent(student).subscribe((res: any) => {
      this.location.back();
    });
  }

  gotoBack() {
    this.location.back();
  }

}
