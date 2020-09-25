// study kasus 1

// const tUbah = document.getElementById('tUbah');

// function ubahWarna() {
  // document.body.style.backgroundColor='lightgreen';
  // document.body.setAttribute('class','hijau-muda');
  // classList.toggle = jika ada maka dihapus,jika tidak ada dibuat
  // document.body.classList.toggle('hijau-muda');
  
// }

// tUbah.addEventListener('click',ubahWarna);


// study kasus 2

const tUbah = document.getElementById('tUbah');
// membuat button
const buttonBaru = document.createElement('button');
const teksButton = document.createTextNode('Acak Warna');

buttonBaru.appendChild(teksButton);
// menambah type
buttonBaru.setAttribute('type','button');
// cara baru
// menambah buttonBaru setelah tUbah
tUbah.after(buttonBaru);

buttonBaru.addEventListener('click',function () {
  // cara acak Warnas
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  
  document.body.style.backgroundColor=`rgb(${r},${g},${b})`;

});
// cara lama
// document.body.appendChild(buttonBaru);

// study kasus 3

// memanggil name inputan
const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

// input akan mengubah value/nilai secara realtime 
sMerah.addEventListener('input',function(){
  // value ini akan mengambili nilai dari inptan antara 0-255
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
});

sHijau.addEventListener('input',function(){
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
});

sBiru.addEventListener('input',function(){
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;

  document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
});


// study kasus 4

document.body.addEventListener('mousemove',function (event) {
  // clientX/clientY akan mengambilsumbu x dan y
  // window.innerWidth/Height akan mecari ukuran windownya
  const xPos = Math.round((event.clientX / window.innerWidth) *255);
  const yPos = Math.round((event.clientY / window.innerHeight) *255);

  document.body.style.backgroundColor=`rgb(${xPos},${yPos},100)`;

  // agar full satu halaman
  // html,body {
    // height :100%;
  // }
  
})