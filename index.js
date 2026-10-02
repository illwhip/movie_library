

async function movieCollection() {
  const response = await fetch("http://www.omdbapi.com/?i=tt3896198&apikey=6aff4282");
  const data = await response.json()
  console.log(data);
}

movieCollection()

