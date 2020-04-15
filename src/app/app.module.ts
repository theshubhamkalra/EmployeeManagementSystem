import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { EmpDataService } from './emp-data.service';
import { FormsModule } from '@angular/forms';
import { FilterrPipe } from './filterr.pipe';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { DetailsComponent } from './details/details.component';
import { GetDataService } from './get-data.service';
//import { TitleService } from './title.service';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    FilterrPipe,
    EditEmployeeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(EmpDataService),
    FormsModule,
  ],
  providers: [FilterrPipe,GetDataService,Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
