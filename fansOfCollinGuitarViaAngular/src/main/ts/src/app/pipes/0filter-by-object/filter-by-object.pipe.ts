import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByObject'
})
export class FilterByObjectPipe implements PipeTransform {

  transform(value: any[]): any[] {
    return value.filter( v => v.hasOwnProperty('url')) ;
  }
  transform0(value: any, args?: any): any {
    var ret : boolean = true ;
    for( let key in args ) {
      let candidate: boolean = false ;
      if( value.hasOwnProperty(key) ) {
        let inverter : boolean = false ;
        let input = value[key] ;
        let filterRaw = args[key] ;
        let filter = filterRaw ;
        if ( 0 === filterRaw.search("!") ) {
          filter = filterRaw.slice(1) ;
          inverter = true ;
        }
        candidate = filter == input ;
        ret = inverter ? !candidate : candidate ;
      }
    }
    return ret ;
  }

}
