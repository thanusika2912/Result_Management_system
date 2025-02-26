import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { SortDirective } from './shared/directives/sort.directive';
import { TeacherLoginComponent } from './teacher/teacher-login/teacher-login.component';
import { TeacherDashboardComponent } from './teacher/teacher-dashboard/teacher-dashboard.component';
import { AddStudentComponent } from './teacher/add-student/add-student.component';
import { StudentListComponent } from './teacher/student-list/student-list.component';
import { EditStudentComponent } from './teacher/edit-student/edit-student.component';
import { DeleteStudentComponent } from './teacher/delete-student/delete-student.component';
import { CommonModule } from '@angular/common';
import { StudentResultComponent } from './student/student-result/student-result.component';
import { StudentLoginComponent } from './student/student-login/student-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SortDirective,
    TeacherLoginComponent,
    TeacherDashboardComponent,
    AddStudentComponent,
    StudentListComponent,
    EditStudentComponent,
    DeleteStudentComponent,
    StudentLoginComponent,
    StudentResultComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
