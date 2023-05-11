dogImg = document.querySelector('.dogimg');
btn = document.querySelector('.btn');
const randompic = () =>{
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json =>{
        dogImg.setAttribute('src',`${json.message}`)
        //console.log(dogImg)
    })
    
};
btn.onclick = () =>{
    dogImg.style.opacity = '1';
    randompic();
};
