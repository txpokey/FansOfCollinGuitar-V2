import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByObject'
})
export class FilterByObjectPipe implements PipeTransform {

  transform00(value: any, args?: any): any {
    return null;
  }
  transform_0(value: any[]): any[] { // WORKS
    return value.filter( v => v.hasOwnProperty('url')) ;
  }
  transform(value: any[], args?: any): any[] {// INTEST
    let keyPicker: boolean = args['test'];
    return value.filter( v => {
      if( v.hasOwnProperty('test') ) {
        let probe: boolean = v['test'];
        return probe == keyPicker ;
      };
    }) ;
  }

  transform_1(value: any[]): any[] { // WORKS
    return value.filter( v => {
      if( v.hasOwnProperty('test') ) {
        let probe: boolean = v['test'];
        return probe ;
      };
    }) ;
  }

  transformx0(value: any, args?: any): any {
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
