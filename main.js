const robo = document.querySelector(".robo")
const controleAjuste = document.querySelectorAll(".controle-ajuste")


controleAjuste.forEach((element)=>{
    console.log(element);
    element.addEventListener("click" , (event)=>{
        calculo(event.target.textContent , event.target.parentNode);
        c
    })
})

function calculo(params , controle) {
    const peca = controle.querySelector(".controle-contador")
    if (params === "-") {
        peca.value = parseInt(peca.value) - 1;
    }else{ontrol
        peca.value = parseInt(peca.value) + 1;
    }
}


robo.onclick = ()=>{
    console.log("ola");
}


