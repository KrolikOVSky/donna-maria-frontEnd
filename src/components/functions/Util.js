export const imageMaxSize = 1000000000 // bytes
export const acceptedFileTypes = 'image/png, image/jpg, image/jpeg, image/gif'
export const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
	return item.trim()
})

export function verifyFile(files) {

	if (files && files.length > 0) {
		const currentFile = files[0]
		const currentFileType = currentFile.type
		const currentFileSize = currentFile.size
		if (currentFileSize > imageMaxSize) {
			alert("This file is not allowed. " + currentFileSize + " bytes is too large")
			return false
		}
		if (!acceptedFileTypesArray.includes(currentFileType)) {
			alert("This file is not allowed. Only images are allowed.")
			return false
		}
		return true
	}
}

export function  base64StringToFile(base64String, filename) {
	let arr = base64String.split(','),
		mime = arr[0].match(/:(.*?);/)[1],
		bStr = atob(arr[1]),
		n = bStr.length,
		u8arr = new Uint8Array(n);
	while(n--){
		u8arr[n] = bStr.charCodeAt(n);
	}
	return new File([u8arr], filename, {type:mime});
}

export function  extractImageFileExtensionFromBase64(base64Data) {
	return base64Data.substring("data:image/".length, base64Data.indexOf(";base64"))
}

export function image64toCanvasRef(canvasRef, imageSrc, crop) {
	const image = new Image()
	image.src = imageSrc
	
	const width = percentToPixel(image.width, crop.width)
	const height = percentToPixel(image.height, crop.height)
	const x = percentToPixel(image.width, crop.x)
	const y = percentToPixel(image.height, crop.y)
	
	const canvas = canvasRef
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext('2d');

	image.onload = function() {
		ctx.drawImage(
			image,
			x,
			y,
			width,
			height,
			0,
			0,
			width,
			height
		)
	}
}

function percentToPixel(original, percent){
	return (original * percent) / 100;
}

export function downloadBase64File(base64Data, filename) {
	let element = document.createElement('a');
	element.setAttribute('href', base64Data);
	element.setAttribute('download', filename);
	element.style.display = 'none';
	document.body.appendChild(element);
	element.click();
	document.body.removeChild(element);
}