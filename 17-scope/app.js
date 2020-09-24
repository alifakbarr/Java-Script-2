// Global scope
var a=1;
let b=2;
const c=3;

// function local() {
// var a=4;
// let b=5;
// const c=6;
// console.log(` Local Scope `,a,b,c);
// }
// local();

// if(true){
// var a=4;
// let b=5;
// const c=6;
//   console.log(` Block Scope `,a,b,c);
// }

for (let a = 0; a < 10; a++) {
  console.log(` loop: `,a);
  
}
console.log(` Global Scope `,a,b,c);