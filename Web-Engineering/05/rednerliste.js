const speakerInput = document.getElementById("speakerinput");
const addSpeakerBtn = document.getElementById('addspeakerbutton');
const speakerList = document.getElementById('speakerlist');

speakerInput.onkeydown = function (event) {
    if (event.key === 'Enter') addSpeakerBtn.click();
};

let currentTimerId = null;

addSpeakerBtn.onclick = function () {
    const listItem = createListItem();
    clearInterval(currentTimerId);
    currentTimerId = setInterval(addSecond, 1000, listItem);
    resetInput();
};

function createListItem() {
    let li = document.createElement('li');
    speakerList.appendChild(li);
    li.innerHTML = `${speakerInput.value} <time>00:00:00</time> <button>Stop</button>`;
    li.querySelector('button').onclick = toggleTime.bind(li);
    const allListItems = Array.from(li.parentNode.children);
    allListItems.forEach((item, idx) => {
        if (idx != allListItems.length - 1) {
            item.lastChild.innerText = 'Start';
        }
    });
    return li;
};

function resetInput() {
    speakerInput.value = '';
    speakerInput.focus();
};

function toggleTime() {
    clearInterval(currentTimerId);
    if (this.lastChild.innerText === 'Stop') {
        this.lastChild.innerText = 'Start';
        return;
    }
    if (this.lastChild.innerText === 'Start') {
        timerID = setInterval(addSecond, 1000, this);
        currentTimerId = timerID;
        const allListItems = Array.from(this.parentNode.children);
        allListItems.forEach((child) => child.lastChild.innerText = 'Start');
        this.lastChild.innerText = 'Stop';
    }
};

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
