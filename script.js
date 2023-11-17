const imageContainer = document.querySelector("#container");
const HOST = "https://dog.ceo/api/breeds/image/random";
const btn = document.querySelector("#btn");
let currentImage = null;

function random() {
    if (currentImage) {
        imageContainer.removeChild(currentImage);
    }

    fetch(HOST)
        .then(response => {
            return response.json();
        })
        .then(data => {
            const imageUrl = data.message;
            const image = document.createElement("img");
            image.classList.add("imagee");
            image.src = imageUrl;
            imageContainer.appendChild(image);
            currentImage = image; 
        })
        .catch(error => {
            console.error(error);
        });
}

btn.addEventListener("click", () => {
    random();
});
