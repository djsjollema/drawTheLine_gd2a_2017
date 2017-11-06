const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

var A = new Point(100,200,10,"#ffffff");
var B = new Point(400,100,10,"#ffff00")

A.draw();
B.draw();

var l = new Line(0,0);

l.slope = -0.3333;
l.yIntercept = 233.33;

context.moveTo(0,l.calcY(0));
context.lineTo(800,l.calcY(800));
context.stroke();
