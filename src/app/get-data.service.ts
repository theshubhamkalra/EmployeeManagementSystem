import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  data:any;


  constructor(public http:HttpClient) { }


  getData(id: number){
    //let data:any;
    return this.http.get('api/employees'+'/'+id);
  }

  getAll(){
    return this.http.get('api/employees');
  }
}
