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
	console.log(timestamp/10);
	//console.log(start);
	
	ctx.clearRect(0,0,1000,700);
	ctx.fillRect(0,timestamp/100,25,25);
	
	for (var h=0; h<32; h++) {
		for (var i=0; i<24; i++) {
			ctx.fillStyle = "rgba(" + 0 + "," + i*12 + "," + 8*h + ",0.5)";
			ctx.fillRect (20*h, 20*i, 20, 20);
		}
	}
	
	
	ctx.drawImage(img,timestamp/100,0);
	//console.log(x);
	requestAnimationFrame(draw);
}