let val;

/*number to string*/

/*.length menghitung panjang string*/
/*.toFixed() untuk membulatkan angka*/
val=String(123);
val=String(5+5);

/*boolean to string*/

val=String(true);

/*date to string*/
val=String(new Date());

/*array to string*/
val=String([1,2,3,4,5]);

/*toString*/
val=(5).toString();
val=(true).toString();

/*string to number*/

val=Number('51.88');

/*bool to number*/
val=Number(true);

/*tidak bisa*/
val = Number('hello');
val = Number([1,2,3,4]);

val = parseInt('100.23');
val = parseFloat('133.55');
console.log(val);
console.log(typeof val);
console.log(val.length);
console.log(val.toFixed());
console.log(val.toFixed(2));

