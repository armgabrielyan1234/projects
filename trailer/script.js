const API_KEY = "47d7cf7705efc5c8ea48fcececb57af8";
const movieId = location.href.split("?")[1].split("=")[1];
const main = document.querySelector("main")
const loadingContainer = document.querySelector("#loading-container");
const notFound = document.querySelector(".not-found")

const videoUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`;
loading("true")

fetch(videoUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    loading("false"); 
    if (data.results && data.results.length > 0) {
      const videoKey = data.results[0].key;
      
      const iframe = document.createElement("iframe");
      iframe.classList.add("iframe")
      iframe.src = `https://www.youtube.com/embed/${videoKey}`;
      
      main.appendChild(iframe);
    } else {
      notFound.style.display = "flex"
    }
  })
  .catch(error => {
    console.error(error);
    loading("false");
  });

