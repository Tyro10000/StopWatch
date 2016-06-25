//additional functionality
/*document.addEventListener("keypress",press,false);
function press(x){
	if(x.keyCode == 13)
		go();
} */
//


var flat = document.getElementById("can"); //canvas
var ctx = flat.getContext("2d"); //initial
var seconds = 0; //seconds
var mils = 0; //milliseconds
var mins = 0; //minutes obv



ctx.font = "40px Verdana"; //style
ctx.fillStyle = "darkblue"; //

ctx.clearRect(0, 0, flat.width, flat.height); //clear..obv
var rotation = 0.0;
	
	ctx.strokeStyle = "green";
	ctx.lineWidth = 8;
	ctx.strokeStyle = "skyblue";
	ctx.clearRect(0, 0, flat.width, flat.height);
	ctx.beginPath();
	ctx.arc(173,120,108,0,2*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.fillText(mins, 88, flat.height / 2); //sets it to look like a stop watch
	ctx.fillText(":", 128, flat.height / 2);//
	ctx.fillText(seconds, 148, flat.height / 2);//
	ctx.fillText(".", 193, flat.height / 2);//
	ctx.fillText(mils, 217, flat.height / 2);//
var togWatch = 0;



 function start() {
	if (togWatch == 0) {
		document.getElementById("togglestop").innerHTML = "Pause";
		time = setInterval(function () { move(); }, 1000/60);
		togWatch = 1;
	}
	else if (togWatch == 1) {
		document.getElementById("togglestop").innerHTML = "Go";
		clearInterval(time);
		togWatch = 0;
	}
}
function resett() {
	seconds = 0;
	mins = 0;
	mils = 0;
	ctx.clearRect(0, 0, flat.width, flat.height);
	ctx.strokeStyle = "skyblue";
	ctx.beginPath();
	ctx.arc(173,120,108,0,2*Math.PI);
	ctx.stroke();
	ctx.fillText(mins, 88, flat.height / 2); //sets it to look like a stop watch
	ctx.fillText(":", 128, flat.height / 2);//
	ctx.fillText(seconds, 148, flat.height / 2);//
	ctx.fillText(".", 193, flat.height / 2);//
	ctx.fillText(mils, 217, flat.height / 2);//
}
function move() {
	if (seconds == 59) {
		mins = mins + 1;
		seconds = 0;
	}
	if (mils == 59) {
		seconds = seconds + 1;
		mils = 0;
	}
	mils = mils + 1;
	
	ctx.strokeStyle = "skyblue";
	ctx.clearRect(0, 0, flat.width, flat.height);
	ctx.beginPath();
	ctx.arc(173,120,108,0,2*Math.PI);
	ctx.stroke();
	ctx.strokeStyle = "green";
	ctx.beginPath();
	ctx.arc(173,120,108,rotation*Math.PI,(rotation+0.2)*Math.PI);
	ctx.stroke();
	ctx.fillStyle = "black";
	ctx.fillText(mins, 88, flat.height / 2); //sets it to look like a stop watch
	ctx.fillText(":", 128, flat.height / 2);//
	ctx.fillText(seconds, 148, flat.height / 2);//
	ctx.fillText(".", 193, flat.height / 2);//
	ctx.fillText(mils, 217, flat.height / 2);//
	
	if(rotation > 2){
		rotation = 0.0;
		
	}
	else{
		rotation = rotation + 0.02;
		
	}
		
	
}

var splitdisplay = 0;
var maxdisplay = 0;
function split() {
	if(maxdisplay < 12){
	if(splitdisplay > 3)
	{
	splitdisplay = 1;
	maxdisplay = maxdisplay + 1;
	document.getElementById("splitTime").innerHTML = document.getElementById("splitTime").innerHTML + "<br><span class='label label-danger'>" + mins + "." + seconds + "." + mils +"</span>";
	}
	else
	{
	splitdisplay = splitdisplay + 1;
	maxdisplay = maxdisplay + 1;
	document.getElementById("splitTime").innerHTML = document.getElementById("splitTime").innerHTML + "<span class='label label-danger'>" + mins + "." + seconds + "." + mils +"</span>";
	}
	}
}
function wipe() {
	splitdisplay = 0;
	maxdisplay = 0;
	document.getElementById("splitTime").innerHTML = "";
}

