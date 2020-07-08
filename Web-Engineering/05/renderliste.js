const speakerInput = document.getElementById("speakerinput");
const addSpeakerBtn = document.getElementById('addspeakerbutton');
const speakerList = document.getElementById('speakerlist');

const allTimers = [];

function addSecond(li) {
    const time = li.querySelector('time');
    let hours = parseInt(time.textContent.substring(0, 2));
    let minutes = parseInt(time.textContent.substring(3, 5));
    let seconds = parseInt(time.textContent.substring(6, 8));

    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
            if (hours >= 24) {
                seconds = 0;
                minutes = 0;
                hours = 0;
            }
        }
    }

    let format = (i) => i > 9 ? i : "0" + i;
    hours = format(hours);
    minutes = format(minutes);
    seconds = format(seconds);
    time.innerText = `${hours}:${minutes}:${seconds}`;
};

addSpeakerBtn.onclick = function () {
    let listItem = document.createElement('li');
    speakerList.appendChild(listItem);
    listItem.innerHTML = `${speakerInput.value} <time>00:00:00</time> <button>Stop</button>`;

    let timerID = setInterval(addSecond, 1000, listItem);
    allTimers.push(timerID);

    const btn = listItem.querySelector('button');
    btn.onclick = toggleTime.bind(listItem, timerID, addSecond);

    speakerInput.value = '';
    speakerInput.focus();
};

function toggleTime(timerID, addSecond) {
    if (this.lastChild.innerText === 'Stop') {
        console.log('stopped time', timerID);

        clearInterval(timerID);
        console.log('Stopped time.');
        this.lastChild.innerText = 'Start';
        return;
    }
    if (this.lastChild.innerText === 'Start') {
        timerID = setInterval(addSecond, 1000, this);
        console.log('Resumed time.', timerID);
        this.lastChild.innerText = 'Stop';
    }
};

speakerInput.onkeydown = function (event) {
    if (event.key === 'Enter') addSpeakerBtn.click();
};

