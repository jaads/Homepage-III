const barvaluesBtn = document.getElementById('loadbarvaluesbtn');
const resetValuesBtn = document.getElementById('resetbarvaluesbtn');
const barlist = document.getElementById('barlist');

const barDataArr = [];
barvaluesBtn.onclick = () => updateBarValues();
resetValuesBtn.onclick = () => resetBarValues();

const getDataAndInit = (() => {
    fetch('bardata.json')
        .then(res => res.json())
        .then(data => {
            data.values.forEach((element) => {
                barDataArr.push(element);
            });
            initBars();
        });
})();

const initBars = () => {
    barDataArr.forEach((element) => {
        const li = document.createElement('li');
        li.innerHTML = element.Language;
        const bar = document.createElement('my-barchart');
        li.appendChild(bar);
        barlist.appendChild(li);
    });
};

const updateBarValues = () => {
    barlist.childNodes.forEach( (elem, idx) => {
        const ff = barDataArr[idx].Funfactor;
        elem.childNodes[1].size = ff;
    });

};

const resetBarValues = () => {
    barlist.childNodes.forEach( (elem, idx) => {
        const ff = barDataArr[idx].Funfactor;
        elem.childNodes[1].size = 1;
    });
}