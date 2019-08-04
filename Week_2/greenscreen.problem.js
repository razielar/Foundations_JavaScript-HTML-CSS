// write your code here

var fgImage = new SimpleImage("drewRobert.png");
var bgImage = new SimpleImage("dinos.png");

//Make a blank image with the same size
var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

for(var pixel of fgImage.values() ){
    //Look at current pixel and if it's green
    if(pixel.getGreen() > pixel.getRed()+pixel.getBlue()){
        var x = pixel.getX();
        var y = pixel.getY();
        var bgPixel = bgImage.getPixel(x,y);
        output.setPixel(x,y,bgPixel);
    } else {
        output.setPixel(pixel.getX(),pixel.getY(),pixel);
        
    }
}

print(output);



