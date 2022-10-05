function Abrir(){
    document.getElementById("menuOculto").style.display = "Block";
}

function Ocultar(){
    document.getElementById("menuOculto").style.display = "none";
}

function Todo(){
     var menuOculto =document.getElementById("menuOculto");

     if(menuOculto.style.display == "block"){
        Ocultar();
     }else{
        Abrir();
     }
}
