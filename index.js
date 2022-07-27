document.addEventListener("keydown",function(){
    alert(this.innerHTML);
}); 

for (var i = 0;i<document.querySelectorAll("button").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){

        switch (this.innerHTML) 
        {
            case "w":
                var pathSound = ("sounds/crash.mp3");
                break;

            case "a":
                var pathSound = ("sounds/kick-bass.mp3");
                break;

            case "s":
                var pathSound = ("sounds/snare.mp3");
                break;

            case "d":
                var pathSound = ("sounds/tom-1.mp3");
                break;

            case "j":
                var pathSound = ("sounds/tom-2.mp3");
                break;

            case "k":
                var pathSound = ("sounds/tom-3.mp3");
                break;
                
            case "l":
                var pathSound = ("sounds/tom-4.mp3");
                break;
        
            default:
                break;
        }
        var audio = new Audio(pathSound);
        audio.play();
        //this.style.color = "white";

    });
   
}




/* for (var i = 0;i<document.querySelectorAll(".drum").length;i++){
    alert(i);
    document.querySelectorAll("button")[i].addEventListener("click",handclick);  
}

function handclick(){
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play(); 
} */
