const timeDisplay = document.getElementById('time');
const dateDisplay = document.getElementById('date');


setInterval(function () {
    let date = new Date()
    // console.log(date.toLocaleTimeString());
    timeDisplay.textContent = date.toLocaleTimeString();
    dateDisplay.textContent = date.toLocaleDateString();    
}, 1000)
