import { Pipe, PipeTransform } from '@angular/core';

import { SortOptions } from '../sort.enum';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any,  args: any): any {

    switch (args) {
      case SortOptions.NAME_ASC:
        return value.sort((a, b) => {
          const nameA = a.login.toUpperCase();
          const nameB = b.login.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        });
      break;
      case SortOptions.NAME_DESC:
        return value.sort((a, b) => {
          const nameA = a.login.toUpperCase();
          const nameB = b.login.toUpperCase();
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        });
      break;
      case SortOptions.RANK_ASC:
        return value.sort((a, b) => {
          return a.score - b.score;
        });
      break;
      case SortOptions.RANK_DESC:
        return value.sort((a, b) => {
          return b.score - a.score;
        });
      break;
      default:
        return value;
    }

  }

}
