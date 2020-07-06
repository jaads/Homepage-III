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

    leftTopCornerRow.max = rightBottomCornerRow.value;
    leftTopCornerCol.max = rightBottomCornerCol.value;
    rightBottomCornerRow.min = leftTopCornerRow.value;
    rightBottomCornerCol.min = leftTopCornerCol.value;

    let sum = 0;
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



