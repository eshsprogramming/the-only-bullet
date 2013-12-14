//var start = 0;

function init() {
	//var img = new Image();
	//img.src = "assets/images/bullet.png";
	requestAnimationFrame(draw);
}

function draw(timestamp) {
	var img = new Image();
	img.src = "assets/images/bullet.png";
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
	
	//ctx.fillStyle = "rgba(255,255,0,0.5)";
	//ctx.fillRect (100, 50, 550, 500);
	//ctx.fillStyle = "rgba(0,255,255,0.5)";
	//ctx.fillRect (200, 100, 550, 500);
	//ctx.fillStyle = "rgba(255,0,255,0.5)";
	//ctx.fillRect (300, 150, 550, 500);
	//ctx.clearRect (350, 200, 250, 300);
	for (var h=0; h<20; h++) {
		for (var i=0; i<20; i++) {
			ctx.fillStyle = "rgba(" + 0 + "," + 12*i + "," + 12*h + ",0.5)";
			ctx.fillRect (25*h, 25*i, 25, 25);
		}
	}
	
	img.onload = function() {
		ctx.drawImage(img,50,50);
	}
	//console.log(x);
	
	requestAnimationFrame(draw);
}