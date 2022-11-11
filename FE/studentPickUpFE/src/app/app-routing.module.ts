import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentpickupComponent } from './components/studentpickup/studentpickup.component';

const routes: Routes = [  {
  path: '**',
  redirectTo: 'student-pickup',
  pathMatch: 'full'
},
{
  title: "Student Pick Up (Mini Proj)",
  path: 'student-pickup',
  component: StudentpickupComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
