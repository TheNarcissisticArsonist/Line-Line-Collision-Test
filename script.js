var canvasElement = document.getElementById("myCanvas");
var canvas = canvasElement.getContext("2d");

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
