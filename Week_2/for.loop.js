// write your code here: http://www.dukelearntoprogram.com/course1/example/index.php

var img = new SimpleImage(200, 200);
print(img);

//Make this image yellow!
// yellow rgb=(255,255,0)

for (var pixel of img.values()){

    var newG=pixel.getGreen()+255;
    pixel.setGreen(newG);
    var newR=pixel.getRed()+255;
    pixel.setRed(newR);

}

print(img);