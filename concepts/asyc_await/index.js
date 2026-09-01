// synchronous 

const { RedIntegerFormat } = require("three");
const { AsyncCompress } = require("three/examples/jsm/libs/fflate.module.js");

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

promise.then(result => {
    console.log(result);
}).catch(rej => {
    console.log("rej");
})

// promise is a built in consturtor provided by js

// these are old mehtods 

// asyc await 

async function main(){
    const result = await promise; 
     console.log(result)
}

function getdata(){
    return new Promise((res) => {
        setTimeout(() => {
            resolve("hello world");
        }, 2200);
    })
}
// this above function replicates an api 

async function main(){
    console.log('hi');
    const data = await getdata();

    console.log(data);
    console.log("error");
}
main();

// error handling by try and catch 
// .then and eatch


async function getTasks() {

    try {

        const response = await fetch(
            "http://localhost:3000/tasks"
        );

        const tasks = await response.json();

        console.log(tasks);

    } catch (error) {

        console.log("Something went wrong:", error);

    }
}

getTasks();

