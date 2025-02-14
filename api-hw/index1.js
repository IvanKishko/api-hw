//* TASK 1

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
      document.getElementById("posts").innerHTML = posts
        .slice(0, 5)
        .map(
          (post) =>
            `<div class="post"><strong>${post.title}</strong><p>${post.body}</p></div>`
        )
        .join("");
    });
}

//* TASK 2
function searchMovie() {
  const movieTitle = document.getElementById("movieTitle").value;
  if (!movieTitle) {
    alert("Введіть назву фільму/серіалу який хочете переглянути!");
    return;
  }

  fetch(
    `https://www.omdbapi.com/?apikey=f64942c4&t=${encodeURIComponent(
      movieTitle
    )}`
  )
    .then((response) => response.json())
    .then((movieData) => {
      document.getElementById("movieInfo").innerHTML =
        movieData.Response === "False"
          ? `<p>Фільм не знайдено</p>`
          : `<h3>${movieData.Title} (${movieData.Year})</h3>
                           <p><strong>Режисер:</strong> ${movieData.Director}</p>
                           <p><strong>Актори:</strong> ${movieData.Actors}</p>
                           <p><strong>Жанр:</strong> ${movieData.Genre}</p>
                           <p><strong>Опис:</strong> ${movieData.Plot}</p>
                           <img src="${movieData.Poster}" alt="Постер фільму" width="200">`;
    });
}
