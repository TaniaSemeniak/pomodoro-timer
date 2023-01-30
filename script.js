const buttonStart = document.querySelector('#start');
let timerId;
buttonStart.addEventListener('click', function () {
   
    if (buttonStart.textContent === 'stop') {
        clearInterval(timerId);
        buttonStart.textContent = 'start';
    } else {
        buttonStart.textContent = 'stop';
           
        timerId = setInterval(() => {
            let timer = document.querySelector('#pomodoro-time');
            let minutes = +document.querySelector('#pomodoro-time').textContent.split(":")[0];
            let seconds = +document.querySelector('#pomodoro-time').textContent.split(":")[1];

            if (seconds > 0) {
                seconds--;
            }
            
            function format(val) {
                if (val < 10) {
                    return `0${val}`
                }
                return val;
            };

            if (seconds == 0 && minutes > 0) {
                minutes--;
                seconds = 59;
            }

            if (seconds == 0 && minutes == 0) {
               clearInterval(timerId);
               minutes = 25;
               buttonStart.textContent = 'start';
            }
            timer.textContent = `${format(minutes)}:${format(seconds)}`;
        }, 10);
    }
});  



