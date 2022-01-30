const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('mins');
const seconds = document.getElementById('seconds');
const newYears = '1 Jan'+(new Date().getFullYear() +1);

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const difference = newYearsDate-currentDate;
    const totalSeconds = difference / 1000;
    // 1 minute = 60 seconds
    // 1 hour = 60minutes = 3600 seconds
    // 1 day = 24 hours = 1440 minutes = 86400 seconds
    const daysLeft = Math.floor(totalSeconds / 86400);
    const hoursLeft = Math.floor(totalSeconds / 3600)%24;
    const minutesLeft = Math.floor(totalSeconds / 60)%60;
    const secondsLeft = Math.floor(totalSeconds)%60;

    days.innerHTML = daysLeft;
    hours.innerHTML = hoursLeft;
    minutes.innerHTML = minutesLeft;
    seconds.innerHTML = secondsLeft;
}

setInterval(countdown,1000);
