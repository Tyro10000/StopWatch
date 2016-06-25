//additional functionality
/*document.addEventListener("keypress",press,false);
function press(x){
	if(x.keyCode == 13)
		go();
} */
//
document.getElementById("stopw1").style.display = "none";
document.getElementById("stopw2").style.display = "none";
document.getElementById("int1").style.display = "none";
document.getElementById("int2").style.display = "none";
document.getElementById("chess1").style.display = "none";
document.getElementById("chess2").style.display = "none";

var flat = document.getElementById("can"); //canvas
var ctx = flat.getContext("2d"); //initial
var seconds = 0; //seconds
var mils = 0; //milliseconds
var mins = 0; //minutes obv
// var tmin = document.getElementById("timemin"); //pulling values from input
// var tsec = document.getElementById("timesec"); //  
// var dualMin = [document.getElementById("chesstimer1").value,document.getElementById("chesstimer1").value]; //pulling values from input
// var dualSec = [document.getElementById("chesstimer2").value,document.getElementById("chesstimer2").value];
// var dualmili = [0,0];
// var intervalmin;
// var intervalsec;


ctx.font = "40px Georgia"; //style
ctx.fillStyle = "blue"; //
var time; //incremental tool for move interval
var togWatch = 0; //toggle for stop and start
var togCountDown = 0;
var togInterval = 0;//piggy back toggle
var dualClock = 0;
var tick = false //starts dual clock
ctx.clearRect(0, 0, flat.width, flat.height); //clear..obv
ctx.fillText(mins, 0, flat.height / 2); //sets it to look like a stop watch
ctx.fillText(":", 50, flat.height / 2);//
ctx.fillText(seconds, 80, flat.height / 2);//
ctx.fillText(":", 130, flat.height / 2);//
ctx.fillText(mils, 160, flat.height / 2);//
ctx.beginPath();
ctx.arc(75,25,75,0,2*Math.PI);
ctx.stroke();


function dualset() {
	dualMin = [document.getElementById("chesstimer1").value,document.getElementById("chesstimer1").value]; //pulling values from input
	dualSec = [document.getElementById("chesstimer2").value,document.getElementById("chesstimer2").value];
	ctx.font = "20px Georgia";
	if (tmin.value != "") mins = tmin.value;
	if (tsec.value != "") seconds = tsec.value;
	ctx.clearRect(0, 0, flat.width, flat.height); //clear..obv
	ctx.fillText(dualMin[0], 0, flat.height / 2); //sets it to look like a stop watch
	ctx.fillText(":", 25, flat.height / 2);//
	ctx.fillText(dualSec[0], 40, flat.height / 2);//
	ctx.fillText("*", 45, 100);
	ctx.fillText(":", 75, flat.height / 2);//
	ctx.fillText(mils, 100, flat.height / 2);//
	ctx.fillText(dualMin[1], 150, flat.height / 2); //sets it to look like a stop watch
	ctx.fillText(":", 175, flat.height / 2);//
	ctx.fillText(dualSec[1],190, flat.height / 2);//
	ctx.fillText(":", 225, flat.height / 2);//
	ctx.fillText(mils, 250, flat.height / 2);//
}

