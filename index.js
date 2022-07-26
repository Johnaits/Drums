for (var i = 0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        
        switch (this.innerHTML) {
            case "w":
                var crash = new Audio(sounds/crash.mp3);
                crash.play();
                //this.style.color = "white"; 
                break;

            case "a":
                var kick = new Audio(sounds/kick.mp3);
                kick.play();
                //this.style.color = "white"; 
                break;

            case "s":
                var snare = new Audio(sounds/snare.mp3);
                snare.play();
                //this.style.color = "white"; 
                break;

            case "d":
                var tom1 = new Audio(sounds/tom-1.mp3);
                tom1.play();
                //this.style.color = "white"; 
                break;

            case "j":
                var tom2 = new Audio(sounds/tom-2.mp3);
                tom2.play();
                //this.style.color = "white"; 
                break;

            case "k":
                var tom3 = new Audio(sounds/tom-3.mp3);
                tom3.play();
                //this.style.color = "white"; 
                break;

            case "l":
                var tom4 = new Audio(sounds/tom-4.mp3);
                tom4.play();
                //this.style.color = "white"; 
                break;
            default:console.log(button.innerHTML);
                break;
        }





        /* switch (this.innerHTML) 
        {
            case "w":
                var pathSound = "sounds/crash.mp3";
                alert(path);
                break;
        
            default:
                break;
        }
        var audio = new Audio(pathSound);
        audio.play();
        this.style.color = "white"; */

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
