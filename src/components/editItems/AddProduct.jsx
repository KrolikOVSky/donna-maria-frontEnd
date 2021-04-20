import React from 'react'
import "../../styles/ProductStyle.css"
import {Global} from "../Global";
import {Redirect} from "react-router";
import {getFromServer, sendToServer} from "../functions/ServerConnect";
import {base64StringToFile, extractImageFileExtensionFromBase64, image64toCanvasRef, verifyFile} from "../functions/Util";
import ReactCrop from "react-image-crop";

export class AddProduct extends React.Component {

	constructor(props) {
		super(props);
		this.imageCanvasCropRef = React.createRef()
		this.inputRef = React.createRef()
	} 

	state = {
		name: '',           //имя
		price: '',          //цена
		description: '',    //описание
		shortDesc: '',      //краткое описание
		volume: '',         //объем
		groupId: '',        //номер группы
		file: '',           //файл для отправки
		redirect: '',       //команда на перенаправление
		groups: [],         //список групп для выпадающего списка

		imgSrc: null,
		imgSrcExt: null,
		crop: {
			aspect: 1
		},

		disabledText: true,
		disabledImg: true,
		disabledCropSub: true,
		firstLoad: true,
	}


	componentDidMount() {
		getFromServer(Global.getGroups).then(res => {
			this.setState({groups: res});
		})
	} 


	handleText = event => {
		let target = event.target
		let name = target.name
		let value = target.value
		this.setState({
				[name]: value,
			}
		)
		this.setState({
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
			name: this.state.name,                  //имя
			price: this.state.price,                //цена
			description: this.state.description,    //описание
			shortDesc: this.state.shortDesc,        //краткое описание
			volume: this.state.volume,              //объем
			groupId: this.state.groupId,            //номер группы
			file: this.state.file,                  //файл для отправки
		}

		sendToServer(group, "POST", Global.addProduct).then(res => {
			console.log(res);//todo
			if (res.status === 200) this.setState({redirect: true})
			else alert(`Возможно блюдо с данным названием уже существует\nНомер ошибки = "${res.status}"`)
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
			return <Redirect to="/"/>;
		}
		return (
			<div className="text-center">
				<h1 className="display-3">Добавление нового блюда</h1>
				<form className="gap-3 row" onSubmit={this.handleSubmit}>

					<div className="form-floating">
						<input type="text" id="name" name="name" onChange={this.handleText}
						       placeholder="Введите название блюда" className="input form-control" required/>
						<label htmlFor="name">Название блюда</label>
					</div>

					<div className="form-floating">
						<input type="text" id="price" name="price" onChange={this.handleText}
						       placeholder="Введите стомость блюда" className="form-control input" required/>
						<label htmlFor="price"> Стоимость блюда</label>
					</div>

					<div className="form-group">
						<textarea id="shortDesc" name="shortDesc" onChange={this.handleText}
						          placeholder="Введите краткое описание блюда" className="form-control input" rows="5"
						          required/>
					</div>

					<div className="form-group">
						<textarea id="description" name="description" onChange={this.handleText}
						          placeholder="Введите Описание блюда" className="form-control input" rows="10"
						          required/>
					</div>

					<div className="form-floating">
						<input type="text" id="volume" name="volume" onChange={this.handleText}
						       placeholder="Введите размер порции" className="form-control input" required/>
						<label htmlFor="volume">Размер порции</label>
					</div>

					<div className="form-floating">
						<select id="groupId" name="groupId" onChange={this.handleText}
						        className="form-select input" required>
							<option value=""/>
							{
								this.state.groups.map(group => (
									<option value={group.id} key={group.id}>{group.name}</option>
								))
							}
						</select>
						<label htmlFor="groupName">Группа</label>
					</div>

					<div className="form-group">
						<input type="file" id="file" name="file" onChange={this.handleFile}
						       placeholder="Загрузите фото блюда" className="form-control input" required/>
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

					<div className="form-floating">
						<input type="submit" className="btn btn-success input" disabled={disabledImg || disabledText}/>
					</div>

				</form>
			</div>
		)
	}

}