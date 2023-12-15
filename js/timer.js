'use strict'

const timer = document.querySelector('.promo__timer-wrapper'),
      days = document.querySelector('#days'),
      hours = document.querySelector('#hours'),
      minutes = document.querySelector('#minutes'),
      seconds = document.querySelector('#seconds'),
      preloader = document.querySelector('#preloader');

function updateTimer() {
  const currentTime = new Date(),
        lastTime = new Date(`November 01 2023 00:00:00`),
        diff = lastTime - currentTime;

  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24),
        hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24,
        minutesLeft = Math.floor(diff / 1000 / 60) % 60,
        secondsLeft = Math.floor(diff / 1000) % 60;

  days.innerText = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
  hours.innerText = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
  minutes.innerText = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
  seconds.innerText = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
};

setInterval(updateTimer, 1000);

setTimeout(function() {
  preloader.remove();
  timer.style.display = 'flex';
}, 1500);