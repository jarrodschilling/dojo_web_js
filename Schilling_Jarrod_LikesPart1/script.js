var count = 0;
var countElement = document.querySelector(".counter");


function add1() {
    count++;
    countElement.innerText = count + " like(s)"
}