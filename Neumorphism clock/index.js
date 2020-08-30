let hr = document.querySelector('.hr')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')



setInterval(() => {
    let day = new Date();

    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();

    hr.style.transform = `rotateZ(${hh * 30 + mm * 0.5}deg)`;
    min.style.transform = `rotateZ(${mm * 6}deg)`;
    sec.style.transform = `rotateZ(${ss * 6}deg)`;
}, 1000);