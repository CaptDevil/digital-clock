const hour = document.getElementById('hours');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
const month = document.getElementById('month');
const day = document.getElementById('day');
const date = document.getElementById('date');
const year = document.getElementById('year');

setInterval(()=>{
    const d = new Date();
    hour.textContent = d.getHours().toString().length === 1 ? '0'+d.getHours() : d.getHours();
    min.textContent = d.getMinutes().toString().length === 1 ? '0'+d.getMinutes() : d.getMinutes();
    sec.textContent = d.getSeconds().toString().length === 1 ? '0'+d.getSeconds() : d.getSeconds();
    date.textContent = d.getDate();
    month.textContent = findMonth(d.getMonth());
    day.textContent = getWeekDay(d.getDay());
});

function findMonth(a){
    switch (a) {
        case 0:
            return 'January'
        case 1:
            return 'Febraury'
        case 2:
            return 'March'
        case 3:
            return 'April'
        case 4:
            return 'May'
        case 5:
            return 'June'
        case 6:
            return 'July'
        case 7:
            return 'August'
        case 8:
            return 'September'
        case 9:
            return 'October'
        case 10:
            return 'November'
        case 11:
            return 'December'
    }
}

function getWeekDay(a){
    switch (a) {
        case 0:
            return 'Sunday'
        case 1:
            return 'Monday'
        case 2:
            return 'Tuesday'
        case 3:
            return 'Wednesday'
        case 4:
            return 'Thursday'
        case 5:
            return 'Friday'
        case 6:
            return 'Saturday'
    }
}