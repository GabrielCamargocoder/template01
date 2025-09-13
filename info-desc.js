window.onload = function(){

    const produto = JSON.parse(localStorage.getItem("produto"))
    const titulo = document.getElementsByClassName('titulo')[0]
    const descricao = document.getElementsByClassName('desc-produto')[0]
    const imagem = document.querySelector('.img-desc img')

    titulo.innerHTML = produto.nome
    descricao.innerHTML = produto.descricao
    imagem.src =produto.imagem
   
}
