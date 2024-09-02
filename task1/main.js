// this = exports = module.exports
var obj1 = require('./mod');

var point1 = new obj1.Point(10, 0);
var point2 = new obj1.Point(4, 0);

point1.Print();
point2.Print();

obj1.Check(point1, point2);