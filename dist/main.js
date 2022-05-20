/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/script */ \"./src/modules/script.js\");\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/load */ \"./src/modules/load.js\");\n/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/search */ \"./src/modules/search.js\");\n/* harmony import */ var _modules_catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/catalog */ \"./src/modules/catalog.js\");\n/* harmony import */ var _modules_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/price */ \"./src/modules/price.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_catalog__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n;(0,_modules_search__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n;(0,_modules_script__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n;(0,_modules_load__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n;(0,_modules_price__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n\n//# sourceURL=webpack://javascriptglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/catalog.js":
/*!********************************!*\
  !*** ./src/modules/catalog.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst catalog = () => {\r\n    const searcCatalog = document.querySelector('.catalog-button button')\r\n    const catalogModal = document.querySelector('.catalog')\r\n    const catalogsItems = document.querySelectorAll('.catalog li')\r\n    let isOpen = false\r\n    searcCatalog.addEventListener('click', () => {\r\n        isOpen = !isOpen\r\n        if (isOpen)\r\n            catalogModal.style.display = 'block'\r\n        else {\r\n            catalogModal.style.display = ''\r\n        }\r\n    })\r\n    catalogsItems.forEach((item) => {\r\n        item.addEventListener('click', () => {\r\n            const text = item.textContent\r\n            ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n                ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.categoryFilter)(data, text))\r\n            })\r\n        })\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (catalog);\n\n//# sourceURL=webpack://javascriptglo/./src/modules/catalog.js?");

/***/ }),

/***/ "./src/modules/filters.js":
/*!********************************!*\
  !*** ./src/modules/filters.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"categoryFilter\": () => (/* binding */ categoryFilter),\n/* harmony export */   \"priceFilter\": () => (/* binding */ priceFilter),\n/* harmony export */   \"saleFilter\": () => (/* binding */ saleFilter),\n/* harmony export */   \"searchFilter\": () => (/* binding */ searchFilter)\n/* harmony export */ });\n\r\nconst searchFilter = (goods, value) => {\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.title.toLowerCase().includes(value.toLowerCase())\r\n    })\r\n}\r\nconst categoryFilter = (goods, value) => {\r\n    return goods.filter((goodsItem) => {\r\n        return goodsItem.category === value\r\n    })\r\n}\r\n// мой скрипт\r\n// export const priceFilter = (goods, valueMin, valueMax, valueCheck) => {\r\n//     return goods.filter((goodsItem) => {\r\n//         return ((goodsItem.price >= valueMin) && (goodsItem.price <= valueMax)) && (((goodsItem.price >= valueMin) && (goodsItem.price <= valueMax)) && goodsItem.sale === valueCheck)\r\n//     })\r\n// }\r\nconst priceFilter = (goods, min, max) => {\r\n    return goods.filter((goodsItem) => {\r\n        if (min === '' && max === '') {\r\n            return goodsItem\r\n        } else if (min !== '' && max !== '') {\r\n            return goodsItem.price > +min && goodsItem.price < +max\r\n        } else if (min !== '' && max === '') {\r\n            return goodsItem.price > +min\r\n        } else if (min === '' && max !== '') {\r\n            return goodsItem.price < +max\r\n        }\r\n    })\r\n}\r\n\r\nconst saleFilter = (goods, value) => {\r\n    return goods.filter((goodsItem) => {\r\n        if (value) {\r\n            return goodsItem.sale === true\r\n        } else {\r\n            return goodsItem\r\n        }\r\n    })\r\n}\r\n// мой скрипт\r\n\r\n\n\n//# sourceURL=webpack://javascriptglo/./src/modules/filters.js?");

/***/ }),

/***/ "./src/modules/getData.js":
/*!********************************!*\
  !*** ./src/modules/getData.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// функция для получение товаров или постов\r\n// get получает объект\r\n// post отправляет \r\n// https://gloproj-ca645-default-rtdb.firebaseio.com/goods.json\r\nconst getData = () => {\r\n    return fetch('http://localhost:3000/goods')\r\n        .then((Response) => {\r\n            return Response.json() // перевод в структуру json\r\n        })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getData);\n\n//# sourceURL=webpack://javascriptglo/./src/modules/getData.js?");

/***/ }),

