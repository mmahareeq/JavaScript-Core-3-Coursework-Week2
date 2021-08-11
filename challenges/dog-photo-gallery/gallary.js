const btn = document.getElementById('clicked');
const list = document.getElementById('photo-list');
btn.addEventListener('click',()=>
{   console.log("hello")
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response =>response.json() )
    .then(data =>
        {   console.log(data.message)
            const li = document.createElement("LI");
            const image= document.createElement("IMG");
            image.setAttribute('src',data.message);
            li.appendChild(image);
            list.appendChild(li);
        })
})