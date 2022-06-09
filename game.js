var buttonColours=["red", "blue" ,"green" ,"yellow"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var started = false;
$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");   //this used to specify which btn selected
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkanswer((userClickedPattern.length)-1);
});

function nextSequence()
{
    userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
gamePattern.push(randomChosenColour);    //push is used to include after the array is created at the end of the array

$("#"+randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
 playSound(randomChosenColour);
a
}



function playSound(name){
    var audio = new Audio("sounds/"+name+".mp3");
    audio.play();

}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
    },100);
}


function checkanswer(currentlevel)
{
        if (gamePattern[currentlevel]===userClickedPattern[currentlevel])
         {
            
                 console.log("success");
                 if (userClickedPattern.length === gamePattern.length)
                 {

                    setTimeout(function () {
                      nextSequence();
                    }, 1000);}
              
         } else {
             console.log("wrong");
             new Audio("sounds/wrong.mp3").play();
             $("body").addClass("game-over");
             setTimeout(function(){
                $("body").removeClass("game-over");
             },200);
             $("#level-title").text("Game Over, Press Any Key to Restart ");
              startOver();
         }
        
}

function startOver(){
     gamePattern=[];
     level=0;
    started = false;
}