let mainContainer = null

let filter = 'ALL' // one of all, done, not-done
let sort = 'ASCENDING' //ascending or descending

let searchPhrase = ''
let searchInputIsFocused = false
let newToDoName = ''
let newToDoInputIsFocused = false

let task = [
    {
        name: 'Wynieść śmieci',
        isCompleted: false,
    }
]

const appendArray = function (array, container) {
    array.forEach(function (element) {
        container.appendChild(element)
    })
}
const render = function () {
    return document.createTextNode('Ala ma kota')
}

const init = function (selector) {
    const container = document.querySelector(selector)

    if (!container) {
        console.log("Container do not exist")
        return
    }

    mainContainer = container
    const app = render()

    mainContainer.appendChild(app)
}

init('.root')