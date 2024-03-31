let card = document.querySelector(".card");
let hero = document.querySelector(".hero");

card.addEventListener("click", ()=>{
    hero.classList.toggle("change");
    console.log('Hello');
})