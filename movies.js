const movieListEl = document.querySelector(" .movie__list");


async function movieCollection() {
  const movies = await fetch("http://www.omdbapi.com/?apikey=6aff4282&s=batman");
  const moviesData = await movies.json();
  console.log(moviesData)

  const { Search } = moviesData;
  console.log(Search);

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