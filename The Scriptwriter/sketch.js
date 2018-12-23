var slider;
var Location= [
        "That night in the kitchen,",
        "It was a bright day in the garden",
        "The walls of the fortress were high"
      ]
  
   var Emotions = [
        "She felt scared by what stood before her",
        "She felt peace in that moment",
        "She had a lump in her throat"
      ]
   
   var Action = [
        "She took a knife and shoved it into his stomach",
        "And ran her fingers through her hair",
        "She pet the back of her iguana"
      ]
   
    var Dialogue = [
        "‘I am not going to let you get the better of me’ she yells.",
        "‘It’s a new beginning,' she said.",
         "‘Don’t let me down’ she whispered."
          ]
  
function setup() {
  createCanvas(windowWidth, windowHeight);
textFont ("Courier");

slider= createSlider (0, 1023, 1023);
slider.position (400,500);
}
  
    
function draw() {
var a=slider.value()
 fill (0,255,0)
if (a<300)
{text(Location[1], 12, 200, 2400, 1000)}
    else 
        if (a<600)
    {text (Location[0], 12, 200, 2400, 1000)}
    else {text (Location[2], 12, 200, 2400, 1000)}
    //text (a, 12, 200, 2400, 1000);
//text (Location[1], 12, 200, 240, 100);
}
    

