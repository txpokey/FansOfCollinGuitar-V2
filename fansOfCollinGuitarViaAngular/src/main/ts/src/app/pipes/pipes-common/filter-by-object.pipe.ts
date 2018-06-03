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
    // let keyPicker: boolean = args['test'];
    return value.filter( v => {
        return this.transformx0( v , args ) ;
      }
    );
  }
  transform_2(value: any[], args?: any): any[] {// WORKS
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

  transformx0(value: any, args?: any): boolean {
    var ret : boolean = false ;
    for( let akey in args ) {
      let candidate: boolean = false ;
      if( value.hasOwnProperty(akey) ) {
        let inverter : boolean = false ;
        let input = value[akey] ;
        let filterRaw = args[akey] ;
        let filter = filterRaw ;
        if (  typeof filterRaw === 'string' ) {
          if ( 0 === filterRaw.search("!") ) {
            filter = filterRaw.slice(1) ;
            inverter = true ;
          }
        }
        candidate = filter == input ;
        ret = inverter ? !candidate : candidate ;
      }
    }
    return ret ;
  }

}
