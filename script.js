// function updateTime() {
//     var now = new Date();

//     var timeElement = document.querySelector('.time');
//     var dateElement = document.querySelector('.date');

//     timeElement.textContent = now.toLocaleTimeString();
//     dateElement.textContent = now.toLocaleDateString();
//   }

//   setInterval(updateTime, 1000);


function updateClock() {
    var now = new Date();
    var dateName = now.getDay(),
        Month = now.getMonth(),
        year = now.getFullYear(),
        dataNumber = now.getDate(),
        Hour = now.getHours(),
        Min = now.getMinutes(),
        Second = now.getSeconds(),
        pe = "AM";

    if (Hour == 0) {
        Hour = 12;
    }
    if (Hour > 12) {
        Hour -= 12;
        pe = "PM";
    }

    Number.prototype.pad = function (digits) {
        for (var n = this.toString; n.length < digits; n = 0 + n);
        return n;
    }
    var months = ["january", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ids = ["dayname", "month", "daynum", "year", "hour", "minutes", "seconds", "period"];
    var values = [week[dateName], months[Month], dataNumber , year, Hour, Min, Second, pe];

    for (var i = 0; i < ids.length; i++) {
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

}

function initClock() {
    updateClock();
    window.setInterval("updateClock()", 1);

}