let API_KEY = "47d7cf7705efc5c8ea48fcececb57af8"; 
const loadVideo = document.querySelector("#load-video")
const loadingContainer = document.querySelector("#loading-container");

document.addEventListener("DOMContentLoaded", () => {
    const HOST = "https://api.themoviedb.org/3";
    const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
    
    loadVideo.addEventListener("click",() => {
        location.href = `../trailer/index.html?id=${movieId}`
    })

    async function loadMovieDetails(movieId) {
        loading("true")
        try {
            const detailsResponse = await fetch(`${HOST}/movie/${movieId}?api_key=${API_KEY}`);
            const detailsData = await detailsResponse.json();

            document.querySelector("#movie-title").textContent = detailsData.title;
            document.querySelector("#movie-poster").src = `${IMAGE_BASE_URL}${detailsData.poster_path}`;
            document.querySelector("#movie-release-date").textContent = `Release Date: ${detailsData.release_date}`;
            document.querySelector("#movie-overview").textContent = detailsData.overview;
            
            loading("false")

        } catch (error) {
            console.log(error);        
        }
    }
    async function loadMovieVideos(movieId) {
        try {
            const videosResponse = await fetch(`${HOST}/movie/${movieId}/videos?api_key=${API_KEY}`);
        } catch (error) {
          console.log(error);
        }
    }
    
    const loadVideoButton = document.querySelector("#load-video");
    
    if (loadVideoButton) {
        loadVideoButton.addEventListener("click", () => {
            const currentUrl = window.location.href;
            
            const url = new URL(currentUrl);
            
            const movieId = url.searchParams.get("id");
            loadMovieVideos(movieId);
        });
    }

const currentUrl = window.location.href;

const url = new URL(currentUrl);

const movieId = url.searchParams.get("id");
    loadMovieDetails(movieId);
});
