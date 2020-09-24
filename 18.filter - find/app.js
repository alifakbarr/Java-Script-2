// filter dapat mencari banyak angka
// find hanya 1 angka

var angka=[1,2,3,4,5,6,7,8];
var angka2=angka.find(function (x) {
  return x == 5;
})
var angka2=angka.filter(function (x) {
  return x > 5;
})

console.log(angka2.join('-'));
