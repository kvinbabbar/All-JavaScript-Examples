$(function(){
	setTimeout(function(){
		$('#myImage').faceDetection({
			complete: function(faces){
				console.log(faces);
				for(let i = 0; i < faces.length; i++){
					$('<div>', {
						'class': 'face-frame',
						'css': {
							'position': 'absolute',
							'top': faces[i].y * faces[i].scaleY + 'px',
							'left': faces[i].x * faces[i].scaleX + 'px',
							'width': faces[i].width * faces[i].scaleX + 'px',
							'height': faces[i].height * faces[i].scaleY + 'px',
							'transform': 'scale(1,1)'
						}
					}).insertAfter(this);					
				}				
				console.log(faces);
			},
			error: function(code, msg){
				alert(`Error: ${code}, ${msg}`)				
			}
		})			
	}, 100)
})