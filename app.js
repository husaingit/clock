const second = document.getElementById('sec');
const minute = document.getElementById('min');
const hours = document.getElementById('hour');
const digi = document.getElementById('digi');

setInterval(updateClock, 1000);

function updateClock() {
    let date = new Date();
    let sec = date.getSeconds() / 60;
    let min = (date.getMinutes() + sec) / 60;
    let hour = (date.getHours() + min) / 12;
    let s = date.getSeconds();
    if (s < 10) {
        s = "0" + s;
    }
    let m = date.getMinutes();
    if (m < 10) {
        m = "0" + m;
    }
    let h = date.getHours();
    if (h > 12) {

        h = h - 12;
        digi.innerHTML = h + " : " + m + " : " + s + " PM";
    } else {

        digi.innerHTML = h + " : " + m + " : " + s + " AM";
    }
    second.style.transform = "rotate(" + (sec * 360) + "deg)";
    minute.style.transform = "rotate(" + (min * 360) + "deg)";
    hours.style.transform = "rotate(" + (hour * 360) + "deg)";
}

updateClock();