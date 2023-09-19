//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const ul = document.querySelector('.classes')
const ulTwo = document.querySelector('.classesTwo')
ul.innerHTML = ''
ulTwo.innerHTML=''
  const choice = document.querySelector('input').value
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
       console.log(data.subclasses)
       data.subclasses.forEach(obj => {
        console.log (obj.name)
        const li = document.createElement('li')
        li.textContent = obj.name
        document.querySelector('.classesTwo').appendChild(li)

      // console.log(data.classes)
      //  data.classes.forEach(objj => {
      //   console.log (objj.name)
      //  const liTwo = document.createElement('li')
     //   liTwo.textContent = objj.name
       //  document.querySelector('.classes').appendChild(liTwo)
        //how to remove stuff from dom after I grab stuff?
      })})
      fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.classes)
       data.classes.forEach(objj => {
        console.log (objj.name)
       const liTwo = document.createElement('li')
        liTwo.textContent = objj.name
         document.querySelector('.classes').appendChild(liTwo)
    })
       document.querySelector('h2').innerText=data.name
       document.querySelector('h3').innerText=data.desc
       //document.querySelector('h3').innerText=data.classes
       //document.querySelector('h4').innerText=data.subclasses.obj.name

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

