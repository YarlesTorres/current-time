window.onload = function () {
    var currentClock = document.getElementById('current-time');
    var currentDate = document.getElementById('current-date');
    
    function currentTimeFunction() {
        var time = new Date();
        var hours = time.getHours();
        var minutes = time.getMinutes();
        var seconds = time.getSeconds();

        if(minutes < 10){
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        var showClock = hours + ':' + minutes + ':' + seconds;
        currentClock.textContent = showClock;
    }

    function currentDateFunction(date = new Date()) {
        var day = date.getDate();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();

        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }

        var showDate = day + "/" + month + "/" + year;
        currentDate.textContent = showDate;
    }

    setInterval(currentTimeFunction, 1000);
    setInterval(currentDateFunction, 1000);
}

