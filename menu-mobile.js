 const menuDiv = document.getElementById('menu-mobile')
 const btn = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animarMenu)

 function animarMenu(){

    menuDiv.classList.toggle('abrir')
    btn.classList.toggle('ativar')
 }