
function draw() {
	var canvas = document.getElementById("gameCanvas");
	var ctx = canvas.getContext("2d");
	var img = new Image();
	
	//ctx.fillStyle = "rgba(255,255,0,0.5)";
	//ctx.fillRect (100, 50, 550, 500);
	//ctx.fillStyle = "rgba(0,255,255,0.5)";
	//ctx.fillRect (200, 100, 550, 500);
	//ctx.fillStyle = "rgba(255,0,255,0.5)";
	//ctx.fillRect (300, 150, 550, 500);
	//ctx.clearRect (350, 200, 250, 300);
	for (var h=0; h<20; h++) {
		for (var i=0; i<20; i++) {
			ctx.fillStyle = "rgba(" + 0 + "," + 10*i + "," + 10*h + ",0.5)";
			ctx.fillRect (25*h, 25*i, 25, 25);
		}
	}
	
	img.onload = function(){
		//for (var i = 0; i<10; i++) {
			ctx.drawImage(img,32,50);
		//}
	}	
	img.src = "assets/images/bullet.png";
}
