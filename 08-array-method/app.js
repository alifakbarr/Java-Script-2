const number =[1,2,3,4];
const number2 =new Array(2,3,5,6,3);
const fruit =['apple','banana','manggo'];
const mix =[1,'jojo',null,undefined,{a:2},new Date()];

/*get length*/
val = number.length;

/*check is array*/
val = Array.isArray(number2);

/*get single value*/
val=fruit[2];

/*insert into array*/
fruit[1] ='Melon';

/*find index of value*/
val = mix.indexOf('jojo');

/*mutating*/
/*add on end*/
number.push(122);

/*add on front*/
number.unshift(111);

/*take off from end*/
number.pop();

/*take off from front*/
number.shift();

/*splice value*/
number.splice(1,2);

/*reverse*/
fruit.reverse();

console.log(number);
console.log(fruit);
console.log(val);