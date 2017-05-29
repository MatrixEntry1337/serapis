import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'values'})
export class ObjectValuesPipe implements PipeTransform {

  constructor() {}

  transform(value: any, args?: any[]): any[] {
    // debug
    console.log('Sent object: ' + value);

    // create instance vars to store keys and final output
    const keyArr: any[] = Object.keys(value);
    const dataArray: any[] = [];

    // loop through the object,
    // pushing values to the return array
    keyArr.forEach((key: any) => {
      dataArray.push(value[key]);
    });

    // return the resulting array
    return dataArray;
  }
}
