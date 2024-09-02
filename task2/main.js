// this = exports = module.exports
var obj1 = require('./mod');

var person1 = new obj1.Person("Alex", "Tayson", 30);
person1.Print();

var person2 = new obj1.Person("Alise", "May", 21);
person2.Print();