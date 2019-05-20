var pfDropdownBtn = document.getElementsByClassName('pf-dropdown-btn');
for(let i = 0; i < pfDropdownBtn.length; i++){
	pfDropdownBtn[i].onclick = function(){
		let nextSibling = this.nextElementSibling;
		nextSibling.classList.toggle('pf-show');			
	}
}
window.onclick = function(e){
	if(!e.target.matches('.pf-dropdown-btn')){
		var pfDropdownCont = document.getElementsByClassName('pf-dropdown-content');
		for(let i = 0; i < pfDropdownCont.length; i++){
			if(pfDropdownCont[i].classList.contains('pf-show')){
				pfDropdownCont[i].classList.remove('pf-show')
			}		
		}		
	}
}