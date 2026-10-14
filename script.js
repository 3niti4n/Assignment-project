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

if (startButton) {
    let isRunning = false;

    startButton.addEventListener("click", () => {
        isRunning = !isRunning; 

        if (isRunning) {
            startButton.textContent = "Avsluta pass";
            startButton.style.backgroundColor = "#e74c3c";
        } else {
            startButton.textContent = "Starta pass";
            startButton.style.backgroundColor = "";
        }
     });
   }
});
