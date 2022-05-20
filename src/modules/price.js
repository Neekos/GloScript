import getData from "./getData"
import renderGoods from "./renderGoods"
import { priceFilter, saleFilter } from "./filters"

const price = () => {
    const valueMin = document.getElementById('min')
    const valueMax = document.getElementById('max')
    const saleCheck = document.getElementById('discount-checkbox')
    const checkSpan = document.querySelector('.filter-check_checkmark')

    valueMin.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(saleFilter(data, saleCheck.checked), valueMin.value, valueMax.value))
        })
    })

    valueMax.addEventListener('input', () => {
        getData().then((data) => {
            renderGoods(priceFilter(saleFilter(data, saleCheck.checked), valueMin.value, valueMax.value))
        })
    })

    saleCheck.addEventListener('change', () => {
        if (saleCheck.checked) {
            checkSpan.classList.add('checked')
        } else {
            checkSpan.classList.remove('checked')
        }
        getData().then((data) => {
            renderGoods(priceFilter(saleFilter(data, saleCheck.checked), valueMin.value, valueMax.value))

        })
    })
















    // let valueMi = 100
    // let valueMa = 99999
    // let valueCheck = false

    // мой скрипт
    // saleCheck.addEventListener('click', () => {
    //     if (saleCheck.checked) {
    //         valueCheck = true
    //     } else {
    //         valueCheck = false
    //     }
    //     console.log(valueCheck)
    // })

    // document.addEventListener('input', (event) => {
    //     console.log(event.target)
    //     if (event.target == valueMin) {
    //         valueMi = event.target.value
    //     }
    //     if (event.target == valueMax) {
    //         valueMa = event.target.value
    //     }
    //     if (valueMa == '') {
    //         valueMa = 99999
    //     }
    //     if (valueMi == '') {
    //         valueMi = 100
    //     }

    //     getData().then((data) => {
    //         renderGoods(priceFilter(data, valueMi, valueMa, valueCheck))
    //         console.log("min ", valueMi)
    //         console.log("max ", valueMa)
    //     })
    // })
    // мой скрипт


    // valueMax.addEventListener('input', (event) => {
    //     const value = event.target.value
    //     getData().then((data) => {
    //         renderGoods(priceFilter(data, value))
    //     })
    // })
}

export default price