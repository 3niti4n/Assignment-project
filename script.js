document.addEventListener("DOMContentLoaded" ,  () => {
    const dateElement = document.getElementById("current-date");
    if (dateElement) {
        const options = { weekday: 'long', day: 'numeric', month: 'long'};
        const today = new Date ();
        let formattedDate = today.toLocaleDateString('sv-SE', options);
        formattedDate = today.toLocaleDateString('sv-SE', options);
        formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
        dateElement.textContent = formattedDate;
    }

const startButton = document.querySelector(".btn-start");
const timerDisplay = document.getElementById("timer-stats");

if (startButton) {
    let isRunning = false;
    let timerInterval;
    let totalSeconds = 52 * 60;

    function updateTimerDisplay() {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        if (timerDisplay) {
            timerDisplay.textContent = `${minutes} min ${seconds < 10 ? '0' : ''}${seconds} sek`;
        }
    }

    startButton.addEventListener("click", () => {
        isRunning = !isRunning; 

        if (isRunning) {
            startButton.textContent = "Avsluta pass";
            startButton.style.backgroundColor = "#e74c3c";

            clearInterval(timerInterval);
            timerInterval = setInterval(() => {
                if (totalSeconds > 0) {
                    totalSeconds--;
                    updateTimerDisplay();
                } else {
                clearInterval(timerInterval);
                startButton.textContent = "Pass Klart!";
             }
         }, 1000);
            
        } else {
            startButton.textContent = "Starta pass";
            startButton.style.backgroundColor = "";
            clearInterval(timerInterval);
        }
     });
   }
   const dayCards = document.querySelectorAll(".day-card");

   dayCards.forEach(card => {
    card.addEventListener("click", () => {
        dayCards.forEach(c => c.classList.remove("active"));
        card.classList.add("active");
    });
  });
});
