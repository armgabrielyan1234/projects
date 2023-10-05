const fact = document.querySelector("#factCats");
const HOST = "https://catfact.ninja/fact";
const btn = document.querySelector("#btn-fact")

async function request(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject();
      }
    };

    xhr.send();
  });
}

async function fetchData() {
  try {
    fact.textContent = "Loading....";
    const info = await request(HOST);
    fact.textContent = await info.fact;
  } catch (error) {
    console.error(error);
  }
}

btn.addEventListener("click",()=>{
  fetchData()
})