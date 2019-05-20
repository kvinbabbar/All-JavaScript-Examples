window.onload = function(){
	var accordionBtn = document.getElementsByClassName("pf-accordion-btn");
	var accordionContent = document.getElementsByClassName("pf-accordion-content");
	var i;
	//add event loop to all accordion btn
	for(i = 0; i < accordionBtn.length; i++){
		accordionBtn[i].addEventListener('click', function(e){
			var nextAccordion = this.nextElementSibling;
			var vm = this;
			if(nextAccordion.style.transform == 'scaleY(1)'){		
				vm.classList.remove('active');
				nextAccordion.style.transform = "scaleY(0)"
				nextAccordion.style.display = "none"
			}else{						
				for(let j = 0; j < accordionBtn.length; j++){
					accordionBtn[j].classList.remove('active');				
					accordionContent[j].style.transform = "scaleY(0)";
					accordionContent[j].style.display = "none"
				}
				this.classList.add('active');
				vm.nextElementSibling.style.display = "block"
				setTimeout(function(){
					vm.nextElementSibling.style.transform = "scaleY(1)"
				}, 20)
			}
		})
	}
	
}