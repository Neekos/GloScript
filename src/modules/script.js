const cart = () => {

    const cartbtn = document.getElementById('cart')
    const cartmodal = document.querySelector('.cart')
    const close = document.querySelector('.cart-close')

    console.dir(cartmodal)

    cartbtn.addEventListener('click', () => {
        cartmodal.style.display = "flex"
    })

    close.addEventListener('click', () => {
        cartmodal.style.display = ''
    })

}

export default cart