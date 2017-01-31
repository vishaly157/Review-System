/**
 *  Created on : Dec 23, 2016
 *  Author     : vyadav
 */

import { Component } from '@angular/core';

import { BackLineService } from './backline.service';
declare var $: any;

@Component({
    selector: 'ngfoot',
    templateUrl: 'app/footer.component.html'
})

export class FooterComponent {
feedback = {name:"", date:"" ,view:""};
    
    constructor(private _Dservice: BackLineService){ }

        onCancelFDB(){
        this.feedback = {name:"", date:"" ,view:""};
        $('#fdbck').modal('toggle');
    }

    onFeedback(){
        $('#fdbck').modal('toggle');
        var today = new Date();
        this.feedback.date = today.toDateString();
        this._Dservice.addFeedback(this.feedback);
        this.feedback = {name :"", date :"" ,view :""};
        alert("Successful Submission");
    }
}