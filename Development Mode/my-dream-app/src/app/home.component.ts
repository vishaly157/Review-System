/**
 *  Created on : Dec 23, 2016
 *  Author     : vyadav
 */

import { Component } from '@angular/core';

import {BackLineService} from './backline.service';
import {EntryComponent} from './entry.component';
import {DUser} from './user';
declare var $: any;

@Component({
  selector: 'thome',
  templateUrl: 'app/home.component.html',
})
export class HomeComponent  { 
dataNU: DUser = {eID:"",name:"",email:"",team:"",pass:""};
dataLU: DUser = {eID:"",name:"",email:"",team:"",pass:""};
users : DUser[];
// login="Login Here";

    constructor (private _Serve : BackLineService){ }

    LOGIN():string{
        return "Login Here";
    }

    isloggedIn():boolean{
        if(this._Serve.getUser()){
            //console.log("logged in");
            return true;
        }
        //console.log("not logged in");
        return false;
    }

    onCreate(){
        //console.log(this.dataNU);
        for(var i =0 ; i<this.users.length ; i++){
            if((this.dataNU.eID === this.users[i].eID)){
                //console.log("User Already Exists");
                return;
            }
        }
        const user : DUser = {eID:this.dataNU.eID,name:this.dataNU.name,email:this.dataNU.email,team:this.dataNU.team,pass:this.dataNU.pass};
        //console.log("Create commanded for "+ JSON.stringify(user));
        this.dataNU = {eID:"",name:"",email:"",team:"",pass:""};
        $('#access').modal('toggle');
        // this.users.push(user);
        this._Serve.addUser(user);
        this._Serve.getUser().subscribe(user => this.users = user);
    }

    getUsers(){
        this._Serve.getUser().subscribe(user => this.users = user);
    }

    onLoginRequest(){
        for(var i =0 ; i<this.users.length ; i++){
            if((this.dataLU.eID === this.users[i].eID)&&(this.dataLU.pass === this.users[i].pass)){
                //console.log("Verified");
                // this._Serve.currentUser = this.users[i];
                // if(this.users[i].eID === "56"){
                //     this._Serve.isadmin = true;
                // }
                this.dataLU = {eID:"",name:"",email:"",team:"",pass:""};
                var unid = 'ri_tk_cr_'+new Date().getTime().toString(25)+new Date().getTime().toString(35)+new Date().getTime().toString(15);
                localStorage.setItem(unid, JSON.stringify(this.users[i]));
                if(this._Serve.authenticate(unid)){
                //console.log(unid+' local : '+localStorage.getItem(unid));
                $('#login').modal('toggle');
                
                // this.login = "Welcome "+this.users[i].name;
                
                $("#sec1").addClass("active");
                $("#sec1").addClass("in");
                $("#home").removeClass("in");
                $("#home").removeClass("active");
                }else{
                    alert("login Failed");
                }
                return;
            }
        }
        alert("Invalid Credentials");
    }

    onCancel(x : number){
        this.dataNU = {eID:"",name:"",email:"",team:"",pass:""};
        this.dataLU = {eID:"",name:"",email:"",team:"",pass:""};
        if(x===1){
            $('#login').modal('toggle');
        }else{
            $('#access').modal('toggle');
        }
    }

    ngOnInit(){
      this.getUsers();
      this.isloggedIn();
    }
}