import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DetailsComponent } from './details/details.component';


const routes: Route[] = [
  //{path :'home',component:AppComponent},
  {path :'employees',component:EmployeeListComponent},
  {path :'addEmployee',component:AddEmployeeComponent},
  //{path:'**',redirectTo:'/home',pathMatch:'full'},
  {path:'editEmployee/:id' ,component:EditEmployeeComponent},
  {path:'details/:ido',component:DetailsComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
