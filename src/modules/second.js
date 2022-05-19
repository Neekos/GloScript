import getData from "./getData"
import postData from "./postData"

const second = () => {
    const cartbtn = document.getElementById('cart')
    console.log("hi2!")


    // cartbtn.addEventListener('click', () => {
    //     postData().then((data) => {
    //         console.log(data) // вывод данных из сервера

    //         getData().then((data) => {
    //             console.log(data) // вывод данных из сервера
    //         })
    //     })
    // })

    getData().then((data) => {
        console.log(data) // вывод данных из сервера
    })
}

export default second