/**
 *  Created on : Dec 23, 2016
 *  Author     : vyadav
 */

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, BaseRequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { DField } from './data';
import { DUser } from './user';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class BackLineService {
    currentUser: DUser;
    isadmin = false;
    private urlStack = {"BASE":"http://192.168.0.84:4000/","_getDataUrl":"getRecords","_postDataUrl":"postRecord","_updateDataUrl":"updateRecord","_delDataUrl":"deleteRecord",
                        "_getUserUrl":"getUsers","_updUserUrl":"updateUser","_newUserUrl":"newUser","_postCommUrl":"postComment"};
    private token = "";

    constructor(private _http: Http) { }

    validateData(data:string): boolean{
        if(data.includes(";") || data.includes("--") || data.includes('"') || data.includes('{') || data.includes('}')){
            return false;
        }
        else return true;
    }

    authenticate(token: string): boolean {
        if (token) {
            this.token = token;
            var temp: DUser = JSON.parse(localStorage.getItem(token));
            if (temp) {
                this.currentUser = temp;
                if (this.currentUser.eID === "56") {
                    this.isadmin = true;
                }
                return true;
            }
        }
        return false;
    }

    loadUser(): DUser {
        return this.currentUser;
    }

    updateUser(user :DUser): boolean{
        if(user.eID === this.currentUser.eID){
            this.currentUser = user;
            return true;
        }
        return false;
    }

    unloadUser(): boolean {
        if (this.token) {
            localStorage.removeItem(this.token);
            this.currentUser = null;
            this.isadmin = false;
            this.token = "";
            return true;
        }
        return false;
    }

    rights(): boolean {
        return this.isadmin;
    }

    getFields(): Observable<DField[]> {
        return this._http.get(this.urlStack.BASE+this.urlStack._getDataUrl)
            .map(this.extractData).catch(this.handleError);
    }

    addField(data: DField) {
        let body = JSON.stringify(data);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Access-Control-Allow-Origin', '*');
        this._http.post(this.urlStack.BASE+this.urlStack._postDataUrl, body, headers).subscribe(
            // () => //console.log("Successful Post"),
            // err => console.error("Error"+err)
        );
    }

    updField(data: DField) {
        let body = JSON.stringify(data);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Access-Control-Allow-Origin', '*');
        this._http.post(this.urlStack.BASE+this.urlStack._updateDataUrl, body, headers).subscribe(
            // () => //console.log("Successful Post"),
            // err => console.error("Error"+err)
        );
    }

    delField(data: DField) {
        let body = JSON.stringify(data);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Access-Control-Allow-Origin', '*');
        this._http.post(this.urlStack.BASE+this.urlStack._delDataUrl, body, headers).subscribe(
            // () => //console.log("Successful Post"),
            // err => console.error("Error"+err)
        );
    }

    getUser(): Observable<DUser[]> {
        return this._http.get(this.urlStack.BASE+this.urlStack._getUserUrl)
            .map(this.extractData).catch(this.handleError);
    }

    addUser(data: DUser) {
        let body = JSON.stringify(data);
        //console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this._http.post(this.urlStack.BASE+this.urlStack._newUserUrl, body, headers).subscribe(
            // () => //console.log("Successful Post"),
            // err => console.error("Error"+err)
        );
    }

    addFeedback(data: any) {
        let body = JSON.stringify(data);
        //console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this._http.post(this.urlStack.BASE+this.urlStack._postCommUrl, body, headers).subscribe(
            // () => //console.log("Successful Post"),
            // err => console.error("Error"+err)
        );
    }

    updUser(data: DUser) {
        let body = JSON.stringify(data);
        //console.log(body);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        this._http.post(this.urlStack.BASE+this.urlStack._updUserUrl, body, headers).subscribe(
            // () => //console.log("Successful Post"),
            // err => console.error("Error"+err)
        );
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.data || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}