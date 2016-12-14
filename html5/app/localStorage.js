var txt = document.getElementById("txt"),
	btn = document.getElementById("btn");

function start(){
	if(localStorage.text){
		txt.value = localStorage.text;
	}

	btn.onclick = function(){
		localStorage.text = txt.value;
	}
}

start();