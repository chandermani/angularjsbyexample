import {Pipe} from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe {
  transform(value: Array<any>, field:string, searchTerm:string): any {
    if (!field) return [];
    if (!searchTerm || 0 === searchTerm.length) return value;
    return value.filter((item) => item[field].startsWith(searchTerm));
  }
}

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe {
  transform(value: Array<any>, field:string): any {
    if(value==null) {
      return null;
    }
    if (field.startsWith("-")) {
      field = field.substring(1);
      if (typeof value[field] === 'string' || value[field] instanceof String) {
        return [...value].sort((a, b) => b[field].localeCompare(a[field]));
      }
      return [...value].sort((a, b) => b[field] - a[field]);
    }
    else {
      if (typeof value[field] === 'string' || value[field] instanceof String) {
        return [...value].sort((a, b) => -b[field].localeCompare(a[field]));
      }
      return [...value].sort((a, b) => a[field] - b[field]);
    }
  }
}

@Pipe({
  name: 'secondsToTime'
})
export class SecondsToTime {
  transform(value: number): any {
    if (!isNaN(value)) {
      var hours = Math.floor(value / 3600);
      var minutes = Math.floor((value - (hours * 3600)) / 60);
      var seconds = value - (hours * 3600) - (minutes * 60);

      return ("0" + hours).substr(-2) + ':'
        + ("0" + minutes).substr(-2) + ':'
        + ("0" + seconds).substr(-2);
    }
    return;
  }
}
