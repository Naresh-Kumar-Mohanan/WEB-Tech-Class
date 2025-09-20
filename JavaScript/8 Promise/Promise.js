// Promise();

let p = new Promise((resolve, reject) => {
  let studied = true;
  if (studied) {
    resolve("I wil Give Mock on 22 sep");
  } else {
    reject("I will not give Because Not Studied");
  }
});

console.log(p);

p.then((data) => {
  console.log(data);
})
  .catch((error) => {
    console.log(error);
  })
  .finally(console.log("I am Finally"));
