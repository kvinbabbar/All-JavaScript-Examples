// select all elements
var player = document.querySelector(".player");
var video = player.querySelector(".player-video");
var time = player.querySelector(".player-time");
var toggle = player.querySelector(".player-toggle");
var rangeInputs = player.querySelectorAll("input[type='range']");
var rangeToggles = player.querySelectorAll(".range-toggle");
var skipButtons = player.querySelectorAll(".player-skip");
var fullscreen = player.querySelector(".player-fullscreen");
var progress = player.querySelector(".player-progress");
var progressFilled = player.querySelector(".player-progress-filled");

// build out functions
function togglePlay(){
	var method = video.paused ? "play" : "pause";
	video[method]();
}

function updateButton(){
	var icon = video.paused ? "icon-control-play" : "icon-control-pause";
	toggle.querySelector("i").setAttribute("class", icon)
}

function skipVideo(){
	video.currentTime += parseFloat(this.dataset.skip);
}

function toggleFullScreen() {
	if (window.innerWidth !== screen.width && window.innerHeight !== screen.heightt) {
		player.requestFullscreen();
	} else if (player.mozRequestFullscreen){
		player.mozRequestFullscreen();
	} else if (player.webkitRequestFullscreen){
		player.webkitRequestFullscreen()
	} else if (player.msRequestFullscreen){
		player.msRequestFullscreen()
	}
	
	if(document.exitFullscreen) {
		document.exitFullscreen();
	} else if(document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if(document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	}
}

function handleRangeUpdate(e){
	let currentRange = this.querySelector('input[type="range"]');
	let rangeIcon = this.parentElement.querySelector('i');
	video[this.name] = this.value;
	console.log(e)
	if(this.name == 'volume'){
		if(this.value == "0"){
			rangeIcon.setAttribute('class', 'icon-volume-off');
		}else if (this.value <= 0.5){
			rangeIcon.setAttribute('class', 'icon-volume-1');
		}else{
			rangeIcon.setAttribute('class', 'icon-volume-2');
		}
	}
}

function showRangeElement(e){
	if(e.target == this.querySelector('i')){	
		if(this.classList.contains('active')){
			this.classList.remove("active");
		}else{
			this.classList.add("active");
		}
	}
}
function totalTime(totalDuration){
	const mins = Math.floor(totalDuration / 60);
	var secs = Math.floor(totalDuration % 60);
	secs = secs < 10 ? `0${secs}` : secs;
	return `${mins}:${secs}`;
}

function handleProgress(e){
	var scrubWidth = (this.currentTime / this.duration) * 100;
	progressFilled.style.width = parseFloat(scrubWidth) + "%";
	time.innerHTML = `
		${totalTime(video.currentTime)} / ${totalTime(video.duration)}
	`
}

function scrub(e){
	var percent = (e.offsetX / progress.offsetWidth) * video.duration;
	video.currentTime = percent;
}

function disableContentMenu(e){
	console.log(e)
	return false;
}
// hook up the event listeners
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress)
window.addEventListener('keyup', (e) => {
	if(e.keyCode == "32"){
		togglePlay();
	}
})
toggle.addEventListener('click', togglePlay)
skipButtons.forEach(skip => skip.addEventListener('click', skipVideo))
fullscreen.addEventListener('click', toggleFullScreen)
rangeInputs.forEach(range => range.addEventListener('input', handleRangeUpdate))
rangeToggles.forEach(range => range.addEventListener('click', showRangeElement))
progress.addEventListener('click', scrub)
