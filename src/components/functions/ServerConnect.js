export function sendToServer (data, method, URL) {
	return new Promise((resolve) => {
		let formData = new FormData()
		for (let key in data) {
			formData.append(key, data[key])
		}
		fetch(URL, {
			method: `${method}`,
			body: formData
		}).then(res => {
			resolve({ status: res.status })
		})
	})
}

export function getFromServer (URL){
	return new Promise(resolve => {
		fetch(URL).then(res => {
			res.json().then(json => {
				resolve(json)
			})
		})
	})
}