
setInterval(logClockTime, 1000); //Calls logClockTime every 1 second

//Get clock time in civilian hours, clear the console, print time
export function logClockTime() {
    let time = getClockTime();
    console.clear();
    console.log(time);
}

function getClockTime() {
    let date = new Date();
    //let time = "";

    let time = {
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
        ampm: "AM"
    }

    if (time.hours == 12) {
        time.ampm = "PM";
    }
    else if (time.hours > 12) {
        time.ampm = "PM"
    }

    if (time.hours < 10) {
        time.hours = "0" + time.hours;
    }

    if (time.minutes < 10) {
        time.minutes = "0" + time.minutes;
    }

    if (time.seconds < 10) {
        time.seconds = "0" + time.seconds;
    }

    return time.hours + ":" + time.minutes + ":" + time.seconds + " " + time.ampm;
}