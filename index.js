document.addEventListener("keydown",function(e){
    change(e.key);
}); 

for (var i = 0;i<document.querySelectorAll("button").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var buttonInner = this.innerHTML;
        var pathSound = "";
        
        var audio = new Audio(change(buttonInner));
        audio.play();
        //this.style.color = "white";

    });
   
}

function change(key){
    console.log(key);
    switch (key) 
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
    return pathSound
}




