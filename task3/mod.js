var a;
var b;


function Fraction(a,b)
{
    this.a = a;
    this.b = b;

    this.Print = function()
    {
        console.log(a + "/" + b)
    }
}

function Sum(A,B){
    return ((A.a / A.b) + (B.a / B.b));
}

function Minus(A,B){
    return ((A.a / A.b) - (B.a / B.b));
}

function Division(A,B){
    return ((A.a / A.b) / (B.a / B.b));
}

function Mult(A,B){
    return ((A.a / A.b) * (B.a / B.b));
}

function Calc(A, B)
{

    if(A.a != 0 && B.a != 0 && A.b != 0 && B.b != 0)
    {
        console.log('Sum = ' + Sum(A,B)); 
        console.log('Minus = ' + Minus(A,B)); 
        console.log('Division = ' + Division(A,B)); 
        console.log('Multiplication = ' + Mult(A,B)); 
    }
    else{
        console.log("Error");
    }

}; 

module.exports = {
    Calc : Calc,
    Fraction : Fraction
};