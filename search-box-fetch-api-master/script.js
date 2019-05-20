var searchBox = document.getElementById('searchBox');
var searchResult = document.getElementById('searchResult');

const endpoint = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
var cities = [];

fetch(endpoint)
	.then(res => res.json())
	.then(data => cities.push(...data))
	.then(function(error){
		if(error){
			console.log(error)
		}
	})
function matchRecord(wordToMatch, cities){
	return cities.filter(place => {
		const regExp = new RegExp(wordToMatch, "gi");
		return place.city.match(regExp) || place.state.match(regExp);
	})
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function showResult(){
	const matchArray = matchRecord(this.value, cities);
const finalResult = matchArray.map(place => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = place.city.replace(regex, `<span class="active">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="active">${this.value}</span>`);
		return `<li>
					<span class="city">${cityName}, ${stateName}</span>
					<span class="population">${numberWithCommas(place.population)}</span>
				</li>`
	}).join(" ")
	searchResult.innerHTML = finalResult;
}
searchBox.addEventListener('keyup', showResult);