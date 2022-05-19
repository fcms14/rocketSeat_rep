const input = document.getElementById('input')
const mem = document.getElementById('mem')

let value1
let symbol
let option
let inputed
let result

let equalPressed = false
let clear = 0

function cls() {
    if (clear == 0) {
        result = 0
        clear = 1
        inputed = ''
        input.innerHTML = ''
        equalPressed = false
    } else {
        clear = 0
        value1 = null
        symbol = ''
        option = ''
        mem.innerHTML = ''
    }
}

function calc() {
    let result
    switch (option) {
        case 'sum':
            result = value1 + Number(inputed)
            break
        case 'sub':
            result = value1 - Number(inputed)
            break
        case 'mult':
            result = value1 * Number(inputed)
            break
        case 'div':
            result = value1 / Number(inputed)
            result = parseFloat(result).toFixed(4)
            break
        default:
            result = value1 + Number(inputed)
    }
    return result
}

function typed(value) {
    clear = 0
    if (equalPressed) {
        equalPressed = false
        mem.innerHTML += '=' + result
        result = null
        inputed = value
        value1 = null
        symbol = ''
        option = ''
    } 
    // else if (value1 == result) {
        // result = null
        // inputed = value
    // } 
    else {
        inputed += value
    }
    input.innerHTML = inputed
}

function func(op) {
    clear = 0
    switch (op) {
        case 'sum':
            symbol = '+'
            option = op
            break
        case 'sub':
            symbol = '-'
            option = op
            break
        case 'mult':
            symbol = 'x'
            option = op
            break
        case 'div':
            symbol = '/'
            option = op
            break
    }

    if (value1 === '') {
        value1 = Number(inputed)
        inputed = ''
        mem.innerHTML = value1 + symbol
        input.innerHTML = ''
    } else {
        if (equalPressed) {
            equalPressed = false
            value1 = result
            result = null
            mem.innerHTML = value1 + symbol
            inputed = ''
            input.innerHTML = inputed
        } else {
            result = calc()
            value1 = result

            mem.innerHTML = value1 + symbol
        }
    }
}

function equalPress() {
    if (value1 != null) {
        clear = 0
        equalPressed = true
        mem.innerHTML = value1 + symbol + inputed
        result = calc()
        input.innerHTML = result
        inputed = result
        value1 = result
    }
}
