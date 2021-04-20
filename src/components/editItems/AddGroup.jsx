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
	}

	state = {
		name: '',
		file: null,

		imgSrc: null,
		imgSrcExt: null,
		redirect: '',
		crop: {
			aspect: 1
		},

		disabledText: true,
		disabledImg: true,
		disabledCropSub: true,
		firstLoad: true,
	}

	handleText = event => {
		this.setState({
			name: event.target.value,
			disabledText: false
		})
	}

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
		sendToServer(group, "POST", Global.addGroup).then(res => {
			if (res.status === 200) this.setState({redirect: true})
			else alert("Возможно группа с данным названием уже существует", res.status)
		})
	}

	handleOnCropChange = crop => {
		this.setState({crop: crop})
	}
	handleOnCropComplete = (pixelCrop, crop) => {
		if (!this.state.firstLoad) {
			const canvasRef = this.imageCanvasCropRef.current
			const {imgSrc} = this.state
			image64toCanvasRef(canvasRef, imgSrc, crop)
			this.setState({
				disabledCropSub: false,
			})
		}
		this.setState({
			firstLoad: false
		})
	}

	handleOnComplete = (e) => {
		e.preventDefault()
		const canvasRef = this.imageCanvasCropRef.current
		const {imgSrc} = this.state
		const fileExt = extractImageFileExtensionFromBase64(imgSrc)
		const fileName = 'newImage.' + fileExt
		const imageData64 = canvasRef.toDataURL('image/' + fileExt)
		const newCroppedFile = base64StringToFile(imageData64, fileName)

		this.setState({
			file: newCroppedFile,
			disabledImg: false,
			imgSrc: null,
			imgSrcExt: null,
			crop: {
				aspect: 1
			}
		})
	}

	render() {
		const {redirect, imgSrc, disabledImg, disabledText, disabledCropSub} = this.state
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
								<div className="container-fluid">
									<div className=" ReactCrop">
										<ReactCrop
											className=""
											src={imgSrc}
											crop={this.state.crop}
											onComplete={this.handleOnCropComplete}
											onChange={this.handleOnCropChange}/>
									</div>
									<canvas id="preview" ref={this.imageCanvasCropRef}/>
									{
										!disabledCropSub ?

											<div className="gap-2">
												<input
													id="previewCommit"
													type="submit"
													className="btn btn-info"
													onClick={this.handleOnComplete}
													value="Закончить редактирование изображения"
												/>
											</div>
											: ''
									}
								</div>
								: ''
						}
					</div>
					<button type="submit" className="btn btn-success input"
					        disabled={disabledImg || disabledText}>Submit
					</button>
				</form>
			</div>
		)
	}
}