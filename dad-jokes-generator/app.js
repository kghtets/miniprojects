const btnEl = document.getElementById('btn');
const jokeEl = document.getElementById('joke');

const apiKey = "Ku+NTVUOX+bp5Rm6nFWNhQ==49ge5yQ2uFFxkeU4";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey
    }
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){

    try {
        jokeEl.innerText = "Updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        // console.log(data[0].joke);
        jokeEl.innerText = data[0].joke;

        btnEl.innerText = "tell me a joke";
        btnEl.disabled = false;
    } catch (error) {
        btnEl.disabled = false;
        btnEl.innerText = "tell me a joke";
        jokeEl.innerText = "An error happened, try again later";
        console.log(error);
    }
}

btnEl.addEventListener("click", getJoke);