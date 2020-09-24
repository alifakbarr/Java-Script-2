// membuat object

// cara 1 function declaration
// function halo() {
//   console.log(this);
//   console.log(`halo`);
// }
// halo();
// this.mengembalikan object global


// // cara 2 object literal
// var obj={a:10,nama:'Irdho'};
// obj.halo =function () {
//   console.log(this);
//   console.log(`halo`);
// }
// obj.halo();
// this mengembalikan object yang bersangkutan

// cara 3 constructor
// awalan harus menggunakan huruf besar
function Halo() {
  console.log(this);
  console.log(`halo`); 
}
var obj1 =new Halo();
var obj2 = new Halo();
// this mengembalikan object naru di buat