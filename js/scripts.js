////////////////////////////////////////////////////////////////////////////

// Animação de digitação do texto - Main na Home
const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Desenvolvedor Front-end"
    }, 0);
    setTimeout(() => {
        text.textContent = "Programador JavaScript"
    }, 4000);
    setTimeout(() => {
        text.textContent = "UI/UX"
    }, 8000);
    setTimeout(() => {
        text.textContent = "Design Digital"
    }, 12000);
    setTimeout(() => {
        text.textContent = "Editor de Vídeo"
    }, 16000);
}

textLoad();
setInterval(textLoad, 20000);


// Galeria de Imagens - modal - design arts
let img= document.querySelectorAll('.small_img');
let modal = document.querySelector('.modal');
let modalImg = document.querySelector('#modal_img');
let btClose = document.querySelector('#bt_close');
let srcVal="";

for(let i = 0 ; i < img.length ; i++){
    img[i].addEventListener('click',function(){
        
        srcVal = img[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal);
        modal.classList.toggle('modal_active');
    });
    
}

btClose.addEventListener('click', function(){
    modal.classList.toggle('modal_active');
});

/////////////////////////////////////////////////////////////////////////////

// Animação de aparição dos elementos Home

// Slider portfolio.html

let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

setInterval(next, 5000);




 

