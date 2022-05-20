
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

export const priceFilter = (goods, valueMin, valueMax, valueCheck) => {
    return goods.filter((goodsItem) => {
        return ((goodsItem.price >= valueMin) && (goodsItem.price <= valueMax)) && (((goodsItem.price >= valueMin) && (goodsItem.price <= valueMax)) && goodsItem.sale === valueCheck)
    })
}

// export default searchFilter