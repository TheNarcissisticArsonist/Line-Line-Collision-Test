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

var inputs = [l1p1x, l1p2x, l2p1x, l2p2x, l1p1y, l1p2y, l2p1y, l2p2y];

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
  this.orderPointsByX = function() {
    if(this.p1.x > this.p2.x) {
      tempX = this.p1.x;
      this.p1.x = this.p2.x;
      this.p2.x = tempX;
      tempY = this.p1.y;
      this.p1.y = this.p2.y;
      this.p2.y = tempY;
    }
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
  this.orderPointsByX();
}

function bFromLine(line) {
  return line.p2.y - (line.m * line.p2.x);
}

function mainFunction() {
  //Clear the screen
  canvas.fillStyle = "#ffffff";
  canvas.fillRect(0, 0, 1000, 1000);

  //Get user input
  for(i=0; i<8; ++i) {
    if(isNaN(inputs[i].value)) {
      alert("Make sure inputs are numbers only!");
      return;
    }
  }
  line1 = new line(new point(l1p1x.value, l1p1y.value), new point(l1p2x.value, l1p2y.value));
  line2 = new line(new point(l2p1x.value, l2p1y.value), new point(l2p2x.value, l2p2y.value));

  line1.orderPointsByX();
  line2.orderPointsByX();

  //Test for special cases
  if(line1.m == line2.m) {
    b1 = bFromLine(line1);
    b2 = bFromLine(line2);
    if(b1 != b2) {
      return false;
    }
    else {
      if(line1.p1.x >= line2.p1.x && line1.p1.x <= line2.p2.x) {
        return true;
      }
      if(line1.p2.x >= line2.p1.x && line1.p2.x <= line2.p2.x) {
        return true;
      }
    }
  }
}

runButton.addEventListener("click", mainFunction);
