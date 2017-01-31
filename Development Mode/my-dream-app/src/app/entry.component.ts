/**
 *  Created on : Dec 23, 2016
 *  Author     : vyadav
 */

import { Component } from '@angular/core';

import { BackLineService } from './backline.service';
import { DField } from './data';
import { DUser } from './user';
declare var $: any;
@Component({
  selector: 'tetry',
  templateUrl: 'app/entry.component.html',
})

export class EntryComponent {
  message = "message";
  title = "header";
  state = false;
  welcome = " ";
  fields: DField[];
  drpusers: DUser[];
  userentry = {story:"" , comment:"" , reviewer:""};
  passwordQ = {current:"", update:"", confirm:""};

  constructor(private _Dservice: BackLineService) { }

  ngOnInit() {
    this.getRequest();
    this._Dservice.getUser().subscribe(user => this.drpusers = user);
  }

  onCancel() {
    this.passwordQ = {current:"", update:"", confirm:""};
    this.userentry = {story:"" , comment:"" , reviewer:""};
    $('#Create').modal('hide');
    $('#changePass').modal('hide');
  }

  getStat() {
    this.getRequest();
    this._Dservice.getUser().subscribe(user => this.drpusers = user);
    var auth: DUser = this._Dservice.loadUser();
    if (auth) {
      this.state = true;
      this.welcome = "Welcome, " + auth.name;
      if (auth.eID === "56") {
        this.welcome += " (Admin)";
      }
    } else {
      this.state = false;
      this.title = "Login Required"; this.message = "You need to be logged in to continue. Go to Log In at home tab.";
      $('#alerting').modal('toggle');
    }
  }

  getRequest() {
    this._Dservice.getFields().subscribe(fields => this.fields = fields);
  }

  logout() {
    if(!this._Dservice.unloadUser()){
      this.showAlert("Error","LogOut Failed",null);
      return;
    }
    this.state = false;
    $("#home").addClass("active");
    $("#home").addClass("in");
    $("#sec1").removeClass("in");
    $("#sec1").removeClass("active");
  }

  passChange() {
    var user: DUser = this._Dservice.loadUser();
    if (user.pass === this.passwordQ.current) {
      if (this.passwordQ.update === this.passwordQ.confirm) {
        if (this.passwordQ.confirm.length >= 6) {
           var index=-1;
           for(var i =0 ; i<this.drpusers.length ; i++){
             if(this.drpusers[i].eID === user.eID){
               index=i;
             }
          }
          //console.log("ind :: "+index);
          if(index>=0){
            this.drpusers.splice(index, 1);
            user.pass=this.passwordQ.confirm;
            //console.log("1");
            if(!this._Dservice.updateUser(user)){
              //console.log("2");
              this.showAlert("Error","Can't Change","changePass");
              return;
            }
            this.showAlert("Success","Password changed","changePass");
            // this.drpusers.push(user);
            this._Dservice.updUser(user);
            this._Dservice.getUser().subscribe(user => this.drpusers = user);
          }else{
            this.showAlert("Exception","User not Found","changePass");
          }
        } else {
          this.showAlert("Invalid Data","Password should be minimum of 6 characters","changePass");
        }
      } else {
        this.showAlert("Invalid Data","Confirm password fail","changePass");
      }
    } else {
      this.showAlert("Invalid Data","Current Password is incorrect.","changePass");
    }
    this.onCancel();
  }

  showAlert(title: string, message: string, modalID: string) {
    if(modalID){
      $('#'+modalID).modal('toggle');
    }
    this.title = title;
    this.message = message;
    $('#alerting').modal('toggle');
  }

  processReq() {
    var today = new Date();
    var n = today.getTime();
    var date = today.toDateString();
    var user: DUser = this._Dservice.loadUser();

    var recrd: DField = {
      ID: n.toString(16).toUpperCase(), Name: user.name, Email: user.email, Employee_Id: user.eID,
      Team: user.team, Date_of_Request: date, Technology: this.userentry.story, Reviewer: this.userentry.reviewer, Reviewed: "Pending", Date_of_Review: "---", Comments: this.userentry.comment
    };
    this.onCancel();
    this.showAlert("Success","Requested posted.",null);
    // this.fields.push(recrd);

    this._Dservice.addField(recrd);
  }
}