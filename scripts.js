/*

	IT 2320 - 	Interactive Internet Programming
	Assignment 3
	
	Stylesheet of web page interest of mine
	Author: 	D. Ceglia
	Date:		9/18/17

	
	Filename: scripts.js
	
*/

var welcomePopUp = "Welcome! Please leave feedback below before leaving. Thanks.";

alert(welcomePopUp);

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function errorText(x) {
	alert(x);
}

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

function mouseOverAus() {
	document.getElementById("swipe1").style.color = "red";
}

function mouseOutAus() {
	document.getElementById("swipe1").style.color = "black";
}
///////////////////////////////////////////////////////////////
function mouseOverFr() {
	document.getElementById("swipe2").style.color = "red";
}

function mouseOutFr() {
	document.getElementById("swipe2").style.color = "black";
}
///////////////////////////////////////////////////////////////
function mouseOverEng() {
	document.getElementById("swipe3").style.color = "red";
}

function mouseOutEng() {
	document.getElementById("swipe3").style.color = "black";
}
///////////////////////////////////////////////////////////////
function mouseOverUS() {
	document.getElementById("swipe4").style.color = "red";
}

function mouseOutUS() {
	document.getElementById("swipe4").style.color = "black";
}

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

/* to check for feedback entered in the text area box

window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes initial validation tests");
      return false;
   }
   
}
*/

