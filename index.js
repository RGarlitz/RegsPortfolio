
  import { films } from './films.js'
  import { people } from './people.js'
  
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  






















