/*function deklasi bisa di panggil meski function berada dibawah*/
function greet(name='john') {
	return (`hello ${name}`);
}

console.log(greet('irdho'));

/*function expression harus dibuat dulu dan harus paling atas*/
const square = function (x) {
	return x*x;
}

console.log(square(3));


/*IIFEs*/
(function (name) {
	console.log(`hello ${name}`)
})('jon');