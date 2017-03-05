import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, filter: any): any {
    if (items) {
      console.log(filter);
      return items.filter((item) => {
          return item.name.includes(filter.name);
      });
    } else {
      return items;
    }
  }

}
