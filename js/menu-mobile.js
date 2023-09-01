// Efeito menu mobile
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

// Fechar menu ao clicar na lista de navegação
document.addEventListener("DOMContentLoaded", function(){
  var links = document.querySelectorAll("#menu li a:not([href='#'])");
  for(var x=0; x<links.length; x++){
     links[x].onclick = function(){
        document.querySelector("button.btn-toggle").click();
     }
  }
});

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

