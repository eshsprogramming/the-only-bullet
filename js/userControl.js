
var x = 0, y = 0;

function keyIsDown(event){
	switch (event.keyCode){
		case 37:
			x = x-3;
			break;
		case 39:
			x = x+3;
			break;
		case 38:
			y = y-3;
			break;
		case 40:
			y = y+3;
			break;
	}
}

function draw(){
    var canvas = document.getElementById("gameCanvas");
    var ctx = canvas.getContext("2d");
    var bulletImg = new Image();

    bulletImg.onload = function(){
		ctx.clearRect(0,0,500,500);
		ctx.drawImage(this, x, y);
    }
    bulletImg.src = "bullet2.png";
	window.addEventListener('keydown', keyIsDown, true);
    requestAnimationFrame(draw);
}