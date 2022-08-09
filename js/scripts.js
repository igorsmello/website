////////////////////////////////////////////////////////////////////////////

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




 

