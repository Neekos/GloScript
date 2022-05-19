// функция для получение товаров или постов
// get получает объект
// post отправляет 
const postData = () => {
    return fetch('https://gloproj-ca645-default-rtdb.firebaseio.com/goods.json', {
        method: 'POST',
        body: JSON.stringify({
            title: "Лимбо",
            price: 1500,
            sale: true,
            img: "https://cdn1.ozone.ru/multimedia/c400/1033180284.jpg",
            category: "Игры и софт"
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => res.json())
}

export default postData