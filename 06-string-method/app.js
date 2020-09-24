const name1='jojo';
const name2='jaja';
const age=35;
const phar='may name '+name1+'and my age is '+age;
let val;

val = name1+name2;

/*concatenation*/

val = name1 +' '+name2;

/*append*/
/*menggabungkan nilai lama dengan nilai yang baru pada variable yang sama*/
val='Marshall';
val+='Teach';

/*escaping*/
val='i can\'t wait';

/*length*/
val=name1.length;

/*concat*/
val=name1.concat(' ','123');

/*change chase*/
val=name1.toUpperCase();
val=name2.toLowerCase();

val =name1[3];

/*indexOf()*/
val=name1.indexOf('o');

/*charAt()*/
val=name1.charAt(2);
val =name1.charAt(name1.length-1);

/*substring*/
val=name1.substring(0,2);

/*slice*/
val=name1.slice(-2);

/*split*/
/*memisah*/
val=phar.split(' ');

/*replace*/
val=phar.replace('may','my');

/*includes*/
/*mencari kata*/
val=phar.includes('is');



console.log(val);
