const container_film = document.querySelector("#card-films") 

//Dom renderFunction
function renderFilmsCard(films){
    let card = document.createElement("li");
    card.classList = "w-100 p-2 m-2";
    card.innerHTML = `
    <img class="w-full" src="${films.poster}"/>
        <div class="">
            <h4>${films.title}</h4>
            <div class="flex flex-row gap-2">
                <p>${films.runtime}</p>
                <p>${films.capacity}</p>
                <p>${films.showtime}</p>
                <p>${films.ticketsold}</p>
            </div>
            <p class="w-full">${films.description}</p>
        </div>
    `
   //Add card films to container_film
    container_film.appendChild(card); 
}

//Fetch request
//Get the first films
function getFilm(){
    fetch("http://localhost:3000/films")
        .then(res => res.json())
        .then(filmData => filmData.forEach(film => renderFilmsCard(film)));
}

function initialize (){
    getFilm();
}

initialize();