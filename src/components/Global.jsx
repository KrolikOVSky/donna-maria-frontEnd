export class Global {
	static products() {
		return (
			[
				{img: "images/1.png", name: "Аррабиата", price: "250"},
				// {img: "images/2.png", name: "Болоньезе", price: "230"},
				// {img: "images/3.png", name: "Боскайола", price: "350"},
				// {img: "images/4.png", name: "Фрутти де маре", price: "260"},
				// {img: "images/5.png", name: "Аматричана", price: "290"},
				// {img: "images/6.png", name: "Аматричана", price: "290"},
				// {img: "images/4.png", name: "Аматричана", price: "290"},
				// {img: "images/6.png", name: "Аматричана", price: "290"},
				// {img: "images/2.png", name: "Аматричана", price: "290"},
				// {img: "images/1.png", name: "Аматричана", price: "290"},
				// {img: "images/3.png", name: "Аматричана", price: "290"},
				// {img: "images/2.png", name: "Аматричана", price: "290"},
				// {img: "images/4.png", name: "Аматричана", price: "290"},
				// {img: "images/6.png", name: "Аматричана", price: "290"},
				// {img: "images/5.png", name: "Аматричана", price: "290"},
			]
		)
	}

	static groups() {
		return (
			[
				{name: "Паста", img: "/social/instagram.png"},
				{name: "Пицца", img: "/images/2.png"},
				{name: "Равиолли", img: "/images/3.png"},
				{name: "Лазанья", img: "/images/4.png"},
				{name: "Мороженное", img: "/images/5.png"},
				{name: "Панини/поркетта", img: "/images/6.png"},
			]
		)
	}

	static url = "http://localhost:8081/api";
	// static url = "http://donna-maria.sytes.net:8081/api";
	// static url = "http://192.168.1.147:8081/api";

	static addProduct   = `${Global.url}/product/create`
	static editProduct  = `${Global.url}/product/upd`
	static delProduct   = `${Global.url}/product/del`
	static getProducts  = `${Global.url}/product`

	static addGroup     = `${Global.url}/group/create`
	static editGroup    = `${Global.url}/group/upd`
	static delGroup     = `${Global.url}/group/del`
	static getGroups    = `${Global.url}/group`

	static getImg       = `${Global.url}/img`
}
