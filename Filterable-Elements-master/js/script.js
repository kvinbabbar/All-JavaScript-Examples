var filterDiv = document.getElementsByClassName("filterDiv");
var myBtnContainer = document.getElementById("myBtnContainer");
var myBtnContainerBtn = myBtnContainer.getElementsByClassName("btn");
for(let i = 0; i < myBtnContainerBtn.length; i++){
	myBtnContainerBtn[i].onclick = function(e){
		for(let j = 0; j < myBtnContainerBtn.length; j++){
			myBtnContainerBtn[j].classList.remove('active');
		}
		this.classList.add('active');
		for(let j = 0; j < filterDiv.length; j++){
			filterDiv[j].style.display = "none";
		}
		var categoryDataset = this.dataset.categories;
		var activeCategory = document.getElementsByClassName(categoryDataset);
		if(categoryDataset == "all"){
			for(let j = 0; j < filterDiv.length; j++){
				filterDiv[j].style.display = "block";
			}
		}else{
			for(let j = 0; j < activeCategory.length; j++){
				activeCategory[j].style.display = "block";
			}
		}
	}
}