var stringTxt = document.querySelector('h1');
const textContent = stringTxt.textContent;
const chars = textContent.split("");

stringTxt.textContent = ""

chars.forEach(char => {
    stringTxt.innerHTML += '<span>' + char + '</span>'
})

let letter = 0;
let timer = setInterval(onTick, 50);

function onTick() {
    const span = document.querySelectorAll('span')[letter];
    span.classList.add('fade');
    letter++

    if (letter === textContent.length) {
        complete();
        return;
    }
}


function complete() {
    clearInterval(timer);
    timer = null;
}