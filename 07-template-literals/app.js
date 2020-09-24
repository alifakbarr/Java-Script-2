const nama='Irdho';
const age=12;

let html;

function hello() {
	return 'hello guys david disini'
}

/*with es6*/

html=`
	<ul>
		<li>Nama : ${nama}</li>
		<li>Age : ${age}</li>
		<li>${5+4}</li>
		<li>${hello()}</li>
		<li>${age > 10 ? 'Over 10' : 'Under 10'}

	<ul>

`;

document.body.innerHTML=html;