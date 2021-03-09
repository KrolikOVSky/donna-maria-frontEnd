// import React from 'react'
// // import {Dropzone as useDropzone} from "react-dropzone";
// import Dropzone from "react-dropzone";
//
// const imageMaxSize = 1000000000 // bytes
// const acceptedFileTypes = 'image/png, image/jpg, image/jpeg, image/gif'
// const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
// 	return item.trim()
// })
//
//
// export class Test extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			imgSrc: null,
// 			scale: 1
// 		}
// 	}
//
// 	verifyFile = (files) => {
// 		if (files && files.length > 0) {
// 			const currentFile = files[0]
// 			const currentFileType = currentFile.type
// 			const currentFileSize = currentFile.size
// 			if (currentFileSize > imageMaxSize) {
// 				alert("This file is not allowed. " + currentFileSize + " bytes is too large")
// 				return false
// 			}
// 			if (!acceptedFileTypesArray.includes(currentFileType)) {
// 				alert("This file is not allowed. Only images are allowed.")
// 				return false
// 			}
// 			return true
// 		}
// 	}
//
// 	render() {
// 		return (
// 			<div className="text-center">
// 				<Dropzone onDrop={this.onDrop}>
// 					{({getRootProps, getInputProps}) => (
// 						<section className="container">
// 							<div {...getRootProps({className: 'dropzone'})}>
// 								<input {...getInputProps()} />
// 								<p>Drag 'n' drop some files here, or click to select files</p>
// 							</div>
// 							<aside>
// 								<h4>Files</h4>
// 								{/*<ul>{files}</ul>*/}
// 							</aside>
// 						</section>
// 					)}
// 				</Dropzone>
// 			</div>
// 		)
// 	}
// }