/***/ "./src/modules/load.js":
/*!*****************************!*\
  !*** ./src/modules/load.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n\r\n\r\n\r\n\r\nconst load = () => {\r\n    const cartbtn = document.getElementById('cart')\r\n    // cartbtn.addEventListener('click', () => {\r\n    //     postData().then((data) => {\r\n    //         console.log(data) // вывод данных из сервера\r\n\r\n    //         getData().then((data) => {\r\n    //             console.log(data) // вывод данных из сервера\r\n    //         })\r\n    //     })\r\n    // })\r\n\r\n    // getData().then((data) => {\r\n    //     console.log(data) // вывод данных из сервера\r\n    // })\r\n\r\n    cartbtn.addEventListener('click', () => {\r\n        ;(0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().then((data) => {\r\n            console.log(data) // вывод данных из сервера\r\n        })\r\n    })\r\n\r\n    ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n        ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(data) // вывод данных из сервера\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load);\n\n//# sourceURL=webpack://javascriptglo/./src/modules/load.js?");

/***/ }),

/***/ "./src/modules/postData.js":
/*!*********************************!*\
  !*** ./src/modules/postData.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// функция для получение товаров или постов\r\n// get получает объект\r\n// post отправляет \r\nconst postData = (cart) => {\r\n    return fetch('http://jsonplaceholder.typicode.com/posts', {\r\n        method: 'POST',\r\n        body: JSON.stringify(cart),\r\n        headers: {\r\n            'Content-type': 'application/json; charset=UTF-8',\r\n        },\r\n    })\r\n        .then(res => res.json())\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postData);\n\n//# sourceURL=webpack://javascriptglo/./src/modules/postData.js?");

/***/ }),

/***/ "./src/modules/price.js":
/*!******************************!*\
  !*** ./src/modules/price.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst price = () => {\r\n    const valueMin = document.getElementById('min')\r\n    const valueMax = document.getElementById('max')\r\n    const saleCheck = document.getElementById('discount-checkbox')\r\n    const checkSpan = document.querySelector('.filter-check_checkmark')\r\n\r\n    valueMin.addEventListener('input', () => {\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, saleCheck.checked), valueMin.value, valueMax.value))\r\n        })\r\n    })\r\n\r\n    valueMax.addEventListener('input', () => {\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, saleCheck.checked), valueMin.value, valueMax.value))\r\n        })\r\n    })\r\n\r\n    saleCheck.addEventListener('change', () => {\r\n        if (saleCheck.checked) {\r\n            checkSpan.classList.add('checked')\r\n        } else {\r\n            checkSpan.classList.remove('checked')\r\n        }\r\n        (0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            (0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.priceFilter)((0,_filters__WEBPACK_IMPORTED_MODULE_2__.saleFilter)(data, saleCheck.checked), valueMin.value, valueMax.value))\r\n\r\n        })\r\n    })\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    // let valueMi = 100\r\n    // let valueMa = 99999\r\n    // let valueCheck = false\r\n\r\n    // мой скрипт\r\n    // saleCheck.addEventListener('click', () => {\r\n    //     if (saleCheck.checked) {\r\n    //         valueCheck = true\r\n    //     } else {\r\n    //         valueCheck = false\r\n    //     }\r\n    //     console.log(valueCheck)\r\n    // })\r\n\r\n    // document.addEventListener('input', (event) => {\r\n    //     console.log(event.target)\r\n    //     if (event.target == valueMin) {\r\n    //         valueMi = event.target.value\r\n    //     }\r\n    //     if (event.target == valueMax) {\r\n    //         valueMa = event.target.value\r\n    //     }\r\n    //     if (valueMa == '') {\r\n    //         valueMa = 99999\r\n    //     }\r\n    //     if (valueMi == '') {\r\n    //         valueMi = 100\r\n    //     }\r\n\r\n    //     getData().then((data) => {\r\n    //         renderGoods(priceFilter(data, valueMi, valueMa, valueCheck))\r\n    //         console.log(\"min \", valueMi)\r\n    //         console.log(\"max \", valueMa)\r\n    //     })\r\n    // })\r\n    // мой скрипт\r\n\r\n\r\n    // valueMax.addEventListener('input', (event) => {\r\n    //     const value = event.target.value\r\n    //     getData().then((data) => {\r\n    //         renderGoods(priceFilter(data, value))\r\n    //     })\r\n    // })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (price);\n\n//# sourceURL=webpack://javascriptglo/./src/modules/price.js?");

/***/ }),

