const produto = [
    {id:"bife", nome:"BIFE",titulo: "BIFE", descricao: "Arroz, feijão, cebola e alcatra bovina", imagem:"imagens/pratos/bife2.jpg" },

    {id:"churrasco", nome:"CHURRASCO", titulo: "CHURRASCO", descricao: "Picanha, Fraldinha, Costela, Contra-Filé e Linguiça suína", imagem:"imagens/pratos/churrasco2.jpg" },

    {id:"costela", nome:"COSTELA",titulo: "COSTELA", descricao: "Costela Suína", imagem:"imagens/pratos/costela2.jpg" },

    {id:"frango", nome:"FRANGO",titulo: "FRANGO",descricao: "Frango assado, Limão e Alface", imagem:"imagens/pratos/frango-grelhado2.jpg" },

    {id:"lasanha", nome:"LASANHA", titulo: "LASANHA", descricao: "Macarrão, Carne moída, Mussarela e Presunto", imagem:"imagens/pratos/lasanha2.jpg" },

    {id:"peixe", nome:"PEIXE",titulo: "PEIXE", descricao: "Salmão", imagem:"imagens/pratos/peixe-grelhado2.jpg" },

    
    /* SALADA*/

    {id:"caesar", nome:"CAESAR",titulo: "CAESAR", descricao: "Alface Americana,Parmesão, Peito de Frango ", imagem:"imagens/salada/caesar.jpg" },

    {id:"caprese", nome:"CAPRESE",titulo: "CAPRESE", descricao: "Rucula, Queijo branco, Pimenta, Alface Americana, Tomate", imagem:"imagens/salada/caprese.jpg" },

    {id:"classica", nome:"CLÁSSICA",titulo: "CLÁSSICA", descricao: "Alface e Tomate", imagem:"imagens/salada/classica.jpg" },

    {id:"grega", nome:"GREGA",titulo: "GREGA", descricao: "Pepino Japonês, Tomate Italiano, Tomate Cereja e Alcaparras", imagem:"imagens/salada/grega.jpg" },

    /*SOBREMESAS*/

    {id:"brigadeiro", nome:"BRIGADEIRO",titulo: "BRIGADEIRO", descricao: "Leite condensado, Creme de Leite, Achocolatado e Granulado", imagem:"imagens/sobremesa/brigadeiro.jpg" },

    {id:"brownie", nome:"BROWNIE",titulo: "BROWNIE", descricao: "Tradicional, Prestígio, Café e Chocolate Branco", imagem:"imagens/sobremesa/browie.jpg" },

    {id:"mousse", nome:"MOUSSE",titulo: "MOUSSE", descricao: "Chocolate, Maracujá, Limão, Coco e Abacaxi", imagem:"imagens/sobremesa/mousse.jpg" },

    {id:"torta-limao", nome:"TORTA DE LIMÃO",titulo: "Torta de Limão", descricao: "Limão", imagem:"imagens/sobremesa/torta-limao.jpg" },

    /*BEBIDAS*/

    {id:"coquinha-gelada", nome:"REFRIGERANTE",titulo: "Refrigerante", descricao: "Coca-Cola, Pepsi, Fanta e Kuat ", imagem:"imagens/bebidas/refrigerante.jpg" },

    {id:"laranja", nome:"DEL VALLE",titulo: "Del Valle", descricao: "Uva, Laranja, Marácuja", imagem:"imagens/bebidas/dellvale.jpg" },
    
    {id:"limao", nome:"CHOPP",titulo: "CHOPP", descricao: "Heineken e Amstel", imagem:"imagens/bebidas/choop.jpg" },

    


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