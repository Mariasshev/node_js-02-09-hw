var x;
var y;

function Point(x,y)
{
    this.x = x;
    this.y = y;

    this.Print = function() {
        console.log('X = ' + this.x, 'Y = ' + this.y);
    };
}

function Check(a,b)
{
    if(a.x == b.x) {
        console.log("Прямая параллельна оси Y")
    }

    else if(a.y== b.y){
        console.log("Прямая параллельна оси Х")
    }

    else{
        console.log("Прямая не параллельна ни одной оси")
    }

}

module.exports = {
    Point : Point,
    Check : Check
};