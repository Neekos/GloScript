import getData from "./getData"
import postData from "./postData"
import renderGoods from "./renderGoods"

const load = () => {
    const cartbtn = document.getElementById('cart')
    // cartbtn.addEventListener('click', () => {
    //     postData().then((data) => {
    //         console.log(data) // вывод данных из сервера

    //         getData().then((data) => {
    //             console.log(data) // вывод данных из сервера
    //         })
    //     })
    // })

    // getData().then((data) => {
    //     console.log(data) // вывод данных из сервера
    // })

    cartbtn.addEventListener('click', () => {
        postData().then((data) => {
            console.log(data) // вывод данных из сервера
        })
    })

    getData().then((data) => {
        renderGoods(data) // вывод данных из сервера
    })
}

export default load