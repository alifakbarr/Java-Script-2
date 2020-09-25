// // menggunakan evenhandler

// // cara 1 (inline html atribute)
// const p3 = document.querySelector('.p3');

// function ubahWarnaP3() {
//   p3.style.backgroundColor='lightblue';
// }

// // cara 2 (element Method)
// const p2 =document.querySelector('.p2');

// function ubahWarnaP2() {
//   p2.style.backgroundColor='lightblue';
// }

// p2.onclick=ubahWarnaP2;



// // menggunakan addEEventListener

// // cara 3
// // buat mana yang di beri events
// const p4 = document.querySelector('section#b p');

// // buat function eventnys
// function itemBaru() {
//   // nanti ditaruh dimana dan cari parrentnya
//   const ul = document.querySelector('section#b ul');

//   // buat element dan valuenya
//   const liBaru = document.createElement('li');
//   const teksBaru =document.createTextNode('item baru');

//   // rangkai elemant dan valuenya
//   liBaru.appendChild(teksBaru);

//   // simpan di
//   ul.appendChild(liBaru);
// }

// // ketika di klik jalankan eventnya
// p4.addEventListener('click',itemBaru);

// ==================

// Lalu perbedaanya apa ?
// ketika menggunakan eventshandler akan menimpa event yang dibuat pertama
// sedangkan menggunakan addEventListener akan menambah

// contohnya gimana?
// menggunakan eventHandler
p3 = document.querySelector('.p3');
// p3.onclick=function () {
//   p3.style.backgroundColor='lightblue';
// }
// p3.onclick=function () {
//   p3.style.color='red';
// }

// lihat dia akan menimpa event handler yang pertama

// sedangkan menggunakan addEventListener akan menambah
p3.addEventListener('click',function () {
  p3.style.backgroundColor='lightblue';
});

p3.addEventListener('click',function () {
  p3.style.color='red';
});



