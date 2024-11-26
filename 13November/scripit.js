//4 ways to displa output from javascripit;

//console.log("Hello World");
//window.alert("Hello World");
document.write("Hello World");

document.getElementById("demo").innerHTML ="Hello World";

//var ,lets, const
var globel1 ="jonh";

let globel2 ="priya"
const globel3 ="chikuu"
// var has globel scope and let and const has block or function scope 
{
var a =10;
let b =20;
const c =30;
console.log(b);
}

console.log(a);
//console.log(b);
console.log(c);