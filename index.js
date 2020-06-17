const images = [
    'fruit1.jpg',
    'fruit2.jpg',
    'fruit3.jpg',
    'fruit4.jpg',
    'fruit5.jpg'
];

var slider = document.getElementById("slider");
var counter = 0;
function mover(i){
    switch(i){
        case 1:
            counter ++;
            if (counter > images.length -1)  counter = 0;
            slider.src = "img/"+ images[counter];
            break;
        case -1:
              counter --;
              if (counter <0)  counter = images.length -1;
              slider.src = "img/" + images[counter];
              break;
       }
}