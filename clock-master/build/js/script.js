var secHand = document.querySelector('.sec-hand');
var minHand = document.querySelector('.min-hand');
var hrsHand = document.querySelector('.hrs-hand');
var hands = document.querySelector('.hand');
 
function setTime(){
	const now = new Date();
	
	var seconds = now.getSeconds();
	var secDegrees = ((seconds / 60) * 360) + 90;
	secHand.style.transform = `rotate(${secDegrees}deg)`;
	
	var minutes = now.getMinutes();
	var minDegrees = ((minutes / 60) * 360) + ((seconds / 59) * 6) + 90;
	minHand.style.transform = `rotate(${minDegrees}deg)`;
	
	var hours = now.getHours();
	var hrsDegrees = ((hours / 12) * 360) + ((minutes / 59) * 30) + 90;
	hrsHand.style.transform = `rotate(${hrsDegrees}deg)`;
}

setInterval(setTime, 1000);