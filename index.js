

async function movieCollection() {
  const response = await fetch("http://www.omdbapi.com/?apikey=6aff4282&s=batman");
  const data = await response.json()
  console.log(data);
}

movieCollection()

