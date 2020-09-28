const container = document.querySelector('.container');
const thumbs = document.querySelectorAll('.thumb');
const jumbo = document.querySelector('.jumbo');

container.addEventListener('click',function (e) {
  // cek apakah yang diclick adalah thumb
  if(e.target.className=='thumb'){
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(function name(params) {
      jumbo.classList.remove('fade');
    },500)

    thumbs.forEach(function (thumb) {
      // if(thumb.classList.contains('active')){
      //   thumb.classList.remove('active');
      // }

      thumb.className = 'thumb';
    })

    e.target.classList.add('active');
  }  

})