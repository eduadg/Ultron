const robo = document.querySelector(".robo")
const controleAjuste = document.querySelectorAll(".controle-ajuste")


controleAjuste.forEach((element)=>{
    element.addEventListener("click" , (event)=>{
        calculo(event.target.textContent , event.target.parentNode);
        
    })
})

function calculo(params , controle) {
    const peca = controle.querySelector(".controle-contador")
    if (params === "-") {
        peca.value = parseInt(peca.value) - 1;
    }else{
        peca.value = parseInt(peca.value) + 1;
    }
}


robo.onclick = ()=>{
    console.log("ola");
}


