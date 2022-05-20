
export const searchFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.title.toLowerCase().includes(value.toLowerCase())
    })
}
export const categoryFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        return goodsItem.category === value
    })
}
// мой скрипт
// export const priceFilter = (goods, valueMin, valueMax, valueCheck) => {
//     return goods.filter((goodsItem) => {
//         return ((goodsItem.price >= valueMin) && (goodsItem.price <= valueMax)) && (((goodsItem.price >= valueMin) && (goodsItem.price <= valueMax)) && goodsItem.sale === valueCheck)
//     })
// }
export const priceFilter = (goods, min, max) => {
    return goods.filter((goodsItem) => {
        if (min === '' && max === '') {
            return goodsItem
        } else if (min !== '' && max !== '') {
            return goodsItem.price > +min && goodsItem.price < +max
        } else if (min !== '' && max === '') {
            return goodsItem.price > +min
        } else if (min === '' && max !== '') {
            return goodsItem.price < +max
        }
    })
}

export const saleFilter = (goods, value) => {
    return goods.filter((goodsItem) => {
        if (value) {
            return goodsItem.sale === true
        } else {
            return goodsItem
        }
    })
}
// мой скрипт

