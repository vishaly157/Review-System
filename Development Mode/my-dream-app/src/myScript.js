/*
    DO NOT MODIFY
    Contains Basic Functioning.
*/
/* 
    Created on : Dec 23, 2016, 3:32:33 PM
    Author     : vyadav
*/
"use strict";
$(document).ready(function () {
    var i = $("html").height();
    $("#wrapper").css("margin-top", $("#mynav").height() + "px");
    // $("html").css("height", "" + (i - $("#mynav").height()) + "px");
    activaTab('sec1');
});

function activaTab(tab){
  $('.nav-tabs a[href="#' + tab + '"]').tab('show');
};