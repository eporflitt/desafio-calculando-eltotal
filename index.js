precio = 400000;


precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio
console.log(precio)


document.querySelector("#btnSumar").addEventListener("click",sumarUno);
document.querySelector("#btnRestar").addEventListener("click",restarUno);
document.querySelector("#btnRestar").addEventListener("click",restarUno);
let contador=0
console.log(sumarUno)

function multiplicar() {
    precioPagar = (contador * precio);
    console.log(precioPagar);
    document.querySelector("#precio-total").innerHTML=precioPagar
}

function sumarUno(){
    contador = contador+1;
    document.querySelector("#msgContador").innerHTML=contador
    multiplicar()
}

function restarUno() {
    if (contador > 0) {
    contador = contador-1;
    document.querySelector("#msgContador").innerHTML=contador
    }
    multiplicar()

}




