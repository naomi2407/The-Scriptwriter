// Creation and Computation, Experiment 3
// "The Scriptwriter" created by Naomi Shah
//Digital Futures Fall Semester 2018

var serial;       //variable to hold the serial port object
var ardVal = [];  //array that will hold all values coming from arduino
var serialPortName = 'COM6';        //FOR PC it will be COMX on mac it will be something like "/dev/cu.usbmodemXXXX"
                                    //Look at P5 Serial to see the available ports
//var slider;
var Location = [
    "That night in the kitchen",
    "It was a bright day in the garden",
    "The walls of the fortress were high"
];
  
var Emotions = [
    "She felt scared by what stood before her",
    "She felt peace in that moment",
    "She had a lump in her throat"
];
   
var Action = [
    "She took a knife and shoved it into his stomach",
    "And ran her fingers through her hair",
    "She pet the back of her iguana"
];
   
var Dialogue = [
    "‘I am not going to let you get the better of me’ she yells.",
    "‘It’s a new beginning,' she said.",
    "‘Don’t let me down’ she whispered."
];
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  serial = new p5.SerialPort();       //create the serial port object
  serial.open(serialPortName);        //open the serialport. determined 
  serial.on('open',ardCon);           //open the socket connection and execute the ardCon callback
  serial.on('data',dataReceived);     //when data is received execute the dataReceived function

    textFont ("Courier");
//slider= createSlider (0, 1023, 1023);
//slider.position (390, 530);
}   

    function dataReceived()   //this function is called every time data is received
{
var rawData = serial.readStringUntil('\r\n'); //read the incoming string until it sees a newline
    if(rawData.length>1)                      //check that there is something in the string
    {                                         //values received in pairs  index,value
      var incoming = rawData.split(",");      //split the string into components using the comma as a delimiter
      for(var i=0;i<incoming.length;i++)
      {
      ardVal[i]=parseInt(incoming[i]);        //convert the values to ints and put them into the ardVal array
      }
    }
}
function draw() {
    var a = ardVal();
    if (a < 300)
    { document.getElementById("loc").innerHTML = Location[1], 12, 200, 2400, 1000; }
    else if(a < 600)
        {
        document.getElementById("loc").innerHTML = Location[0], 12, 200, 2400, 1000; 
    }
    else { document.getElementById("loc").innerHTML = Location[2], 12, 200, 2400, 1000; }
    //text (a, 12, 200, 2400, 1000);
//text (Location[1], 12, 200, 240, 100);
}

function ardCon()
{
  console.log("connected to the arduino!! Listen UP");
}
