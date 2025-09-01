function mostrarSecao(id,event){

   var secao = document.getElementsByClassName("cardapio2")

   for(i = 0; i < secao.length; i++){

    secao[i].style.display = "none";
   }

   document.getElementById(id).style.display = "flex"

   event.preventDefault()

}

const menu = getElementsByClassName('.menu-mobile')
const btn = getElementsByClassName('btn-menu')

menu.addEventListener('click', animarMenu)

function animarMenu(){
   menu.classList.toggle('abrir')
   
}
