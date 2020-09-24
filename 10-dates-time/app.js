let val;

const today = new Date();
let birthday = new Date('08-08-2000 12:31:11');
birthday = new Date('Augustus 08 2000');
birthday =new Date('08/08/2000');


val= today;
val=today.toString(); 

val=today.getFullYear();
val=today.getMonth();
val=today.getDate();
val=today.getHours();
val=today.getMinutes();
val=today.getSeconds();
val=today.getMilliseconds();
val=today.getTime();

birthday.setDate(20);
birthday.setMonth(11);
birthday.setFullYear(1999);
birthday.setHours(12);
birthday.setMinutes(22);
birthday.setSeconds(34);

console.log(birthday);
console.log(val);