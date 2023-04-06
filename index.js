const inputEl = document.querySelector("input");
const buttonEl = document.querySelector("button");
const timerEl = document.querySelector("span");

const createTimerAnimator = () => {
  let timerId = null;

  return (seconds) => {
    clearInterval(timerId);

    let remainingSeconds = seconds;

    const updateTimer = () => {
      if (remainingSeconds === 0) {
        clearInterval(timerId);
        timerEl.textContent = "00:00:00 - время вышло";
        return;
      }

      const hours = Math.floor(remainingSeconds / 3600);
      const minutes = Math.floor((remainingSeconds % 3600) / 60);
      const seconds = remainingSeconds % 60;

      timerEl.textContent = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

      remainingSeconds--;
    };

    updateTimer();

    timerId = setInterval(updateTimer, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener("input", () => {
  inputEl.value = inputEl.value.replace(/[^\d]/g, "");
});

buttonEl.addEventListener("click", () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);
  inputEl.value = "";
});
