//input a card by pokemon name
//bring back the list of cards that match it

//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
//const choice = document.querySelector('input').value
//console.log(choice)
const name = document.querySelector('input').value
const url = `https://api.pokemontcg.io/v2/cards?q=name:${name}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        data.data.forEach(obj => {
          console.log (obj.name)
          const li =  document.createElement('li')
          const price =  document.createElement('li')
           const release =  document.createElement('li')
            const set = document.createElement('li')
          const img = document.createElement('img')

          li.textContent = 'Card Name:'+obj.name
          price.textContent = 'Price:'+ obj.cardmarket.prices.averageSellPrice
          release.textContent = 'Release Date:' +obj.set.releaseDate
          set.textContent = 'Set Name:' +obj.set.name
          img.src = obj.images.small

          document.querySelector('.name').appendChild(li)
          document.querySelector('.name').appendChild(price)
           document.querySelector('.name').appendChild(release)
           document.querySelector('.name').appendChild(set)
          document.querySelector('.name').appendChild(img)
          //data.data.forEach(obj => {
           // console.log (obj.images.large)
            
            //img.src = obj.images.large
            //document.querySelector('.imageOfCard').append(img)
            
        })})
      .catch(err => {
          console.log(`error ${err}`)
      });
}

//data.data.images
