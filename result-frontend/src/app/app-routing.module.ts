import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { AddStudentComponent } from './teacher/add-student/add-student.component';
import { EditStudentComponent } from './teacher/edit-student/edit-student.component';
import { DeleteStudentComponent } from './teacher/delete-student/delete-student.component';
import { TeacherGuard } from './core/guard/teacher.guard';
import { TeacherLoginComponent } from './teacher/teacher-login/teacher-login.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';
import { StudentGuard } from './core/guard/student.guard';
import { StudentResultComponent } from './student/student-result/student-result.component';

const routes: Routes = [
  {
    path: "teacher",
    component: TeacherLoginComponent,
    canActivateChild: [TeacherGuard],
    children: [
      {
        path: ':teacherId',
        component: TeacherDashboardComponent,

        children: [
          {
            path: 'add',
            component: AddStudentComponent
          },
          {
            path: 'edit/:roll_no',
            component: EditStudentComponent
          },
          {
            path: 'delete/:roll_no',
            component: DeleteStudentComponent
          }
        ]
      }
    ]
  },
  {
    path: "student",
    component: StudentLoginComponent,
    canActivateChild: [StudentGuard],
    children: [
      {
        path: ':roll_no',
        component: StudentResultComponent
      }
    ]  }, 
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
