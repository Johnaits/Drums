var pathSound = "";

//ENTRADA VIA TECLADO
// *acrescentar possibilidade de maiusculas*
document.addEventListener("keydown",function(e){
    var buttonInner = e.key;
    change(buttonInner);
    buttonAnimation(buttonInner);
}); 

//ENTRADA VIA MOUSE
for (var i = 0;i<document.querySelectorAll("button").length;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function(){       
    var buttonInner = this.innerHTML;
    change(buttonInner);
    buttonAnimation(buttonInner);
    });   
}

//SAÍDA DO SOM
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
        var audio = new Audio(pathSound);
        audio.play();
        
}

function buttonAnimation(key){
    var activebutton = document.querySelector("."+key)
    var clsName = activebutton.className;
    activebutton.className = (activebutton.className + " pressed");
    setTimeout(() => {
        activebutton.className = clsName;
    }, 50);
    console.log(activebutton);
}



