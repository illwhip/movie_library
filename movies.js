  const movieListEl = document.querySelector(" .movie__list");


async function movieCollection() {
  const movies = await fetch("http://www.omdbapi.com/?apikey=6aff4282&s=batman");
  const movieData = await movies.json();
  console.log(movieData)

  movieListEl.innerHTML = movieData.search.map((movie) => movieHTML(movie)).join("");
}

movieCollection();

function movieHTML(movie) {
  return `<div class="movie__card">
    <figure class="movie__cover--wrapper">
      <img class="movie__cover" src="${movie.poster}" alt="Movie Cover">
    </figure>
    <h4 class="movie__title">${movie.title}</h4>
    <p>Release Date: <b>${movie.year}</b></p>
  </div>`;
}