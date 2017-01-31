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

var dispatcher = new HttpDispatcher();

dispatcher.setStatic('/resources');
dispatcher.setStaticDirname('static');

var sessionget = function(req){
    var dataSet = JSON.parse(fs.readFileSync('./data/SessionData.json'));
    for (var i = 0; i < dataSet.sessions.length; i++) {
        var set = dataSet.sessions[i];
        console.log(sessions.User);
    }
}

dispatcher.onGet("/getRecords", function (req, res) {
    var dataSet = JSON.parse(fs.readFileSync('./data/Mydata.json'));
    res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    res.write(JSON.stringify(dataSet));
    res.end();
});

dispatcher.onGet("/getUsers", function (req, res) {
    var dataSet = JSON.parse(fs.readFileSync('./data/Users.json'));
    res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    res.write(JSON.stringify(dataSet));
    res.end();
});

dispatcher.onPost("/postUser", function (req, res) {
    var jbody = JSON.parse(req.body);
    jsonfile.writeFile('./data/Users.json', jbody, function (err) {
        console.error(err)
    })
    res.writeHead(200, { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" });
    res.end('POST request | Post 2');
});

dispatcher.onPost("/postRecord", function (req, res) {
    var jbody = JSON.parse(req.body);
    jsonfile.writeFile('./data/Mydata.json', jbody, function (err) {
        console.error(err)
    })
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