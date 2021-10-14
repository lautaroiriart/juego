document.getElementById(`player`).addEventListener("mouseover", sumarPuntos);

let puntos = 0;
let tiempo = 60;
let necesarios = 30;

function sumarPuntos(){
    puntos++;
    document.getElementById(`puntos`).innerHTML= `Puntos: <b>${puntos}/${necesarios}</b>  `

    
    let numRandom1= Math.round(Math.random()*570);
    let numRandom2= Math.round(Math.random()*570);

    document.getElementById("player").style.marginTop = numRandom1 + "px";
    document.getElementById("player").style.marginLeft = numRandom2 + "px";

    if(puntos==30){
        alert("Ganaste el juego");
    }
}

const restarTiempo=()=>{
    tiempo--
    document.getElementById(`tiempo`).innerHTML = `Tiempo:<b> ${tiempo}</b>`
    if(tiempo==0){
        alert("Perdiste el juego");
        tiempo=0;
        puntos=0;
    }
}

setInterval(restarTiempo,1000);