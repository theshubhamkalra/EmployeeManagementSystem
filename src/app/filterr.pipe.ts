import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterr'
})
export class FilterrPipe implements PipeTransform {

  transform(value: any,prop:string ,args?: string): any{
    if(!value){
      return []
    }
    if(!args){
      return value
    }
    //if(value.name.charAt(0).toLowerCase()==){
      return value.filter(
        result=>result[prop].charAt(0).toLowerCase()==args.charAt(0).toLowerCase() );
      
    }

  }