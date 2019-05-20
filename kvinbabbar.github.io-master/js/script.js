const pregForm = document.querySelector("form");
const submitBtn = document.querySelector("input[type='submit']");
const img = document.querySelector("#pregImg");
const loader = document.querySelector(".loader");
const audio = document.querySelector("audio");
const offlineStatus = document.querySelector("#offlineStatus");

pregForm.addEventListener("submit", event => {
	event.preventDefault();
	pregForm.reset();
	console.log('Form submission cancelled.');
	
	loader.classList.add("show");

	// make xhttp request
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		var answer;
		
		if(this.readyState == 4 && this.status == 200){
			var result = JSON.parse(this.responseText);
			console.log(result.answer)
			loadImage(result);
		}			
	}
	
	xhttp.open("get", "https://yesno.wtf/api", true);
	xhttp.send();
})

function loadImage(r){
	img.src = r.image;
	img.addEventListener("load", function(){
		console.log("image loaded");
		loader.classList.remove("show");
		if(r.answer == "yes"){
			audio.src = "audios/yes.mp3";
		}else{
			audio.src = "audios/no.mp3";
		}
		audio.load();
		audio.play();
		window.navigator.vibrate(100, 30, 50, 100);
		submitBtn.value = "Recheck!"	
	})
}

// show offline msg
window.addEventListener("load", function(){
	if(navigator.onLine == false){
		offlineStatus.classList.add("show");
	}
})
window.addEventListener('online', function(e) {
	offlineStatus.children[0].innerHTML = "We're back.";
	setTimeout(() => offlineStatus.classList.remove("show"), 2000);
}, false);

window.addEventListener('offline', function(e) {
	console.log('Connection is down.');
	offlineStatus.children[0].innerHTML = "Connection is down.";
	offlineStatus.classList.add("show");
  
}, false);