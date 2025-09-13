const produto = [
    {id:"bife", nome:"BIFE", descricao: "Arroz, feijão, cebola e alcatra bovina", imagem:"imagens/pratos/bife2.jpg" },

    {id:"churrasco", nome:"CHURRASCO", descricao: "Picanha, fraldinha, costela, contra-filé e linguiça suína", imagem:"imagens/pratos/churrasco2.jpg" },

    {id:"costela", nome:"COSTELA", descricao: "Costela Suína", imagem:"imagens/pratos/costela2.jpg" },

    {id:"frango", nome:"FRANGO", descricao: "Frango assado, limão e alface", imagem:"imagens/pratos/frango-grelhado2.jpg" },

    {id:"lasanha", nome:"LASANHA", descricao: "Macarrão, carne moída, mussarela e presunto", imagem:"imagens/pratos/lasanha2.jpg" },

    {id:"peixe", nome:"PEIXE", descricao: "Salmão", imagem:"imagens/pratos/peixe-grelhado2.jpg" },

    

]

produto.forEach((produto) =>{
    
    const elemento = document.getElementById(`${produto.id}`);
    const link = elemento.querySelector('a')
    link.addEventListener("click", (e) => 
    {
        e.preventDefault()
        localStorage.setItem("produto", JSON.stringify(produto))
        window.location.href = "descricao.html"
    })
})