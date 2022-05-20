// функция для получение товаров или постов
// get получает объект
// post отправляет 
const postData = (cart) => {
    return fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(cart),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then(res => res.json())
}

export default postData