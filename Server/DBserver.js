/**
 *  Created on : Dec 23, 2016
 *  Author     : vyadav
 */

var HttpDispatcher = require('./node_modules/httpdispatcher');
var http = require('http');
var fs = require('fs');
var url = require("url");
var queryString = require("querystring");
var bodyParser = require('body-parser');
var jsonfile = require('jsonfile');
var mysql = require('mysql');

var dispatcher = new HttpDispatcher();
var connection = mysql.createConnection({
    host: "localhost",
    port: "3307",
    user: "reviewmanager",
    password: "sjACuddMkotwqwht",
    database: "Rdata"
});
connection.connect();


dispatcher.setStatic('/resources');
dispatcher.setStaticDirname('static');

dispatcher.onGet("/getRecords", function (req, res) {
    var objs = [];
    connection.query('SELECT * FROM records', function (err, rows) {
        for (var i = 0; i < rows.length; i++) {
            objs.push({"ID":rows[i].ID,"Name":rows[i].Name,"Email":rows[i].Email,"Employee_Id":rows[i].Employee_Id,"Team":rows[i].Team,
                "Date_of_Request":rows[i].Date_of_Request,"Technology":rows[i].Technology,"Reviewer":rows[i].Reviewer,
                "Reviewed":rows[i].Reviewed,"Date_of_Review":rows[i].Date_of_Review,"Comments":rows[i].Comments});
        }
        var data = JSON.stringify({data: objs});
        var dataSet = JSON.parse(data);
        res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
        res.write(JSON.stringify(dataSet));
        res.end();
    });
});

dispatcher.onGet("/getUsers", function (req, res) {
    var objs = [];
    connection.query('SELECT * FROM users', function (err, rows) {
        for (var i = 0; i < rows.length; i++) {
            objs.push({ "eID": rows[i].eid , "name":rows[i].name, "email":rows[i].email, "team":rows[i].team, "pass":rows[i].pass});
        }
        var data = JSON.stringify({data: objs});
        var dataSet = JSON.parse(data);
        res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
        res.write(JSON.stringify(dataSet));
        res.end();
    });
});

dispatcher.onPost("/newUser", function (req, res) {
    var jbody = JSON.parse(req.body);
    connection.query('INSERT INTO users VALUE ("'+connection.escape(jbody.eID)+'","'+jbody.name+'","'+jbody.email+'","'+jbody.team+'","'+jbody.pass+'")',function(err,result){
        console.error(err);
    });
    res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    res.end('POST request | Post 2');
});

dispatcher.onPost("/updateUser", function (req, res) {
    var jbody = JSON.parse(req.body);
    connection.query('UPDATE users SET pass="'+jbody.pass+'" WHERE eid="'+jbody.eID+'"',function(err,result){
        console.error(err);
    });
    res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    res.end('POST request | Post 2');
});

dispatcher.onPost("/postRecord", function (req, res) {
    var jbody = JSON.parse(req.body);
    connection.query('INSERT INTO records VALUE ("'+jbody.ID+'","'+jbody.Name+'","'+jbody.Email+'","'+jbody.Employee_Id+'","'+jbody.Team+'","'+jbody.Date_of_Request+'","'
                +jbody.Technology+'","'+jbody.Reviewer+'","'+jbody.Reviewed+'","'+jbody.Date_of_Review+'","'+jbody.Comments+'")',function(err,result){
        console.error(err);
    });
    res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    res.end('POST request | Post 2');
});

dispatcher.onPost("/postComment", function (req, res) {
    var jbody = JSON.parse(req.body);
    connection.query('INSERT INTO feedback VALUE ("'+jbody.name+'","'+jbody.date+'","'+jbody.view+'")',function(err,result){
        console.error(err);
    });
    res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    res.end('POST request | Post 2');
});

dispatcher.onPost("/updateRecord", function (req, res) {
    var jbody = JSON.parse(req.body);
    connection.query('UPDATE records SET Reviewer="'+jbody.Reviewer+'" , Reviewed="'+jbody.Reviewed+'" , Date_of_Review="'+jbody.Date_of_Review+
                        '" , Comments="'+jbody.Comments+'" WHERE ID="'+jbody.ID+'"',function(err,result){
        console.error(err);
    });
    res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    res.end('POST request | Post 2');
});

dispatcher.onPost("/deleteRecord", function (req, res) {
    var jbody = JSON.parse(req.body);
    connection.query('DELETE FROM records WHERE ID="'+jbody.ID+'"',function(err,result){
        console.error(err);
    });
    res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    res.end('POST request | Post 2');
});

dispatcher.beforeFilter(/\//, function (req, res, chain) { //any url 
    //console.log("Before filter");
    chain.next(req, res, chain);
});

dispatcher.afterFilter(/\//, function (req, res, chain) { //any url 
    //console.log("After filter");
    chain.next(req, res, chain);
});

dispatcher.onError(function (req, res) {
    res.writeHead(404);
    res.end();
});

http.createServer(function (req, res) {
    //console.log("listening to http://localhost:1337");
    dispatcher.dispatch(req, res);
}).listen(4000, '192.168.0.84');