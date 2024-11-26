function display() {
    console.log("Hello world")
}
//events using inner html//
function show() {
    var name = "priya"
    age =23
    document.getElementById("demo").innerHTML = name+ " " + age
    console.log(name + " " + age)
}

// events using prompt//
function cube (){
var number = prompt ("enter number")
document.getElementById("demo").innerHTML = "cube is"+" "+number*number*number;
// var number = prompt("enter number");
// var result = number*number*number;
// document.getElementById("demo").innerHTML =result;
}

function change (){
    demo.innerHTML="priya"
    demo.style.color="red"
    demo.style.backgroundColor="yellow"

}

function chikuu(){
demo.style.fontSize="100px"
demo.style.color="blue"
demo.style.backgroundColor ="aqua"
document.getElementById("demo").innerHTML
}