function set() {
	if (tmin.value != "") mins = tmin.value;
	if (tsec.value != "") seconds = tsec.value;
	ctx.clearRect(0, 0, flat.width, flat.height); //clear..obv
	ctx.fillText(mins, 0, flat.height / 2); //sets it to look like a stop watch
	ctx.fillText(":", 50, flat.height / 2);//
	ctx.fillText(seconds, 80, flat.height / 2);//
	ctx.fillText(":", 130, flat.height / 2);//
	ctx.fillText(mils, 160, flat.height / 2);//
}
function Interval(minsInt,secsInt) {
	if (tmin.value != "") mins = minsInt;
	if (tsec.value != "") seconds = secsInt;
	ctx.clearRect(0, 0, flat.width, flat.height); //clear..obv
	ctx.fillText(mins, 0, flat.height / 2); //sets it to look like a stop watch
	ctx.fillText(":", 50, flat.height / 2);//
	ctx.fillText(seconds, 80, flat.height / 2);//
	ctx.fillText(":", 130, flat.height / 2);//
	ctx.fillText(mils, 160, flat.height / 2);//
}
 function start() {
	if (togWatch == 0) {
		time = setInterval(function () { move(); }, 1000 / 60);
		togWatch = 1;
	}
	else if (togWatch == 1) {
		clearInterval(time);
		togWatch = 0;
	}
}
function resett() {
	seconds = 0;
	mins = 0;
	mils = -1;
	move();
	clearInterval(dual1);
	clearInterval(dual2);
	clearInterval(countdown);
	clearInterval(time);
	clearInterval(newInterval);
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
	ctx.clearRect(0, 0, flat.width, flat.height); //clear..obv
	ctx.fillText(mins, 0, flat.height / 2); //sets it to look like a stop watch
	ctx.fillText(":", 50, flat.height / 2);//
	ctx.fillText(seconds, 80, flat.height / 2);//
	ctx.fillText(":", 130, flat.height / 2);//
	ctx.fillText(mils, 160, flat.height / 2);//
}
function stop() {
	if (togCountDown == 0) {
		countdown = setInterval(function () { down(); }, 1000 / 60);
		togCountDown = 1;
	}
	else if (togCountDown == 1) {
		clearInterval(countdown);
		togCountDown = 0;
	}


}

function dualstop() {
	if (dualClock == 0) {
		if(tick)clearInterval(dual2);
			tick = true;
			dual1 = setInterval(function () { dualdown1(); }, 1000 / 60);
			dualClock = 1;
	}
	else if (dualClock == 1) {
		clearInterval(dual1);
			dual2 = setInterval(function () { dualdown2(); }, 1000 / 60);
			dualClock = 0;
	}
	
}
function pause() {
	clearInterval(dual1);
	clearInterval(dual2);
}

