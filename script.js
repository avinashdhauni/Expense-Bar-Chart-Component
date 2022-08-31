import data from '/data.json' assert { type: 'json' };

let bars = document.getElementById("bars");
let expense = document.getElementsByClassName("expense");

let date = new Date();
let today = date.toLocaleString('en-us', {weekday: 'short'});

data.forEach((data, index) => {
    const showBar = `
        <div class="amount">$${data.amount}</div>
        <div class="amountBar" style="height: ${data.amount * 3}px"></div>
        <div class="day">${data.day}</div>
    `
    expense[index].insertAdjacentHTML("afterbegin", showBar);
    if(data.day === today.toLowerCase()){
        expense[index].classList.add("currentDay");
    }
});