var countInterval = setInterval(startCountdown,1000);
function startCountdown(){
	var toDate = new Date('23 oct 2018')
	var d = new Date();
	var now = Date.now();
	var diff = toDate - now;
	var days = Math.floor(diff / (1000 * 60 * 60 * 24));
	var hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	var minuts = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
	var seconds = Math.floor((diff % (1000 * 60)) / (1000));
	if(toDate < now){
		document.getElementById('pfCountdown').innerHTML = "Expired";
		clearInterval(countInterval)
	}else{
		document.getElementById('pfCountdown').innerHTML = days + "D " + hours + "H " + minuts + "M " + seconds + "S ";
	}
}