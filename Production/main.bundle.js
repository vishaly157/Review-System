webpackJsonp([0,3],{

/***/ 343:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 343;


/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_common_module__ = __webpack_require__(452);




// if (environment.production) {
//   enableProdMode();
// }
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_common_module__["a" /* iCommonModule */]);
//# sourceMappingURL=C:/Users/vyadav/Desktop/Main/my-dream-app/src/main.js.map

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__entry_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__backline_service__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dataPipe__ = __webpack_require__(454);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return iCommonModule; });
/**
 *  Created on : Dec 23, 2016
 *  Author     : vyadav
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var iCommonModule = (function () {
    function iCommonModule() {
    }
    iCommonModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["e" /* JsonpModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_4__data_component__["a" /* DataComponent */], __WEBPACK_IMPORTED_MODULE_6__entry_component__["a" /* EntryComponent */], __WEBPACK_IMPORTED_MODULE_7__footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_9__dataPipe__["a" /* dataPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_9__dataPipe__["a" /* dataPipe */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_4__data_component__["a" /* DataComponent */], __WEBPACK_IMPORTED_MODULE_6__entry_component__["a" /* EntryComponent */], __WEBPACK_IMPORTED_MODULE_7__footer_component__["a" /* FooterComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_8__backline_service__["a" /* BackLineService */]],
        }), 
        __metadata('design:paramtypes', [])
    ], iCommonModule);
    return iCommonModule;
}());
//# sourceMappingURL=C:/Users/vyadav/Desktop/Main/my-dream-app/src/common.module.js.map

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backline_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return DataComponent; });
/**
 *  Created on : Dec 23, 2016
 *  Author     : vyadav
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataComponent = (function () {
    function DataComponent(_Dservice) {
        this._Dservice = _Dservice;
        //fstat : 0-analysis, 1-development, 2-code review, 3-testing, 4-done
        this.access = false;
        this.newCom = "";
        this.edit = true;
        this.story = "Story name";
        this.name = 'All';
        this.srcqry = "AR";
        this.dtitle = "";
        this.dmessage = "";
        this.user = "";
        this.nrev = "";
        this.tfield = {
            ID: "", Name: "", Email: "", Employee_Id: "", Team: "", Date_of_Request: "", Technology: "",
            Reviewer: "", Reviewed: "", Date_of_Review: "", Comments: ""
        };
    }
    DataComponent.prototype.onCancel = function () {
        this.newCom = "";
        $('#Addcom').modal('toggle');
    };
    DataComponent.prototype.ngOnInit = function () {
        this.refreshRecs();
    };
    DataComponent.prototype.refreshRecs = function () {
        var _this = this;
        this._Dservice.getFields().subscribe(function (fields) { return _this.fields = fields; });
        this._Dservice.getUser().subscribe(function (user) { return _this.drpusers = user; });
        this.access = this._Dservice.rights();
        this.newCom = "";
    };
    DataComponent.prototype.showComment = function (field) {
        $("#OverlayE").css("height", "100%");
        this.tfield = field;
    };
    DataComponent.prototype.closed = function () {
        $("#OverlayE").css("height", "0%");
        this.story = "###";
    };
    DataComponent.prototype.add = function (field) {
        if (field.Reviewed != "Done") {
            $('#Update').modal('toggle');
            this.focused = field;
        }
        else {
            this.showAlert("Attention", "Task already Completed", null);
        }
    };
    DataComponent.prototype.addCom = function () {
        if (this.focused.Reviewed != "Done") {
            $('#Update').modal('toggle');
            $('#Addcom').modal('toggle');
        }
        else {
            this.showAlert("Attention", "Task already Completed", "Update");
        }
    };
    DataComponent.prototype.addingComm = function () {
        var today = new Date();
        var revr = this._Dservice.loadUser();
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
                this.showAlert("Success", "Added new comment with signature", "Addcom");
            }
        }
        else {
            this.showAlert("Attention", "Task already Completed", "Addcom");
        }
        this.refreshRecs();
    };
    DataComponent.prototype.doRev = function () {
        var today = new Date();
        var revr = this._Dservice.loadUser();
        if (this.focused.Reviewed != "Done" && (this.focused.Name === revr.name || this.focused.Reviewer === revr.name)) {
            if (this.delete(this.focused.ID, this.focused.Employee_Id)) {
                this.focused.Reviewed = "Done";
                this.focused.Reviewer = revr.name;
                this.focused.Date_of_Review = today.toDateString();
                this.focused.Comments += "\n----------------------------------------------------------------------------\n" + "Story Reviewed." +
                    "\n" + revr.name + " | " + revr.email + " | " + today.toDateString();
                // this.fields.push(this.focused);
                this._Dservice.updField(this.focused);
                this.showAlert("Success", "Task Completed", "Update");
            }
        }
        else {
            this.showAlert("Attention", "Cannot complete.\nThis is not assigned to you", "Update");
        }
        this.refreshRecs();
    };
    DataComponent.prototype.delete = function (ID, eID) {
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
    };
    DataComponent.prototype.ifadmin = function (field) {
        if (this._Dservice.rights()) {
            this.focused = field;
            $('#Admin').modal('toggle');
        }
    };
    DataComponent.prototype.deleteRec = function () {
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
                    this.showAlert("Success", "Record deleted", "Admin");
                }
                else {
                    // this._Dservice.updField(this.fields);
                    this.showAlert("Attention", "Cant Delete", "Admin");
                }
                this.refreshRecs();
            }
        }
    };
    DataComponent.prototype.reopenfrm = function () {
        $('#Admin').modal('toggle');
        $('#Assign').modal('toggle');
    };
    DataComponent.prototype.showAlert = function (title, message, modalID) {
        if (modalID) {
            $('#' + modalID).modal('toggle');
        }
        this.dtitle = title;
        this.dmessage = message;
        $('#ialerting').modal('toggle');
    };
    DataComponent.prototype.reOpen = function () {
        var today = new Date();
        var revr = this._Dservice.loadUser();
        if (this._Dservice.rights()) {
            this.focused.Comments += "\n----------------------------------------------------------------------------\n" + "Story Re-Opened for changes\n" +
                "Earlier Reviewer :" + this.focused.Reviewer +
                "\n" + revr.name + " | " + revr.email + " | " + today.toDateString() + " | @Admin";
            this.focused.Reviewed = "Pending";
            this.focused.Reviewer = this.nrev;
            if (this.delete(this.focused.ID, this.focused.Employee_Id)) {
                // this.fields.push(this.focused);
                this._Dservice.updField(this.focused);
                this.showAlert("Success", "Story Re-Opened", "Assign");
                return;
            }
            this.showAlert("Attention", "Cant Update", "Assign");
        }
    };
    DataComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'tdata',
            template: __webpack_require__(611),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__backline_service__["a" /* BackLineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__backline_service__["a" /* BackLineService */]) === 'function' && _a) || Object])
    ], DataComponent);
    return DataComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/vyadav/Desktop/Main/my-dream-app/src/data.component.js.map

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backline_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return dataPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var dataPipe = (function () {
    function dataPipe(_Dservice) {
        this._Dservice = _Dservice;
    }
    dataPipe.prototype.transform = function (params) {
        var _this = this;
        if (params == null) {
            // console.log('h2');
            return null;
        }
        if (this._Dservice.isadmin) {
            // console.log('h1');
            return params;
        }
        else {
            if (this._Dservice.currentUser) {
                // console.log('h4 :: '+this._Dservice.currentUser.name);
                return params.filter(function (param) { return (param.Name.toUpperCase().includes(_this._Dservice.currentUser.name.toUpperCase())
                    || param.Reviewer.toUpperCase().includes(_this._Dservice.currentUser.name.toUpperCase())); });
            }
            // console.log('h3');
            return null;
        }
    };
    dataPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Pipe */])({
            name: 'dataPipe',
            pure: true
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__backline_service__["a" /* BackLineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__backline_service__["a" /* BackLineService */]) === 'function' && _a) || Object])
    ], dataPipe);
    return dataPipe;
    var _a;
}());
//# sourceMappingURL=C:/Users/vyadav/Desktop/Main/my-dream-app/src/dataPipe.js.map

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backline_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return EntryComponent; });
/**
 *  Created on : Dec 23, 2016
 *  Author     : vyadav
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EntryComponent = (function () {
    function EntryComponent(_Dservice) {
        this._Dservice = _Dservice;
        this.message = "message";
        this.title = "header";
        this.state = false;
        this.welcome = " ";
        this.userentry = { story: "", comment: "", reviewer: "" };
        this.passwordQ = { current: "", update: "", confirm: "" };
    }
    EntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getRequest();
        this._Dservice.getUser().subscribe(function (user) { return _this.drpusers = user; });
    };
    EntryComponent.prototype.onCancel = function () {
        this.passwordQ = { current: "", update: "", confirm: "" };
        this.userentry = { story: "", comment: "", reviewer: "" };
        $('#Create').modal('hide');
        $('#changePass').modal('hide');
    };
    EntryComponent.prototype.getStat = function () {
        var _this = this;
        this.getRequest();
        this._Dservice.getUser().subscribe(function (user) { return _this.drpusers = user; });
        var auth = this._Dservice.loadUser();
        if (auth) {
            this.state = true;
            this.welcome = "Welcome, " + auth.name;
            if (auth.eID === "56") {
                this.welcome += " (Admin)";
            }
        }
        else {
            this.state = false;
            this.title = "Login Required";
            this.message = "You need to be logged in to continue. Go to Log In at home tab.";
            $('#alerting').modal('toggle');
        }
    };
    EntryComponent.prototype.getRequest = function () {
        var _this = this;
        this._Dservice.getFields().subscribe(function (fields) { return _this.fields = fields; });
    };
    EntryComponent.prototype.logout = function () {
        if (!this._Dservice.unloadUser()) {
            this.showAlert("Error", "LogOut Failed", null);
            return;
        }
        this.state = false;
        $("#home").addClass("active");
        $("#home").addClass("in");
        $("#sec1").removeClass("in");
        $("#sec1").removeClass("active");
    };
    EntryComponent.prototype.passChange = function () {
        var _this = this;
        var user = this._Dservice.loadUser();
        if (user.pass === this.passwordQ.current) {
            if (this.passwordQ.update === this.passwordQ.confirm) {
                if (this.passwordQ.confirm.length >= 6) {
                    var index = -1;
                    for (var i = 0; i < this.drpusers.length; i++) {
                        if (this.drpusers[i].eID === user.eID) {
                            index = i;
                        }
                    }
                    //console.log("ind :: "+index);
                    if (index >= 0) {
                        this.drpusers.splice(index, 1);
                        user.pass = this.passwordQ.confirm;
                        //console.log("1");
                        if (!this._Dservice.updateUser(user)) {
                            //console.log("2");
                            this.showAlert("Error", "Can't Change", "changePass");
                            return;
                        }
                        this.showAlert("Success", "Password changed", "changePass");
                        // this.drpusers.push(user);
                        this._Dservice.updUser(user);
                        this._Dservice.getUser().subscribe(function (user) { return _this.drpusers = user; });
                    }
                    else {
                        this.showAlert("Exception", "User not Found", "changePass");
                    }
                }
                else {
                    this.showAlert("Invalid Data", "Password should be minimum of 6 characters", "changePass");
                }
            }
            else {
                this.showAlert("Invalid Data", "Confirm password fail", "changePass");
            }
        }
        else {
            this.showAlert("Invalid Data", "Current Password is incorrect.", "changePass");
        }
        this.onCancel();
    };
    EntryComponent.prototype.showAlert = function (title, message, modalID) {
        if (modalID) {
            $('#' + modalID).modal('toggle');
        }
        this.title = title;
        this.message = message;
        $('#alerting').modal('toggle');
    };
    EntryComponent.prototype.processReq = function () {
        var today = new Date();
        var n = today.getTime();
        var date = today.toDateString();
        var user = this._Dservice.loadUser();
        var recrd = {
            ID: n.toString(16).toUpperCase(), Name: user.name, Email: user.email, Employee_Id: user.eID,
            Team: user.team, Date_of_Request: date, Technology: this.userentry.story, Reviewer: this.userentry.reviewer, Reviewed: "Pending", Date_of_Review: "---", Comments: this.userentry.comment
        };
        this.onCancel();
        this.showAlert("Success", "Requested posted.", null);
        // this.fields.push(recrd);
        this._Dservice.addField(recrd);
    };
    EntryComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'tetry',
            template: __webpack_require__(612),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__backline_service__["a" /* BackLineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__backline_service__["a" /* BackLineService */]) === 'function' && _a) || Object])
    ], EntryComponent);
    return EntryComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/vyadav/Desktop/Main/my-dream-app/src/entry.component.js.map

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backline_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return FooterComponent; });
/**
 *  Created on : Dec 23, 2016
 *  Author     : vyadav
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(_Dservice) {
        this._Dservice = _Dservice;
        this.feedback = { name: "", date: "", view: "" };
    }
    FooterComponent.prototype.onCancelFDB = function () {
        this.feedback = { name: "", date: "", view: "" };
        $('#fdbck').modal('toggle');
    };
    FooterComponent.prototype.onFeedback = function () {
        $('#fdbck').modal('toggle');
        var today = new Date();
        this.feedback.date = today.toDateString();
        this._Dservice.addFeedback(this.feedback);
        this.feedback = { name: "", date: "", view: "" };
        alert("Successful Submission");
    };
    FooterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'ngfoot',
            template: __webpack_require__(613)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__backline_service__["a" /* BackLineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__backline_service__["a" /* BackLineService */]) === 'function' && _a) || Object])
    ], FooterComponent);
    return FooterComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/vyadav/Desktop/Main/my-dream-app/src/footer.component.js.map

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__backline_service__ = __webpack_require__(73);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
/**
 *  Created on : Dec 23, 2016
 *  Author     : vyadav
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    // login="Login Here";
    function HomeComponent(_Serve) {
        this._Serve = _Serve;
        this.dataNU = { eID: "", name: "", email: "", team: "", pass: "" };
        this.dataLU = { eID: "", name: "", email: "", team: "", pass: "" };
    }
    HomeComponent.prototype.LOGIN = function () {
        return "Login Here";
    };
    HomeComponent.prototype.isloggedIn = function () {
        if (this._Serve.getUser()) {
            //console.log("logged in");
            return true;
        }
        //console.log("not logged in");
        return false;
    };
    HomeComponent.prototype.onCreate = function () {
        var _this = this;
        //console.log(this.dataNU);
        for (var i = 0; i < this.users.length; i++) {
            if ((this.dataNU.eID === this.users[i].eID)) {
                //console.log("User Already Exists");
                return;
            }
        }
        var user = { eID: this.dataNU.eID, name: this.dataNU.name, email: this.dataNU.email, team: this.dataNU.team, pass: this.dataNU.pass };
        //console.log("Create commanded for "+ JSON.stringify(user));
        this.dataNU = { eID: "", name: "", email: "", team: "", pass: "" };
        $('#access').modal('toggle');
        // this.users.push(user);
        this._Serve.addUser(user);
        this._Serve.getUser().subscribe(function (user) { return _this.users = user; });
    };
    HomeComponent.prototype.getUsers = function () {
        var _this = this;
        this._Serve.getUser().subscribe(function (user) { return _this.users = user; });
    };
    HomeComponent.prototype.onLoginRequest = function () {
        for (var i = 0; i < this.users.length; i++) {
            if ((this.dataLU.eID === this.users[i].eID) && (this.dataLU.pass === this.users[i].pass)) {
                //console.log("Verified");
                // this._Serve.currentUser = this.users[i];
                // if(this.users[i].eID === "56"){
                //     this._Serve.isadmin = true;
                // }
                this.dataLU = { eID: "", name: "", email: "", team: "", pass: "" };
                var unid = 'ri_tk_cr_' + new Date().getTime().toString(25) + new Date().getTime().toString(35) + new Date().getTime().toString(15);
                localStorage.setItem(unid, JSON.stringify(this.users[i]));
                if (this._Serve.authenticate(unid)) {
                    //console.log(unid+' local : '+localStorage.getItem(unid));
                    $('#login').modal('toggle');
                    // this.login = "Welcome "+this.users[i].name;
                    $("#sec1").addClass("active");
                    $("#sec1").addClass("in");
                    $("#home").removeClass("in");
                    $("#home").removeClass("active");
                }
                else {
                    alert("login Failed");
                }
                return;
            }
        }
        alert("Invalid Credentials");
    };
    HomeComponent.prototype.onCancel = function (x) {
        this.dataNU = { eID: "", name: "", email: "", team: "", pass: "" };
        this.dataLU = { eID: "", name: "", email: "", team: "", pass: "" };
        if (x === 1) {
            $('#login').modal('toggle');
        }
        else {
            $('#access').modal('toggle');
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        this.getUsers();
        this.isloggedIn();
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'thome',
            template: __webpack_require__(614),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__backline_service__["a" /* BackLineService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__backline_service__["a" /* BackLineService */]) === 'function' && _a) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a;
}());
//# sourceMappingURL=C:/Users/vyadav/Desktop/Main/my-dream-app/src/home.component.js.map

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(632);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=C:/Users/vyadav/Desktop/Main/my-dream-app/src/polyfills.js.map

