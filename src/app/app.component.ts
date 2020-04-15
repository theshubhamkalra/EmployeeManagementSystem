import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private title:Title){
    title.setTitle('Employee Management System')
  }

  active(inp1:string,inp2:string){
    let a=document.getElementById(inp1)
    let b=document.getElementById(inp2)
      a.style.color='blue'
      a.style.fontWeight="bolder"
      b.style.color='rgb(85,26,139)'
      b.style.fontWeight="normal"
      
    }
    
   
  }

