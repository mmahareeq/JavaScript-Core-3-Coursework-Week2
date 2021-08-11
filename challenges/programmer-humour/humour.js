const url = 'https://xkcd.now.sh/?comic=';
const endpoint = ["latest","303"]
const DIV = document.getElementById('images')
endpoint.forEach(element => {
  fetch(url+element)
  .then(response=>response.json())
  .then(data=>{
      console.log(data)
      const Tittle = document.createElement("H3");
      Tittle.innerText = data.title;
      DIV.appendChild(Tittle);
      const image= document.createElement("IMG");
      image.setAttribute('src',data.img);
      DIV.appendChild(image);
      

    })
});
