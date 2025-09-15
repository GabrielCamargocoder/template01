const links = document.querySelectorAll('.link')
const sections = document.querySelectorAll('.cardapio2')

links.forEach((link) => {
    
    link.addEventListener('click', (e) =>{

        e.preventDefault()

        const target = link.getAttribute('data-target')
        
        sections.forEach((cardapio2) => {
            
            cardapio2.style.display = 'none'
        });
        
        const section = document.querySelector(target)
        section.style.display = 'flex'
        section.scrollIntoView({behavior: 'smooth'})

    })
});