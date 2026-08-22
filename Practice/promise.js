// a promise is an object that represents eventually completion or failure of an 
//asychronous operation 

const myPromise = new Promise((r,re) => {
    let s = true;

    if(s){
        r('sucess');
    }else {
        re('reject');
    }


})

const fetchData = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data received");
  }, 2000);
});

fetchData.then((data) => {
  console.log(data);
});