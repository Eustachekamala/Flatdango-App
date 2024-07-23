const container_film = document.querySelector("#card-films");
const firtFilm = document.querySelector("#firtFilm");
const addFilms = document.querySelector("#btnAdd");
const aside = document.querySelector("#aside");
const formFilms = document.querySelector("#formSection");

// Function to hide the form
function hideSection() {
    formFilms.classList.add("hidden");
}

// Function to show the form
function showSection() {
    formFilms.classList.remove("hidden");
}

// Event listener to show the form when addFilms button is clicked
addFilms.addEventListener("click", showSection);

// Function to render individual film cards in the main container
function renderFilmsCard(films) {
    let card = document.createElement("li");
    card.classList = "flex flex-col w-100 m-2 bg-gray-200 rounded-2xl";
    card.innerHTML = `
        <img class="w-full h-72 rounded-2xl" src="${films.poster}"/>
        <div class="flex flex-col gap-2 text-center p-2 m-auto max-h-max">
            <h4 class="font-bold text-xs">${films.title}</h4>
            <div class="flex flex-row justify-around text-sm">
                <p>${films.runtime}</p>
                <p>${films.capacity}</p>
                <p>${films.showtime}</p>
                <p>${films.ticketsold}</p>
            </div>
            <p class="w-full text-sm">${films.description}</p>
        </div>
    `;
    
    container_film.appendChild(card); // Add the card to the films container
}

// Function to render the first film in the aside section
function renderFilm1Card(film) {
    firtFilm.innerHTML = `
        <img class="w-full rounded-2xl" src="${film.poster}"/>
        <div class="flex flex-col gap-2 text-center p-2 m-auto">
            <h4 class="font-bold text-xl">${film.title}</h4>
            <div class="flex flex-row justify-around">
                <p>${film.runtime}</p>
                <p>${film.capacity}</p>
                <p>${film.showtime}</p>
                <p>${film.ticketsold}</p>
            </div>
            <p class="w-full">${film.description}</p>
        </div>
    `;
    aside.appendChild(firtFilm); // Append the film card to the aside section
}

// Fetch request to get the first film
function getOneFilm() {
    fetch("http://localhost:3000/films/1")
        .then(res => res.json())
        .then(data => renderFilm1Card(data))
        .catch(error => {
            console.error("Error fetching first film:", error);
            alert("Failed to fetch first film. Please try again later.");
        });
}

// Fetch request to get all films
function getFilms() {
    fetch("http://localhost:3000/films")
        .then(res => res.json())
        .then(filmData => {
            const filmsData = filmData.slice(1); // Skip the first element using slice(1)
            filmsData.forEach(film => renderFilmsCard(film));
        })
        .catch(error => {
            console.error("Error fetching films:", error);
            alert("Failed to fetch films. Please try again later.");
        });
}

// Function to add a new film
function addFilm(newFilm) {
    fetch("http://localhost:3000/films", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newFilm)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Failed to add film");
        }
        return response.json();
    })
    .then(data => {
        console.log("Film added successfully:", data);
        // Optionally, you can fetch all films again to refresh the list
        getFilms();
    })
    .catch(error => {
        console.error("Error adding film:", error);
        alert("Failed to add film. Please try again later.");
    });
}

// Initialize the application
function initialize() {
    getOneFilm();
    getFilms();
}

initialize(); // Call initialize to start fetching and rendering films
