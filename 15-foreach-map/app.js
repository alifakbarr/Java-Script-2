// for

const cars =['honda','toyota','daihatsu'];

// for(i=0;i<car.length;i++){
//   console.log(car[i]);
// }

// cars.forEach(function(car,index,array) {
//   console.log(`${index} ${car}`);
//   console.log( array)
// });

// Map
// const users=[
//   {id:1,nama:'joko'},
//   {id:2,nama:'joko2'},
//   {id:3,nama:'joko3'},
//   {id:4,nama:'joko4'},
// ];

// const ids =users.map(function(user){
//   return user.id;
// });

// console.log(ids);

const user={
  nama:'kaka',
  age:12
}

for(let x in user){
  console.log(`${x}:${user[x]}`)
}

