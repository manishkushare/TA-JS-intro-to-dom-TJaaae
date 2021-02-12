console.log("test");

let hourHand = document.querySelector(".hour");
let minuteHand = document.querySelector(".minute");
let secondHand = document.querySelector(".second");


function clock() {
    const now = new Date();
    const seconds = now.getSeconds();
    secondHand.style.transform = `rotate(${(seconds / 60)*360+90}deg)`;
    const minute = now.getMinutes();
    minuteHand.style.transform = `rotate(${(minute/60)*360 +90}deg)`;
    const hour = now.getHours();
    hourHand.style.transform = `rotate(${(hour/12)*360+90}deg)`

}

setInterval(clock,1000);