// функция для получение товаров или постов
// get получает объект
// post отправляет 
const getData = () => {
    return fetch('https://gloproj-ca645-default-rtdb.firebaseio.com/goods.json')
        .then((Response) => {
            return Response.json() // перевод в структуру json
        })
}

export default getData