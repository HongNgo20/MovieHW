var lastMovie = 0;

function onLoad()
{
    loadMovies(0);
}

function onNext()
{
    loadMovies(lastMovie + 1);
}

function onPrevious()
{
    if (lastMovie < 4)
        return;

    loadMovies(lastMovie - 4);
}
function loadMovies(startIndex) 
{
  let movieIndex = startIndex;
  const result1 = document.getElementById("RandomMovies1");
  const result2 = document.getElementById("RandomMovies2");
  const result3 = document.getElementById("RandomMovies3");
  const result4 = document.getElementById("RandomMovies4");

  const title1 = document.getElementById("moviesButton1");
  const title2 = document.getElementById("moviesButton2");
  const title3 = document.getElementById("moviesButton3");
  const title4 = document.getElementById("moviesButton4");
  const fetch1 = fetch(
    "https://raw.githubusercontent.com/HongNgo20/MoviesSet/main/movies.json"
  );

  fetch1
    .then((res) => res.json())
    .then((data) => {
      let movieData = data.movies[movieIndex];
      result1.innerHTML = `<img src=${movieData.posterUrl} alt="movie" />`;
      title1.innerHTML = movieData.title;
      movieIndex++;

      movieData = data.movies[movieIndex];
      result2.innerHTML = `<img src=${movieData.posterUrl} alt="movie" />`;
      title2.innerHTML = movieData.title;
      movieIndex++;

      movieData = data.movies[movieIndex];
      result3.innerHTML = `<img src=${movieData.posterUrl} alt="movie" />`;
      title3.innerHTML = movieData.title;
      movieIndex++;

      movieData = data.movies[movieIndex];
      result4.innerHTML = `<img src=${movieData.posterUrl} alt="movie" />`;
      title4.innerHTML = movieData.title;

      lastMovie = movieIndex
    });
}
