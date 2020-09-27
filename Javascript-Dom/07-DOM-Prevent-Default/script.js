// event handling

// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click',function () {
//   card.style.display='none';
// })

// DOM Traversal / Penelusuran

const close = document.querySelectorAll('.close');

// for(let i =0;i< close.length;i++){
//   close[i].addEventListener('click',function (e) {
//     // parentElement disini akan mecari parent dari close
//     // dan parennya adalah card
//     // close[i].parentElement.style.display='none';

//     // e disini seperti close[i] namun disni dapat mencari informasinya
//     e.target.parentElement.style.display='none';
//   })
  
// }

// cara lain
// karena close disini nodelist jadi bisa diperlakukan sepeprti array
// el disini untuk mengambil 1 elementnya
close.forEach(function (el) {
  el.addEventListener('click',function (e) {
    e.target.parentElement.style.display='none';
    // fungsi preventDevault untuk pencegah aksi defaultnya
    // disini tombol close memiliki attribute a href artinya ketika diklik maka akan merefresh halaman
    // dengan menggunakan prevent default maka halaman tidak akan ke refresh
    e.preventDefault();
  })


})

// const nama = document.querySelector('.nama');
// console.log(nama.nextSibling);
// console.log(nama.nextElementSibling);
// console.log(nama.previousSibling);
// console.log(nama.previousElementSibling);























