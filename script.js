var canvasElement = document.getElementById("myCanvas");
var canvas = canvasElement.getContext("2d");

var l1p1x = document.getElementById("line1Point1X");
var l1p2x = document.getElementById("line1Point2X");
var l2p1x = document.getElementById("line2Point1X");
var l2p2x = document.getElementById("line2Point2X");

var l1p1y = document.getElementById("line1Point1Y");
var l1p2y = document.getElementById("line1Point2Y");
var l2p1y = document.getElementById("line2Point1Y");
var l2p2y = document.getElementById("line2Point2Y");

var runButton = document.getElementById("testLines");

function point(x, y) {
  this.x = x;
  this.y = y;
  this.setX = function(newX) {
    this.x = newX;
  }
  this.setY = function(newY) {
    this.y = newY;
  }
}
function line(p1, p2) {
  this.p1 = p1;
  this.p2 = p2;
  this.m = (p2.y-p1.y) / (p2.x-p1.x);
  this.updateM = function() {
    this.m = (p2.y-p1.y) / (p2.x-p1.x);
  }
  this.setP1X = function(newP1X) {
    p1.setX(newP1X);
    this.updateM();
  }
  this.setP1Y = function(newP1Y) {
    p1.setY(newP1Y);
    this.updateM();
  }
  this.setP2X = function(newP2X) {
    p2.setX(newP2X);
    this.updateM();
  }
  this.setP2Y = function(newP2Y) {
    p2.setY(newP2Y);
    this.updateM();
  }
}
