//var start = 0;
var img = new Image();
function init() {
	//var img = new Image();
	img.src = "assets/images/bullet2.png";
	img.onload = function() {
		requestAnimationFrame(draw);
	}
}

function draw(timestamp) {
	var canvas = document.getElementById("gameCanvas");
	var ctx = canvas.getContext("2d");
	//var start = 0;
	/*if (start===0) { 
		start = timestamp;
	}
	var x = -(timestamp-start);*/
	console.log(timestamp/1000);
	//console.log(start);
	
	ctx.clearRect(0,0,1000,700);
	ctx.fillRect(0,timestamp/100,25,25);
	
	for (var h=0; h<20; h++) {
		for (var i=0; i<20; i++) {
			ctx.fillStyle = "rgba(" + 0 + "," + 12*i + "," + 12*h + ",0.5)";
			ctx.fillRect (25*h, 25*i, 25, 25);
		}
	}
	
	
	ctx.drawImage(img,timestamp/100,0);
	//console.log(x);
	requestAnimationFrame(draw);
}