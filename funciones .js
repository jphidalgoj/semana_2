let ataqueJugador;
let ataqueEnemigo;
let vidasMascota=3;
let vidasEnemigo=3;
function iniciarJuego(){
    let seccionAtaque=document.querySelector("#seccion-ataque");
    seccionAtaque.style.display="none";

    let botonInicio=document.querySelector("#seleccionar-mascota");
    botonInicio.addEventListener("click", seleccionarMascota);

    let botonFuego= document.querySelector("#boton-fuego");
    botonFuego.addEventListener("click",ataqueFuego);
    let botonAgua= document.querySelector("#boton-agua");
    botonAgua.addEventListener("click",ataqueAgua);
    let botonTierra= document.querySelector("#boton-tierra");
    botonTierra.addEventListener("click",ataqueTierra);
    let botonReiniciar=document.querySelector("#boton-reiniciar");
    botonReiniciar.addEventListener("click", reiniciarJuego);
    let seccionReiniciar=document.querySelector("#reiniciar");
    seccionReiniciar.style.display="none";
}


function seleccionarMascota(){
    let seccionMascota=document.querySelector("#seccion-mascota");
    seccionMascota.style.display="none";

    let seccionAtaque=document.querySelector("#seccion-ataque");
    seccionAtaque.style.display="block";

    let hipodogue=document.querySelector("#hipodogue");
    let capipepo=document.querySelector("#capipepo");
    let ratigueya=document.querySelector("#ratigueya");
    let spanMascota=document.querySelector("#nombreMascota");

    if(hipodogue.checked){
        spanMascota.innerHTML="Hipodogue";
    }else if(capipepo.checked){
        spanMascota.innerHTML="Capipepo";
    }else if(ratigueya.checked){
        spanMascota.innerHTML="Ratigueya"
    }else{
        alert("Selecciona una mascota")
    }
    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio= aleatorio(1,3);
    let spanMascotaEnemigo=document.querySelector("#nombre-enemigo");

    if(ataqueAleatorio==1){
        spanMascotaEnemigo.innerHTML="Hipodogue";
    }else if(ataqueAleatorio==2){
        spanMascotaEnemigo.innerHTML="Capipepo";
    }else{
        spanMascotaEnemigo.innerHTML="Ratigueya";
    }
}

function ataqueFuego(){
    ataqueJugador="Fuego";
    ataqueAleatorioEnemigo();
}

function ataqueAgua(){
    ataqueJugador="Agua";
    ataqueAleatorioEnemigo();
}

function ataqueTierra(){
    ataqueJugador="Tierra";
    ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo(){
    let ataqueEnemigoAleatorio=aleatorio(1,3);

    if(ataqueEnemigoAleatorio==1){
        ataqueEnemigo="Fuego";
    }else if (ataqueEnemigoAleatorio==2){
        ataqueEnemigo="Agua";
    }else{
        ataqueEnemigo="Tierra";
    }
    combate();
}
function combate(){
    let spanVidasMascota=document.querySelector("#vidas-mascota");
    let spanVidasEnemigo=document.querySelector("#vidas-enemigo");


    if(ataqueJugador==ataqueEnemigo){
        crearMensaje("Empate")
    }else if(ataqueJugador=="Fuego" && ataqueEnemigo=="Tierra"){
        crearMensaje("Ganaste");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML=vidasEnemigo;
    }else if(ataqueJugador=="Agua" && ataqueEnemigo=="Fuego"){
        crearMensaje("Ganaste");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML=vidasEnemigo;
    }else if(ataqueJugador=="Tierra" && ataqueEnemigo=="Agua"){
        crearMensaje("Ganaste");
        vidasEnemigo--;
        spanVidasEnemigo.innerHTML=vidasEnemigo;
    }else{
        crearMensaje("Perdiste");
        vidasMascota--;
        spanVidasMascota.innerHTML=vidasMascota;
    }
    revisarVidas()
}
function revisarVidas(){
    if(vidasEnemigo==0){
        crearMensajeFinal("Felicidades Ganaste");
        let seccionReiniciar=document.querySelector("#reiniciar");
        seccionReiniciar.style.display="block";
    }else if(vidasMascota==0){
        crearMensajeFinal("Lo siento has perdido");
        let seccionReiniciar=document.querySelector("#reiniciar");
        seccionReiniciar.style.display="block";
    }
}
function crearMensaje(mensaje){
    let seccionMensaje= document.querySelector("#mensajes")

    let parrafo= document.createElement("p");
    parrafo.innerHTML="Tu mascota ataco con " +ataqueJugador + ", la mascota del enemigo ataco con "+ ataqueEnemigo+", " + mensaje;
    
    seccionMensaje.appendChild(parrafo);
}

function crearMensajeFinal(resultado){
    let seccionMensaje= document.querySelector("#mensajes")

    let parrafo= document.createElement("p");
    parrafo.innerHTML=resultado;
    
    seccionMensaje.appendChild(parrafo);

    let botonFuego= document.querySelector("#boton-fuego");
    botonFuego.disabled=true;
    let botonAgua= document.querySelector("#boton-agua");
    botonAgua.disabled=true;
    let botonTierra= document.querySelector("#boton-tierra");
    botonTierra.disabled=true;
}
function reiniciarJuego(){
    location.reload();
}
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1) + min )
}


window.addEventListener("load", iniciarJuego);