export function translit(word) {
	word = word.toLowerCase();
	let answer = '';
	let converter = {
		'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
		'е': 'e', 'ё': 'e', 'ж': 'zh', 'з': 'z', 'и': 'i',
		'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
		'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
		'у': 'u', 'ф': 'f', 'х': 'h', 'ц': 'c', 'ч': 'ch',
		'ш': 'sh', 'щ': 'sch', 'ъ': '', 'ы': 'y', 'ь': '',
		'э': 'e', 'ю': 'yu', 'я': 'ya'
	};

	for (let i = 0; i < word.length; ++i) {
		if (converter[word[i]] === undefined) {
			answer += "-";
		} else {
			answer += converter[word[i]];
		}
	}
	return answer;
}

// export function verifyFile(files) {
// 	const imageMaxSize = 1000000000 // bytes
// 	const acceptedFileTypes = 'image/png, image/jpg, image/jpeg, image/gif'
// 	const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
// 		return item.trim()
// 	})
// 	if (files && files.length > 0) {
// 		const currentFile = files[0]
// 		const currentFileType = currentFile.type
// 		const currentFileSize = currentFile.size
// 		if (currentFileSize > imageMaxSize) {
// 			alert("This file is not allowed. " + currentFileSize + " bytes is too large")
// 			return false
// 		}
// 		if (!acceptedFileTypesArray.includes(currentFileType)) {
// 			alert("This file is not allowed. Only images are allowed.")
// 			return false
// 		}
// 		return true
// 	}
// }
//
// export function  base64StringToFile(base64String, filename) {
// 	let arr = base64String.split(','),
// 		mime = arr[0].match(/:(.*?);/)[1],
// 		bStr = atob(arr[1]),
// 		n = bStr.length,
// 		u8arr = new Uint8Array(n);
// 	while(n--){
// 		u8arr[n] = bStr.charCodeAt(n);
// 	}
// 	return new File([u8arr], filename, {type:mime});
// }
//
// export function image64toCanvasRef(canvasRef, imageExt, pixelCrop) {
// 	const canvas = canvasRef // document.createElement('canvas');
// 	canvas.width = pixelCrop.width;
// 	canvas.height = pixelCrop.height;
// 	const ctx = canvas.getContext('2d');
// 	const image = new Image(pixelCrop.width, pixelCrop.height)
// 	image.src = imageExt
// 	image.onload = function() {
// 		ctx.drawImage(
// 			image,
// 			pixelCrop.x,
// 			pixelCrop.y,
// 			pixelCrop.width,
// 			pixelCrop.height,
// 			0,
// 			0,
// 			pixelCrop.width,
// 			pixelCrop.height
// 		)
// 	}
// }
//
// export function  extractImageFileExtensionFromBase64(base64Data) {
// 	return base64Data.substring("data:image/".length, base64Data.indexOf(";base64"))
// }
