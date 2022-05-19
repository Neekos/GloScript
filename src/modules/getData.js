// функция для получение товаров или постов
// get получает объект
// post отправляет 
// https://gloproj-ca645-default-rtdb.firebaseio.com/goods.json
const getData = () => {
    return fetch('http://localhost:3000/goods')
        .then((Response) => {
            return Response.json() // перевод в структуру json
        })
}

export default getData