// ==== CONTADOR REGRESIVO ====

function getTargetTime() {
    let now = new Date();
    let target = new Date();
   target.setHours(22, 22, 22, 22);

    if (target <= now) {
        target.setDate(target.getDate() + 1);
    }
    return target;
}

let targetTime = getTargetTime();

function updateTimer() {
    let now = new Date();
    let diff = targetTime - now;

    if (diff <= 0) {
        document.getElementById("timer").textContent = "🎉 Felicidades, te quedaste esperando por un contador que no hacía nada 🎉";
        document.getElementById("timer").style.color = "red";
        document.getElementById("timer").style.fontSize = "1.5em";
        clearInterval(timerInterval);
        return;
    }

    let hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
    let minutes = String(Math.floor((diff / (1000 * 60)) % 60)).padStart(2, '0');
    let seconds = String(Math.floor((diff / 1000) % 60)).padStart(2, '0');

    document.getElementById("timer").textContent = `${hours}:${minutes}:${seconds}`;
}

let timerInterval = setInterval(updateTimer, 1000);
updateTimer();

// ==== FAQ FUNCIONAL ====
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        let answer = question.nextElementSibling;
        let icon = question.querySelector('.arrow');
        
        answer.classList.toggle('visible');
        icon.classList.toggle('rotated');
    });
});
