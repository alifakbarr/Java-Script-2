const num1=100;
const num2=50;
let val;

val = num1 + num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

/*math object*/

val =Math.PI;
val =Math.E;
val=Math.round(3.6);
val=Math.ceil(3.2);/*akan membulatkan keatas*/
val=Math.floor(3.7);/*akan membulatkan kebawah*/
val=Math.sqrt(64);/*mencari akar kuadrat*/
val=Math.abs(-5);/*mengabsolutkan nilai negatif*/
val=Math.pow(8,2);/*memangkatkan*/
val=Math.min(1,6,3,87,8);/*mencari nilai terkecil*/
val=Math.max(1,6,3,87,8);/*mencari nilai terbesar*/
val=Math.random();/*mencari angka random*/
val=Math.random() * 50;/*membatasi nilai random*/
val=Math.ceil(Math.random() * 50);

console.log(val);