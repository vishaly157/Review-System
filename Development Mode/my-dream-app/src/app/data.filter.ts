import { Pipe } from '@angular/core';

import { DField } from './data';

@Pipe({
    name: 'dataFilter'
})
export class dataFilter {
    transform(items: DField[]){
        return items.filter(item => item.Technology.includes("a"));
    }
}