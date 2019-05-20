var funcImg = document.getElementsByClassName("funcImg");
var currentImg = document.getElementById("currentImg");
var caption1 = document.getElementById("caption");
var myModal = document.getElementById("myModal");
var imgThumbs = document.getElementById("imgThumbs");
var imgClose = document.getElementById("close");
var popPrev = document.getElementById("popPrev");
var popNext = document.getElementById("popNext");
var ind = 0;
var setAutoplayFunc;

for(let i = 0; i < funcImg.length; i++){
	funcImg[i].onclick = function(){
		setPopUp(this)
		ind = i;
		myModal.style.display = "block";
	}
}
document.addEventListener('click', function(e){
	if(e.target.id == imgClose.id || e.target.id == myModal.id){
		myModal.style.display = "none"
	}
})
popPrev.addEventListener('click', function(e){
	if(ind <= 0){
		ind = funcImg.length - 1;
	}else{
		ind -= 1;
	}
	clearTimeout(setAutoplayFunc);
	setPopUp(funcImg[ind])
})
popNext.addEventListener('click', function(e){
	if(ind >= funcImg.length - 1){
		ind = 0;
	}else{
		ind += 1;
	}
	clearTimeout(setAutoplayFunc);
	setPopUp(funcImg[ind])
})
function setPopUp(e){
	currentImg.style.animation = '';
	currentImg.src = e.src;
	currentImg.alt = e.alt;
	caption1.innerHTML = currentImg.alt;
	autoplayPopup()
}
function autoplayPopup(){
	setAutoplayFunc = setTimeout(function(){
		if(myModal.style.display == "block"){
			if(ind >= funcImg.length - 1){
				ind = 0;
			}else{
				ind += 1;
			}
			setPopUp(funcImg[ind])
			currentImg.style.animation = 'fadeAnime 3s ease-in-out infinite';
		}
	},3000)	
}