/***/ "./src/modules/renderCards.js":
/*!************************************!*\
  !*** ./src/modules/renderCards.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// функция для отображения карточек\r\nconst renderCards = (goods) => {\r\n    const cartWrapper = document.querySelector('.cart-wrapper')\r\n    cartWrapper.innerHTML = ''\r\n\r\n    if (goods.length === 0) {\r\n        cartWrapper.insertAdjacentHTML('beforeend', `\r\n            <div id=\"cart-empty\">\r\n                Ваша корзина пока пуста\r\n            </div>\r\n            `)\r\n    } else {\r\n\r\n        goods.forEach((goodsItem) => {\r\n            cartWrapper.insertAdjacentHTML('beforeend', `\r\n        <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n            ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n            <div class=\"card-img-wrapper\">\r\n                <span class=\"card-img-top\"\r\n                    style=\"background-image: url('${goodsItem.img}')\"></span>\r\n            </div>\r\n            <div class=\"card-body justify-content-between\">\r\n                <div class=\"card-price\">${goodsItem.price}</div>\r\n                <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                <button class=\"btn btn-primary\">Удалить</button>\r\n            </div>\r\n        </div>\r\n        `)\r\n        });\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderCards);\n\n//# sourceURL=webpack://javascriptglo/./src/modules/renderCards.js?");

/***/ }),

/***/ "./src/modules/renderGoods.js":
/*!************************************!*\
  !*** ./src/modules/renderGoods.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// функция для отображения карточек\r\nconst renderGoods = (goods) => {\r\n    const goodsWrapper = document.querySelector('.goods')\r\n    // localStorage\r\n    localStorage.setItem('goods', JSON.stringify(goods))\r\n\r\n    goodsWrapper.innerHTML = ''\r\n    goods.forEach((goodsItem) => {\r\n        goodsWrapper.insertAdjacentHTML('beforeend', `\r\n        <div class=\"col-12 col-md-6 col-lg-4 col-xl-3\">\r\n        <div class=\"card\" data-key=\"${goodsItem.id}\">\r\n            ${goodsItem.sale ? '<div class=\"card-sale\">🔥Hot Sale🔥</div>' : ''}\r\n            <div class=\"card-img-wrapper\">\r\n                <span class=\"card-img-top\"\r\n                    style=\"background-image: url('${goodsItem.img}')\"></span>\r\n            </div>\r\n            <div class=\"card-body justify-content-between\">\r\n                <div class=\"card-price\">${goodsItem.price}</div>\r\n                <h5 class=\"card-title\">${goodsItem.title}</h5>\r\n                <button class=\"btn btn-primary\">В корзину</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n        `)\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderGoods);\n\n//# sourceURL=webpack://javascriptglo/./src/modules/renderGoods.js?");

/***/ }),

