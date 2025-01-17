/*Animação do header*/
window.addEventListener("scroll", function(){
    const header = document.querySelector('#header')
    header.classList.toggle('rolagem', window.scrollY > 0)
})

/*Animação do sobre nós*/

const sobre = document.querySelector('#sobre');
const animacaoSobre = () => {
    const topo = window.pageYOffset + window.innerHeight * 0.85
    if (topo > sobre.offsetTop) {
        sobre.classList.add("animate")
    }else{
        sobre.classList.remove("animate")
    }
}

animacaoSobre()

window.addEventListener("scroll", ()=>{
    animacaoSobre()
})

