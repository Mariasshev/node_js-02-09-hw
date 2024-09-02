// this = exports = module.exports
var obj = require('./mod');

var fr1 = new obj.Fraction(24,4);
fr1.Print();

var fr2 = new obj.Fraction(24,6);
fr2.Print();

obj.Calc(fr1, fr2);
