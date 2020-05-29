import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'beforeafter'})
export class BeforeAfterPipe implements PipeTransform {
    transform(value: string, before?:string, after?:string): string {
        if(before === undefined){before = 'prefix'}
        if(after === undefined){after = 'suffix'}
        let newStr = `${before} ${value} ${after}`;
        return newStr;
    }
}