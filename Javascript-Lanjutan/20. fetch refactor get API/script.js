// // fetch()
// // API pada javascript modern yang tugassnya mengabil data secara asyncronous / ajax 
// const searchButton = document.querySelector('.search-button');

// searchButton.addEventListener('click',function() {
//   const inputKeyword = document.querySelector('.input-keyword')
//   fetch('http://www.omdbapi.com/?apikey=8de2b619&s='+inputKeyword.value)
//     // menghasilkan promise lalu ubah data menjadi json
//     .then(result => result.json())
//     // akan menjadi object
//     .then(result => {
//       const movie = result.Search
//       let card = ''
//       movie.forEach(m => card += showCard(m))

//       const tampilFilm = document.querySelector('.tampil-film')
//       tampilFilm.innerHTML=card
      
//       // ketika tombol detail diklik
//       // karena tombolnya banyak pakai All
//       const buttonDetailFilm = document.querySelectorAll('.button-detail-film')
  
//       buttonDetailFilm.forEach(btn=>{
//         btn.addEventListener('click', function() {
//           const imdbid = this.dataset.imdbid
//           // console.log(imdbid);
//           fetch('http://www.omdbapi.com/?apikey=8de2b619&i='+ imdbid)
//             .then(result => result.json())
//             .then(m => {
//               const movieDetail = detailFilm(m)
  
//               const modalBody = document.querySelector('.modal-body')
//               modalBody.innerHTML = movieDetail
//             })
//         })
//       })
//     })

// })

// Refactor Fetch
const searchButton = document.querySelector('.search-button')

// async menandakan kalau didalam function tersebut terdapaat asynconous
// await menunjukkan mana yang asyncronous

searchButton.addEventListener('click', async function() {
  const inputKeyword = document.querySelector('.input-keyword')

  const movies = await getMovies(inputKeyword.value);
  // console.log(movies);
  updateUI(movies)
  
})

function getMovies(keyword){
  return fetch('http://www.omdbapi.com/?apikey=8de2b619&s=' + keyword)
    .then(result =>result.json())
    .then(result => result.Search)
}

function updateUI(movies){
      let card = ''
      movies.forEach(m => card += showCard(m))

      const tampilFilm = document.querySelector('.tampil-film')
      tampilFilm.innerHTML=card
}


// event binding
// ketika kita mengasih event ke element yang belum ada, tapi ketika dia ada (elemet) maka event itu akan teteap berjalam 
document.addEventListener('click', async function(e){
  // jika yang diklik mempunyai class bernama button-detail-film maka
  if(e.target.classList.contains('button-detail-film')){
    const imdbid = e.target.dataset.imdbid
    const movieDetail = await getMovieDetail(imdbid)
    updateUiDetail(movieDetail)
  }
})

function getMovieDetail(imdbid){
  return fetch('http://www.omdbapi.com/?apikey=8de2b619&i='+ imdbid)
    .then(result => result.json())
    .then(m => m)

    
}

function updateUiDetail(m){
  const movieDetail = detailFilm(m)

  const modalBody = document.querySelector('.modal-body')
  modalBody.innerHTML = movieDetail
            
}


function showCard(m){
  return `
  <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${m.Poster}" class="card-img-top img-fluid">
          <div class="card-body">
            <h5 class="card-title">${m.Title}</h5>
            <h6 class="card-subtitle mb-2 text-muted">(${m.Year})</h6>
            <a href="#" class="btn btn-primary button-detail-film" data-bs-toggle="modal" data-bs-target="#detailFilm" data-imdbid=${m.imdbID}>Detail</a>
          </div>
        </div>
  </div>`
}

function detailFilm(m){
  return `
  <div class="row">
  <div class="col-3">
    <img src="${m.Poster}" alt="" class="img-fluid">
  </div>
  <div class="col">
    <ul class="list-group">
      <li class="list-group-item">${m.Title}</li>
      <li class="list-group-item"><strong>Tahun : </strong>${m.Year}</li>
      <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
      <li class="list-group-item"><strong>Actors : </strong>${m.Actors}</li>
      <li class="list-group-item"><strong>Plot : </strong>${m.Plot}</li>
    </ul>
  </div>
</div>
`
}