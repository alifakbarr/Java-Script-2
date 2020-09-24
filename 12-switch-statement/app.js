const color ='yellow';

switch(color){
	case 'red':
		console.log('red');
		break;
	case 'yellow':
		console.log('yellow');
		break;
	default:
		console.log('not yellow / red');
		break;
}

let day;

switch(new Date().getDay()){
	case 1:
		console.log('senin');
		break;
	case 2:
		console.log('selasa');
		break;
	case 3:
		console.log('rabu');
		break;
	case 4:
		console.log('kamis');
		break;
	case 5:
		console.log('jumat');
		break;
	case 6:
		console.log('sabtu');
		break;
	case 7:
		console.log('minggu');
		break;
	default:
		console.log('Kiamat');
		break;
}