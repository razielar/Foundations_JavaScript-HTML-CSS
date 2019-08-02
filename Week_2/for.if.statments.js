// write your code here: http://www.dukelearntoprogram.com/course1/example/index.php

var img= new SimpleImage("hilton.jpg");
print(img);

for (var pixel of img.values()){
    if(pixel.getX() <= img.getWidth()/3 ){
        var newR=pixel.getRed()+255;
        pixel.setRed(newR);
    } else if (pixel.getX() > img.getWidth()/3 && pixel.getX() < img.getWidth()*2/3){
        var newG=pixel.getGreen()+255;
        pixel.setGreen(newG);
    } else if (pixel.getX() >= img.getWidth()*2/3){
        var newB=pixel.getBlue()+255;
        pixel.setBlue(newB);
    }
}

print(img);


