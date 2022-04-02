const daysCount = document.querySelector('.days-count');
const hoursCount = document.querySelector('.hours-count');
const minutesCount = document.querySelector('.minutes-count');
const secondsCount = document.querySelector('.seconds-count');
const NewYear = '1 Jan 2023';

function countdown() {
const NewYearDate = new Date(NewYear);
const currentYear = new Date();

const Totalseconds = (NewYearDate - currentYear) /1000;


const Days = Math.floor(Totalseconds / 3600 / 24);
const hours = Math.floor(Totalseconds /3600) % 24 ;
const minutes = Math.floor(Totalseconds /60) % 60;
const seconds = Math.floor(Totalseconds) % 60;

console.log(Days, hours, minutes, seconds);
daysCount.innerHTML = Days;
hoursCount.innerHTML = formatTime(hours);
minutesCount.innerHTML = formatTime(minutes);
secondsCount.innerHTML = formatTime(seconds);

}

function formatTime(time) {
    return time < 10 ? `0 ${time}` : time;
}
setInterval(countdown, 1000);