import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter } from "./filters"

const price = () => {
    const valueMin = document.getElementById('min')
    const valueMax = document.getElementById('max')
    const valuePrice = document.querySelectorAll('.filter-price_input')
    const saleCheck = document.getElementById('discount-checkbox')
    let valueMi = 100
    let valueMa = 99999
    let valueCheck = false

    saleCheck.addEventListener('click', () => {
        if (saleCheck.checked) {
            valueCheck = true
        } else {
            valueCheck = false
        }
        console.log(valueCheck)
    })
    document.addEventListener('input', (event) => {
        console.log(event.target)
        if (event.target == valueMin) {
            valueMi = event.target.value
        }
        if (event.target == valueMax) {
            valueMa = event.target.value
        }
        if (valueMa == '') {
            valueMa = 99999
        }
        if (valueMi == '') {
            valueMi = 100
        }

        getData().then((data) => {
            renderGoods(priceFilter(data, valueMi, valueMa, valueCheck))
            console.log("min ", valueMi)
            console.log("max ", valueMa)
        })
    })



    // valueMax.addEventListener('input', (event) => {
    //     const value = event.target.value
    //     getData().then((data) => {
    //         renderGoods(priceFilter(data, value))
    //     })
    // })
}

export default price