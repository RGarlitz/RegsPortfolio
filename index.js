  
 import { people } from './people.js'

const characters = people
let first25Peeps = document.querySelector('.first25')
let backCard = document.querySelector('.back-card')

let count = 1

people.forEach(person => {
  //front of card
  let card = document.createElement('div')
  let frontOfCard = document.createElement('div')
  let myFig = document.createElement('figure')
  let myCap = document.createElement('figcaption')
  let peopleImg = document.createElement('img')
 
  peopleImg.src = `starwars/${count++}.jpg`
  
  card.classList.add("card")
  frontOfCard.classList.add("card__face")
  frontOfCard.classList.add("card__face--front")
  frontOfCard.appendChild(myFig)
  myCap.textContent = person.name
  
  myFig.appendChild(peopleImg)
  myFig.appendChild(myCap)
 
  
  first25Peeps.appendChild(card)
  //end front of card
  //back of card
  let backOfCard =  document.createElement('div')

  let myInfo = document.createElement('ul')
  let info1 = document.createElement('li')
  let info2 = document.createElement('li')
  let info3 = document.createElement('li')
  let info4 = document.createElement('li')
  let info5 = document.createElement('li')
  let info6 = document.createElement('li')

  info1.textContent = `Height: ${person.height}`
  info2.textContent = `Skin Color: ${person.skin_color}`
  info3.textContent = `Hair Color: ${person.hair_color}`
  info4.textContent = `Eye Color: ${person.eye_color}`
  info5.textContent = `Birth Year: ${person.birth_year}`
  info6.textContent = `Gender: ${person.gender}`

  myInfo.appendChild(info1)
  myInfo.appendChild(info2)
  myInfo.appendChild(info3)
  myInfo.appendChild(info4)
  myInfo.appendChild(info5)
  myInfo.appendChild(info6)


  backCard.appendChild(card)
  backOfCard.classList.add("card__face")
  backOfCard.classList.add("card__face--back")
  backOfCard.appendChild(myInfo)
  


  card.appendChild(frontOfCard)
  card.appendChild(backOfCard)


  //end back of card

  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
  
})



let darthMaul = {
        "name": "Darth Maul",
        "height": "175",
        "mass": "80",
        "hair_color": "none",
        "skin_color": "red",
        "eye_color": "yellow",
        "birth_year": "54BBY",
        "gender": "male",
      }

      const newish = (person) => {
        //front of card
        let card = document.createElement('div')
        let frontOfCard = document.createElement('div')
        let myFig = document.createElement('figure')
        let myCap = document.createElement('figcaption')
        let peopleImg = document.createElement('img')
       
        peopleImg.src = `starwars/darth-maul.jpg`
        
       
        card.classList.add("card")
        frontOfCard.classList.add("card__face")
        frontOfCard.classList.add("card__face--front")
        frontOfCard.appendChild(myFig)
        myCap.textContent = person.name
        
        myFig.appendChild(peopleImg)
        myFig.appendChild(myCap)
       
        
        first25Peeps.appendChild(card)
        //end front of card
        //back of card
        let backOfCard =  document.createElement('div')
      
        let myInfo = document.createElement('ul')
        let info1 = document.createElement('li')
        let info2 = document.createElement('li')
        let info3 = document.createElement('li')
        let info4 = document.createElement('li')
        let info5 = document.createElement('li')
        let info6 = document.createElement('li')
      
        info1.textContent = `Height: ${person.height}`
        info2.textContent = `Skin Color: ${person.skin_color}`
        info3.textContent = `Hair Color: ${person.hair_color}`
        info4.textContent = `Eye Color: ${person.eye_color}`
        info5.textContent = `Birth Year: ${person.birth_year}`
        info6.textContent = `Gender: ${person.gender}`
      
        myInfo.appendChild(info1)
        myInfo.appendChild(info2)
        myInfo.appendChild(info3)
        myInfo.appendChild(info4)
        myInfo.appendChild(info5)
        myInfo.appendChild(info6)
      
      
        backCard.appendChild(card)
        backOfCard.classList.add("card__face")
        backOfCard.classList.add("card__face--back")
        backOfCard.appendChild(myInfo)
        
      
      
        card.appendChild(frontOfCard)
        card.appendChild(backOfCard)
      
      
        //end back of card
      
        card.addEventListener( 'click', function() {
          card.classList.toggle('is-flipped');
        });
      }
    



let newButton = document.querySelector('.new-card')

newButton.addEventListener( 'click', function() {

  newish(darthMaul)
  })


 
