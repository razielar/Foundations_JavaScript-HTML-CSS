// Interaction with the html file

function dochange(){
    alert("clicked button with JS function");
}

// Function to change color:
function changecolor(){

    var dd1= document.getElementById("d1");
    var dd2= document.getElementById("d2");

    dd1.className= "blueback";
    dd2.className= "yellowback";

}

function changetext() {

    var dd1= document.getElementById("d1");
    var dd2= document.getElementById("d2");

    dd1.innerHTML= "Hola";
    dd2.innerHTML= "Adios";

}

