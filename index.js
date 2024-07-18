const container_film = document.querySelector("#card-films") 
const firtFilm = document.querySelector("#firtFilm");
const aside = document.querySelector("#aside");


//Dom renderFunction
function renderFilmsCard(films){
    let card = document.createElement("li");
    card.classList = "flex flex-col w-100 m-2 bg-gray-200 rounded-2xl";
    card.innerHTML = `
    <img class="w-full h-72 rounded-2xl" src="${films.poster}"/>
        <div class="flex flex-col gap-2 text-center p-2 m-auto max-h-max">
            <h4 class="font-bold text-xs">${films.title}</h4>
            <div class="flex flex-row justify-around text-sm">
                <p class="text-sm">${films.runtime}</p>
                <p class="text-sm">${films.capacity}</p>
                <p class="text-sm">${films.showtime}</p>
                <p class="text-sm">${films.ticketsold}</p>
            </div>
            <p class="w-full text-sm">${films.description}</p>
        </div>
    `

    
   //Add card films to container_film
    container_film.appendChild(card); 
}

//This function return the first card of movies
function renderFilm1Card(film){
    firtFilm.innerHTML = `
    <img class="w-full rounded-2xl" src="${film.poster}"/>
        <div class="flex flex-col gap-2 text-center p-2 m-auto">
            <h4 class="font-bold text-xl">${film.title}</h4>
            <div class="flex flex-row justify-around">
                <p class="">${film.runtime}</p>
                <p>${film.capacity}</p>
                <p>${film.showtime}</p>
                <p>${film.ticketsold}</p>
            </div>
            <p class="w-full">${film.description}</p>
        </div>
    `
    aside.appendChild(firtFilm);
}

// Fetch request to get the first film
function getOneFilm() {
  fetch("http://localhost:3000/films/1")
    .then(res => res.json())
    .then(data => renderFilm1Card(data));
}

// Fetch request to get all films
function getFilms() {
  fetch("http://localhost:3000/films")
    .then(res => res.json())
    .then(filmData => {
      const filmsData = filmData.slice(1); // Skip the first element using slice(1)
      filmsData.forEach(film => renderFilmsCard(film));
    });
}

function initialize (){
    getOneFilm();
    getFilms();
}

initialize();