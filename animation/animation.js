var canvas = document.getElementById("myCanvas");

var x = 50;
var y = 200;

function draw() {
	ctx,clearReact(0,0,canvas.width, canvas.height);
	
	// kaki kiri
	ctx.beginPath();
	ctx.moveTo(x,y);
	ctx.lineTo(x + 20, y - 50);
	ctx.lineTo(x + 40, y);
	ctx.stroke();

	// kaki kanan
	ctx.beginPath();
	ctx.moveTo(x + 40, y);
	ctx.lineTo(x + 60, y - 50);
	ctx.lineTo(x + 80, y);
	ctx.stroke();

	// tubuh
	ctx.beginPath();
	ctx.moveTo(x + 20, y - 50);
	ctx.lineTo(x + 20, y - 100);
	ctx.lineTo(x + 60, y - 100);
	ctx.lineTo(x + 60, y - 50);
	ctx.stroke();

	// kepala
	ctx.beginPath();
	ctx.arc(x + 40, y - 120, 20, 0, Math.PI*2);
	ctx.stroke();

	// kecepatan berjalan
	x += 1;

	// looping animation
	if (x > canvas.width) {
		x = 0;
	}

	// fungsi draw
	requestAnimationFrame(draw);
}
draw();