
var n=0




function makeanimation(currentkey){
document.querySelector("."+currentkey).classList.add("pressed");
setTimeout(function(){document.querySelector("."+currentkey).classList.remove("pressed");},200);


};


document.querySelector("button").addEventListener("keydown",function(event){
 makesound(event.key);
 makeanimation(event.key);
   
     
});
 function makesound(key)  {   
      switch (key) {
         	case "w":
         		var audio=new Audio("sounds/tom-1.mp3");
         		audio.play();
         		break;

         	case "a":
         		var audio=new Audio("sounds/tom-2.mp3");
         		audio.play();
         		break;

         	case "s":
         		var audio=new Audio("sounds/tom-3.mp3");
         		audio.play();
         		break;
         				
         	case "d":
         		var audio=new Audio("sounds/tom-4.mp3");
         		audio.play();
         		break;
         	
         	case "j":
         		var audio=new Audio("sounds/tom-5.mp3");
         		audio.play();
         		break;

         	case "k":
         		var audio=new Audio("sounds/tom-6.mp3");
         		audio.play();
         		break;

         	case "l":
         		var audio=new Audio("sounds/tom-7.mp3");
         		audio.play();
         		break;						
         	default:
         		// statements_def
         		break;
         };

};
var numberofDrumButton=document.querySelectorAll(".set .drum").length;


while(n<numberofDrumButton){
document.querySelectorAll("button")[n].addEventListener("click",function(event){
         
        var innerHtmlButton=this.innerHTML;
         makesound(innerHtmlButton);
         makeanimation(innerHtmlButton);

	
    
});
n++;
}

for (var i =0; i <=numberofDrumButton; i++) {
	
imageofButton="url('images/tom"+i+".png')";
document.querySelectorAll(".set .drum")[i].style.backgroundImage=imageofButton;

}

