/*let characterName = document.querySelector('#characterName')
let hairColor = document.querySelector('#hairColor')
let eyeColor = document.querySelector('#eyeColor')
let movieTitle = document.querySelector('#movieTitle')

fetch('https://swapi.co/api/films', {mode: "no-cors"})
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    characterName.textContent = myJson.name
    hairColor.textContent = myJson.hair_color
    eyeColor.textContent = myJson.eye_color
    console.log(JSON.stringify(myJson));
  })
  .then(function(myJson) {
    myJson.results.forEach(function(film) {
      var list = document.createElement('li')
      list.textContent = film.title
      movieTitle.appendChild(list)
      console.log(film.title);
    })
  })*/
  
  
  import { films } from './films.js'
  import { people } from './people.js'
  
  /*let cardList = document.querySelector("#card-list")
  
  films.forEach((film) => {
    let listItem = document.createElement('li')
    listItem.textContent = film.title
    cardList.appendChild(listItem)
  })
  
  console.log(people[9])
  console.log(films[5])*/

  //let cardList = document.querySelector("#card-list")
  
  
  
  /*films.forEach((film) => {
    let listItem = document.createElement('li')
    listItem.textContent = film.title
    cardList.appendChild(listItem)
  })

  for (var info in empire) {
    let listItem = document.createElement('li')
    listItem.textContent = info.director
    cardList.appendChild(listItem)
    console.log(info.director)
  }*/

  
  /*let empire = films[5]
  //console.log(movie.director)
  //console.log(films)
 
  function empireStrikesBack(movie) {
    movieCrawl.textContent = movie.title
    //cardList.appendChild(listItem)
  }
  
  

  empireStrikesBack(empire)*/

  let movieTitle = document.querySelector("#movie-title")
  let movieDirector = document.querySelector("#movie-director")
  let releaseDate = document.querySelector("#release-date")
  let openingCrawl = document.querySelector("#opening-crawl")
  let obiWan = document.querySelector("#obi-wan")
  let Luke = document.querySelector("#luke")
  let Han = document.querySelector("#han")
  let Anakin = document.querySelector("#Anakin")
  let Leia = document.querySelector("#Leia")

  let characters = people
  let hope = films[0]
  let empire = films[5]

  function movieCard(movie) {
    movieTitle.textContent = movie.title
    movieDirector.textContent = movie.director
    releaseDate.textContent = movie.release_date
    openingCrawl.textContent = movie.opening_crawl
  }
  
  movieCard(empire)


  const peopleCard = (person) => {
    obiWan.textContent = person[9].name
    Luke.textContent = person[0].name
    Han.textContent = person[13].name
    Anakin.textContent = person[3].name
    Leia.textContent = person[4].name
  }
  
  peopleCard(characters)
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  






















