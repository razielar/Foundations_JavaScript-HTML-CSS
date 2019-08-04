// Functions of canvas.html

function dolime() {

    var dd1= document.getElementById("d1");
    dd1.style.backgroundColor= "lime"; //background colour

}

function doyellow() {

    var dd1= document.getElementById("d1");
    dd1.style.backgroundColor="white";

    //Graphic context
    var ctx= dd1.getContext("2d"); //2D dimension
    ctx.fillStyle="yellow";
    ctx.fillRect(10, 10, 40, 40); //coordinates
    ctx.fillRect(60,10, 40, 40);

    //Add some text:
    ctx.fillStyle="black";
    ctx.font= "30px Arial";
    ctx.fillText("Hello", 10, 80);

}




