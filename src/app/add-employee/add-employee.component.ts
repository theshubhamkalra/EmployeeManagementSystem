import { Component, OnInit, Input } from '@angular/core';
import { Data } from '../data';
import { HttpClient } from '@angular/common/http';
import {EmpDataService} from '../emp-data.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  empid:number=null;
  empname :string='';
  emploc :string;
  empemail :string='';
  empmobile :number;
  title:string='Add Employee'
 
  //id:number=null;
  location:string[]=['Bangalore','Chennai','Pune','Hyderabad'];

  public message:string="";
 

  constructor(public http:HttpClient, private router:Router,private tab:Title) {
    tab.setTitle('Add Employee')
   }

 
  details:Data[]=[];
  
    
    add(x){
      this.empname=x.value.empname
      this.emploc=x.value.emploc
      this.empemail=x.value.empemail
      this.empmobile=x.value.empmobile
      let doc=new Data(this.empid,this.empname,this.emploc,this.empemail,this.empmobile);

      let obs=this.http.post('api/employees',doc);
    
      obs.subscribe((res)=>{
        console.log("Added :",res);
        this.details.push(doc);
       // this.message="Added Successfully"
      })
        this.router.navigate(['/employees']);
    }


  ngOnInit(): void {

 
  }

}

