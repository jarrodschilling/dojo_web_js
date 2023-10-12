var cookieElement = document.querySelector('.flex-footer');

function deleteCookie() {
    cookieElement.remove();
}

var temp1Element = document.querySelector('#temp1').innerText
var temp2Element = document.querySelector('#temp2').innerText
var temp3Element = document.querySelector('#temp3').innerText
var temp4Element = document.querySelector('#temp4').innerText
var temp5Element = document.querySelector('#temp5').innerText
var temp6Element = document.querySelector('#temp6').innerText
var temp7Element = document.querySelector('#temp7').innerText
var temp8Element = document.querySelector('#temp8').innerText
var tempsElement = [temp1Element, temp2Element, temp3Element, temp4Element, temp5Element, temp6Element, temp7Element, temp8Element]



function cToF(c) {
    temp1Element.innerText = '75°'
    temp2Element.innerText = '64°'
    temp3Element.innerText = '81°'
    temp4Element.innerText = '66°'
    temp5Element.innerText = '70°'
    temp6Element.innerText = '61°'
    temp7Element.innerText = '79°'
    temp8Element.innerText = '70°'
}


var faren = 0
function celsius(c) {
    console.log(c)
    faren = (c * 9/5) + 32
    // console.log(cels)
    return faren
}

var cels = 0
function far(f) {
    // console.log(f)
    cels = (f - 32) * (5/9)
    // console.log(cels)
    return cels
}

var check = 0
function test(e) {
    console.log(e.value)
    if (e.value == "°C") {
        for (let i = 1; i <= 8; i++) {
            var temp = document.querySelector(`#temp${i}`)
            temp.innerText = celsius(parseInt(temp.innerText)) + "°"
        }
    }
    else if (e.value == "°F") {
        for (let i = 1; i <= 8; i++) {
            var temp = document.querySelector(`#temp${i}`)
            console.log(temp)
            temp.innerText = far(parseInt(temp.innerText)) + "°"
        }
    }


    // for (let i = 0; i < tempsElement.length; i++) {
    //     check = celsius(tempsElement[i])
    //     // console.log(check)
    //     tempsElement[i] = check
    //     console.log(tempsElement[i])
    //     // console.log(check)
    // }
}
