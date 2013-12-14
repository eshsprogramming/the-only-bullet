var x
var y

function draw(x,y)
{
var canvas = document.getElementById('gameCanvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle="#FF0000";
ctx.fillRect(x,y,20,75);
}

