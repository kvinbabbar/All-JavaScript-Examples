var dkFilterBtn, dkFilterContainer, dkCheckbox;
function removeTransition(e){
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('active');
}
function playSound(e){
	var audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	var key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if(!audio) return;
	
	key.classList.add('active');
	audio.currentTime = '0';
	audio.play();
}
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound);

// filter items
dkFilterBtn = document.getElementById('dkFilterBtn');
dkFilterContainer = document.getElementById('dkFilterContainer');
dkFilterBtn.addEventListener('click', function(){
	dkFilterContainer.classList.toggle('active');
})
dkCheckbox = dkFilterContainer.querySelectorAll('input[data-key]');
for(let i = 0; i < dkCheckbox.length; i++){
	dkCheckbox[i].addEventListener('change', function(e){
		var audio = document.querySelector(`audio[data-key="${this.getAttribute('data-key')}"]`);
		var key = document.querySelector(`.key[data-key="${this.getAttribute('data-key')}"]`);
		if(!this.checked){
			key.parentElement.classList.add('hide');
			audio.muted = !audio.muted;
		}else{
			key.parentElement.classList.remove('hide');
			audio.muted = !audio.muted;
		}
	})	
}