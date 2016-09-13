
var canvas = document.getElementById("canvas"),
	stage,
	text,
	count = 0;

function start(){
	stage = new createjs.Stage(canvas);
	text = new createjs.Text("number=>", "2em Arial", "#f00");

	stage.addChild(text);

	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", tick);
}


function tick(e) {
	count++;
	if(count > 200){
		return;
	}
	text.text = "number=>"+count+"!";
	stage.update();
}


start();