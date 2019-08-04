// write your code here

var image = new SimpleImage("duke_blue_devil.png");

for(var pixel of image.values()){
    if(pixel.getRed() < 255){
        //Our desired colour
        pixel.setRed(0);
        pixel.setGreen(255);
        pixel.setBlue(100);
    }
    
}

print(image);
