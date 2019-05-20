function initComparision(){
	var i, imgOverlay;
	imgOverlay = document.getElementsByClassName('comp-img-overlay');
	for(i = 0; i < imgOverlay.length; i++){
		compareImg(imgOverlay[i]);
	}
	function compareImg(img){
		var img, imgWidth, slider, clicked = 0;
		imgWidth = img.offsetWidth;
		imgHeight = img.offsetHeight;
		img.style.width = (imgWidth/2) + "px";
		slider = document.createElement("DIV");
		slider.classList.add("img-comp-slider");
		img.parentElement.insertBefore(slider, img);
		slider.style.left = (imgWidth / 2) - (slider.offsetWidth / 2) + "px";
		slider.style.top = (imgHeight / 2) - (slider.offsetHeight / 2) + "px";
		slider.addEventListener("mousedown", slideStart);
		slider.addEventListener("touchstart", slideStart);
		window.addEventListener("mouseup", slideEnd);
		window.addEventListener("touchend", slideEnd);
		function slideStart(e){
			e.preventDefault();
			clicked = 1;
			window.addEventListener('mousemove', slideMove);
		}
		function slideEnd(){
			clicked = 0;
		}
		function slideMove(e){
			var pos;
			if(clicked == "0") return false;
			pos = getImgPosition(e);
			if(pos < 0) pos = 0;
			if(pos > imgWidth) pos = imgWidth;
			slider.style.left = pos - (slider.offsetWidth / 2) + "px";
			img.style.width = pos + "px";
		}
		function getImgPosition(e){
			var a, x = 0;
			e = e || window.event;
			e.preventDefault();
			a = img.getBoundingClientRect();
			x = e.pageX - a.left;
			x = x - window.pageXOffset;
			return x;
		}
	}
}
initComparision()