/***/ },

/***/ 611:
/***/ function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<!-- \r\n  Created on : Dec 23, 2016\r\n  Author     : vyadav\r\n-->\r\n<style>\r\n.overlay {\r\n    height: 0%;\r\n    width: 100%;\r\n    position: fixed;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    background-color: rgb(0,0,0);\r\n    background-color: rgba(0,0,0, 0.9);\r\n    overflow-y: hidden;\r\n    transition: 0.5s;\r\n    color: #ddd;\r\n}\r\n\r\ntextarea{\r\n    color: #000;\r\n    background-color: #f1f1f1;\r\n}\r\n\r\n.overlay-content {\r\n    position: relative;\r\n    top: 10%;\r\n    width: 100%;\r\n    margin-top: 30px;\r\n}\r\n\r\n.overlay a {\r\n    padding: 8px;\r\n    text-decoration: none;\r\n    font-size: 36px;\r\n    color: #818181;\r\n    display: block;\r\n    transition: 0.3s;\r\n}\r\n\r\n.overlay a:hover, .overlay a:focus {\r\n    color: #f1f1f1;\r\n}\r\n\r\n.overlay .closebtn {\r\n    position: absolute;\r\n    top: 20px;\r\n    right: 45px;\r\n    font-size: 60px;\r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n  .overlay {overflow-y: auto;}\r\n  .overlay a {font-size: 20px}\r\n  .overlay .closebtn {\r\n    font-size: 40px;\r\n    top: 15px;\r\n    right: 35px;\r\n  }\r\n}\r\n\r\n.sinput[type=text] {\r\n    width: 500px;\r\n    box-sizing: border-box;\r\n    border: 2px solid #ccc;\r\n    border-radius: 4px;\r\n    font-size: 14px;\r\n    background-color: white;\r\n    background-image: url('searchicon.png');\r\n    background-position: 10px 10px; \r\n    background-repeat: no-repeat;\r\n    padding: 5px 5px 5px 5px;\r\n}\r\n\r\n.button {\r\n    background-color: #4CAF50; /* Green */\r\n    border: none;\r\n    color: white;\r\n    padding: 10px 10px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    margin: 4px 2px;\r\n    -webkit-transition-duration: 0.4s; /* Safari */\r\n    transition-duration: 0.4s;\r\n    cursor: pointer;\r\n    width: \"200px\";\r\n}\r\n\r\n.button1 {\r\n    background-color: white; \r\n    color: black; \r\n    border: 2px solid #4CAF50;\r\n}\r\n\r\n.button1:hover {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}\r\n\r\n.button2 {\r\n    background-color: white; \r\n    color: black; \r\n    border: 2px solid #008CBA;\r\n}\r\n\r\n.button2:hover {\r\n    background-color: #008CBA;\r\n    color: white;\r\n}\r\n</style>\r\n        <div id=\"OverlayE\" class=\"overlay\">\r\n            \r\n<div class=\"overlay-content\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-3\"><h3>Story</h3><h4>{{tfield.Technology}}</h4></div>\r\n            <div class=\"col-sm-3\"><h3>Created By</h3><h4>{{tfield.Name}}</h4></div>\r\n            <div class=\"col-sm-3\"><h3>Dated</h3><h4>{{tfield.Date_of_Request}}</h4></div>\r\n            <div class=\"col-sm-3\"><h3>Review</h3><h4>{{tfield.Reviewed}}</h4></div>\r\n        </div>\r\n        <div class=\"row\" style=\"text-align: center\">\r\n            <hr>\r\n            <textarea disabled rows=\"10\" cols=\"150\" style=\"display: inline-block;\">{{tfield.Comments}}</textarea>\r\n            <hr>\r\n        </div>\r\n        <div class=\"row handy\">\r\n            <h2 class=\"col-sm-11\" (click)=\"closed()\" style=\"color: darkred\">Close</h2>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n</div>\r\n\r\n<div class=\"container-fluid\" style=\"padding-bottom: 60px;\">\r\n    <div class=\"row\">\r\n    <!--<input class = \"sinput\" type=\"text\" name=\"search\" placeholder=\"Search by Story Name...\" [(ngModel)]=\"srcqry\" style=\"color: black;\">-->\r\n    <!--<button class=\"button button2\" (click)=\"refreshRecs();\">Refresh records</button>-->\r\n    </div>\r\n    <div class=\"row\">\r\n    \r\n    <tetry ></tetry>\r\n    </div>\r\n    <div class=\"container-fluid\">\r\n\r\n<div class=\"table-responsive\" >\r\n    <table class=\"table table-hover\">\r\n         <caption style=\"color:#eee\" class=\"handy\"><h2>Review Statistics <span class=\"refresh handy\" (click)=\"refreshRecs();\" class=\"glyphicon glyphicon-refresh handy\"></span></h2></caption>\r\n        <thead>\r\n            <tr>\r\n                <th>Sr.No.</th>\r\n                <th>Name</th>\r\n                <th>Team</th>\r\n                <th>Story Name</th>\r\n                <th>Date of Request</th>\r\n                <th>Reviewer</th>\r\n                <th>Review Status</th>\r\n                <th>Reviewed Date</th>\r\n                <th>Edit</th>\r\n                <!--<th>Del.</th>-->\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let field of (fields | dataPipe); let i=index\">\r\n                <td >{{i+1}}</td>\r\n                <td (click)=\"showComment(field)\" class=\"handy\"><b>{{field.Name}}</b></td>\r\n                <td>{{field.Team}}</td>\r\n                <td (click)=\"ifadmin(field);\"><u>{{field.Technology}}</u></td>\r\n                <td>{{field.Date_of_Request}}</td>\r\n                <td>{{field.Reviewer}}</td>\r\n                <td>{{field.Reviewed}}</td>\r\n                <td>{{field.Date_of_Review}}</td>\r\n                <td (click)=\"add(field)\"><div ><span class=\"glyphicon glyphicon-pencil handy\" style=\"color: #ccc;\"></span></div></td>\r\n                <!--<td><span class=\"glyphicon glyphicon-remove handy\" style=\"color: darkred;\"></span></td>-->\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"Update\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Update</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <br>\r\n          <button class=\"button button1\" style=\"width:100%\" (click)=\"addCom();\">Add Comment</button><br>\r\n          <br>\r\n          <button class=\"button button2\" style=\"width:100%\" (click)=\"doRev();\">Done Review</button><br>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"Addcom\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Post a Review Request</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Fill in following:</p>\r\n                <form (ngSubmit)=\"addingComm();\">\r\n                    <label for=\"coms\">Comment update:</label><br>\r\n                    <textarea style=\"background-color: #eee\" name=\"coms\" class=\"form-control\" rows=\"7\" cols=\"70\" [(ngModel)]=\"newCom\" placeholder=\"Enter Here\" required></textarea><br>\r\n                    <button type=\"submit\"  class=\"button button1\">Add</button>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" (click)=\"onCancel()\">Cancel</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"ialerting\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">{{dtitle}}</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>{{dmessage}}</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"Admin\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title\">Admin Tasks</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <br>\r\n          <button class=\"button button1\" style=\"width:100%\" (click)=\"reopenfrm();\">Re-Open Story</button><br>\r\n          <br>\r\n          <button class=\"button button2\" style=\"width:100%\" (click)=\"deleteRec();\">Delete</button><br>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"Assign\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Post a Review Request</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Fill in following:</p>\r\n                <form (ngSubmit)=\"reOpen();\">\r\n                        <label for=\"nrevr\">Assign Reviewer</label>\r\n                        <select name=\"nrevr\" class=\"form-control\" [(ngModel)]=\"nrev\" required placeholder=\"Assign reveiwer\">\r\n                            <option *ngFor=\"let user of drpusers\" [value]=\"user.name\">{{user.name}}</option>\r\n                        </select><br>\r\n                    <button type=\"submit\" class=\"button button1\" >Re-Assign</button>\r\n                </form>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Cancel</button>\r\n        </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 612:
/***/ function(module, exports) {

module.exports = "<!--\r\n  Created on : Dec 23, 2016\r\n  Author     : vyadav\r\n -->\r\n<style>\r\n    .rbutton {\r\n        background-color: white;\r\n        border: 2px solid #008CBA;\r\n        color: black;\r\n        padding: 5px 5px 5px 5px;\r\n        text-align: center;\r\n        width: 100px;\r\n        text-decoration: none;\r\n        display: inline-block;\r\n        font-size: 14px;\r\n        margin: 4px 2px;\r\n        -webkit-transition-duration: 0.4s;\r\n        /* Safari */\r\n        transition-duration: 0.4s;\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .rbutton:hover {\r\n        background-color: #008CBA;\r\n        color: white;\r\n    }\r\n        .cbutton {\r\n        background-color: white;\r\n        border: 2px solid #f44336;\r\n        color: black;\r\n        padding: 5px 5px 5px 5px;\r\n        text-align: center;\r\n        width: 100px;\r\n        text-decoration: none;\r\n        display: inline-block;\r\n        font-size: 14px;\r\n        margin: 4px 2px;\r\n        -webkit-transition-duration: 0.4s;\r\n        /* Safari */\r\n        transition-duration: 0.4s;\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .cbutton:hover {\r\n        background-color: #f44336;\r\n        color: white;\r\n    }\r\n.hbutton {\r\n    background-color: #4CAF50; /* Green */\r\n    border: none;\r\n    color: white;\r\n    padding: 10px 10px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 14px;\r\n    margin: 4px 2px;\r\n    -webkit-transition-duration: 0.4s; /* Safari */\r\n    transition-duration: 0.4s;\r\n    cursor: pointer;\r\n}\r\n.button1 {\r\n    background-color: white; \r\n    color: black; \r\n    border: 2px solid #4CAF50;\r\n}\r\n\r\n.button1:hover {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}\r\n.button2 {\r\n    background-color: white; \r\n    color: black; \r\n    border: 2px solid #008CBA;\r\n}\r\n\r\n.button2:hover {\r\n    background-color: #008CBA;\r\n    color: white;\r\n}\r\n.button3 {\r\n    background-color: white; \r\n    color: black; \r\n    border: 2px solid #f44336;\r\n}\r\n\r\n.button3:hover {\r\n    background-color: #f44336;\r\n    color: white;\r\n}\r\n</style>\r\n<div *ngIf='state'>\r\n    <div>\r\n        <h2>{{welcome}}</h2>\r\n        <button data-toggle=\"modal\" data-target=\"#Create\" class=\"hbutton button1\">Post Request</button>\r\n        <button data-toggle=\"modal\" data-target=\"#changePass\" class=\"hbutton button2\">Change Password</button>\r\n        <button class=\"hbutton button3\" (click)=\"logout();\">Log Out</button>\r\n\r\n    </div>\r\n\r\n</div>\r\n<div *ngIf='!state'>\r\n    <h5>Login Required</h5>\r\n    <h2>Click\r\n        <u style=\"cursor: pointer; cursor: hand;\" (click)=\"getStat();\">here</u> to begin</h2>\r\n</div>\r\n<div class=\"modal fade\" id=\"Create\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Post a Review Request</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Fill in following:</p>\r\n                <form (ngSubmit)=\"processReq();\">\r\n                    <label for=\"Tech1\">Story Name</label><br>\r\n                    <input name=\"Tech1\" class=\"form-control\" type=\"text\" placeholder=\"Enter Tech Field\" [(ngModel)]=\"userentry.story\" required><br>\r\n                        <label for=\"revr\">Assign Reviewer</label>\r\n                        <select name=\"revr\" class=\"form-control\" id=\"revr\" [(ngModel)]=\"userentry.reviewer\" required placeholder=\"Assign reveiwer\">\r\n                            <option *ngFor=\"let user of drpusers\" [value]=\"user.name\">{{user.name}}</option>\r\n                        </select><br>\r\n                    <label for=\"coms\">Further Details</label><br>\r\n                    <textarea name=\"coms\" class=\"form-control\" rows=\"7\" cols=\"70\" [(ngModel)]=\"userentry.comment\" placeholder=\"Enter Description\"></textarea><br>\r\n                    <button type=\"submit\" class=\"rbutton\">Create</button>\r\n                    <button class=\"cbutton\" (click)=\"onCancel()\">Cancel</button><br>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"changePass\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Review Done</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Fill in following:</p>\r\n                <form (ngSubmit)=\"passChange();\">\r\n                    <label for=\"oldp\">Current Password</label><br>\r\n                    <input name=\"oldp\" class=\"form-control\" type=\"password\" placeholder=\"old credential\" [(ngModel)]=\"passwordQ.current\" required><br>\r\n                    <label for=\"newp\">New Password</label><br>\r\n                    <input name=\"newp\" class=\"form-control\" type=\"password\" placeholder=\"new credential\" [(ngModel)]=\"passwordQ.update\" required><br>\r\n                    <label for=\"cnfp\">Confirm Password</label><br>\r\n                    <input name=\"cnfp\" class=\"form-control\" type=\"password\" placeholder=\"confirm credential\" [(ngModel)]=\"passwordQ.confirm\" required><br>\r\n                    <button type=\"submit\" class=\"rbutton\">Done</button>\r\n                    <button class=\"cbutton\" (click)=\"onCancel()\">Cancel</button><br>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"alerting\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">{{title}}</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>{{message}}</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 613:
/***/ function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<!-- \r\n  Created on : Dec 23, 2016\r\n  Author     : vyadav\r\n-->\r\n<style>\r\n    .rbutton {\r\n        background-color: white;\r\n        border: 2px solid #008CBA;\r\n        color: black;\r\n        padding: 5px 5px 5px 5px;\r\n        text-align: center;\r\n        width: 100px;\r\n        text-decoration: none;\r\n        display: inline-block;\r\n        font-size: 14px;\r\n        margin: 4px 2px;\r\n        -webkit-transition-duration: 0.4s;\r\n        /* Safari */\r\n        transition-duration: 0.4s;\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .rbutton:hover {\r\n        background-color: #008CBA;\r\n        color: white;\r\n    }\r\n        .cbutton {\r\n        background-color: white;\r\n        border: 2px solid #f44336;\r\n        color: black;\r\n        padding: 5px 5px 5px 5px;\r\n        text-align: center;\r\n        width: 100px;\r\n        text-decoration: none;\r\n        display: inline-block;\r\n        font-size: 14px;\r\n        margin: 4px 2px;\r\n        -webkit-transition-duration: 0.4s;\r\n        /* Safari */\r\n        transition-duration: 0.4s;\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .cbutton:hover {\r\n        background-color: #f44336;\r\n        color: white;\r\n    }\r\n.foot{\r\n    padding-top: 50px;\r\n}\r\n</style>\r\n<div class=\"container fluid foot\">\r\n    <div class=\"row\">\r\n        <hr>\r\n        <div class=\"col-sm-10\">\r\n            <a href=\"\"><h4>VY_Company ©2017</h4></a>\r\n            <h6>Code Review Management System</h6>\r\n        </div>\r\n        <div  class=\"col-sm-2\">\r\n            <h6 data-toggle=\"modal\" data-target=\"#fdbck\" class=\"handy\">Suggest improvements/ Report bugs <span class=\"glyphicon glyphicon-tags\"></span></h6>\r\n        </div>        \r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"fdbck\" role=\"dialog\">\r\n    <div class=\"modal-dialog modal-sm\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h4 class=\"modal-title\">Feedback Form</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Place you suggestion here:</p>\r\n                <form (ngSubmit)=\"onFeedback();\">\r\n                    <label for=\"fdn\">Name</label><br>\r\n                    <input name=\"fdn\" class=\"form-control\" type=\"text\" placeholder=\"Name\" [(ngModel)]=\"feedback.name\" required><br>\r\n                    <label for=\"fdm\">Suggestion (or) Issue</label><br>\r\n                    <textarea name=\"fdm\" class=\"form-control\" rows=\"9\" cols=\"80\" [(ngModel)]=\"feedback.view\" placeholder=\"Report Here\"></textarea><br>\r\n                    <button class=\"rbutton\" type=\"submit\">Submit</button>\r\n                    <button class=\"cbutton\" (click)=\"onCancelFDB();\">Cancel</button><br>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ },

/***/ 614:
/***/ function(module, exports) {

module.exports = "<!DOCTYPE html>\n<!-- \n  Created on : Dec 23, 2016\n  Author     : vyadav\n-->\n<style>\n    .rbutton {\n        background-color: white;\n        border: 2px solid #008CBA;\n        color: black;\n        padding: 5px 5px 5px 5px;\n        text-align: center;\n        width: 100px;\n        text-decoration: none;\n        display: inline-block;\n        font-size: 14px;\n        margin: 4px 2px;\n        -webkit-transition-duration: 0.4s;\n        /* Safari */\n        transition-duration: 0.4s;\n        cursor: pointer;\n    }\n    \n    .rbutton:hover {\n        background-color: #008CBA;\n        color: white;\n    }\n        .cbutton {\n        background-color: white;\n        border: 2px solid #f44336;\n        color: black;\n        padding: 5px 5px 5px 5px;\n        text-align: center;\n        width: 100px;\n        text-decoration: none;\n        display: inline-block;\n        font-size: 14px;\n        margin: 4px 2px;\n        -webkit-transition-duration: 0.4s;\n        /* Safari */\n        transition-duration: 0.4s;\n        cursor: pointer;\n    }\n    \n    .cbutton:hover {\n        background-color: #f44336;\n        color: white;\n    }\n\n    #homediv {\n     /*background-color: yellow;*/\n    -webkit-animation-name: example; /* Safari 4.0 - 8.0 */\n    -webkit-animation-duration: 3s; /* Safari 4.0 - 8.0 */\n    animation-name: example;\n    animation-duration: 3s;\n}\n\n/* Safari 4.0 - 8.0 */\n    @-webkit-keyframes example {\n        from {opacity: 0;}\n        to {opacity: 1;}\n    }\n\n    /* Standard syntax */\n    @keyframes example {\n        from {opacity: 0;}\n        to {opacity: 1;}\n    }\n</style>\n<div class=\"container-fluid\" id=\"homediv\">\n    <div class=\"row\">\n        <div class=\"col-sm-9\">\n            <div>\n                <h2>About</h2>\n                <div>\n                    <h4>Welcome to code Review Management System<br>\n                        <ul>\n                            <li>New Users can get registered by requesting access.</li>\n                            <li>Use Login to post or read Code review requests.</li>\n                            <li>Employee ID is considered as user ID.</li>\n                            <li>Once logged in, click on review ID to explore further data.</li>\n                        </ul>\n                    </h4>\n                </div>\n            </div>\n            \n        </div>\n        <div class=\"col-sm-3\">\n            <div>\n                <h3 data-toggle=\"modal\" data-target=\"#login\" class=\"handy\">{{LOGIN()}} <span class=\"glyphicon glyphicon-log-in\"></span></h3>\n            </div>\n            <div>\n                <h3 data-toggle=\"modal\" data-target=\"#access\" class=\"handy\">Request Access</h3>\n            </div>\n            <table class=\"table table-hover\">\n                <thead>\n                    <tr>\n                        <th colspan=\"2\">\n                            <h3 class=\"handy\">Users <span class=\"refresh handy\" (click)=\"getUsers();\" class=\"glyphicon glyphicon-refresh\"></span></h3>\n                        </th>\n                    </tr>\n                    <tr>\n                        <th>Name</th>\n                        <th>Employee ID</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let user of users\">\n                        <td>{{user.name}}</td>\n                        <td>{{user.eID}}</td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n</div>\n\n<div class=\"modal fade\" id=\"access\" role=\"dialog\">\n    <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">New User Registration</h4>\n            </div>\n            <div class=\"modal-body\">\n                <p>Fill in following:</p>\n                <form (ngSubmit)=\"onCreate();\">\n                    <label for=\"eID\">Emplyee ID</label><br>\n                    <input name=\"eID\" class=\"form-control\" type=\"text\" placeholder=\"User ID\" [(ngModel)]=\"dataNU.eID\" required><br>\n                    <label for=\"name\">Name</label><br>\n                    <input name=\"name\" class=\"form-control\" type=\"text\" placeholder=\"Display name\" [(ngModel)]=\"dataNU.name\" required><br>\n                    <label for=\"eml\">Email ID</label><br>\n                    <input name=\"eml\" class=\"form-control\" type=\"text\" placeholder=\"Official Email\" [(ngModel)]=\"dataNU.email\" required><br>\n                    <label for=\"tm\">Team</label><br>\n                    <input name=\"tm\" class=\"form-control\" type=\"text\" placeholder=\"Team\" [(ngModel)]=\"dataNU.team\" required><br>\n                    <label for=\"pwd\">New Password</label><br>\n                    <input name=\"pwd\" class=\"form-control\" type=\"password\" placeholder=\"New Password\" [(ngModel)]=\"dataNU.pass\" required><br>\n                    <button class=\"rbutton\" type=\"submit\">Create</button>\n                    <button class=\"cbutton\" (click)=\"onCancel(2)\">Cancel</button><br>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"modal fade\" id=\"login\" role=\"dialog\">\n    <div class=\"modal-dialog modal-sm\">\n        <div class=\"modal-content\">\n            <div class=\"modal-header\">\n                <h4 class=\"modal-title\">Login User</h4>\n            </div>\n            <div class=\"modal-body\">\n                <p>Fill in following:</p>\n                <form (ngSubmit)=\"onLoginRequest();\">\n                    <label for=\"eidL\">Employee ID</label><br>\n                    <input name=\"eidL\" class=\"form-control\" type=\"text\" placeholder=\"User ID\" [(ngModel)]=\"dataLU.eID\" required><br>\n                    <label for=\"epdL\">Password</label><br>\n                    <input name=\"epdL\" class=\"form-control\" type=\"password\" placeholder=\"Password\" [(ngModel)]=\"dataLU.pass\" required><br>\n                    <!--<div ><p>{{loginmessagge}}</p><br></div>-->\n                    <button class=\"rbutton\" type=\"submit\">LogIn</button>\n                    <button class=\"cbutton\" (click)=\"onCancel(1)\">Cancel</button><br>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>\n\n"

/***/ },

/***/ 633:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(344);


/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(619);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(618);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BackLineService; });
/**
 *  Created on : Dec 23, 2016
 *  Author     : vyadav
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BackLineService = (function () {
    function BackLineService(_http) {
        this._http = _http;
        this.isadmin = false;
        this.urlStack = { "BASE": "http://192.168.0.84:4000/", "_getDataUrl": "getRecords", "_postDataUrl": "postRecord", "_updateDataUrl": "updateRecord", "_delDataUrl": "deleteRecord",
            "_getUserUrl": "getUsers", "_updUserUrl": "updateUser", "_newUserUrl": "newUser", "_postCommUrl": "postComment" };
        this.token = "";
    }
    BackLineService.prototype.validateData = function (data) {
        if (data.includes(";") || data.includes("--")) {
            return false;
        }
        else
            return true;
    };
    BackLineService.prototype.authenticate = function (token) {
        if (token) {
            this.token = token;
            var temp = JSON.parse(localStorage.getItem(token));
            if (temp) {
                this.currentUser = temp;
                if (this.currentUser.eID === "56") {
                    this.isadmin = true;
                }
                return true;
            }
        }
        return false;
    };
    BackLineService.prototype.loadUser = function () {
        return this.currentUser;
    };
    BackLineService.prototype.updateUser = function (user) {
        if (user.eID === this.currentUser.eID) {
            this.currentUser = user;
            return true;
        }
        return false;
    };
    BackLineService.prototype.unloadUser = function () {
        if (this.token) {
            localStorage.removeItem(this.token);
            this.currentUser = null;
            this.isadmin = false;
            this.token = "";
            return true;
        }
        return false;
    };
    BackLineService.prototype.rights = function () {
        return this.isadmin;
    };
    BackLineService.prototype.getFields = function () {
        return this._http.get(this.urlStack.BASE + this.urlStack._getDataUrl)
            .map(this.extractData).catch(this.handleError);
    };
    BackLineService.prototype.addField = function (data) {
        var body = JSON.stringify(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Access-Control-Allow-Origin', '*');
        this._http.post(this.urlStack.BASE + this.urlStack._postDataUrl, body, headers).subscribe();
    };
    BackLineService.prototype.updField = function (data) {
        var body = JSON.stringify(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Access-Control-Allow-Origin', '*');
        this._http.post(this.urlStack.BASE + this.urlStack._updateDataUrl, body, headers).subscribe();
    };
    BackLineService.prototype.delField = function (data) {
        var body = JSON.stringify(data);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json; charset=utf-8');
        headers.append('Access-Control-Allow-Origin', '*');
        this._http.post(this.urlStack.BASE + this.urlStack._delDataUrl, body, headers).subscribe();
    };
    BackLineService.prototype.getUser = function () {
        return this._http.get(this.urlStack.BASE + this.urlStack._getUserUrl)
            .map(this.extractData).catch(this.handleError);
    };
    BackLineService.prototype.addUser = function (data) {
        var body = JSON.stringify(data);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this._http.post(this.urlStack.BASE + this.urlStack._newUserUrl, body, headers).subscribe();
    };
    BackLineService.prototype.addFeedback = function (data) {
        var body = JSON.stringify(data);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this._http.post(this.urlStack.BASE + this.urlStack._postCommUrl, body, headers).subscribe();
    };
    BackLineService.prototype.updUser = function (data) {
        var body = JSON.stringify(data);
        //console.log(body);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this._http.post(this.urlStack.BASE + this.urlStack._updUserUrl, body, headers).subscribe();
    };
    BackLineService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    BackLineService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    BackLineService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], BackLineService);
    return BackLineService;
    var _a;
}());
//# sourceMappingURL=C:/Users/vyadav/Desktop/Main/my-dream-app/src/backline.service.js.map

/***/ }

},[633]);
//# sourceMappingURL=main.bundle.map