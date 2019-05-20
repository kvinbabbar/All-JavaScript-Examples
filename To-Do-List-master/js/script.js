var toDoBox = document.getElementById("toDoBox");
var toDoBoxBtn = document.getElementById("toDoBoxBtn");
var toDoListContainer = document.getElementById("toDoListContainer");
var toDoListContainerUl = toDoListContainer.getElementsByTagName('ul')[0];
var closeTask = document.getElementsByClassName('close');
// add event listener to button
toDoBoxBtn.onclick = function(){
	var toDoBoxValue = toDoBox.value;
	if(toDoBoxValue.trim() == ""){
		alert("Task box can't be empty...")
		toDoBox.focus();		
	}else{
		var createNewLi = document.createElement('LI');
		var createNewSpanContentEl = document.createElement('SPAN');
		createNewSpanContentEl.className = "to-do-item";
		var createSpanContentInner = document.createTextNode(toDoBoxValue)
		createNewSpanContentEl.appendChild(createSpanContentInner);
		createNewLi.appendChild(createNewSpanContentEl);
		var createNewCloseEl = document.createElement("SPAN");
		createNewCloseEl.className = "close";
		var createTextClose = document.createTextNode('X');
		createNewCloseEl.appendChild(createTextClose);
		createNewLi.appendChild(createNewCloseEl)
		toDoListContainerUl.appendChild(createNewLi);
		toDoBox.value = "";
		removeTask();
	}
	
}
function removeTask(){
	for(let i = 0; i < closeTask.length; i++){
		closeTask[i].addEventListener('click', function(){
			this.parentNode.style.display = "none";		
		})
	}
}
// evoke remove function
removeTask();

// Add new task on pressing enter
toDoBox.onkeydown = function(e){
	if(e.keyCode == "13"){
		toDoBoxBtn.click();	
	}	
}

// add complete task sign
toDoListContainerUl.onclick = function(e){
	if(e.target.classList.contains("to-do-item")){
		e.target.classList.toggle('task-completed');
		e.target.parentNode.classList.toggle('task-completed-parent');
	}
}