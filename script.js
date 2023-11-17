const input = document.querySelector("#idSearchBox");
const form = document.querySelector("#form");
const HOST = "https://api.themoviedb.org/3";
const API_KEY = "47d7cf7705efc5c8ea48fcececb57af8";
const film_container = document.querySelector(".film-container");
const popularFilm = document.querySelector(".popular-film-container")
const loadingContainer = document.querySelector("#loading-container");
const signUp = document.querySelector(".signup-button")
const login = document.querySelector(".login-button")

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
            location.href = "./filmWeb/index.html";
        })
        .catch(error => {
            console.error(error);
        });
        
});

const RANDOM_MOVIE_URL = `${HOST}/movie/popular?api_key=${API_KEY}`;

async function displayRandomMovie() {
    try {
        const response = await fetch(RANDOM_MOVIE_URL);
        const data = await response.json();

        const notDisplayedFilms = data.results.filter(movie => !displayedFilms.includes(movie.id));

        if (notDisplayedFilms.length > 0) {
            const randomIndex = Math.floor(Math.random() * notDisplayedFilms.length);
            const randomMovie = notDisplayedFilms[randomIndex];

            displayedFilms.push(randomMovie.id);

            const filmElement = document.createElement("div");
            const container_title = document.createElement("p");
            const container_picture = document.createElement("img");

            container_title.textContent = randomMovie.title;
            container_picture.classList.add("img-film");
            container_picture.src = `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`;
            
            filmElement.appendChild(container_picture);
            filmElement.appendChild(container_title);
            film_container.appendChild(filmElement);

            filmElement.addEventListener("click", () => {
                const movieId = randomMovie.id; 
                location.href = `./movie/index.html?id=${movieId}`;
            });

        }    
    } catch (error) {
        console.error(error);
    }    
}    

for (let i = 0; i < 17; i++) {
    displayRandomMovie();
}    

async function displayPopularMovie() {
    try {
        const response = await fetch(RANDOM_MOVIE_URL);
        const data = await response.json();

        const notDisplayedFilms = data.results.filter(movie => !displayedFilms.includes(movie.id));

        if (notDisplayedFilms.length > 0) {
            const randomIndex = Math.floor(Math.random() * notDisplayedFilms.length);
            const randomMovie = notDisplayedFilms[randomIndex];

            displayedFilms.push(randomMovie.id);

            const filmElement = document.createElement("div");
            const container_title = document.createElement("p");
            const container_picture = document.createElement("img");

            container_title.textContent = randomMovie.title;
            container_picture.classList.add("img-film");
            container_picture.src = `https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`;
            
            filmElement.appendChild(container_picture);
            filmElement.appendChild(container_title);
            popularFilm.appendChild(filmElement);
            
            filmElement.addEventListener("click", () => {
                const movieId = randomMovie.id; 
                location.href = `./movie/index.html?id=${movieId}`;
            });

        }    
    } catch (error) {
        console.error(error);
    }    
}    

for (let i = 0; i < 3; i++) {
    displayPopularMovie();
}    

login.addEventListener("click",()=>{
    location.href = "./login/index.html"
})
signUp.addEventListener("click",()=>{
    location.href = "./signup/index.html"
})