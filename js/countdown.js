/*=========================================
 ZAWADI EVENT
 countdown.js
==========================================*/

// Set your event date here
const eventDate = new Date("June 15, 2027 09:00:00").getTime();

const countdown = document.getElementById("countdown");

function updateCountdown() {

    const now = new Date().getTime();

    const distance = eventDate - now;

    if (distance <= 0) {

        countdown.innerHTML = "🎉 The Conference Has Started!";
        clearInterval(timer);
        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    countdown.innerHTML = `
        <div class="count-box">
            <strong>${days}</strong><br>Days
        </div>

        <div class="count-box">
            <strong>${hours}</strong><br>Hours
        </div>

        <div class="count-box">
            <strong>${minutes}</strong><br>Minutes
        </div>

        <div class="count-box">
            <strong>${seconds}</strong><br>Seconds
        </div>
    `;

}

updateCountdown();

const timer = setInterval(updateCountdown, 1000);