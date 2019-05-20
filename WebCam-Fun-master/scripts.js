const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
	const constraint = 
	{
		audio: false, video: {
			frameRate: {ideal: 10, max: 15},
			faceMode: 'environment'
		}
	}
	window.navigator.mediaDevices.getUserMedia(constraint)
		.then((mediaStream) => {
			video.srcObject = mediaStream;
			video.addEventListener('loadedmetadata', () => video.play());
		})
		.catch(err => console.log(err.name, err.message))
}

function paintToCanvas(){
	const width = video.videoWidth;	
	const height = video.videoHeight;	
	canvas.width = width;
	canvas.height = height;
	setInterval(function(){
		ctx.drawImage(video, 0, 0, width, height);
		let pixels = ctx.getImageData(0, 0, width, height);
		pixels =  effect(pixels);
		ctx.putImageData(pixels, 0, 0)
	}, 16)
}

function takePhoto(){
	snap.currentTime = 0;
	if(navigator.vibrate){
		navigator.vibrate([500, 100, 200, 30, 170])
	}else{
		console.log('oh no! your browser doesn\'t support navigator.vibrate() API')
	}
	snap.play();
	
	const data = canvas.toDataURL('image/jpeg');
	const link = document.createElement('A');
	link.href = data;
	link.setAttribute('download', 'ugly-face');
	link.innerHTML = `<img src="${data}" alt="ugly-face" />`;
	strip.insertBefore(link, strip.firstChild)
}
function effect(pixels){
	for(let i = 0; i < pixels.data.length; i += 4){
		pixels.data[i] = pixels.data[i - 50];
		pixels.data[i + 1] = pixels.data[i - 250];
		pixels.data[i + 2] = pixels.data[i + 50];
		pixels.data[i + 3] = pixels.data[i - 150];
	}
	return pixels;
}
getVideo();
video.addEventListener('canplay', paintToCanvas)