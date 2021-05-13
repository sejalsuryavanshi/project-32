const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time=0;
var bg="sunrise1.png";


function preload() {
    getBackgroundImg();

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

// add condition to check if any background image is there to add
  if(backgroundImg){
        background(backgroundImg);
   }
       
   Engine.update(engine);

 //  textSize(35)
  //      fill("white");
   //   text ("Time: "+time,200,100)

   

 //   if(hour < 12 && hour > 0){
 //       ampm = "AM";
  //  }else {
  //      ampm = "PM";
  //  }
    
    
    
    //write code to display time in correct format here
}



async function getBackgroundImg(){

    

        // write code to fetch time from API
         var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
       
         //change the data in JSON format
         var responseJSON = await response.json();
         console.log("Time",responseJSON)
         // write code slice the datetime
         var datetime = responseJSON.datetime;
         var hour = datetime.slice(11,13);
         console.log(hour);
   
        if(hour>=04&&hour<=06){
            bg="sunrise1.png"
        }else if(hour>=06&&hour<=08){
            bg="sunrise2.png"
        }else if(hour>=08&&hour<=10){
            bg="sunrise3.png"
        }else if(hour>=10&&hour<=12){
            bg="sunrise4.png"
        }else if(hour>=12&&hour<=14){
            bg="sunrise5.png"
        }else if(hour>=14&&hour<=16){
            bg="sunrise6.png"
        }else if(hour>=16&&hour<=18){
            bg="sunset7.png"
        }else if(hour>=18&&hour<=20){
            bg="sunset8.png"
        }else if(hour>=20&&hour<=22){
           bg="sunset9.png"
        }else if(hour>=23&&hour<=24){
            bg="sunset10.png"
            //00=12:00 at night;
        }else if(hour>=00&&hour<=01){
            bg="sunset11.png"
        }else if(hour>=01&&hour<=03){
            bg="sunset12.png"
        }
        backgroundImg = loadImage(bg);

    }
