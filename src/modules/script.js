import renderCards from "./renderCards"
import postData from "./postData"
const cart = () => {

    const cartbtn = document.getElementById('cart')
    const cartmodal = document.querySelector('.cart')
    const close = document.querySelector('.cart-close')
    const goodsWrapper = document.querySelector('.goods')
    const cartTotal = document.querySelector('.cart-total span')
    const cartWrapper = document.querySelector('.cart-wrapper')
    const cartSend = document.querySelector('.cart-confirm')
    const numberGoods = document.querySelector('.counter')



    cartbtn.addEventListener('click', () => {
        // создаем массив в localStorage
        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
        cartmodal.style.display = "flex"
        // отрисовываем товары из localStorage
        renderCards(cart)
        // считаем цену
        cartTotal.textContent = cart.reduce((sum, goodItem) => {
            return sum + goodItem.price
        }, 0)
    })

    close.addEventListener('click', () => {
        cartmodal.style.display = ''
    })
    // добавления при помощи делигирования 
    goodsWrapper.addEventListener('click', (event) => {
        let target = event.target
        if (target.classList.contains('btn-primary')) {
            const card = target.closest('.card')
            // получаем ключ из атрибута
            const key = card.dataset.key
            // по ключу добавляем в массив localStorage новые карточки
            const goods = JSON.parse(localStorage.getItem('goods'))
            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

            const goodItem = goods.find((item) => {
                return item.id === +key
            })
            cart.push(goodItem)
            localStorage.setItem('cart', JSON.stringify(cart))
            numberGoods.textContent = cart.reduce((sum, goodItem) => {
                return sum + 1
            }, 0)
        }
    })
    // удаление при помощи делигирования 
    cartWrapper.addEventListener('click', (event) => {
        let target = event.target
        if (target.classList.contains('btn-primary')) {
            const cart = localStorage.getItem('cart') ?
                JSON.parse(localStorage.getItem('cart')) : []
            const card = target.closest('.card')
            const key = card.dataset.key
            // ищем индекс итема для удаления
            const index = cart.findIndex((item) => {
                return item.id === +key
            })
            // удаление по индексу
            cart.splice(index, 1)

            localStorage.setItem('cart', JSON.stringify(cart))
            // отрисовка товаров корзины 
            renderCards(cart)
            // считаем цену
            cartTotal.textContent = cart.reduce((sum, goodItem) => {
                return sum + goodItem.price
            }, 0)
            numberGoods.textContent = cart.reduce((sum, goodItem) => {
                return sum + 1
            }, 0)
        }
    })
    // оформление по клику
    cartSend.addEventListener('click', () => {
        const cart = localStorage.getItem('cart') ?
            JSON.parse(localStorage.getItem('cart')) : []
        postData(cart).then(() => {
            // удаление из localStorage
            localStorage.removeItem('cart')
            // отрисовка товаров корзины 
            renderCards([])
            // считаем цену
            cartTotal.textContent = 0
            numberGoods.textContent = 0

        })
    })

}

export default cart