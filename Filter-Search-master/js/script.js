var searchQuery = document.getElementById('searchQuery');
searchQuery.oninput = function(e){
	var searchValue = this.value.toLowerCase();	
	var filterSearch = document.getElementById('filterSearch');
	var filterSearchItem = filterSearch.getElementsByTagName('li');
	for(let i = 0; i < filterSearchItem.length; i++){
		var filterSearchItemValue = filterSearchItem[i].innerHTML.toLowerCase();
		if(filterSearchItemValue.indexOf(searchValue) > -1 || searchValue == ""){
			filterSearchItem[i].style.display = "";
		}else{
			filterSearchItem[i].style.display = "none";
		}
	}
}