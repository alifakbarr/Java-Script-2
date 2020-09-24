// // ==============================================================================
// // dom manipulation

// // Manipulasi element

// // element.innerHtml();
// // const judul=document.getElementById('judul');
// // judul.innerHTML=('<b>hello</b>');

// // setAtribute();,getAttribute();,removeAttribute();
// // const judul=document.getElementsByTagName('h1')[0];
// // judul.setAttribute('name','hallo');
// // setatribute akan menimpa

// // const p2 = document.querySelector('.p2');

// // Manpulasi Node

// selalu cari pareentnya dulu baru buat element dan isinya,gabung,dan tampilkan

// // Cara 1

// // buat element baru
// // analogi membuat bunga
// const pBaru = document.createElement('p');
// const teksBaru = document.createTextNode('Paragraf baru');

// // simpan tulisan ke dalam paragraf
// // analogi memasukkan ke dalam vas bunga
// pBaru.appendChild(teksBaru);

// // simpan Pbaru di Akhir sectionA
// // analogi menaruh kedalam ruangan
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// // Cara 2

// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('Item Baru');

// liBaru.appendChild(teksLiBaru);

// // mecari parrent
// const ul = document.querySelector('section#b ul');
// const li2 = ul.querySelector('li:nth-child(2)');

// // (yangdimasukkan,sebelum)
// ul.insertBefore(liBaru,li2);

const sectionA = document.getElementById('a');
const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

// ==

const sectionB= document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const judul = document.createTextNode('Judul Baru');

h2Baru.appendChild(judul);

sectionB.replaceChild(h2Baru,p4);
  