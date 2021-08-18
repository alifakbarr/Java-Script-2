$('.search-button').on('click',function(){
  $.ajax({
    url:'http://www.omdbapi.com/?apikey=8de2b619&s='+$('.input-keyword').val(),
    success: results =>{
      const movie = results.Search
      let card=''
      movie.forEach(m => {
        card += showCard(m)
      });
  
      // jquery tolong carikan saya class .tampil-film lalu isi dengan card
      $('.tampil-film').html(card)
  
      // ketika tombol detail di-klik
      $('.button-detail-film').on('click',function(){
        // cek get id film
        // jquery ambil tombol ini lalu ambil atribut data imdbnya
        // console.log($(this).data('imdbid'))
        $.ajax({
          url:'http://www.omdbapi.com/?apikey=8de2b619&i='+ $(this).data('imdbid'),
          success: m =>{
            const movieDetail = detailFilm(m)
  
          $('.modal-body').html(movieDetail)
        },
        error: e=>{
          console.log(e.responseText);
        }
        })
      })
    },
    error: (e)=>{
      console.log(e.responseText)
    }
  })
})

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