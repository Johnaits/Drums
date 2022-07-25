
function handclick(){

    if (i==0){
        var audio = new audio('sounds/tom-1.mp3');
        audio.play();
        alert("tom-1");
    }

    if (i==1){
        var audio = new audio('sounds/tom-2.mp3');
        audio.play();
        alert("tom-2");
    }
}

for (var i = 0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handclick);
    
}