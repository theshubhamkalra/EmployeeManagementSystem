import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GetDataService } from '../get-data.service';
import { Data } from '../data';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  //empname :string='';
 // emploc :string='';
  //empemail :string='';
  //empmobile :number;
  //id:number;
  empp:Data;
  ido:number;
  title:string="Employee Details"

  constructor(private route:ActivatedRoute ,private svc:GetDataService,private router:Router,private tab:Title) 
  {tab.setTitle('Employees') }

  back(){
    this.router.navigate(['/employees'])
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(res=>{
      this.ido=+res.get('ido');
      //console.log(this.id)
      
      //console.log(this.emp)
    })

    this.svc.getData(this.ido).subscribe((result:Data)=>{
      this.empp=result;
      console.log(this.empp)
    })

  }

}
