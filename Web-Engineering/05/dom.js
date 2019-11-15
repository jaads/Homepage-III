// Shopping list
const shoppingInput = document.getElementById("shoppingform");
const addBtnForShopping = document.getElementById('addforshoppingbutton');
const shoppingList = document.getElementById('shoppinglist');

addBtnForShopping.onclick = function () {
    const value = shoppingInput.value;
    const listitem = document.createElement('li');
    listitem.innerHTML = `${value} <button>Remove</button>`;
    shoppingList.appendChild(listitem);
    const deletebtn = listitem.querySelector('button');
    deletebtn.onclick = () => listitem.remove();
    shoppingInput.value = '';
    shoppingInput.focus();
};

shoppingInput.onkeydown = function (event) {
    if (event.key === 'Enter') addBtnForShopping.click();
};

// ---- Speaker list -----
const speakerInput = document.getElementById("speakerinput");
const addSpeakerBtn = document.getElementById('addspeakerbutton');
const speakerList = document.getElementById('speakerlist');

addSpeakerBtn.onclick = function () {
    const inputValue = speakerInput.value;
    let listItem = document.createElement('li');
    speakerList.appendChild(listItem);
    listItem.innerHTML = `${inputValue} <time>00:00:00</time> <button>Stop</button>`;

    let seconds = 0, minutes = 0, hours = 0;
    let timerID = setInterval(addSecond, 1000);

    function addSecond() {
        console.log("Executing..");
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

    }


    const btn = listItem.querySelector('button');
    btn.onclick = function () {
        if (btn.innerText === 'Stop') {
            clearInterval(timerID);
            console.log('Stopped time.');
            listItem.querySelector('button').innerText = 'Start';
            return;
        }
        if (btn.innerText === 'Start') {
            timerID = setInterval(addSecond, 1000);
            console.log('Resumed time.');
            listItem.querySelector('button').innerText = 'Stop';
        }

    };
    speakerInput.value = '';
    speakerInput.focus();
};

speakerInput.onkeydown = function (event) {
    if (event.key === 'Enter') addSpeakerBtn.click();
};

// ---- Exel ---
const table = document.querySelector('table');
const result = document.getElementById('result');
const nrOfRows = document.getElementById("x");
const nrOfColums = document.getElementById("y");
let leftTopCornerRow = document.getElementById('selectionTopLeftX');
let leftTopCornerCol = document.getElementById('selectionTopLeftY');
let rightBottomCornerRow = document.getElementById('selectionBottomRightX');
let rightBottomCornerCol = document.getElementById('selectionBottomRightY');

let tbody = table.createTBody();
createTable();
nrOfRows.onchange = createTable;
nrOfColums.onchange = createTable;

leftTopCornerRow.onchange = createTable;
leftTopCornerCol.onchange = createTable;
rightBottomCornerRow.onchange = createTable;
rightBottomCornerCol.onchange = createTable;

function createTable() {
    console.log('creating');
    tbody.remove();
    tbody = table.createTBody();
    for (let i = 0; i < nrOfRows.value; i++) {
        let row = tbody.insertRow();
        row.contentEditable = 'true';
        for (let j = 0; j < nrOfColums.value; j++) {
            let cell = row.insertCell();
            cell.contentEditable = 'true';
            cell.innerText = j;
        }
    }

    let sum = 0;

    add();

    leftTopCornerRow.max = rightBottomCornerRow.value;
    leftTopCornerCol.max = rightBottomCornerCol.value;
    rightBottomCornerRow.min = leftTopCornerRow.value;
    rightBottomCornerCol.min = leftTopCornerCol.value;

    function add() {
        console.log('Calculating..');
        for (let k = leftTopCornerRow.value; k <= rightBottomCornerRow.value; k++) {
            // iterate through rows
            let row = tbody.rows[k];
            for (let l = leftTopCornerCol.value; l <= rightBottomCornerCol.value; l++) {
                //iterate through columns
                let col = row.cells[l];
                sum += parseInt(col.innerText);
                col.style.backgroundColor = 'lightgrey';
            }
        }

        result.innerText = sum;
    }

}



