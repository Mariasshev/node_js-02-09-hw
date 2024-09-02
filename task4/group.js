var name;
var surname;
var fullName;
var group = [];

function Student(name, surname, age)
{
    this.name = name;
    this.surname = surname;
    this.fullName = this.name + ' ' + this.surname;

    this.AddInGroup = function() {
        group.push(this.fullName);
    };

    this.Delete = function() {
        var index = group.indexOf(this.fullName);

        if (index !== -1) {
            group.splice(index, 1);
            console.log('--------------------')
            console.log(this.fullName + ' удален из группы.');
            console.log('--------------------')
        } else {
            console.log('--------------------')
            console.log(this.fullName + ' не найден в группе.');
            console.log('--------------------')
        }
    };

    this.Edit = function(name, surname){
        var index = group.indexOf(this.fullName);

        if(index != -1){
            console.log('--------------------')
            group.splice(index, index+1, name + ' ' + surname);
            console.log('--------------------')
        }
        else{
            console.log('--------------------')
            console.log(this.fullName + ' не найден в группе.');
            console.log('--------------------')
        }
    }
}


function ShowList()
{
    if(group.length == 0)
    {
        console.log("Group is empty!")
    }
    else{
        console.log("Group list: ");
        for(var i = 0; i < group.length; i++)
            {
                console.log(group[i]);
            }
        }
}

module.exports = {
    ShowList : ShowList,
    Student : Student
};