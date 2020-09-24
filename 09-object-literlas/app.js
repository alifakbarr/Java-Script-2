const person ={
	nama:'Irdho',
	age:20,
	hobby:['sleep','eat'],
	address:{
		city:'Sidoarjo',
		code:1234
	},
	lahir:function () {
		return 2000 - this.age;
	}
}

let val;

val=person;
val=person.age;
val=person['hobby'];
val=person.lahir();



console.log(val);