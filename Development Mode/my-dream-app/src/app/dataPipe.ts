import { Pipe } from '@angular/core';

import { BackLineService } from './backline.service';
import { DField } from './data';

@Pipe({
    name: 'dataPipe',
    pure: true
})

export class dataPipe {
    constructor(private _Dservice: BackLineService) { }

    transform(params: DField[]) {
        if (params == null) {
            // console.log('h2');
            return null;
        }
         if (this._Dservice.isadmin){
            // console.log('h1');
            return params;
        }
        else{
            if(this._Dservice.currentUser){
                // console.log('h4 :: '+this._Dservice.currentUser.name);
                return params.filter(param => (param.Name.toUpperCase().includes(this._Dservice.currentUser.name.toUpperCase())
                                        || param.Reviewer.toUpperCase().includes(this._Dservice.currentUser.name.toUpperCase())
                                        ));
            }
            // console.log('h3');
            return null;
        }
    }
}