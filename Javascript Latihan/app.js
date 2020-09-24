// var a=prompt('Masukkan Panjangnya');
// var b=prompt('Masukkan Lebarnya');
// var c =alert(Number(a) * Number(b));

// var a = prompt('Masukkan Nama');
// document.write("Nama anda : ",a);

// var nama1=prompt('Nama Barang 1');
// var harga1=prompt('Harga barang 1');
// var jumlah1=prompt('Jumlah barang 1');
// var subtotal1= (Number(harga1) * Number(jumlah1));

// var nama2=prompt('Nama Barang 2');
// var harga2=prompt('Harga barang 2');
// var jumlah2=prompt('Jumlah barang 2');
// var subtotal2= (Number(harga2) * Number(jumlah2));

// var nama3=prompt('Nama Barang 3');
// var harga3=prompt('Harga barang 3');
// var jumlah3=prompt('Jumlah barang 3');
// var subtotal3= (Number(harga3) * Number(jumlah3));
// var jumlahtot=(subtotal1+subtotal2+subtotal3);

// document.write(`
// <table border='1px;'>
//   <tr>
//     <th>Nama</th>
//     <th>harga</th>
//     <th>jumlah</th>
//     <th>subtotal</th>
//   </tr>
//   <tr>
//     <td>${nama1}</td>
//     <td>${harga1}</td>
//     <td>${jumlah1}</td>
//     <td>${subtotal1}</td>
//   </tr>
//   <tr>
//     <td>${nama2}</td>
//     <td>${harga2}</td>
//     <td>${jumlah2}</td>
//     <td>${subtotal2}</td>
//   </tr>
//   <tr>
//     <td>${nama3}</td>
//     <td>${harga3}</td>
//     <td>${jumlah3}</td>
//     <td>${subtotal3}</td>
//   </tr>
//   <tr>
//     <td></td>
//     <td></td>
//     <td>Total</td>
//     <td>${jumlahtot}</td>
//   </tr>
// </table>
// `)

// ==========================================================

// var nilai;
// nilai=prompt('masukkan nilai','')
// if(nilai>0){
//   document.write('positif')
// }
// else{
//   document.write('negatif')
// }

// ==========================================================

// var jam;
// jam = prompt('masukkan jam');
// if((jam=>1)&&(jam<=5)){
//   document.write('selamat tidur')
// }
// else if((jam=>6) && (jam<=10)){
//   document.write('selamat pagi')
// }
// else if((jam=>11)&&(jam<=14)){
//   document.write('selamat siang')
// }
// else if((jam=>15)&&(jam<=17)){
//   document.write('selamat sore');
// }
// else if((jam=>18)&&(jam<=24)){
//   document.write('selamat malam')
// }
// else{
//   document.write('masukkan dengan benar')
// }

// ==========================================================

// luas dan keliling

// let pilihan;
// let p, l, hasil;

// pilihan = prompt('Hitung luas/Keliling Persegi panjang');

// switch (pilihan) {
//   case 'luas':
//     p = prompt('Masukkan lebar');
//     l = prompt('Masukkan Panjang');
//     hasil = p * l;
//     document.write('hasilnya adalah ', hasil)
//     break;
//   case 'keliling':
//     p = prompt('Masukkan lebar');
//     l = prompt('Masukkan Panjang');
//     hasil = 2 * (p + l);
//     document.write('hasilnya adalah ', hasil)
//     break;
//   default:
//     document.write('Masukkan dengan benar');
//     break;
// }

// ==========================================================

// for (let i = 1; i <= 50; i++) {
//   document.write(`Angka ke ${i} <br>`)
// }

// ==========================================================

// for (let i = 1;(i <= 50); i++) {
//   if ((i % 2) == 1) {
//     document.write(`Angka ke ${i} <br>`)
//   }
// }

// ==========================================================

// for(let i=1;i<=50;i++){
//   let h=i*3;
//   if(h<50){
//   document.write(`Angka ${h} <br>`)
//   }
  
// }

// ==========================================================

// let password;
// let hasil ='saya'
// while(hasil != password){
// password = prompt('masukkan');
// }
// document.write('password benar');

// ==========================================================


// function senin(senin) {
//   senin=prompt('Berapa anak masuk hari senin?');
//   Number(senin);
//   for(let i=1;i <= senin;i++){
//     document.write('X ');
//   }
// }

// function selasa(selasa) {
//   selasa=prompt('Berapa anak masuk hari selasa?');
//   Number(selasa);
//   for(let i=1;i <= selasa;i++){
//     document.write('X ');
//   }
// }

// function rabu(rabu) {
//   rabu=prompt('Berapa anak masuk hari rabu?');
//   Number(rabu);
//   for(let i=1;i <= rabu;i++){
//     document.write('X ');
//   }
// }
// function kamis(kamis) {
//   kamis=prompt('Berapa anak masuk hari kamis?');
//   Number(kamis);
//   for(let i=1;i <= kamis;i++){
//     document.write('X ');
//   }
// }

// function jumat(jumat) {
//   jumat=prompt('Berapa anak masuk hari jumat?');
//   Number(jumat);
//   for(let i=1;i <= jumat;i++){
//     document.write('X ');
//   }
// }

// document.write('senin :');
// senin();
// document.write('<br>')
// document.write('selasa :');
// selasa();
// document.write('<br>')
// document.write('rabu :');
// rabu();
// document.write('<br>')
// document.write('kamis :');
// kamis();
// document.write('<br>')
// document.write('jumat :');
// jumat();

// ==========================================================

// var a=10;
// function fungsi() {
//   document.write(`nilai var a di fungsi 2 ${a}`);
// }

// jika var di fungsi tidak dideklarasikan valuenya maka akan
// mengambil var global

// fungsi();

// ==========================================================

// function tulis(ketik) {
//   document.write(ketik,`<br>`);
//   document.write(ketik,`<br>`);
// }

// tulis(prompt());

// ===========================================================
// function luas(p,l){
//   p=prompt('Masukkan Panjang');
//   parseInt(p);
//   l=prompt('Masukkan lebar');
//   parseInt(l);
//   return (p*l);
// }

// document.write(`Luasnya adalah `,luas());

// ===========================================================

// function keliling(p,l){
//   p=Number(prompt('Masukkan Panjang'));
//   l=Number(prompt('Masukkan lebar'));
//   let hasil=2*(p+l);
//   return (hasil);
// }

// document.write(`kelilingnya adalah `,keliling());

// ===========================================================

// var table = '';
// 	var rows = 2;
// 	var cols = 3;
// 	for(var r = 0; r < rows; r++)
// 	{
// 		table +='<tr>';
// 			for(var a = 1; a <= cols; a++){
// 				table +='<td>' + a + '</td>';
// 			}
// 		table +='</tr>';
// 	}
// 	document.write(`<table border=1> ${table}  </table>`)

// ===========================================================