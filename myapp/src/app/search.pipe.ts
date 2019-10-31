import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any,SearchByTitle:string) {


    if(!SearchByTitle){
      return value;
    }
    return value.filter( lah=>
      {
        const title=lah.title.toLowerCase().startsWith(SearchByTitle.toLowerCase())
        return (title);
      }

    )}

}
