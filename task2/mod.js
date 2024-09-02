var name;
var surname;
var age;

function Person(name, surname, age)
{
    this.name = name;
    this.surname = surname;
    this.age = age;

    this.Print = function() {
        console.log('Name: ' + this.name, ' Surname: ' + this.surname, ' Age: ' + this.age);
    };
}


module.exports = {
    Person : Person
};