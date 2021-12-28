import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
  {
    path:"add",component:AddStudentComponent
  },
  {
    path:"edit/:id",component:EditStudentComponent
  },
  {
    path:"",component:StudentListComponent
  },
  {
    path:"**",component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
