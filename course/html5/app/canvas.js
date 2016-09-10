var CANVAS_WIDTH = 500,
	CANVAS_HEIGHT = 500;

var myCanvas, ctx;

function createCanvas(container) {
	var container = document.getElementById(container);
	container.innerHTML = '<canvas id="my-canvas" width="'+CANVAS_WIDTH+'" height="'+CANVAS_HEIGHT+'"></canvas>'
	myCanvas = document.getElementById("my-canvas");
	ctx = myCanvas.getContext("2d");
}

// draw 多角形
function drawM(){
	ctx.fillStyle = "#eeeeef";
	ctx.fillRect(0, 0, 300, 400);

	var dx = 150,
		dy = 150,
		s = 100;

	ctx.beginPath();
	ctx.fillStyle = "rgb(100, 250, 100)";
	ctx.strokeStyle = "rgb(0, 0, 100)";

	var x = Math.sin(0),
		y = Math.cos(0),
		dig = Math.PI / 15 *11;

	for(var i=0; i<30; i++){
		var x = Math.sin(i*dig),
			y = Math.cos(i*dig);

		ctx.lineTo(dx+x*s, dy+y*s);
	}

	ctx.closePath();
	ctx.fill();
	ctx.stroke();
}

// 绘制矩形
function drawRect(){
	ctx.fillStyle = "#ff00fe";
	ctx.fillRect(0, 0, 100, 100);
}

// 渐变
function drawGradient(isRadial) {
	// 渐变方向
	var gradient = isRadial ? ctx.createRadialGradient(0, 200, 0, 0, 200, 400) : ctx.createLinearGradient(0, 0, 150, 100);

	gradient.addColorStop(0, "black");
	gradient.addColorStop(0.5, "red");
	gradient.addColorStop(1, "blue");

	ctx.fillStyle = gradient;
	ctx.fillRect(0, 0, 300, 300);
}

// 绘制变形图形
function drawTransfer(){
	ctx.fillStyle = "#eeeeef";
	ctx.fillRect(0, 0, 500, 0);

	ctx.translate(200, 50);
	ctx.fillStyle = "rgba(255, 0, 0, 0.25)";

	for(var i=0; i<50; i++){
		ctx.translate(25, 25);
		ctx.scale(0.95, 0.95);
		ctx.rotate(Math.PI/10);
		ctx.fillRect(0, 0, 100, 50);
	}

}

createCanvas("canvas-container");
// drawRect();
// drawM();
// drawGradient(1);
drawTransfer();