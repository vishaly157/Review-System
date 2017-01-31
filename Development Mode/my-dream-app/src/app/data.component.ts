/**
 *  Created on : Dec 23, 2016
 *  Author     : vyadav
 */

import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BackLineService } from './backline.service';
import { DField } from './data';
import { DUser } from './user';

declare var $: any;

@Component({
    selector: 'tdata',
    templateUrl: 'app/data.component.html',
})
export class DataComponent {
    //fstat : 0-analysis, 1-development, 2-code review, 3-testing, 4-done
    access = false;
    newCom = "";
    edit = true;
    story = "Story name";
    name = 'All';
    fields: DField[];
    dspfld: DField[];
    drpusers: DUser[];
    focused: DField;
    srcqry = "AR";
    dtitle = "";
    dmessage = "";
    user = "";
    nrev = "";
    tfield: DField = {
        ID: "", Name: "", Email: "", Employee_Id: "", Team: "", Date_of_Request: "", Technology: "",
        Reviewer: "", Reviewed: "", Date_of_Review: "", Comments: ""
    };


    constructor(private _Dservice: BackLineService) { }

    onCancel(){
        this.newCom = "";
        $('#Addcom').modal('toggle');
    }
    
    ngOnInit(): void {
        this.refreshRecs();
    }

    refreshRecs() {
        this._Dservice.getFields().subscribe(fields => this.fields = fields);
        this._Dservice.getUser().subscribe(user => this.drpusers = user);
        this.access = this._Dservice.rights();
        this.newCom = "";
    }

    showComment(field: DField) {
        $("#OverlayE").css("height", "100%");
        this.tfield = field;
    }

    closed() {
        $("#OverlayE").css("height", "0%");
        this.story = "###";
    }

    add(field: DField) {
        if (field.Reviewed != "Done") {
            $('#Update').modal('toggle');
            this.focused = field;
        } else {
            this.showAlert("Attention","Task already Completed",null);
        }
    }

    addCom() {
        if (this.focused.Reviewed != "Done") {
            $('#Update').modal('toggle');
            $('#Addcom').modal('toggle');
        } else {
            this.showAlert("Attention","Task already Completed","Update");
        }
    }

    addingComm() {
        var today = new Date();
        var revr: DUser = this._Dservice.loadUser();
        if (this.focused.Reviewed != "Done") {
            if (this.delete(this.focused.ID, this.focused.Employee_Id)) {
                var CommentUP = "\n----------------------------------------------------------------------------\n" + this.newCom +
                    "\n" + revr.name + " | " + revr.email + " | " + today.toDateString();
                if (!this.focused.Comments) {
                    this.focused.Comments = "";
                }
                this.focused.Comments += CommentUP;
                // this.fields.push(this.focused);
                this._Dservice.updField(this.focused);
                this.showAlert("Success","Added new comment with signature","Addcom");
            }
        } else {
            this.showAlert("Attention","Task already Completed","Addcom");
        }
        this.refreshRecs();
    }

    doRev() {
        var today = new Date();
        var revr: DUser = this._Dservice.loadUser();
        if (this.focused.Reviewed != "Done" && (this.focused.Name === revr.name || this.focused.Reviewer === revr.name)) {
            if (this.delete(this.focused.ID, this.focused.Employee_Id)) {
                this.focused.Reviewed = "Done";
                this.focused.Reviewer = revr.name;
                this.focused.Date_of_Review = today.toDateString();
                this.focused.Comments += "\n----------------------------------------------------------------------------\n" + "Story Reviewed." +
                    "\n" + revr.name + " | " + revr.email + " | " + today.toDateString();
                // this.fields.push(this.focused);
                this._Dservice.updField(this.focused);
                this.showAlert("Success","Task Completed","Update");
            }
        } else {
            this.showAlert("Attention","Cannot complete.\nThis is not assigned to you","Update");
        }
        this.refreshRecs();
    }

    delete(ID: string, eID: string) {
        var index = -1;
        for (var i = 0; i < this.fields.length; i++) {
            if (this.fields[i].ID === ID) {
                index = i;
            }
        }
        if (index >= 0) {
            if (this.fields[index].Employee_Id != eID) {
                return false;
            }
            this.fields.splice(index, 1);
        }
        return true;
    }

    ifadmin(field: DField) {
        if (this._Dservice.rights()) {
            this.focused = field;
            $('#Admin').modal('toggle');
        }
    }

    deleteRec() {
        if (this._Dservice.rights()) {
            if (confirm("Do You want to delete?")) {
                var index = -1;
                for (var i = 0; i < this.fields.length; i++) {
                    if (this.fields[i].ID === this.focused.ID) {
                        index = i;
                    }
                }
                if (index >= 0) {
                    this.fields.splice(index, 1);
                    this._Dservice.delField(this.focused);
                    this.showAlert("Success","Record deleted","Admin");
                } else {
                    // this._Dservice.updField(this.fields);
                    this.showAlert("Attention","Cant Delete","Admin");
                }
                this.refreshRecs();
            }
        }
    }

    reopenfrm() {
        $('#Admin').modal('toggle');
        $('#Assign').modal('toggle');
    }

    showAlert(title: string, message: string, modalID: string) {
        if (modalID) {
            $('#' + modalID).modal('toggle');
        }
        this.dtitle = title;
        this.dmessage = message;
        $('#ialerting').modal('toggle');
    }

    reOpen() {
        var today = new Date();
        var revr: DUser = this._Dservice.loadUser();
        if (this._Dservice.rights()) {
            this.focused.Comments += "\n----------------------------------------------------------------------------\n" + "Story Re-Opened for changes\n" +
                "Earlier Reviewer :" + this.focused.Reviewer +
                "\n" + revr.name + " | " + revr.email + " | " + today.toDateString() + " | @Admin";
            this.focused.Reviewed = "Pending";
            this.focused.Reviewer = this.nrev;
            if (this.delete(this.focused.ID, this.focused.Employee_Id)) {
                // this.fields.push(this.focused);
                this._Dservice.updField(this.focused);
                this.showAlert("Success","Story Re-Opened","Assign");
                return;
            }
            this.showAlert("Attention","Cant Update","Assign");
        }
    }
}