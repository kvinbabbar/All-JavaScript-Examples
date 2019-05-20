// auto complete field function
function autoCompleteInit(myInp, countries){
	currentFocus = -1;
	myInp.addEventListener('input', function(e){
		var i, a, b, val  = this.value;
		closeAllLists();
		if(!val) return false;
		currentFocus = -1;
		//create dropdown element
		a = document.createElement("DIV");
		a.setAttribute("id", "myInputAutoComplete");
		a.setAttribute("class", "my-input-auto-complete");
		this.parentNode.appendChild(a);
		for(i = 0; i < countries.length; i++){
			if(countries[i].substr(0,val.length).toUpperCase() == val.toUpperCase()){
				b = document.createElement('DIV')
				b.innerHTML = "<strong>" + countries[i].substr(0,val.length) + "</strong>";
				b.innerHTML += countries[i].substr(val.length);
				b.innerHTML += '<input type="hidden" value="' + countries[i] + '" />';
				a.appendChild(b);
				b.addEventListener('click', function(){
					myInp.value = this.getElementsByTagName('input')[0].value;
					closeAllLists();
				})
				// console.log(countries[i])
			}
		}
	})
	myInp.addEventListener('keydown', function(e){
		var a = document.getElementById('myInputAutoComplete');
		if(a) a = a.getElementsByTagName('DIV');
		if(e.keyCode == 40){
			currentFocus++;
			addActive(a);
		}else if(e.keyCode == 38){
			currentFocus--;
			addActive(a);
		}else if(e.keyCode == 13){
			e.preventDefault();
			if(a) a[currentFocus].click();
		}
	});
	function addActive(a){
		if(!a) return false;
		removeActive(a);
		if(currentFocus < 0) currentFocus = a.length - 1;
		if(currentFocus > a.length - 1) currentFocus = 0;
		for(let i = 0; i < a.length; i++){
			if(a[i] == a[currentFocus]){
				a[i].classList.add('my-input-auto-complete-active');
			}
		}
	}
	function removeActive(a){
		for(let i = 0; i < a.length; i++){
			a[i].classList.remove('my-input-auto-complete-active')
		}
	}
	function closeAllLists(elmt){
		var autocompleteItems = document.getElementsByClassName('my-input-auto-complete');
		for(let i = 0; i < autocompleteItems.length; i++){
			if(elmt !== autocompleteItems[i] && elmt !== myInp){
				autocompleteItems[i].parentNode.removeChild(autocompleteItems[i]);
			}			
		}
	}
	document.addEventListener("click", function (e) {
		closeAllLists(e.target);
	});
}

// myInputAutoComplete = document.getElementById('myInputAutoComplete');
// myInputAutoCompleteDivs = myInputAutoComplete.getElementsByTagName('DIV');

// countries variable 
var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

// initialize function
autoCompleteInit(document.getElementById("myInput"), countries);