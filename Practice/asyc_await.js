async function makeTea() {
  console.log("Boiling water...");
Done
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });

  console.log("Water is ready!");
}

makeTea();

console.log("Meanwhile, I can do something else");