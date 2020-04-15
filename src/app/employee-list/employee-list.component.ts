import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import {Data} from '../data';
import { FilterrPipe } from '../filterr.pipe';
import { ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
//import {Pipe}

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  emp:Data[];
  filt :string;
  

  constructor(private http:HttpClient,private filterr:FilterrPipe,private route:ActivatedRoute,private router:Router,private title:Title) {
    title.setTitle('Employee List')
   }

  ngOnInit(): void {
    let obs=this.http.get('api/employees');
    obs.subscribe((response:Data[])=>{
      this.emp=response;
      console.log(response);
    
    }
    )



  }

  delete(id){
    this.http.delete('api/employees'+'/'+id).subscribe(
      response=>{
        //let index= this.emp.indexOf(emp);
        console.log('Deleted');
        this.ngOnInit();
        
      }
    )
  }

}
