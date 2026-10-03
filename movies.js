const movieListEl = document.querySelector(" .movie__list");


async function movieCollection(filter) {
  const loading = document.querySelector(' .loading__state')
  loading.classList += ' loading__state--visible'
  const movies = await fetch("http://www.omdbapi.com/?apikey=6aff4282&s=batman");
  const moviesData = await movies.json();
  const { Search } = moviesData;
  console.log(Search);
  if (filter === false) {
  }
  else if (filter === 'FIRST_TO_LAST') {
    moviesData.Search.sort((a, b) => a.Year - b.Year)
  }
  else if (filter === 'LAST_TO_FIRST') {
    moviesData.Search.sort((a, b) => b.Year - a.Year)
  }
  loading.classList.remove('loading__state--visible')
  movieListEl.innerHTML = moviesData.Search.slice(0, 6).map((movie) => movieHTML(movie)).join("");
  
}

movieCollection();

function movieHTML(movie) {
  return `<div class="movie__card">
    <figure class="movie__cover--wrapper">
      <img class="movie__cover" src="${movie.Poster}" alt="Movie Cover">
    </figure>
    <h4 class="movie__title">${movie.Title}</h4>
    <p>Release Date: <b>${movie.Year}</b></p>
  </div>`;
}


function filterMovies(event) {
  movieCollection(event.target.value)
}

setTimeout(() => {
  movieCollection()
}, 6000)