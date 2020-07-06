// ---- Speaker list -----
const speakerInput = document.getElementById("speakerinput");
const addSpeakerBtn = document.getElementById('addspeakerbutton');
const speakerList = document.getElementById('speakerlist');

const allTimers = [];

addSpeakerBtn.onclick = function () {
    const inputValue = speakerInput.value;
    let listItem = document.createElement('li');
    speakerList.appendChild(listItem);
    listItem.innerHTML = `${inputValue} <time>00:00:00</time> <button>Stop</button>`;

    let seconds = 0, minutes = 0, hours = 0;

    addSecond = function () {
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

        let formattedTime = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":"
            + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":"
            + (seconds > 9 ? seconds : "0" + seconds);
        listItem.querySelector('time').innerText = formattedTime;

    };

    let timerID = setInterval(addSecond, 1000);
    allTimers.push(timerID);

    const btn = listItem.querySelector('button');
    let p = [listItem, timerID]
    btn.onclick = testii.bind(listItem, timerID, addSecond);

    speakerInput.value = '';
    speakerInput.focus();
};

function testii(timerID, addSecond) {
    console.log(this);
    console.log(addSecond);
    
    if (this.lastChild.innerText === 'Stop') {
        clearInterval(timerID);
        console.log('Stopped time.');
        this.lastChild.innerText = 'Start';
        return;
    }
    if (this.lastChild.innerText === 'Start') {
        timerID = setInterval(addSecond, 1000);
        console.log('Resumed time.');
        this.lastChild.innerText = 'Stop';
    }
};

speakerInput.onkeydown = function (event) {
    if (event.key === 'Enter') addSpeakerBtn.click();
};

