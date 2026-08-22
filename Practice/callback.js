// simply a fucntion that is passed to another function 
// to be executed later


console.log("haha")
setTimeout(() => {
    console.log("inside ahha")
}, 2000);
// 
function sayHi(){
    console.log("h");
}

sayHi();

function rtf(sf){
    console.log("hi");
    sf();
}

console.log("start");

