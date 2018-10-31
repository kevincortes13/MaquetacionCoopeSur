// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
//Agregando titulo y parrafo del articulo
var txt = document.getElementById('texto-modal').innerHTML;
//al dar click en id=leer que es una etiqueta a
//la cual es Leer mas, ejecutara la funcion
// y hara una serie de procedimientos
//como son:
document.getElementById("leer").onclick = function(){
    //habilitando el display del modal a block
    modal.style.display = "block";
    //asignando al modalImg la imagen del articulo
    modalImg.src = img.src;
    //asignando al caption el titulo y parrafo del articulo
    captionText.innerHTML = txt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}
