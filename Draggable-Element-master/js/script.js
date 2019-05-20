pfDrageElement("pf-draggable")
function pfDrageElement(el){
	let draggableElement = document.getElementsByClassName(el);
	let draggableElementHeader = document.getElementsByClassName(el + "-header");
	var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	for(let i = 0; i < draggableElement.length; i++){
		if(draggableElementHeader[i]){
			draggableElementHeader[i].onmousedown = dragMouseDown;
		}else{
			draggableElement[i].onmousedown = dragMouseDown;
		}
		function dragMouseDown(e){
			e = e || window.event;
			e.preventDefault();
			pos3 = e.clientX;
			pos4 = e.clientY;
			document.onmousemove = dragMouseMove;
			document.onmouseup = dragMouseCancel;
		}
		function dragMouseMove(e){
			e = e || window.event;
			e.preventDefault();
			pos1 = pos3 - e.clientX;
			pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
			draggableElement[i].style.top = (draggableElement[i].offsetTop - pos2) + "px";
			draggableElement[i].style.left = (draggableElement[i].offsetLeft - pos1) + "px";
		}
		function dragMouseCancel(){
			document.onmouseup = null;		
			document.onmousemove = null;		
		}		
	}
}