import React from 'react'

const groups = [
    { name: "" },
    { name: "Пицца" },
    { name: "Паста" },
    { name: "Равиолли" },
    { name: "Десерты" },
    { name: "Мороженное" },
]

export class EditProduct extends React.Component {
    render() {
        return (
            <div className="text-center">
                <h1 className="display-3">Редактирование блюда</h1>
                <form className="gap-3 row" method="method.POST">

                    <div className="form-floating">
                        <input type="text" className="input form-control" id="name" placeholder="Введите название блюда"
                               required/>
                        <label htmlFor="name">Название блюда</label>
                    </div>

                    <div className="form-floating">
                        <input name="price" type="text" className="form-control input" id="price"
                               placeholder="Введите стомость блюда" required/>
                        <label htmlFor="price"> Стоимость блюда</label>
                    </div>

                    <div className="form-group">
                        <textarea name="shortDesc" rows="5" className="form-control input" id="shortDesc"
                                  placeholder="Введите краткое описание блюда" required/>
                    </div>

                    <div className="form-group">
                        <textarea name="description" rows="10" className="form-control input" id="description"
                                  placeholder="Введите Описание блюда" required/>
                    </div>

                    <div className="form-floating">
                        <input name="volume" type="text" className="form-control input" id="volume"
                               placeholder="Введите размер порции" required/>
                        <label htmlFor="volume">Размер порции</label>
                    </div>

                    <div className="form-floating">
                        <select name="groupSelect" className="form-select input" id="groupSelect" required>
                            {
                                groups.map(group => (
                                    <option>{group.name}</option>
                                ))
                            }
                        </select>
                        <label htmlFor="groupSelect">Размер порции</label>
                    </div>

                    <div className="form-group">
                        <input type="file" name="file" className="form-control input" id="file"
                               placeholder="Загрузите фото блюда" required/>
                        {/*<label htmlFor="name">Фото блюда</label>*/}
                    </div>

                    <div className="form-floating">
                        <input type="submit" className="btn btn-success input"/>
                    </div>

                </form>
            </div>
        )
    }
}