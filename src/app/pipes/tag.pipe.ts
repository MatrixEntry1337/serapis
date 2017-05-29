import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'tags'})
export class TagPipe implements PipeTransform {

  transform(value: any[], args?: any): any[] {
    console.log('Values passed to Tag Pipe:');
    console.log(value);
    console.log(args.toString());

    const dataArray: any[] = [];

    if (args) {
      value.forEach(object => {
        const found = object.tags.find((tag: any) => {
          return tag === args;
        });

        if (found) {
          dataArray.push(object);
        }
      });
    }
    return dataArray;
  }
}
