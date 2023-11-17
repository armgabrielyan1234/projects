const searchResults = JSON.parse(localStorage.getItem('searchResults'));
const not_found = document.querySelector(".not-found")
const text_container = document.querySelector(".text-container")
const loadingContainer = document.querySelector("#loading-container");

function createFilmElement(film) {
    const filmElement = document.createElement("div");
    const container_title = document.createElement("p");
    container_title.textContent = film.title;
    const container_picture = document.createElement("img");
    container_picture.classList.add("img-film");
    container_picture.src = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
    filmElement.appendChild(container_picture);
    filmElement.appendChild(container_title);
    return filmElement;
}

function displayResults(searchResults) {
    const film_container = document.querySelector(".film-container");
    film_container.innerHTML = "";

    searchResults.forEach(film => {
        const filmElement = createFilmElement(film);
        film_container.appendChild(filmElement);

        container_title.addEventListener("blur", () => {
            film.title = container_title.textContent;
            localStorage.setItem('searchResults', JSON.stringify(searchResults));
        });

        filmElement.addEventListener("click", () => {
            const movieId = film.id;
            location.href = `../movie/index.html?id=${movieId}`;
        });
    });
}


if (searchResults && searchResults.length > 0) {
    const film_container = document.querySelector(".film-container");

    searchResults.forEach(film => {
        const filmElement = document.createElement("div");
        const container_title = document.createElement("p");
        container_title.textContent = film.title;
        const container_picture = document.createElement("img");
        container_picture.classList.add("img-film");
        container_picture.src = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
        filmElement.appendChild(container_picture);
        filmElement.appendChild(container_title);
        film_container.appendChild(filmElement);
    
        container_title.addEventListener("blur", () => {
            film.title = container_title.textContent;
            localStorage.setItem('searchResults', JSON.stringify(searchResults));
        });
    
        filmElement.addEventListener("click", () => {
            const movieId = film.id;
            location.href = `../movie/index.html?id=${movieId}`;
        });
    });
}else{
    not_found.style.display = "flex"
}
function performSearch() {
    localStorage.removeItem('searchResults');

    const searchResults = []; 
    localStorage.setItem('searchResults', JSON.stringify(searchResults));

    displayResults(searchResults);
}

function displayResults(searchResults) {
    const film_container = document.querySelector(".film-container");
    film_container.innerHTML = "";

    searchResults.forEach(film => {
        const filmElement = document.createElement("div");
        const container_title = document.createElement("p");
        container_title.textContent = film.title;
        const container_picture = document.createElement("img");
        container_picture.classList.add("img-film");
        container_picture.src = `https://image.tmdb.org/t/p/w500${film.poster_path}`;
        filmElement.appendChild(container_picture);
        filmElement.appendChild(container_title);
        film_container.appendChild(filmElement);
    
        container_title.addEventListener("blur", () => {
            film.title = container_title.textContent;
            localStorage.setItem('searchResults', JSON.stringify(searchResults));
        });
    
        filmElement.addEventListener("click", () => {
            const movieId = film.id;
            location.href = `../movie/index.html?id=${movieId}`;
        });
    });
}
const input = document.querySelector("#idSearchBox");
const form = document.querySelector("#form");
const HOST = "https://api.themoviedb.org/3";
const API_KEY = "47d7cf7705efc5c8ea48fcececb57af8";
const film_container = document.querySelector(".film-container");

const displayedFilms = [];
form.addEventListener("submit", event => {
    event.preventDefault();
    const inputVal = input.value;
    console.log(inputVal);
    const apiUrl = `${HOST}/search/movie?api_key=${API_KEY}&query=${inputVal}`;

    loading("true")

    fetch(apiUrl)
        .then(response => {
            return response.json();
        })
        .then(data => {
            localStorage.setItem('searchResults', JSON.stringify(data.results));

            loading("false")
            
            location.href = "./index.html";
        })
        .catch(error => {
            console.error(error);
        });
});