 var numoOfSquares=6;
var colors;
var picked;
var squares=document.querySelectorAll(".square");
var colorDisplay=document.getElementById("colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#resetButton")
var moodButtons=document.querySelectorAll(".mood")


init();

function init () {
	setupmodebtn()
	setupsquares();
	reset();
  }
function setupmodebtn () {
	for(var i=0;i<moodButtons.length;i++){
	moodButtons[i].addEventListener("click",function(){
	moodButtons[0].classList.remove("selected")
	moodButtons[1].classList.remove("selected")
	this.classList.add("selected");
	this.textContent==="Hard" ? numoOfSquares=6: numoOfSquares=3;
reset();
})
}
}
function setupsquares(){
	for(var i=0;i<squares.length; i++)
{
  squares[i].addEventListener("click",function(){
  var clickedColor=this.style.background;
if(clickedColor===picked){
	changeColor(clickedColor);
	resetButton.textContent="Play Again";
	message.textContent="Correct!";
	h1.style.background=clickedColor;
}
else {
	this.style.background="#232323";
	message.textContent="Try Again";
}
});
	}
	
}




function reset(){
	colors=generateRandomColor(numoOfSquares);
	picked=pickColor()
	colorDisplay.textContent=picked;
	resetButton.textContent="New Colors"
	message.textContent="";
	for(var i=0;i<squares.length; i++){
		if(colors[i]){
				squares[i].style.display="block"
			  
		squares[i].style.background=colors[i];
      }
      else {
      	squares[i].style.display="none"
      }
	}

 h1.style.background="steelblue";
}





// easyBtn.addEventListener("click",function(){
// 	easyBtn.classList.add("selected")
// 	hardBtn.classList.remove("selected")
// 	numoOfSquares=3;
// colors=generateRandomColor(numoOfSquares);
// picked=pickColor()
// colorDisplay.textContent=picked;
// for(var i=0;i<squares.length; i++){
// 	if(colors[i]){
// 		squares[i].style.background=colors[i];
// 	}
//      else{
//      	squares[i].style.display="none";
//      } 
// 	}
// })
// hardBtn.addEventListener("click",function(){
// 	hardBtn.classList.add("selected")
// 	easyBtn.classList.remove("selected")
// 	numoOfSquares=6
//   colors=generateRandomColor(numoOfSquares);
// picked=pickColor()
// colorDisplay.textContent=picked;
// for(var i=0;i<squares.length; i++){
// 	squares[i].style.background=colors[i];
// squares[i].style.display="block";
//      } 
// 	})

resetButton.addEventListener("click",function(){
	reset()
      
	})

 function changeColor (color){
		for(var i=0;i<squares.length; i++){
			squares[i].style.background=color;
		}
	}

function pickColor (){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateRandomColor(num){
var arr=[];
for(var i=0;i<num;i++){
arr.push(randomColor());

}
return arr;
}

 function randomColor(){
 var r=Math.floor(Math.random() * 256);
  var g=Math.floor(Math.random() * 256);
   var b=Math.floor(Math.random() * 256);
return "rgb(" + r+ ", " + g + ", "+ b+")";
}