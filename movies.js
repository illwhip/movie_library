const movieListEl = document.querySelector(" .movie__list");
const loading = document.querySelector(' .loading__state');


function getInput() {
  let inputField = document.getElementById("userInput");
  let value = inputField.value;

  if (!!value === false) {  
    // console.log(value)  
    loading.classList.remove('loading__state--visible');
    return "http://www.omdbapi.com/?apikey=6aff4282&s=batman";
  }
  else {    
    // console.log(value)
    loading.classList.remove('loading__state--visible');
    return "http://www.omdbapi.com/?apikey=6aff4282&s=" + value;
  }
}

const input = document.getElementById('userInput');
input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    movieCollection();
  }
});


async function movieCollection(filter) {
  loading.classList += ' loading__state--visible';
  const promise = getInput()

  const movies = await fetch(`${promise}`);
  const moviesData = await movies.json();
  
  if (filter === false) {
  }
  else if (filter === 'FIRST_TO_LAST') {
    moviesData.Search.sort((a, b) => a.Year - b.Year);
  }
  else if (filter === 'LAST_TO_FIRST') {
    moviesData.Search.sort((a, b) => b.Year - a.Year);
  }

  loading.classList.remove('loading__state--visible');
  movieListEl.innerHTML = moviesData.Search.slice(0, 6).map((movie) => movieHTML(movie)).join("");  
}

function movieHTML(movie) {
  return `<div class="movie__card">
    <figure class="movie__cover--wrapper">
      <img class="movie__cover" src="${movie.Poster}" alt="Movie Cover">
    </figure>
    <h4 class="movie__title">${movie.Title}</h4>
    <p>Release Date: <b>${movie.Year}</b></p>
  </div>`;
}

movieCollection()

function filterMovies(event) {
  movieCollection(event.target.value);
}
  
 setTimeout(() => {
  getInput();
}, 2000);

