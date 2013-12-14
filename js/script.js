//var x
//var y

function draw()
{
var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');
ctx.fillStyle="#FF0000";
ctx.fillRect(0,0,20,75);
var img=document.getElementById("/assets/images/testPotato.jpg");
ctx.drawImage(img,10,10);
}

