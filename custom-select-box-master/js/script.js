var customSelectBox, i, j, currentSelected, selectBox, selectItem;
customSelectBox = document.getElementsByClassName("custom-dropdown-main");
for(i = 0; i < customSelectBox.length; i++){
	currentSelected = document.createElement("DIV");
	currentSelected.setAttribute("class","current-selected");
	selectBox = customSelectBox[i].getElementsByTagName("select")[0];
	currentSelected.innerHTML = selectBox.options.item(selectBox.selectedIndex).text;
	customSelectBox[i].appendChild(currentSelected);
	selectItem = document.createElement("DIV");
	selectItem.setAttribute("class","select-items hide");
	selectBox = customSelectBox[i].getElementsByTagName("select")[0];
	for(let j = 0; j < selectBox.length; j++){
		var selectItemBox = document.createElement("DIV");
		selectItemBox.innerHTML = selectBox.options[j].text;	
		selectItemBox.addEventListener("click", function(){
			var i, j, x, y, s;
			x = this.parentNode.parentNode.getElementsByTagName('select')[0];
			y = this.parentNode.previousSibling;
			for(i = 0; i < x.length; i++){
				if(x.options[i].text == this.innerHTML){
					x.selectedIndex = i;
					y.innerHTML = x.options[i].text;
					s = this.parentNode.getElementsByClassName('same-as-selected');
					for(j = 0; j < s.length; j++){
						s[j].classList.remove('same-as-selected');
					}
					this.setAttribute("class","same-as-selected");
					break;
				}
			}
			y.click();
		})
		selectItem.appendChild(selectItemBox);
	}
	customSelectBox[i].appendChild(selectItem);
	currentSelected.addEventListener('click', function(e){
		e.stopPropagation();
		closeAllList(this	)
		this.classList.toggle("current-selected-active");
		this.nextSibling.classList.toggle("hide");
	})
	function closeAllList(e){
		currentSelected = document.getElementsByClassName('current-selected');
		for(i = 0; i < currentSelected.length; i++){
			if(e !== currentSelected[i]){
				currentSelected[i].classList.remove('current-selected-active');
				currentSelected[i].nextSibling.classList.add('hide');
			}
		}
	}
	document.addEventListener("click", closeAllList)
}