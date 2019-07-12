import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'durration'
})

export class DurrationPipe implements PipeTransform {
    transform(value: number): string {
        switch (value){
            case 1: return 'Half Hour'
            case 2: return 'One Hour'
            case 3: return 'Half Day'
            case 4: return 'Full Day'
            default: return value.toString();
        }
        
    }
}