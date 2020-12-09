
var numSquares=6;
var colors=[];
var pickColor;
var message= document.querySelector("#message");
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var resetBtn=document.querySelector("#reset");
var h1=document.querySelector("h1");
var mode = document.querySelectorAll(".mode");

init();


function init(){
	setupMode();
    setupSquare();
    setupReset();
    reset();
}



function setupReset(){
resetBtn.addEventListener("click",function(){
	
	reset();
   
});
}

function setupSquare(){
	for(var i=0;i<squares.length;i++){
       squares[i].addEventListener("click",function(){
         var clickedColor=this.style.backgroundColor;
         if(clickedColor==pickColor){
         	message.textContent="Correct";
         	reset.textContent="Play Again";
         	changedColor(pickColor);
         	h1.style.backgroundColor=pickColor;
         }else{
         	this.style.backgroundColor="#232323";  
         	message.textContent="Try Again";       
         }
	});
	
}
}
function setupMode(){
	for(var i=0;i<mode.length;i++){
	mode[i].addEventListener("click",function(){
		mode[0].classList.remove("selected");
		mode[1].classList.remove("selected");
       this.classList.add("selected");
       if(this.textContent=="Easy"){
       	numSquares=3;
       }else{
       	numSquares=6;
       }
       reset();
	});
}
}

function reset(){
	colors = generateRandomColors(numSquares);
	pickColor = pickedColor();
	colorDisplay.textContent = pickColor;
	for(var i = 0 ; i < squares.length ; i++){
		if(colors[i]){
			squares[i].style.display="block";
           squares[i].style.backgroundColor=colors[i];
		}else{
         squares[i].style.display="none";
     }
		
	}
	h1.style.backgroundColor="steelblue";

	resetBtn.textContent="New Game";
    message.textContent="";

}

function generateRandomColors(num){
	var arr=[];
for(var i=0;i<num;i++){
	arr.push(randomColor());
}

return arr;
}

function randomColor(){

var r=Math.floor(Math.random()*256);
var g=Math.floor(Math.random()*256);
var b=Math.floor(Math.random()*256);
	var rancolor="rgb(" + r + ", " + g + ", " + b + ")" ;
	return rancolor;
}


function changedColor(color){
	for(var i=0;i<squares.length;i++){
         squares[i].style.backgroundColor=color;
	}
}

function pickedColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];

}