/***/ "./src/modules/script.js":
/*!*******************************!*\
  !*** ./src/modules/script.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _renderCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderCards */ \"./src/modules/renderCards.js\");\n/* harmony import */ var _postData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./postData */ \"./src/modules/postData.js\");\n\r\n\r\nconst cart = () => {\r\n\r\n    const cartbtn = document.getElementById('cart')\r\n    const cartmodal = document.querySelector('.cart')\r\n    const close = document.querySelector('.cart-close')\r\n    const goodsWrapper = document.querySelector('.goods')\r\n    const cartTotal = document.querySelector('.cart-total span')\r\n    const cartWrapper = document.querySelector('.cart-wrapper')\r\n    const cartSend = document.querySelector('.cart-confirm')\r\n    const numberGoods = document.querySelector('.counter')\r\n\r\n\r\n\r\n    cartbtn.addEventListener('click', () => {\r\n        // создаем массив в localStorage\r\n        const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\r\n        cartmodal.style.display = \"flex\"\r\n        // отрисовываем товары из localStorage\r\n        ;(0,_renderCards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n        // считаем цену\r\n        cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n            return sum + goodItem.price\r\n        }, 0)\r\n    })\r\n\r\n    close.addEventListener('click', () => {\r\n        cartmodal.style.display = ''\r\n    })\r\n    // добавления при помощи делигирования \r\n    goodsWrapper.addEventListener('click', (event) => {\r\n        let target = event.target\r\n        if (target.classList.contains('btn-primary')) {\r\n            const card = target.closest('.card')\r\n            // получаем ключ из атрибута\r\n            const key = card.dataset.key\r\n            // по ключу добавляем в массив localStorage новые карточки\r\n            const goods = JSON.parse(localStorage.getItem('goods'))\r\n            const cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []\r\n\r\n            const goodItem = goods.find((item) => {\r\n                return item.id === +key\r\n            })\r\n            cart.push(goodItem)\r\n            localStorage.setItem('cart', JSON.stringify(cart))\r\n            numberGoods.textContent = cart.reduce((sum, goodItem) => {\r\n                return sum + 1\r\n            }, 0)\r\n        }\r\n    })\r\n    // удаление при помощи делигирования \r\n    cartWrapper.addEventListener('click', (event) => {\r\n        let target = event.target\r\n        if (target.classList.contains('btn-primary')) {\r\n            const cart = localStorage.getItem('cart') ?\r\n                JSON.parse(localStorage.getItem('cart')) : []\r\n            const card = target.closest('.card')\r\n            const key = card.dataset.key\r\n            // ищем индекс итема для удаления\r\n            const index = cart.findIndex((item) => {\r\n                return item.id === +key\r\n            })\r\n            // удаление по индексу\r\n            cart.splice(index, 1)\r\n\r\n            localStorage.setItem('cart', JSON.stringify(cart))\r\n            // отрисовка товаров корзины \r\n            ;(0,_renderCards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cart)\r\n            // считаем цену\r\n            cartTotal.textContent = cart.reduce((sum, goodItem) => {\r\n                return sum + goodItem.price\r\n            }, 0)\r\n            numberGoods.textContent = cart.reduce((sum, goodItem) => {\r\n                return sum + 1\r\n            }, 0)\r\n        }\r\n    })\r\n    // оформление по клику\r\n    cartSend.addEventListener('click', () => {\r\n        const cart = localStorage.getItem('cart') ?\r\n            JSON.parse(localStorage.getItem('cart')) : []\r\n        ;(0,_postData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(cart).then(() => {\r\n            // удаление из localStorage\r\n            localStorage.removeItem('cart')\r\n            // отрисовка товаров корзины \r\n            ;(0,_renderCards__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([])\r\n            // считаем цену\r\n            cartTotal.textContent = 0\r\n            numberGoods.textContent = 0\r\n\r\n        })\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cart);\n\n//# sourceURL=webpack://javascriptglo/./src/modules/script.js?");

/***/ }),

/***/ "./src/modules/search.js":
/*!*******************************!*\
  !*** ./src/modules/search.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ \"./src/modules/getData.js\");\n/* harmony import */ var _renderGoods__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderGoods */ \"./src/modules/renderGoods.js\");\n/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filters */ \"./src/modules/filters.js\");\n\r\n\r\n\r\n\r\nconst search = () => {\r\n    const searchInput = document.querySelector('.search-wrapper_input')\r\n\r\n    searchInput.addEventListener('input', (event) => {\r\n        const value = event.target.value\r\n\r\n        ;(0,_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])().then((data) => {\r\n            ;(0,_renderGoods__WEBPACK_IMPORTED_MODULE_1__[\"default\"])((0,_filters__WEBPACK_IMPORTED_MODULE_2__.searchFilter)(data, value))\r\n        })\r\n    })\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);\n\n//# sourceURL=webpack://javascriptglo/./src/modules/search.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;