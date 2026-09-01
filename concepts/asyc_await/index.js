// synchronous 

console.log("a")
console.log("b")
console.log("c")

// prints a b c. line by lin 
//waiting for previous line 


//Asynchronous

console.log("A");

setTimeout(() => {
    console.log("hello world")
}, 2000); // a prebi

console.log("C")


// how do we get result 

// promises enters
// it means something eventually comes 

 // new keyword is used to create a new object from a constructor or a class functions 


 // 
const promise = new Promise((re,rej) =>{
    setTimeout(() => {
        re("pizza");
    }, 2000);
});

promise.then((result) => {
    console.log(result);
})