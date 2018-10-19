let characterName = document.querySelector('#characterName')
let hairColor = document.querySelector('#hairColor')
let eyeColor = document.querySelector('#eyeColor')
let movieTitle = document.querySelector('#movieTitle')

fetch('https://swapi.co/api/films', {mode: "no-cors"})
  .then(function(response) {
    return response.json();
  })
  //.then(function(myJson) {
    //  characterName.textContent = myJson.name
      //hairColor.textContent = myJson.hair_color
      //eyeColor.textContent = myJson.eye_color
    //console.log(JSON.stringify(myJson));
  //})
  .then(function(myJson) {
    myJson.results.forEach(function(film) {
      var list = document.createElement('li')
      list.textContent = film.title
      movieTitle.appendChild(list)
      console.log(film.title);
    })
  })