// this = exports = module.exports
var obj1 = require('./group');

var stud1 = new obj1.Student("Alex", "Tayson");
stud1.AddInGroup();

var stud2 = new obj1.Student("Alise", "May");
stud2.AddInGroup();

var stud3 = new obj1.Student("Mark", "Stan");
stud3.AddInGroup();

obj1.ShowList();

stud1.Delete();

obj1.ShowList();

stud2.Edit("Alik", "May");
obj1.ShowList();