function pushInterval() {
	
	if (togInterval == 0) {
		newInterval = setInterval(function () { downInterval(); }, 1000 / 60);
		togInterval = 1;
	}
	else if (togInterval == 1) {
		clearInterval(newInterval);
		togInterval = 0;
	}


}
var position = 0;
function nextInterval() {
		Interval(intervalmin[position],intervalsec[position]);
		if(position == 0)
			position = 1;
		else 
			position = 0;
		displayIntervals(position);


}
var setting = 0; //position of interval
function downInterval() {
	
	
	var resetter = 59;
	var subsetter = 1;	//defaults if countdown stops
	if (mils == 0) {
		if (seconds == 0) {
			if (mins == 0) {
				displayIntervals(setting);
				if(setting == 0)
					setting = 1;
				else 
					setting = 0;
					
				// Interval(intervalmin[0],intervalsec[0]);
				// resetter = 0;
				// subsetter = 0;
				mins = intervalmin[setting];
			}
			seconds = intervalsec[setting];
			if(mins != 0 )mins = mins - subsetter;
		}
		mils = resetter;
		seconds = seconds - subsetter;
	}

	if (togInterval == 1) mils = mils - 1;
	ctx.clearRect(0, 0, flat.width, flat.height); //clear..obv
	ctx.fillText(mins, 0, flat.height / 2); //sets it to look like a stop watch
	ctx.fillText(":", 50, flat.height / 2);//
	ctx.fillText(seconds, 80, flat.height / 2);//
	ctx.fillText(":", 130, flat.height / 2);//
	ctx.fillText(mils, 160, flat.height / 2);//
}
function down() {
	var resetter = 59;
	var subsetter = 1;	//defaults if countdown stops
	if (mils == 0) {
		if (seconds == 0) {
			if (mins == 0) {
				dualstop();
				resetter = 0;
				subsetter = 0;
			}
			seconds = resetter;
			mins = mins - subsetter;
		}
		mils = resetter;
		seconds = seconds - subsetter;
	}

	if (togCountDown == 1) mils = mils - 1;
	ctx.clearRect(0, 0, flat.width, flat.height); //clear..obv
	ctx.fillText(mins, 0, flat.height / 2); //sets it to look like a stop watch
	ctx.fillText(":", 50, flat.height / 2);//
	ctx.fillText(seconds, 80, flat.height / 2);//
	ctx.fillText(":", 130, flat.height / 2);//
	ctx.fillText(mils, 160, flat.height / 2);//
}
function dualdown1() {
	var resetter = 59;
	var subsetter = 1;	//defaults if countdown stops
	if (dualmili[0] == 0) {
		if (dualSec[0] == 0) {
			if (dualMin[0] == 0) {
				resetter = 0;
				subsetter = 0;
			}
			dualSec[0] = resetter;
			dualMin[0] = dualMin[0] - subsetter;
		}
		dualmili[0] = resetter;
		dualSec[0] = dualSec[0] - subsetter;
	}

	if (dualClock == 1) dualmili[0] = dualmili[0] - 1;
	ctx.clearRect(0, 0, flat.width, flat.height); //clear..obv
	ctx.fillText(dualMin[0], 0, flat.height / 2); //sets it to look like a stop watch
	ctx.fillText(":", 25, flat.height / 2);//
	ctx.fillText(dualSec[0], 40, flat.height / 2);//
	ctx.fillText("*", 45, 100);
	ctx.fillText(":", 75, flat.height / 2);//
	ctx.fillText(dualmili[0], 100, flat.height / 2);//
	ctx.fillText(dualMin[1], 150, flat.height / 2); //sets it to look like a stop watch
	ctx.fillText(":", 175, flat.height / 2);//
	ctx.fillText(dualSec[1],190, flat.height / 2);//
	ctx.fillText(":", 225, flat.height / 2);//
	ctx.fillText(dualmili[1], 250, flat.height / 2);//
}
function dualdown2() {
	var resetter = 59;
	var subsetter = 1;	//defaults if countdown stops
	if (dualmili[1] == 0) {
		if (dualSec[1] == 0) {
			if (dualMin[1] == 0) {
				resetter = 0;
				subsetter = 0;
			}
			dualSec[1] = resetter;
			dualMin[1] = dualMin[1] - subsetter;
		}
		dualmili[1] = resetter;
		dualSec[1] = dualSec[1] - subsetter;
	}

	if (dualClock == 0) dualmili[1] = dualmili[1] - 1;
	ctx.clearRect(0, 0, flat.width, flat.height); //clear..obv
	ctx.fillText(dualMin[0], 0, flat.height / 2); //sets it to look like a stop watch
	ctx.fillText(":", 25, flat.height / 2);//
	ctx.fillText(dualSec[0], 40, flat.height / 2);//
	ctx.fillText(":", 75, flat.height / 2);//
	ctx.fillText(dualmili[0], 100, flat.height / 2);//
	ctx.fillText(dualMin[1], 150, flat.height / 2); //sets it to look like a stop watch
	ctx.fillText(":", 175, flat.height / 2);//
	ctx.fillText(dualSec[1],190, flat.height / 2);//
	ctx.fillText("*", 195, 100);
	ctx.fillText(":", 225, flat.height / 2);//
	ctx.fillText(dualmili[1], 250, flat.height / 2);//
}
function split() {
	document.getElementById("splitTime").style.color = "red";
	document.getElementById("splitTime").innerHTML = document.getElementById("splitTime").innerHTML + "<br>" + mins + "." + seconds + "." + mils;
}
function wipe() {
	document.getElementById("splitTime").innerHTML = "Split:";
}
function displayIntervals(x){
	intervalmin = [ document.getElementById("m1").value,document.getElementById("m2").value];
	intervalsec = [ document.getElementById("s1").value,document.getElementById("s2").value];
	// document.getElementById("int2").innerHTML = "Next Interval</br>" + intervalmin[x] + " : " + intervalsec[x] + " : 0";
}
