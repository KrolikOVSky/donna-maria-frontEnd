import React from "react";
import {Global} from "../Global"
import {Redirect} from "react-router";
import {sendToServer} from "../functions/ServerConnect"
import 'react-image-crop/dist/ReactCrop.css';
import ReactCrop from "react-image-crop";
import {
	base64StringToFile,
	extractImageFileExtensionFromBase64,
	image64toCanvasRef,
	verifyFile
} from '../functions/Util';

const types = '.gif, .png, .jpg, .jpeg, .bmp'

export class AddGroup extends React.Component {
	constructor(props) {
		super(props);
		this.imageCanvasCropRef = React.createRef()
		this.inputRef = React.createRef()
	} // todo

	state = {
		name: '',
		file: null,
		imgSrc: null,
		imgSrcExt: null,
		redirect: '',
		crop: {
			aspect: 1
		},
		disabled: true,
		src: null
	}

	handleText = event => {
		this.setState({name: event.target.value})
	} // success

	handleFile = event => {
		const files = event.target.files
		if (files && files.length > 0) {
			const isVerified = verifyFile(files)
			if (isVerified) {
				const currentFile = files[0]
				const reader = new FileReader();
				reader.addEventListener("load", () => {
					const result = reader.result;
					this.setState({
						imgSrc: result,
						imgSrcExt: extractImageFileExtensionFromBase64(result)
					})
				}, false)

				reader.readAsDataURL(currentFile)
			}
		}
	}

	handleSubmit = event => {
		event.preventDefault();
		const group = {
			name: this.state.name,
			file: this.state.file,
		}

		sendToServer(group, "POST", `${Global.url}/add/gro`).then(res => {
			if (res.status === 200) this.setState({redirect: true})
			else alert("Возможно группа с данным названием уже существует")
		})
	} // success


	handleImageLoaded = image => {

	}
	handleOnCropChange = crop => {
		this.setState({crop: crop})
	}
	handleOnCropComplete = (pixelCrop, crop) => {
		const canvasRef = this.imageCanvasCropRef.current
		const {imgSrc} = this.state
		console.log(canvasRef, imgSrc)
		image64toCanvasRef(canvasRef, imgSrc, crop)
	}

	handleOnComplete = e => {
		e.preventDefault()
		const canvasRef = this.imageCanvasCropRef.current
		const {imgSrc} = this.state
		const fileExt = extractImageFileExtensionFromBase64(imgSrc)
		const fileName = 'newImage.' + fileExt
		const imageData64 = canvasRef.toDataURL('image/' + fileExt)
		const newCroppedFile = base64StringToFile(imageData64, fileName)
		this.setState({
			file: newCroppedFile,
			disabled: false
		})
	}

	render() {
		const {file, imgSrc, src} = this.state
		// const img = URL.createObjectURL(src)

		const {redirect} = this.state;
		if (redirect) {
			return <Redirect to="/groups"/>;
		}
		return (
			<div className="text-center">
				<h1 className="display-3">Добавление группы</h1>
				<form className="gap-3 row" onSubmit={this.handleSubmit}>

					<div className="form-floating">
						<input type="text" id="name" name="name" onChange={this.handleText}
						       placeholder="Введите название блюда" className="form-control input" required/>
						<label htmlFor="name">Название группы</label>
					</div>

					<div className="form-group">
						<input type="file" id="file" name="file" onChange={this.handleFile}
						       placeholder="Загрузите фото блюда" className="form-control input" accept={types}
						       ref={this.inputRef} required/>
					</div>

					<div className="">
						{
							imgSrc !== null ?
								<div className="container">
									<div className="row crop-div mx-auto">
										<div className="col-sm ReactCrop">
											<ReactCrop
												className=""
												src={imgSrc}
												crop={this.state.crop}
												onComplete={this.handleOnCropComplete}
												onImageLoaded={this.handleImageLoaded}
												onChange={this.handleOnCropChange}/>
										</div>


										<div className="col-sm">
											<h1>Предпрсмотр</h1>
											<canvas ref={this.imageCanvasCropRef}/>
										</div>
									</div>


									<input
										type="submit"
										className="btn btn-info btn-block"
										onClick={this.handleOnComplete}
									/>
								</div>
								: ''
						}
					</div>
					<button type="submit" className="btn btn-success input" disabled={this.state.disabled}>Submit
					</button>
				</form>
			</div>
		)
	}
}